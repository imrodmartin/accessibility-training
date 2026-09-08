# DA-103 exercise and reference files

Downloads for **Document & PDF Accessibility Fundamentals**. Everything here is fictional. The City of Riverton does not exist, and neither do the phone numbers, addresses or budget figures.

The files fall into three groups. Exercise files are what students open and work on. Reference files are the corrected versions they compare against. Job aids are what they keep after the course ends.

## Module 1: what a tagged PDF actually is

| File | What it is |
| --- | --- |
| `EX1-notice-TAGGED.pdf` | A public notice exported with structure tags |
| `EX1-notice-SCANNED.pdf` | The same notice as a scan, with no text layer at all |

Open both. Try to select the text. Try Ctrl+F for "Mill Street." The tagged file gives you a heading structure, a real table and a working search. The scan gives you a picture of a page.

The scanned copy is deliberately a little crooked and a little grey, because that is what a real one looks like when it comes back from the copier.

## Module 3: the seven defects

| File | What it is |
| --- | --- |
| `EX3-agenda-BEFORE.docx` | City Council agenda with seven deliberate defects |
| `EX3-agenda-AFTER.docx` | The corrected version |
| `EX3-budget-BEFORE.xlsx` | Optional. Generic sheet names, color-only status, no header row |
| `EX3-budget-AFTER.xlsx` | The corrected version |
| `EX3-deck-BEFORE.pptx` | Optional. No slide titles, everything in floating text boxes |
| `EX3-deck-AFTER.pptx` | The corrected version |

The BEFORE files look fine. That is the point of them. Every defect in the agenda is invisible on screen and obvious to the Accessibility Checker:

1. Section headings are 16pt bold body text, not Heading styles
2. The list is typed hyphens, not a real list
3. The table has no header row marked
4. The city seal has no alternative text
5. A link reads "click here"
6. The document has no Title property and the author is a username
7. Cancelled items are marked in red, with nothing but the color to say so

Run Review > Check Accessibility on the BEFORE file first, then diff it against AFTER.

The budget workbook adds three more: the data starts on row 3 under a merged banner with no header row, the status column carries meaning in fill color alone, and two empty sheets ship with the file. The deck drops every slide title into a floating text box, so the Outline View is blank and the reading order runs body first.

## Module 4: export versus print

| File | What it is |
| --- | --- |
| `EX4-export-TAGGED.pdf` | Exported from the source with structure tags |
| `EX4-export-PRINTED.pdf` | The same source, printed to PDF |

These two are the pair worth spending time on. They are visually identical. You can select text in both. Search works in both. The printed one has no structure tree, which means no headings, no table headers and no reading order. It fails, and nothing about looking at it tells you so.

This is the failure mode that survives internal review, because everyone who checks it checks by looking.

## Job aids

| File | What it is |
| --- | --- |
| `JOBAID-quick-reference.pdf` | Appendix A as a printable landscape card |
| `JOBAID-escalation-template.docx` | Appendix B as an editable form |

Print the quick reference and put it next to your monitor. Fill in the escalation template and send it with the source file when a document needs a specialist. A request that says only "this PDF is not accessible" cannot be started on.

## For instructors

`sources/` holds the Word originals the PDFs were exported from, in case you want to demonstrate the export step live rather than hand out the result.

`build/` holds the scripts that generate every file here. Regenerating is one command per script, so a fix goes into the script and not into the binary. `topdf.sh` handles the PDF exports and controls the tagged and untagged switch.

Every AFTER file and every job aid meets WCAG 2.1 AA. A course that hands out an inaccessible checklist has undercut everything it just taught.
