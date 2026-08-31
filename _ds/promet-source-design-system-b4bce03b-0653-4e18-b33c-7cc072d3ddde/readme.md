# Promet Source design system

Promet Source builds digital experiences for the public sector — federal, state and local
government, higher education, and water/waste agencies. The audience is procurement-minded
and accessibility-literate, so the contrast rules in this system are functional
requirements, not styling preferences: an inaccessible deliverable actively undermines the
pitch.

This system exists to make on-brand, WCAG-AA-compliant artifacts fast: one-pagers, decks,
proposals and RFP responses, case studies, capability statements, sell sheets, landing
pages, social graphics, email templates, charts and diagrams.

## Sources this was built from

| Source | Detail |
|---|---|
| Brand skill bundle | `promet-brand.skill` (mounted as `promet/`, extracted to `uploads/skill/`) — verbatim copy at `guidelines/source-brand-skill.md` |
| Figma brand guidelines | **🔥 Promet - Brand Guidelines**, fileKey `fqdsNYgSmRgdYifnI1kNZc`, page `Brand Guidelines` (node `364:2890`). Per-page node IDs in `guidelines/figma-source.md` |
| Fonts | Plus Jakarta Sans + Manrope TTFs shipped in the skill bundle (SIL OFL) — copied into `assets/fonts/` |
| Logos | `logo.svg` (white wordmark, dark fields) and `logo-inverse.svg` (Deep Space wordmark, light fields), 191×45, outlined vector — copied into `assets/logo/` |
| Contrast checker | `scripts/contrast.py` from the bundle — run it rather than eyeballing a new pairing |

**What was NOT supplied:** no product code, no Drupal theme, no site templates, no
screenshots, no imagery, no icon set, no slide template. Everything visual here derives
from the brand guidelines. The UI kits are guideline-faithful *applications*, not
recreations of prometsource.com.

### The website is not the brand

The deployed Drupal theme (`promet_provus`) has drifted. The live site uses a coral
`#FA6E68` accent and a Deep Space of `#151142`; **neither is a brand color**. Coral appears
nowhere in the guidelines and the site's white-on-coral CTAs measure 2.80:1, failing AA.
Use the values in `tokens/colors.css`; if someone asks why output does not match the site,
explain the drift rather than matching it.

## Products and surfaces represented

- **Marketing site** (`ui_kits/marketing/`) — home, services, case-study index, contact.
- **Sales collateral** (`ui_kits/collateral/`) — proposal cover, capability statement,
  case-study sheet at letter size.

No slide template was supplied, so no sample slides were authored. Ask and we will build
one from the collateral vocabulary.

---

## Content fundamentals

**Sentence case is mandated.** No ALL CAPS eyebrows, buttons, labels, kickers or section
headers — the rule most easily broken by habit. Write "Request a demo", never
"REQUEST A DEMO"; "Case study", never "CASE STUDY".

**Voice.** Plain, direct, unhedged. Second person when addressing the reader ("your
agency", "your residents"), first person plural for Promet ("we design, build and
support"). Never "I". No agency-speak, no "solutions", no "leverage", no "unlock".

**Sentence shape.** Short declaratives that land a claim, then a qualifying clause that
tells the truth about it. Examples in this system:

- "Compliance is the floor, not the goal."
- "An audit tells you what is broken. We fix the pattern that produced it, then hand your
  team the checks that keep it fixed."
- "Send it over. We will tell you plainly whether we are the right fit."
- "Monitoring, patching and a named team that knows your codebase — not a queue."

**Numbers.** Public-sector audiences respond to sourced figures. Every statistic carries
its source organization and date ("Agency program data, 2024"), and any figure that cannot
be traced to a primary source gets dropped — a marketing-blog statistic in a government
deliverable is a liability. `StatCard` has a `caption` prop for exactly this.

**Accessibility language.** Say the standard, not the vibe: "WCAG 2.1 AA", "Section 508",
"VPAT on request". Claim conformance targets, not perfection.

**No emoji.** Anywhere. Not in headings, not in UI, not in email subject lines. Icons are
Lucide glyphs (see Iconography).

**Labels and CTAs.** Verb-first and specific: "Start a conversation", "Read the case
study", "Send the request", "Download the capability statement". Avoid "Learn more" as the
only CTA on a view; avoid "Submit".

---

## Visual foundations

### Color
Seven brand colors, in `tokens/colors.css` with Pantone and CMYK recorded per swatch.
Deep Space `#150B4F` carries structure, Promethean Orange `#FF8500` carries emphasis,
everything else supports. **Give one color dominance; never weight them equally.**

The orange constraint is the single most important rule in the system:

- Orange text on white — 2.44:1, **fails at every size**
- Orange text on Plaster — 2.31:1, **fails**
- White text on an orange fill — 2.44:1, **fails**
- Orange on Deep Space — 7.22:1, passes AA and AAA
- Deep Space on an orange fill — 7.22:1, passes
- Charcoal on an orange fill — 5.18:1, passes

So orange lives **on Deep Space, or as a fill carrying Deep Space or Charcoal text.** The
guidelines' own logo colorways show a white wordmark on orange — fine for a logotype, which
WCAG contrast minimums do not cover, but never generalized to body copy or buttons.

Electric Blue `#4112FD` carries an explicit "will not print well" warning: screen only.
It is used here for focus rings and link text, nothing print-bound.

Tints exist at 10/20/40/60/80% for Orange, Deep Space and Electric Blue, mixed toward
white. The Deep Space ramp is the system's neutral scale — reach for `--deep-space-40`
before any generic grey.

### Type
- **Headlines and subheads — Plus Jakarta Sans** (400/700), tight leading (1.08–1.2),
  `-0.01em` to `-0.02em` tracking.
- **Body — Manrope** (400/700), 1.5–1.65 leading, no negative tracking.
- Scale: 64 / 52 / 40 / 32 / 24 / 20 display-and-heading; 18 / 16 / 14 / 13 / 12 body.
- Both faces run wider than Calibri or Arial at the same size — adapting a layout from a
  substitute font, expect headlines to gain a line and budget vertical space.
- No letter-spaced small caps, no uppercase tracking tricks. Emphasis comes from weight,
  size and color, never from casing.

### Backgrounds and surfaces
Four fields only: white, Plaster `#FBF8F5` (warm alternating bands), Orange 10%
`#FFF3E6` (callout panels), and full-bleed Deep Space (heroes, closing CTA bands, footers,
document headers). Sections alternate white / Plaster / Deep Space down a page. No
gradients — not in backgrounds, not in buttons, not behind type. No repeating patterns, no
textures, no grain. The one permitted decorative element is a thin low-opacity orange
circle outline bleeding off a Deep Space field (see the proposal cover), used at most once
per artifact.

### Imagery
None was supplied, so every image slot in this system is a labelled placeholder. When real
photography arrives it should read as documentary rather than stock-corporate: real
workplaces and civic settings, cool-to-neutral cast that sits comfortably beside Deep
Space, no heavy filters, no duotones, no grain. Do not generate imagery to fill the gaps.

### Cards
1px `#E3E1EA` border, 16px radius, 24px padding, white or Plaster or Orange-10% fill,
**no shadow at rest**. Separation comes from a full border or a background tint —
never a colored left edge, never an accent underline beneath a heading, never a
decorative stripe along one side. Those are the tells of generic AI-generated design and
they are explicitly out.

### Elevation
Deep Space-tinted shadows, used sparingly: `xs` 0 1px 2px, `sm` 0 2px 6px, `md` 0 8px 24px
(interactive card hover), `lg` 0 20px 48px (dialogs only). Borders do most of the work; a
static card carries no shadow at all. No inner shadows anywhere.

### Corner radii
4 (sm) · 8 (md, inputs and selects) · 16 (lg, cards) · 24 (xl, large panels) · pill
(buttons, badges, tags, icon buttons — always). Buttons are never square-cornered.

### Motion
Calm and functional. 140ms for hover and focus color changes, 220ms for card lift, switch
knob and tab change, 360ms for dialog entrances, all on
`cubic-bezier(.2,0,.2,1)`. Fades and short slides only — **no bounce, no spring, no
parallax, no scroll-triggered reveals, no animated counters.** A card's hover lift is 2px
and nothing more.

### Interaction states
- **Hover** — darken the fill (orange `#FF8500` → `#E67800`; Deep Space → `#241765`);
  ghost and outline buttons pick up a Deep Space 10% wash. Never lighten, never change hue,
  never use opacity to signal hover.
- **Press** — darken further (`#CC6A00`). No scale-down, no shrink.
- **Focus** — 3px `rgba(65,18,253,.35)` ring plus an Electric Blue border. Never removed;
  procurement reviews check keyboard visibility.
- **Selected** — solid Deep Space fill with white text (tags), or bold label with a 3px
  orange underline (tabs). The tab underline is the one sanctioned accent underline in the
  system.
- **Disabled** — Deep Space 10% fill, Deep Space 40% text, `not-allowed` cursor.

### Transparency and blur
Rare and purposeful. Translucent white (`rgba(255,255,255,.10)` rest, `.20` hover) for
controls sitting on Deep Space; a `rgba(21,11,79,.55)` scrim with a 2px blur behind
dialogs. Nothing else is glassy — no frosted cards, no blurred hero overlays. Where text
must sit over an image, use a solid Deep Space band rather than a protection gradient.

### Layout
1200px max content width, 32px page gutters, 96px vertical section rhythm, 4px spacing
base. Grids are 2, 3 or 4 columns; asymmetric 1.1fr/.9fr splits for feature rows. The site
header is sticky and full-bleed Deep Space; footers are full-bleed Deep Space. Documents
are letter (816×1056) with 48–56px margins and a full-bleed header band.

---

## Iconography

The brand guidelines define **no icon set** — no icon font, no SVG sprite, no PNG icons
were supplied. Icons here are **Lucide** (`lucide-static@0.544.0`, ISC license) loaded from
CDN and rendered through the `Icon` component as a `currentColor` mask, so a glyph always
inherits its text color and can never fight the palette. **This is a flagged substitution —
see the ask at the end of this file.**

Rules:

- One family only. Never mix a second icon set, and never fall back to emoji or Unicode
  glyphs (✓ ✕ ★ →) as decorative icons. The only Unicode marks used in the system are the
  select caret, the tag/dialog close ×, and the checkbox tick inside the control itself.
- Lucide's default 2px stroke at 16 / 18 / 20 / 24px. Do not restroke or fill them.
- On light fields, glyphs are Deep Space or Charcoal. Orange glyphs only inside an
  orange-filled circle carrying a Deep Space glyph (the sanctioned "icon chip" from the
  guidelines' practical defaults) or on a Deep Space field.
- Icon chips: 32–44px orange circle, Deep Space glyph at ~50% of the circle.
- Emoji: never.

The logo is the only bespoke mark. Both lockups ship as outlined vector, so there is no
font dependency; never draw, reconstruct or recolor them.

---

## Index

Root files:

| Path | What it is |
|---|---|
| `styles.css` | The single entry point consumers link. `@import` lines only |
| `thumbnail.html` | Homepage tile |
| `readme.md` | This file |
| `SKILL.md` | Agent Skills front matter, for use in Claude Code |
| `tokens/` | `fonts`, `colors`, `typography`, `spacing`, `radii`, `elevation`, `motion`, `semantic` |
| `assets/` | `logo/logo.svg`, `logo/logo-inverse.svg`, `fonts/*.ttf` + licenses |
| `guidelines/` | 20 foundation specimen cards, `figma-source.md`, `source-brand-skill.md` |
| `scripts/contrast.py` | WCAG ratio checker from the brand bundle |

Components (`components/<group>/`, each with `.jsx`, `.d.ts`, `.prompt.md` and a group card):

- **brand** — `Logo`, `Icon`
- **core** — `Button`, `IconButton`, `Card`, `StatCard`, `Badge`, `Tag`
- **forms** — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
- **navigation** — `Tabs`
- **feedback** — `Dialog`, `Toast`, `Tooltip`

UI kits:

- `ui_kits/marketing/` — four click-through screens (`README.md` in folder)
- `ui_kits/collateral/` — three letter-size documents

### Intentional additions

No component inventory was supplied — the source is brand guidelines only — so this is a
standard primitive set sized to Promet's needs, plus:

- **`Logo`** — wraps the two shipped lockups so the wrong colorway is hard to ship.
- **`Icon`** — a wrapper over the substituted Lucide set; centralizes the substitution so
  swapping in Promet's real glyphs later is a one-file change.
- **`StatCard`** — the guidelines' "stat or KPI callout" application default, promoted to a
  component because it is the only compliant way to give orange real prominence.
- **`Field`** — label/hint/error scaffold; every control needs a visible label to survive
  an accessibility review.
- **`Textarea`** — RFP and contact forms need it.

## Known gaps

- **Tone of Voice, Brand Values, Vision & Mission** were never read out of Figma (nodes
  `364:6433`, `364:6319`, `364:6415`). The content-fundamentals section above is inferred
  from the guidelines' casing rules plus the brand skill's own copy, not from that page.
- **No documented grid or spacing spec** exists in the guidelines; the 4px scale here is
  derived from practice.
- **No imagery, no icon set, no slide template, no product code.**
