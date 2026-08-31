# Accessibility Demo Pages

Deliberately flawed web pages used in Promet Source digital accessibility
training. Each demo isolates a small number of real-world failures so learners
can find them with a screen reader, a keyboard, and an automated checker —
then fix them.

Every page carries an instructor annotation layer (`.a11y-*` classes, fenced in
a commented CSS block). Strip that block and the `.a11y-*` markup to get a clean
"before" page for a live audit exercise.

## Demos

### `parks-events/` — Image-only event listing

A municipal parks and recreation events page whose entire event listing is a
colorful JPG flyer. Below it, the page says only "See flyer for details."

Hover or tab to the flyer to reveal the annotation bubble.

| # | Failure | Success criterion |
|---|---------|-------------------|
| 1 | `<img>` has no `alt` attribute, so assistive tech announces the file name | 1.1.1 Non-text Content (A) |
| 2 | Date, time, venue, price, and the registration phone number exist only as pixels — not searchable, translatable, selectable, or spoken | 1.4.5 Images of Text (AA) |
| 3 | Flyer text cannot reflow or resize; at 400% zoom it only blurs | 1.4.4 Resize Text (AA), 1.4.10 Reflow (AA) |

The surrounding page is intentionally clean — real heading structure, a labeled
`<nav>`, `lang="en"`, visible focus styles — so the image is the only defect
learners should find.

**Teaching note:** the fix is not a long `alt` string. Put the event details in
HTML text beside the flyer, then give the image a short `alt` describing it as a
promotional graphic.

## Local preview

```
python3 -m http.server 8000
```

Then open <http://localhost:8000/parks-events/>.
