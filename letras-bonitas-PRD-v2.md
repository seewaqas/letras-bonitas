# PRD v2.1 — Letras Bonitas

**Status:** Plan updated with build rules. No application code until this is accepted.
**Date:** 2026-10-13
**Builds on:** `letras-bonitas-PRD.md` (competitor teardown) and `letras-bonitas-keywords.csv` (758 Google suggestions).

---

## 1. Decision

Build a fast, Spanish-only, static website. The product is one client-side generator: type once, see about 100 named Unicode styles, copy one, and paste it.

The tool is built for three jobs:

1. Instagram and TikTok profiles (names, bios, captions).
2. WhatsApp messages and statuses (greetings, romantic lines, birthdays, contact names).
3. Gaming usernames (Free Fire, Roblox, Discord), including gothic styles and short nicknames.

A fourth job, decorative lettering, is supported with an alphabet page and decorated styles. It is not a printable-template product. The first three jobs are what the generator is for.

The head term stays **letras bonitas para copiar y pegar**.

---

## 2. Build rules (locked)

These apply to every file once development starts.

- **TypeScript**, strict mode, for the generator, style data, page content, and shared helpers. No untyped JavaScript in `src`.
- **Latest stable stack at the time of install** (checked 2026-10-13): Astro 7.3.8, TypeScript 7.0.2, `@astrojs/sitemap` 3.7.4, `@fontsource-variable/inter` 5.3.0. Re-check versions on the day install runs, and take the current stable release.
- **Inter** for the interface (self-hosted, `latin` and `latin-ext`, so Spanish accents and ñ render). The styled output uses a system font stack after Inter, so Unicode letters still show when Inter has no glyph for them.
- **Reusable components.** One generator, one style card, one chip row, one FAQ, one alphabet table, one use-case block, one header, one footer, one layout. Landing pages pass data into those components. They do not copy markup.
- **Mobile first.** Layout checked at 390px. Copy and favorite controls at least 44px. Category chips scroll sideways. The text field stays reachable while the style list scrolls. No horizontal page scroll.
- **Maintainable.** Style maps are generated from Unicode ranges in one module. Page copy lives in one typed content module. A landing page is data, not a new layout.
- **Security.**
  - Static site. No accounts, no backend, no user content stored on a server.
  - Visitor text is written to the page only with `textContent`. It is never inserted as HTML.
  - A high safety cap (600 characters) stops a huge paste from freezing a phone. Bios and statuses fit under it. There is no 180-character product limit.
  - Glitch styles use at most two combining marks per character.
  - Favorites and theme stay in `localStorage`.
  - No third-party scripts at launch.
  - Headers: `Content-Security-Policy` (self only), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY`.
  - Stylesheets are external files, so the policy does not need `unsafe-inline`.
- **Git.** Initialize the repo at the start of development. Commit after each meaningful slice: scaffold, generator engine, interface, pages. Do not commit secrets. Do not push unless asked.

---

## 3. Use cases

### 3.1 Instagram and TikTok profiles

People want a stylish name, bio, or caption.

Keywords: letras bonitas para Instagram, letras aesthetic, letras para copiar y pegar, letras bonitas para tik tok.

How the product serves it:

- Pages: `/letras-para-instagram/`, `/letras-para-tiktok/`, `/letras-aesthetic/`.
- The home page leads with this use case.
- Counter warns past 30 characters for a name, past 150 for an Instagram bio, and past 80 for a TikTok bio.
- Ready phrases are short bios and captions, not school subjects.

### 3.2 WhatsApp messages and statuses

People want decorative greetings, romantic lines, birthday wishes, status text, and contact names.

Keywords: letras bonitas para WhatsApp, letras cursivas bonitas.

How the product serves it:

- Pages: `/letras-para-whatsapp/`, `/letras-cursivas/`.
- Ready phrases: Buenos días, Te amo, Te quiero, Feliz cumpleaños, Feliz aniversario.
- Counter warns past 139 characters for the WhatsApp info line.
- Cursive and heart frames are the default filter on the WhatsApp page.
- The guide says where each result goes: chat, status, or the contact name field. Contact names on some phones accept fewer symbols than a status does, and the page says so.

### 3.3 Gaming usernames

People want an unusual nickname for Free Fire, Roblox, and Discord.

Keywords: letras para Free Fire, nombres con letras bonitas, letras góticas.

How the product serves it:

- Pages: `/letras-para-free-fire/`, `/letras-para-roblox/`, `/letras-para-discord/`, `/letras-goticas/`.
- Default filter is gothic and other compact styles. Long heart frames are not the default, because they blow a short nickname.
- Limits called out on the page:
  - Free Fire nickname: 12 characters.
  - Discord nickname: 32 characters.
  - Roblox display name: about 20 characters. The Roblox **username** (the @handle) only allows letters, numbers, and underscore. The page says that plainly, and points people to the display name, profile about, and group text, where styled letters have a chance to show.
- Ready phrases are short nicks: Luna, Fuego, Nova.

### 3.4 Decorative lettering

Some people want an attractive alphabet, cursive examples, or lettering ideas for crafts.

Keywords: abecedario de letras bonitas, letras decoradas, letras bonitas para imprimir.

How the product serves it:

- `/abecedario/` shows A–Z and Ñ in several styles. Each cell copies. This absorbs single-letter searches without a page per letter.
- `/letras-decoradas/` and `/letras-con-corazones/` cover decorated text.
- `/letras-para-titulos/` covers poster headlines and school-subject titles (Matemáticas, Biología, Historia). The text is meant to be pasted into Word, Canva, or a notebook title.

Printable molds, foami sheets, and a design editor stay out of v1. Those searches want a picture, and this tool produces text. The alphabet page says that in one sentence and does not pretend to be a print shop. There is no `/para-imprimir/` URL.

---

## 4. Keyword evidence (unchanged conclusion)

The CSV is Google autocomplete, not search volume. Phrases suggested most often:

| Phrase | Times | Page |
|---|---|---|
| letras bonitas para copiar y pegar | 4 | Home |
| letras bonitas en español | 4 | The whole site, in Spanish |
| Instagram, WhatsApp, TikTok | 3 each | One page each |
| aesthetic, títulos, carteles | 3 each | Aesthetic page, títulos page |
| para imprimir | 3 | No page (section 3.4) |
| cursivas, chiquitas, free fire, símbolos, abecedario | 2 | One page each |

About 80 single-letter queries collapse into the alphabet page. About 45 "que digan + school subject" queries collapse into ready phrases on the títulos page. Personal names do not get pages.

The ~2.74M monthly search figure, and weakest competitor DR 0, remain Waqas's data. This plan does not re-verify them.

---

## 5. Product behavior

Land with the sample text already styled. Edit it. Every visible card updates on each keystroke. Tap Copiar. The card says "¡Copiado!". Paste somewhere else.

No account. No generate button. No paywall.

Included:

- About 100 named styles in Spanish. The page says "más de 100 estilos" only if the count is real.
- Kinds: Unicode alphabets, combining-mark effects, and original frames (hearts, stars, flowers).
- Chips with counts: Todos, Favoritos, Cursiva, Gótica, Negrita, Chiquitas, Burbuja, Aesthetic, Decoradas, Emojis, Símbolos, Juegos, Efectos.
- Style search, device-local favorites, dark mode (system first, then remembered), clear button.
- Live counter with the soft limits in section 3. The counter color changes past the limit. Nothing is silently cut.
- Ready phrases, different per use case (section 3).
- Accents (á, é, í, ó, ú, ü, ñ) stay attached to the transformed letter by decomposing the character, mapping the base, and keeping the accent mark. Emoji pass through. Reverse and mirror walk grapheme clusters.
- Copy: Clipboard API, then a hidden textarea, then "Selecciona el texto y cópialo".
- FAQ accordion and legal pages: privacidad, cookies, aviso legal, acerca de, contacto.

Left out of v1: molds, font downloads, tattoo designs, per-letter pages, per-name pages, accounts, image export, AI, mix-styles, font-size slider, ads, extra languages.

---

## 6. Pages

One generator component. Each URL has its own H1, intro, steps, and FAQ. Spanish slugs.

| URL | Use case | Query |
|---|---|---|
| `/` | All three primary jobs | letras bonitas para copiar y pegar |
| `/letras-para-instagram/` | Profiles | letras bonitas para instagram |
| `/letras-para-tiktok/` | Profiles | letras bonitas para tik tok |
| `/letras-aesthetic/` | Profiles | letras bonitas aesthetic |
| `/letras-para-whatsapp/` | Messages | letras bonitas para whatsapp |
| `/letras-cursivas/` | Messages | letras bonitas cursivas |
| `/letras-para-free-fire/` | Gaming | letras bonitas para free fire |
| `/letras-para-roblox/` | Gaming | nombres con letras bonitas |
| `/letras-para-discord/` | Gaming | letras bonitas discord |
| `/letras-goticas/` | Gaming | letras bonitas goticas |
| `/abecedario/` | Lettering | abecedario de letras bonitas |
| `/letras-decoradas/` | Lettering | letras bonitas decoradas |
| `/letras-con-corazones/` | Lettering | letras bonitas con corazones |
| `/letras-para-titulos/` | Lettering | letras bonitas para titulos |
| `/letras-negritas/` | Style | letras bonitas negritas |
| `/letras-chiquitas/` | Style | letras bonitas chiquitas |
| `/letras-burbuja/` | Style | letras bonitas burbuja |
| `/letras-graffiti/` | Style | letras bonitas graffiti |
| `/letras-con-emojis/` | Style | letras bonitas con emojis |
| `/letras-para-facebook/` | Profiles, secondary | letras bonitas facebook |
| `/simbolos/` | Extra picker | letras bonitas y símbolos |

Legal: `/privacidad/`, `/cookies/`, `/aviso-legal/`, `/acerca-de/`, `/contacto/`.

Home order: generator, then the three primary use cases, then lettering, then how-to, alphabet, FAQ.

Schema: `SoftwareApplication`, `FAQPage`, `BreadcrumbList`, and `WebSite` on the home page. `lang="es"`. One sitemap. No hreflang in v1.

---

## 7. Components and data

```
src/layouts/BaseLayout.astro
src/components/Header.astro
src/components/Footer.astro
src/components/Generator.astro
src/components/StyleCard.astro
src/components/ChipRow.astro
src/components/PhraseRow.astro
src/components/FaqList.astro
src/components/UseCaseGrid.astro
src/components/AlphabetTable.astro
src/lib/transform.ts          pure functions, tested
src/lib/styles.ts             maps, effects, frames
src/data/landings.ts          one typed record per URL
src/scripts/generator.ts      client behavior only
```

`transform.ts` is imported by the server render and by the client script. Initial cards for the sample text are in the HTML, so a browser without JavaScript still shows examples.

Each style record: `id`, Spanish `name`, `categories`, `kind` (`map` | `effect` | `frame`), optional `badge`. Maps come from Unicode blocks we type ourselves. Frames are our own prefix and suffix pairs. Nothing is scraped from another site.

A style that corrupts emoji or ñ does not ship. Target: 100 styles.

---

## 8. Hosting

Astro static output on Cloudflare Pages, or Vercel if the domain already points there. No server. No database.

Inter is the one webfont, self-hosted and subset. Generator script, including style data, stays under 80 KB gzipped. Lighthouse performance target: 90+ on mobile without ads.

---

## 9. Monetization

No ad scripts at launch, and no empty ad holes. Later, if ads are added: one unit below the tool, one in the footer, nothing above the input. Advertising cookies need a consent banner. Until then, no analytics cookies. Privacy, cookies, and aviso legal still ship on day one, describing local favorites and no accounts.

---

## 10. Build order, after acceptance

Each step is its own commit.

1. Scaffold: Astro, TypeScript, Inter, layout shell, security headers, git.
2. `transform.ts` with tests for accents, ñ, emoji, reverse, and the length warnings.
3. Style catalog and the generator components.
4. Home page wired to the three use cases.
5. The rest of the landing pages from `landings.ts`, plus symbols, alphabet, legal, sitemap, and 404.
6. Mobile check at 390px and a desktop check. Copy tested in Chrome, Firefox, and Safari.

---

## 11. Done when

- Typing updates the visible cards on each keystroke.
- Copy feedback on the card reads "¡Copiado!".
- "Hola 😎" and "Niño" survive every style, including reverse and mirror.
- Instagram warns past 150. TikTok bio warns past 80. WhatsApp warns past 139. Free Fire warns past 12.
- The Roblox page states that the @username cannot use these styles.
- Favorites and dark mode survive a refresh.
- Every URL has a unique title, H1, and FAQ.
- Interface copy is Spanish. UI font is Inter.
- 390px: input, chips, and copy buttons work with a thumb.

---

## 12. Still open, with defaults

1. **Domain.** The visible name is "Letras Bonitas" until a domain is chosen.
2. **Ads.** Traffic first. Nothing above the input.
3. **Page set.** The table in section 6 ships together.

Development starts when this version is accepted.

---

*End of PRD v2.1.*
