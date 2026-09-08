set -e
TAG='pdf:writer_pdf_Export:{"UseTaggedPDF":{"type":"boolean","value":"true"}}'
UNTAG='pdf:writer_pdf_Export:{"UseTaggedPDF":{"type":"boolean","value":"false"}}'
OUT=/root/promet/ex/out
mkdir -p $OUT
# tagged exports
soffice --headless --convert-to "$TAG" --outdir $OUT EX1-notice-SOURCE.docx >/dev/null 2>&1
soffice --headless --convert-to "$TAG" --outdir $OUT EX4-export-SOURCE.docx >/dev/null 2>&1
soffice --headless --convert-to "$TAG" --outdir $OUT JOBAID-quick-reference-SOURCE.docx >/dev/null 2>&1
mv $OUT/EX1-notice-SOURCE.pdf $OUT/EX1-notice-TAGGED.pdf
mv $OUT/EX4-export-SOURCE.pdf $OUT/EX4-export-TAGGED.pdf
mv $OUT/JOBAID-quick-reference-SOURCE.pdf $OUT/JOBAID-quick-reference.pdf
# untagged export (printed-to-PDF simulation)
soffice --headless --convert-to "$UNTAG" --outdir $OUT EX4-export-SOURCE.docx >/dev/null 2>&1
mv $OUT/EX4-export-SOURCE.pdf $OUT/EX4-export-PRINTED.pdf
ls -la $OUT
