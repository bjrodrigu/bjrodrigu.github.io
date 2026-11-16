# Portfolio backlog

Ideas not yet built. Newest decisions first.

## 1. Project case study (one, not one per project)

The strongest portfolios link at least one project to a short story page
(problem, one decision, before/after). Cards can't show how you think; this can.

**Pick one project.** Candidates:
- **Catering execution generator**: clearest before/after (hand tallies, then
  an automatic prep sheet; report time down about 83%). Real users, a real kitchen.
- **World Cup passing explorer**: ties into the pitch at the top of the page,
  and has visuals already.

**Outline (about 500–800 words, a few images):**
1. The problem, in one paragraph, from the user's side (what the staff did before).
2. What you built, in plain words, with one screenshot.
3. One decision worth explaining. Catering: PDF text first, OCR only when that
   fails. World Cup: how passes were grouped into clusters.
4. The result: the before/after number and what changed for the people using it.
5. What you'd do next, or what you learned.

**Build steps:**
- Add a route such as `/projects/catering` in `src/App.js`, with a simple
  article layout that reuses the site's type and colors.
- Add a "Read the story" link to that card in `src/data/projects.js`.
- Add the new path to `postbuild` in `package.json` (copy `index.html`, as
  `projects/index.html` does) so GitHub Pages serves it directly.
- Images go in `public/images/`; never use real receipts or customer data.

## 2. Years on project cards

Add a `year` field to each project in `src/data/projects.js` and show it next
to the tech line, for example "2025". Needs the real year for each:
World Cup, Catering, Campus review (Fall 2024), Clutter Clear,
Sports analytics, Run tracker (Summer 2025).

## 3. Résumé link (optional)

Not job hunting, so low priority. If added: put a PDF at
`public/resume.pdf` and a "Résumé" link in the navbar and the Contact
section. Keep the PDF free of phone number and home address.

## Smaller ideas from earlier

- **Goal picker labels**: show the match and minute on hover or focus
  (buttons only show surnames).
- **Seller Performance metric**: add one public-safe number to the current
  Walmart role if one exists (reach or speed; check Walmart's rules first).
- **Clutter Clear code link**: `bjrodrigu/clutter-clear` is private, so the link
  404s until the client OKs making it public.
- **Move from Create React App to Vite**: invisible to visitors; do it when
  CRA's tooling gets in the way.
