# GEMINI.md

This file provides guidance gemini when working with code in this repository.

- **Projekt:** unfuck.berlin Pre-Kampagne
- **Was es tut:** Landing-Page für Volt Berlin mit zwei Einstiegspunkten: Sticker-Anmeldung (Post) + Nervkrams melden (Bürger-Beschwerden)
- **Stand:** 3-View-Struktur fertig. Beide Formulare schreiben in Supabase. Mobile-optimiert.
- **Deployment:** Vercel oder Netlify unter unfuck.berlin
- **Design-Richtung:** Volt-Lila (#502379) + Lime (#D6FF1D), Nunito Font (Google Fonts)
- **Ownership:** Supabase-Projekt soll zu Volt Berlin übertragen werden – nicht Ballys Account

## Struktur

Kein Build-System. Direkt öffnen oder per Vercel/Netlify deployen.

```
index.html     – Markup + alle JS-Logik inline
style.css      – Alle Styles
assets/logo.png
```

## Architektur: 3 Views (kein Router, kein Reload)

`index.html` hat drei `<div>`-Blöcke, die per `hidden`-Attribut umgeschaltet werden:

| View | ID | Inhalt |
|------|----|--------|
| Landing | `#view-landing` | Logo, zwei Taglines, zwei Buttons |
| Sticker | `#view-sticker` | Adress-Formular → `sticker_requests` |
| Nervkrams | `#view-nervkrams` | Problem-Formular → `nervkrams_reports` |

Navigation via `showView(id)` – blendet alle drei Views aus, aktiviert den gewünschten.

## Supabase

- Projekt-ID: `ugxzkzydoajexjgwcqtq`
- URL + Anon-Key stehen direkt in `index.html`
- Client heißt `supabaseClient` (nicht `supabase`, vermeidet Konflikt mit CDN-Global)
- CDN: `@supabase/supabase-js@2` via jsdelivr

**Tabellen:**

`sticker_requests` – `email`, `name`, `strasse`, `plz`, `stadt`, `consent`

`nervkrams_reports` – `problem`, `ort`, `grund`, `kontakt` (optional), `created_at`

Beide Tabellen haben RLS aktiv mit einer `anon insert`-Policy (kein Auth nötig).

## Design-Token

```css
--bg: #502379          /* Volt-Lila, Hintergrund */
--lime: #D6FF1D        /* Akzent, Buttons */
--text: #ffffff
--muted: rgba(255,255,255,0.65)
--surface: rgba(255,255,255,0.08)
```

Inputs: weiß, lila Text (`#502379`), kein border-radius (Volt-Stil: eckig).
Buttons (`button[type="submit"]` + `button[type="button"]`): lime, `-3deg` rotiert, uppercase, font-weight 900, `white-space: nowrap`.
Hintergrund: linearer Gradient `#4E236E → #28113D`, fixed.
