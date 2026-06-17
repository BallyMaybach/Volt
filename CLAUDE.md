# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

- **Projekt:** unfuck.berlin Pre-Kampagne
- **Was es tut:** Landing-Page für Volt Berlin mit zwei Einstiegspunkten: Sticker-Anmeldung (Post) + Nervkrams melden (Bürger-Beschwerden)
- **Stand:** 3 separate HTML-Seiten fertig. Beide Formulare schreiben in Supabase. Mobile-optimiert.
- **Deployment:** Vercel oder Netlify unter unfuck.berlin
- **Design-Richtung:** Volt-Lila (#502379) + Lime (#D6FF1D), Nunito Font (Google Fonts)
- **Ownership:** Supabase-Projekt soll zu Volt Berlin übertragen werden – nicht Ballys Account

## Struktur

Kein Build-System. Direkt öffnen oder per Vercel/Netlify deployen.

```
index.html      – Landing: Logo + zwei Buttons (Links zu nervkrams.html / sticker.html)
nervkrams.html  – Problem-Formular → schreibt in Supabase `nervkrams_reports`
sticker.html    – Adress-Formular → schreibt in Supabase `sticker_requests`
style.css       – Alle Styles (geteilt von allen drei Seiten)
assets/logo.png
```

Navigation: einfache `<a href="...">` Links zwischen den Seiten. Kein JS-Router, kein SPA-Pattern mehr. Logo auf Unterseiten verlinkt zurück auf `index.html`.

## Supabase

- Projekt-ID: `ugxzkzydoajexjgwcqtq`
- URL + Anon-Key stehen direkt in `nervkrams.html` und `sticker.html`
- Client heißt `supabaseClient` (nicht `supabase`, vermeidet Konflikt mit CDN-Global)
- CDN: `@supabase/supabase-js@2` via jsdelivr

**Tabellen:**

`sticker_requests` – `email`, `name`, `strasse`, `plz`, `stadt`, `consent`

`nervkrams_reports` – `problem`, `ort`, `grund`, `kontakt` (optional), `file_urls` (text[], optional), `created_at`

Beide Tabellen haben RLS aktiv mit einer `anon insert`-Policy (kein Auth nötig).

**Storage:** Bucket `nervkrams-uploads` (public, max 10 MB/Datei, nur Bilder + PDF). Nervkrams-Formular lädt Fotos hoch → öffentliche URLs landen in `file_urls`. RLS: anon darf insert, public darf select. Datei-Input ist versteckt, getriggert über `.file-drop-area`-Label.

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
Hintergrund: linearer Gradient `#4E226E → #28113D`, fixed.

## AIOS

Ballys AI Operating System liegt unter:
`C:\Users\Bally\OneDrive\Desktop\BUSINESS\Bally Ordner\AI-OS-Bally`

Dort liegen Skills, Connections, Context und alle Automatisierungen.
