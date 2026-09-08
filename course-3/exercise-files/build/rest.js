const fs=require('fs'); const D=require('docx');
const {Document,Packer,Paragraph,TextRun,HeadingLevel,ImageRun,ExternalHyperlink,
       Table,TableRow,TableCell,WidthType,ShadingType,AlignmentType,LevelFormat}=D;
const LETTER={size:{width:12240,height:15840},margin:{top:1000,right:1080,bottom:1000,left:1080}};
const seal=fs.readFileSync('city-seal.png');
const BULLETS={config:[{reference:'b',levels:[{level:0,format:LevelFormat.BULLET,text:'•',
  alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:720,hanging:360}}}}]}]};
const c=(children,w,shade)=>new TableCell({width:{size:w,type:WidthType.DXA},
  shading:shade?{type:ShadingType.CLEAR,fill:shade}:undefined,
  margins:{top:80,bottom:80,left:120,right:120},children});
const hdr=(labels,widths)=>new TableRow({tableHeader:true,
  children:labels.map((t,i)=>c([new Paragraph({children:[new TextRun({text:t,bold:true,color:'FFFFFF'})]})],widths[i],'150B4F'))});
const row=(cells,widths)=>new TableRow({children:cells.map((t,i)=>c([new Paragraph(String(t))],widths[i]))});
const bullets=arr=>arr.map(t=>new Paragraph({numbering:{reference:'b',level:0},children:[new TextRun(t)]}));

// ---- EX1: public notice ----------------------------------------------------
const W1=[3200,3000,3200];
const notice=new Document({
  title:'Public notice: Water main replacement on Mill Street, April 2026',
  creator:'City of Riverton Department of Public Works',
  description:'Notice of scheduled water main replacement, service interruptions and detours.',
  numbering:BULLETS,
  sections:[{properties:{page:LETTER},children:[
    new Paragraph({alignment:AlignmentType.CENTER,children:[new ImageRun({type:'png',data:seal,
      transformation:{width:80,height:80},
      altText:{title:'City of Riverton seal',name:'City of Riverton seal',
        description:'Seal of the City of Riverton, incorporated 1887.'}})]}),
    new Paragraph({heading:HeadingLevel.HEADING_1,alignment:AlignmentType.CENTER,
      children:[new TextRun('Public notice: water main replacement on Mill Street')]}),
    new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:300},
      children:[new TextRun({text:'Posted March 20, 2026 by the Department of Public Works',size:22})]}),

    new Paragraph({heading:HeadingLevel.HEADING_2,children:[new TextRun('What is happening')]}),
    new Paragraph('The city will replace roughly 1,800 feet of water main under Mill Street between Water Street and Rail Avenue. The pipe dates to 1954 and has failed three times since 2023. Work begins Monday, April 6 and is expected to finish by Friday, May 15.'),

    new Paragraph({heading:HeadingLevel.HEADING_2,children:[new TextRun('What to expect')]}),
    ...bullets([
      'Water service will be interrupted for up to six hours on the day your block is connected. You will get a door hanger 48 hours ahead.',
      'Mill Street will be one lane, alternating, from 7:00 a.m. to 5:00 p.m. on weekdays.',
      'Parking on the east side of Mill Street is suspended for the duration.',
      'Trash and recycling collection stays on its normal schedule. Place carts at the curb as usual.',
    ]),

    new Paragraph({heading:HeadingLevel.HEADING_2,spacing:{before:200},children:[new TextRun('Schedule by block')]}),
    new Table({columnWidths:W1,width:{size:W1.reduce((a,b)=>a+b),type:WidthType.DXA},rows:[
      hdr(['Block','Service interruption','Detour in effect'],W1),
      row(['100 to 199 Mill','April 6 to April 10','April 6 to April 17'],W1),
      row(['200 to 299 Mill','April 13 to April 17','April 6 to April 24'],W1),
      row(['300 to 399 Mill','April 20 to April 24','April 17 to May 1'],W1),
      row(['400 to 499 Mill','April 27 to May 1','April 24 to May 15'],W1),
    ]}),

    new Paragraph({heading:HeadingLevel.HEADING_2,spacing:{before:240},children:[new TextRun('Questions and accommodations')]}),
    new Paragraph({children:[
      new TextRun('Call Public Works at (555) 555-0142, or '),
      new ExternalHyperlink({link:'https://riverton.example.gov/publicworks/mill-street',
        children:[new TextRun({text:'read the full Mill Street project page',style:'Hyperlink'})]}),
      new TextRun('. If you need this notice in another format or another language, contact the City Clerk at least 48 hours in advance.')]}),
  ]}]});

// ---- EX4: building access policy ------------------------------------------
const W4=[3400,5200];
const policy=new Document({
  title:'Building access policy, effective April 1 2026',
  creator:'City of Riverton Facilities Division',
  description:'Badge access, visitor procedure and after-hours entry for city buildings.',
  numbering:BULLETS,
  sections:[{properties:{page:LETTER},children:[
    new Paragraph({heading:HeadingLevel.HEADING_1,children:[new TextRun('Building access policy')]}),
    new Paragraph({spacing:{after:240},children:[new TextRun({text:'Facilities Division · Effective April 1, 2026 · Supersedes the June 2021 policy',size:22})]}),

    new Paragraph({heading:HeadingLevel.HEADING_2,children:[new TextRun('Who this applies to')]}),
    new Paragraph('Every employee, contractor and volunteer who enters a city building outside public counter hours. Public access to lobbies and counters during posted hours is unchanged.'),

    new Paragraph({heading:HeadingLevel.HEADING_2,children:[new TextRun('Badges')]}),
    ...bullets([
      'Badges are issued by Facilities and are not transferable.',
      'Report a lost badge the same day. Replacement takes two business days.',
      'Return the badge on your last working day. Access is revoked at 5:00 p.m. that day.',
    ]),

    new Paragraph({heading:HeadingLevel.HEADING_2,spacing:{before:200},children:[new TextRun('Access hours by building')]}),
    new Table({columnWidths:W4,width:{size:W4.reduce((a,b)=>a+b),type:WidthType.DXA},rows:[
      hdr(['Building','Badge access hours'],W4),
      row(['City Hall, 200 Main Street','6:00 a.m. to 9:00 p.m., seven days'],W4),
      row(['Public Works yard, 40 Rail Avenue','5:00 a.m. to 7:00 p.m., weekdays'],W4),
      row(['Riverton Library, 15 Water Street','7:00 a.m. to 10:00 p.m., seven days'],W4),
      row(['Water treatment plant','Escorted access only'],W4),
    ]}),

    new Paragraph({heading:HeadingLevel.HEADING_2,spacing:{before:240},children:[new TextRun('Visitors')]}),
    new Paragraph('Visitors sign in at the lobby desk and are escorted past the public area. The employee who signs a visitor in is responsible for them until they sign out.'),
  ]}]});

// ---- JOBAID: escalation request template ----------------------------------
const line=(label,hint)=>[
  // Labels are real Heading 2s so the form has an outline, not just bold text
  new Paragraph({heading:HeadingLevel.HEADING_2,spacing:{before:70,after:0},
    children:[new TextRun({text:label,bold:true,size:22,color:'1A1A1A'})]}),
  new Paragraph({children:[new TextRun({text:hint||'',size:20,color:'5A5770'})]}),
  new Paragraph({spacing:{before:0,after:0},border:{bottom:{style:D.BorderStyle.SINGLE,size:6,color:'B9B5C6',space:4}},children:[new TextRun({text:'',size:24})]}),
];
const escalation=new Document({
  title:'Escalation request template for document accessibility',
  creator:'Promet Source',
  description:'One-page intake form for handing a document to a remediation specialist.',
  numbering:BULLETS,
  sections:[{properties:{page:LETTER},children:[
    new Paragraph({heading:HeadingLevel.HEADING_1,children:[new TextRun('Escalation request')]}),
    new Paragraph({spacing:{after:140},children:[new TextRun('Fill this in and send it with the source file. A specialist cannot start work on "this PDF is not accessible."')]}),
    ...line('Document title'),
    ...line('Requested by, and department'),
    ...line('Date of request'),
    ...line('Publication deadline','Is it fixed by statute, court order or policy? Say which.'),
    ...line('Is the source file attached?','If not, say why not. This is the single item that most reduces the work.'),
    ...line('Application that created it','Word, Excel, PowerPoint, InDesign, scanned, or unknown.'),
    ...line('Size','Pages, sheets or slides.'),
    ...line('Where it will be posted, and who reads it'),
    ...line('Is this document used to apply for, access or participate in a service?','This affects its Title II exception status.'),
    ...line('What the document contains','Complex tables, form fields, charts, maps, footnotes, multi-column layout, equations, more than one language, vendor-supplied sections.'),
    ...line('Accessibility Checker results attached?'),
    ...line('What you already fixed'),
    ...line('What you could not resolve, and why'),
    ...line('Who owns future updates to this document'),
  ]}]});

// ---- JOBAID: quick reference ----------------------------------------------
const QW=[2100,3900,4000,3680];
const quickref=new Document({
  title:'Accessible document quick reference',
  creator:'Promet Source',
  description:'Six principles across Word, PowerPoint, Excel and PDF, plus a pre-publication checklist.',
  numbering:BULLETS,
  sections:[{properties:{page:{...LETTER,size:{width:15840,height:12240},orientation:D.PageOrientation.LANDSCAPE}},children:[
    new Paragraph({heading:HeadingLevel.HEADING_1,children:[new TextRun('Accessible document quick reference')]}),
    new Paragraph({spacing:{after:200},children:[new TextRun({text:'Six principles, four tools. DA-103 Document & PDF accessibility fundamentals · Promet Source',size:20})]}),
    new Table({columnWidths:QW,width:{size:QW.reduce((a,b)=>a+b),type:WidthType.DXA},rows:[
      hdr(['Principle','Word','PowerPoint / Excel','PDF'],QW),
      row(['Structure','Heading 1/2/3 styles, real lists','Title placeholder on every slide; sheet names and defined tables','Tags, generated from the source'],QW),
      row(['Navigation','Navigation Pane, table of contents','Outline View; named sheets','Bookmarks from headings'],QW),
      row(['Tables','Header row plus repeat across pages','One table per sheet, no blank spacer rows','Tagged table headers'],QW),
      row(['Alt text','Right-click, View Alt Text, or mark decorative','Alt text on charts, data kept on the sheet','Figure alternate text'],QW),
      row(['Color','4.5:1 normal, 3:1 large, never color alone','Status column, not fill color','Manual contrast check'],QW),
      row(['Properties','File > Info: Title, author, language','Same','File > Properties: Title and language'],QW),
    ]}),
    new Paragraph({heading:HeadingLevel.HEADING_2,spacing:{before:280},children:[new TextRun('Before you publish, every time')]}),
    ...bullets([
      'Run Review > Check Accessibility and clear every Error.',
      'Open the Navigation Pane or Outline View and read your own structure.',
      'Read your alt text and ask whether it tells the reader what the image tells everyone else.',
      'Check that nothing depends on color alone.',
      'Set the Title and the language.',
      'Export with structure tags. Never print to PDF.',
      'Open the PDF, select text, check the Tags panel, look at the browser tab.',
    ]),
  ]}]});

(async()=>{
  const out=[['EX1-notice-SOURCE.docx',notice],['EX4-export-SOURCE.docx',policy],
             ['JOBAID-escalation-template.docx',escalation],['JOBAID-quick-reference-SOURCE.docx',quickref]];
  for(const [f,d] of out) fs.writeFileSync(f, await Packer.toBuffer(d));
  console.log('wrote', out.map(o=>o[0]).join(', '));
})();
