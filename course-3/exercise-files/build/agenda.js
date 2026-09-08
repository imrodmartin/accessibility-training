const fs = require('fs');
const D = require('docx');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, ImageRun, ExternalHyperlink,
  Table, TableRow, TableCell, WidthType, ShadingType, AlignmentType, BorderStyle, LevelFormat
} = D;

const LETTER = { size: { width: 12240, height: 15840 }, margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } };
const seal = fs.readFileSync('city-seal.png');

const ITEMS = [
  ['1.', 'Call to order and roll call',              'Mayor Álvarez', '6:00 p.m.', false],
  ['2.', 'Approval of minutes, February 26',         'City Clerk',    '6:05 p.m.', false],
  ['3.', 'Public comment on non-agenda items',       'Chair',         '6:10 p.m.', false],
  ['4.', 'Ordinance 2026-14, sidewalk repair program','Public Works', '6:30 p.m.', false],
  ['5.', 'Fiscal year 2027 budget presentation',     'Finance',       '6:50 p.m.', true],
  ['6.', 'Parks master plan update',                 'Parks & Rec',   '7:15 p.m.', false],
  ['7.', 'Council member reports',                   'All',           '7:35 p.m.', true],
  ['8.', 'Adjournment',                              'Chair',         '7:50 p.m.', false],
];

const COLW = [900, 4700, 2300, 1500];
const TBLW = COLW.reduce((a, b) => a + b, 0);

function cell(children, opts = {}) {
  return new TableCell({
    width: { size: opts.w, type: WidthType.DXA },
    shading: opts.shade ? { type: ShadingType.CLEAR, fill: opts.shade } : undefined,
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children,
  });
}

// ---------------------------------------------------------------- BEFORE
function before() {
  const rows = [];

  // Defect 3: no header row designated, no repeat. Just bold text in the first row.
  rows.push(new TableRow({
    children: ['#', 'Item', 'Presenter', 'Time'].map((t, i) =>
      cell([new Paragraph({ children: [new TextRun({ text: t, bold: true })] })], { w: COLW[i] })),
  }));

  ITEMS.forEach(([n, item, who, time, cancelled]) => {
    rows.push(new TableRow({
      children: [
        cell([new Paragraph(n)], { w: COLW[0] }),
        // Defect 7: cancelled shown by red text alone, no label
        cell([new Paragraph({ children: [new TextRun({ text: item, color: cancelled ? 'C00000' : undefined })] })], { w: COLW[1] }),
        cell([new Paragraph(who)], { w: COLW[2] }),
        cell([new Paragraph(time)], { w: COLW[3] }),
      ],
    }));
  });

  return new Document({
    // Defect 6: Title property left empty
    title: '', creator: 'jgreene', description: '',
    sections: [{
      properties: { page: LETTER },
      children: [
        new Paragraph({ alignment: AlignmentType.CENTER, children: [
          // Defect 4: image has no alt text
          new ImageRun({ type: 'png', data: seal, transformation: { width: 90, height: 90 } }),
        ]}),
        // Defect 1: title and section labels are 16pt bold Normal text, not headings
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 0 },
          children: [new TextRun({ text: 'City of Riverton', bold: true, size: 32 })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 240 },
          children: [new TextRun({ text: 'Regular meeting of the City Council', bold: true, size: 32 })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 360 },
          children: [new TextRun({ text: 'Thursday, March 12, 2026 · 6:00 p.m. · Council Chambers, 200 Main Street', size: 22 })] }),

        new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: 'Attending the meeting', bold: true, size: 32 })] }),
        // Defect 2: typed hyphens instead of a real list
        new Paragraph('- Chambers open to the public at 5:45 p.m.'),
        new Paragraph('- Overflow seating in the lobby with live audio'),
        new Paragraph('- Accessible entrance on the Water Street side'),
        new Paragraph({ spacing: { after: 240 }, children: [new TextRun('- Requests for accommodation: contact the Clerk 48 hours ahead')] }),

        new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: 'Agenda items', bold: true, size: 32 })] }),
        new Table({ columnWidths: COLW, width: { size: TBLW, type: WidthType.DXA }, rows }),

        new Paragraph({ spacing: { before: 240, after: 120 }, children: [new TextRun({ text: 'Watch or participate remotely', bold: true, size: 32 })] }),
        // Defect 5: "Click here" link text
        new Paragraph({ children: [
          new TextRun('To join the meeting online or watch the recording afterward, '),
          new ExternalHyperlink({ link: 'https://riverton.example.gov/council/meetings',
            children: [new TextRun({ text: 'click here', style: 'Hyperlink' })] }),
          new TextRun('.'),
        ]}),
        new Paragraph({ spacing: { before: 240 }, children: [new TextRun({ text: 'Posted by the Office of the City Clerk, March 5, 2026.', size: 20 })] }),
      ],
    }],
  });
}

// ---------------------------------------------------------------- AFTER
function after() {
  const rows = [];

  // Fix 3: real header row, repeats across pages
  rows.push(new TableRow({
    tableHeader: true,
    children: ['#', 'Item', 'Presenter', 'Time'].map((t, i) =>
      cell([new Paragraph({ children: [new TextRun({ text: t, bold: true, color: 'FFFFFF' })] })],
           { w: COLW[i], shade: '150B4F' })),
  }));

  ITEMS.forEach(([n, item, who, time, cancelled]) => {
    rows.push(new TableRow({
      children: [
        cell([new Paragraph(n)], { w: COLW[0] }),
        // Fix 7: color kept, but a text label carries the meaning
        cell([new Paragraph({ children: [
          new TextRun({ text: item, color: cancelled ? 'C00000' : undefined }),
          ...(cancelled ? [new TextRun({ text: '  (Postponed)', color: 'C00000', bold: true })] : []),
        ]})], { w: COLW[1] }),
        cell([new Paragraph(who)], { w: COLW[2] }),
        cell([new Paragraph(time)], { w: COLW[3] }),
      ],
    }));
  });

  return new Document({
    // Fix 6: real Title property
    title: 'City Council regular meeting agenda, March 12, 2026',
    creator: 'Office of the City Clerk, City of Riverton',
    description: 'Agenda for the regular meeting of the Riverton City Council.',
    numbering: { config: [{ reference: 'bullets', levels: [{
      level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 720, hanging: 360 } } },
    }]}]},
    sections: [{
      properties: { page: LETTER },
      children: [
        new Paragraph({ alignment: AlignmentType.CENTER, children: [
          // Fix 4: meaningful alt text
          new ImageRun({ type: 'png', data: seal, transformation: { width: 90, height: 90 },
            altText: { title: 'City of Riverton seal', name: 'City of Riverton seal',
                       description: 'Seal of the City of Riverton, incorporated 1887, Office of the City Clerk.' } }),
        ]}),
        // Fix 1: real heading styles
        new Paragraph({ heading: HeadingLevel.HEADING_1, alignment: AlignmentType.CENTER,
          children: [new TextRun('City of Riverton, regular meeting of the City Council')] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 360 },
          children: [new TextRun({ text: 'Thursday, March 12, 2026 · 6:00 p.m. · Council Chambers, 200 Main Street', size: 22 })] }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('Attending the meeting')] }),
        // Fix 2: a real list
        ...[ 'Chambers open to the public at 5:45 p.m.',
             'Overflow seating in the lobby with live audio',
             'Accessible entrance on the Water Street side',
             'Requests for accommodation: contact the Clerk 48 hours ahead',
        ].map(t => new Paragraph({ numbering: { reference: 'bullets', level: 0 }, children: [new TextRun(t)] })),

        new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 240 }, children: [new TextRun('Agenda items')] }),
        new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: 'Items marked Postponed will be carried to the April 9 meeting.', size: 20 })] }),
        new Table({ columnWidths: COLW, width: { size: TBLW, type: WidthType.DXA }, rows }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 240 }, children: [new TextRun('Watch or participate remotely')] }),
        // Fix 5: descriptive link text
        new Paragraph({ children: [
          new TextRun('You can '),
          new ExternalHyperlink({ link: 'https://riverton.example.gov/council/meetings',
            children: [new TextRun({ text: 'join the March 12 council meeting online or watch the recording', style: 'Hyperlink' })] }),
          new TextRun(' on the city website.'),
        ]}),
        new Paragraph({ spacing: { before: 240 }, children: [new TextRun({ text: 'Posted by the Office of the City Clerk, March 5, 2026.', size: 20 })] }),
      ],
    }],
  });
}

(async () => {
  fs.writeFileSync('EX3-agenda-BEFORE.docx', await Packer.toBuffer(before()));
  fs.writeFileSync('EX3-agenda-AFTER.docx',  await Packer.toBuffer(after()));
  console.log('wrote both agenda files');
})();
