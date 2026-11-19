# DESIGN.md — mikecodes.online

Design brief for this site. Read before any UI work.

Process lives in the `award-level-web-design` skill. This file is the brief that skill works from:
the skill says *how* to work, this says *what to build*.

Token values, the type scale and the colour rules live in the Terminal design system:
<https://claude.ai/artifact/FGf9mcdLyWMWmtmw4xXNGE>. Read its `README.md` first, then its
`tokens.json`. Where this file and the system disagree, the system wins on values and this file
wins on scope.

---

## Thesis

**A build log, not a screenshot.**

This portfolio is a record of what shipped, not a gallery of frames. The subject is production
systems shipped end to end by a senior full-stack engineer: multi-currency payouts for 1,000+
merchants at Mainstack, and at SkytLabs a NestJS backend with 160+ automated tests and a plaintext
credential-logging vulnerability found and remediated. Every visual decision answers to that.

Test: this thesis must not fit a motion designer or a ceramicist. If a proposed change would suit
either, it is wrong. Harder test: the headline sentence alone would fit any engineer, so the
subject line carries it. Swap in another engineer's numbers and it should stop being true.

---

## Subject, audience, job

- **Subject.** Michael Chinye, senior full-stack engineer, 4+ years on fintech and SaaS products:
  React and Next.js interfaces, NestJS backends.
- **Audience.** Engineering leads hiring for senior roles, and founders hiring freelance.
- **Job.** Prove production work with numbers on the first screen, then get a message or a résumé
  download.

---

## References

Principles taken, layouts not copied.

| Reference | Why it works | Used for |
| --- | --- | --- |
| Stripe API docs | Prose sits on light, code sits on a dark pane beside it. The ground tells you whether you are reading or looking at output. | The two-ground rule |
| Linear changelog | Dated entries of shipped work. Credibility comes from specifics and cadence, not adjectives. | Experience and project entries |
| Vercel build logs | The log streams, then resolves into one status. The log is the proof; the status is the headline. | The hero signature moment |

---

## Decision status

| Decision | State |
| --- | --- |
| Thesis | Settled — above, confirmed 2026-11-19 |
| Positioning | Settled — Senior Full-Stack Engineer, 2026-11-19 |
| Audience | Settled — employers and freelance clients, 2026-11-19 |
| References | Settled — Stripe API docs, Linear changelog, Vercel build logs |
| Signature moment | Settled — hero build-log stream |
| Display typeface | Settled — IBM Plex Mono 600 |
| Body typeface | Settled — IBM Plex Sans 400 |
| Palette | Settled — Terminal, two grounds |
| Direction | Settled — B (Terminal), chosen 2026-11-19 |

All rows are closed, so layout work can start. Take exact values from the design system, never from
this file's prose.

---

## Type

Structure to keep: two families, clearly distinct. The mono is *earned* here because the subject is
code — stack lists set as output read as output, not as costume.

**Settled: invert the hierarchy.** IBM Plex Mono 600 as display — headlines, section markers,
figures, the build log. IBM Plex Sans 400 as body. Scale 46 / 36 / 26 / 17 / 15 / 13 at ratio 1.333,
with `display-xl` used once per page.

Rules:

- Headlines cap at ~6 words. Mono display fails at length.
- Positive tracking at display size, never negative. Mono clots when tightened.
- Body copy stays in the sans. Long mono paragraphs cost Usability, which outweighs Creativity.
- Build a scale with a named ratio (1.25 or 1.333). One display weight, one body weight, nothing between.
- Hero type at 2–3× its current size. Nothing on the current page is monumental.

Forbidden: using colour to create emphasis the type should be creating.

---

## Colour

**Settled: two grounds, and the switch between them is the hierarchy.**

`#0E1419` where work is *shown* — hero, build log, code, deploy records. `#EFF1F0` where there is
*reading to do* — prose, experience, case studies. The page alternates, dark across roughly the top
third, then light for the long reading.

This is not a light/dark theme. Both grounds appear on the same page at the same time, in sequence.
A theme toggle would destroy the idea. Do not add one.

Signal is amber `#FFB13B`, rationed to status marks and the single primary action, on the dark ground
only — it measures 1.7:1 on the light ground. Where the signal hue must appear on light, use
`#9A5400`. Full token list with contrast notes is in the design system's `tokens.json`.

---

## Motion

One signature moment: the hero build-log stream, resolving into the headline.

Rules:

- Content is in the DOM at first paint. The stream is decoration over it, never a gate.
- Everything below the fold appears instantly. No uniform scroll-reveal.
- Animate `transform` and `opacity` only. Never `width`, `top` or `box-shadow` during scroll.
- One shared ticker for scroll, tweens and any canvas work.
- `prefers-reduced-motion` built in the same pass, not as cleanup.

---

## Anti-defaults

Remove, and do not reintroduce:

- `01` / `02` / `03` section markers — these sections are not a sequence
- Tracked-out ALL-CAPS labels
- Middle-dot meta strings (`A · B · C`)
- `↗` or `→` appended to link and button text
- Arrows standing in for verbs in body copy
- Accenting one word in a headline with colour
- Identical rounded cards — one radius and one shadow regardless of hierarchy
- Three-card grids
- Vanity metrics (cups of coffee, tool counts)
- Evenly distributed whitespace

---

## Content rules

- Every claim carries a number or gets cut.
- Project entries must open into something. Two case studies minimum: the multi-currency payout
  system, and the agent authentication work.
- Positioning is Senior Full-Stack Engineer everywhere it appears. "Senior Frontend Engineer" is
  still in the Hero, About and Footer; step 7 replaces it.
- About photo stays. Tight crop to head and shoulders, plus exactly one treatment: duotone in the
  palette extremes, halftone/dither, or crushed black-and-white. Not a soft desaturation in a
  rounded rectangle.

---

## Quality gates

Nothing ships until all pass:

- [ ] 390×844 layout verified in DevTools
- [ ] Static frames work with all motion disabled
- [ ] 60fps under 4× CPU throttle and Fast 3G
- [ ] LCP under 2.5s
- [ ] Visible keyboard focus on every interactive element
- [ ] Body text contrast ≥ 4.5:1
- [ ] `prefers-reduced-motion` honoured
- [ ] Footer nav wraps correctly at every width

---

## Build order

1. Verify mobile at 390px — if broken, this outranks everything else here
2. Confirm the thesis
3. Commit type and colour tokens (close the OPEN rows above)
4. Rebuild the hero static, motion off
5. Strip the anti-defaults
6. Fix vertical rhythm — Skills section, and the gap between Skills and Experience
7. Cut vanity metrics, fix the positioning line
8. Build the one motion sequence
9. Crop and treat the about photo
10. Add the two case studies
11. Run the quality gates
12. Fresh-eyes review by an agent that did not build it

Steps 1–6 hold most of the available score.

---

## Notes

Append what was tried and rejected here, so later passes do not repeat it.

### 2026-11-19 — Step 1: mobile check at 390×844

Production build, iPhone 13 emulation (390×844, touch), motion off and on, full scroll plus menu
open.

Passed: no horizontal overflow (also with the menu open), no console errors, motion-on frames match
the static ones, and the menu opens, closes and marks the right section. The layout is a genuine
single column. Not broken, so step 1 does not outrank the rest of the build order.

Fixed now, because the site is live: the contact email and LinkedIn URL broke mid-word
(`break-all`). They now break only after `@` and `/`.

Left for the rebuild, because these elements get replaced:

- Footer nav leaves CONTACT alone on a second line at 390, and its links are 16px tall. Fails the
  footer-wrap gate.
- Tap targets under 44px: menu button 36×36, "Let's talk" 36px tall, footer GitHub and LinkedIn
  28px.
- 25 text runs at 11px (project tags and badges, contact labels, footer links), below the system's
  12px floor.
- Project descriptions clamp to two lines, with no way to read the rest.
- Uneven vertical rhythm: about 160px of empty space between the hero and About, about 230px between
  Skills and Experience.
- At 390, Experience runs about 4 screens and Projects about 3.7. The whole page is about 14.
- At 320 the contact email sits flush against its arrow.

Rejected: patching the footer, tags and badges now. The rebuild replaces all of them.

### 2026-11-19 — Step 2: thesis confirmed

Kept the headline sentence. Rewrote the subject line, because "payment and fintech infrastructure"
blended two jobs: the payment work was a Frontend role at Mainstack, and the backend and security
work at SkytLabs is a data-collection platform, not payments. A reader checking Experience would
see the seam.

Rejected: Senior Frontend Engineer, which undersells the SkytLabs backend work, and Senior Backend
Engineer, which only the current contract supports.
