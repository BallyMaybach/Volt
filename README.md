# unfuck.berlin

Pre-Kampagnen-Landing-Page für **Volt Berlin** – zwei Einstiegspunkte für Berliner:innen:

1. **Sticker bestellen** – Adressformular, Sticker kommen per Post
2. **Nervkrams melden** – Bürger-Beschwerden über kaputte Infrastruktur, Bürokratie & Co.

Live: [unfuck.berlin](https://unfuck.berlin)

---

## Stack

- Vanilla HTML + CSS + JS, kein Build-System
- Supabase (Backend, Formulare)
- Deployment via Vercel/Netlify

## Struktur

```
index.html      – Landing + alle Views + JS-Logik
style.css       – Styles
assets/
  logo.png
```

Drei Views werden per `hidden`-Attribut umgeschaltet (kein Router, kein Reload):

| View | Beschreibung |
|------|-------------|
| Landing | Logo, Tagline, zwei Buttons |
| Sticker | Adressformular → `sticker_requests` |
| Nervkrams | Problemformular → `nervkrams_reports` |

## Design

Volt-Lila `#502379` + Lime `#D6FF1D`, Nunito Font, eckige Inputs, rotierte Buttons.

## Supabase

Beide Tabellen haben RLS mit `anon insert`-Policy – kein Login nötig.

- `sticker_requests`: `email`, `name`, `strasse`, `plz`, `stadt`, `consent`
- `nervkrams_reports`: `problem`, `ort`, `grund`, `kontakt`, `created_at`
