// Kleine Helfer für CMS-Content.

// Mehrzeiliger Text: "\n" wird zu <br/>.
export function NL({ text }) {
  if (!text) return null;
  return String(text)
    .split("\n")
    .map((line, i) => (
      <span key={i}>
        {i > 0 && <br />}
        {line}
      </span>
    ));
}

// Bild mit Fallback-Platzhalter, falls in Sanity (noch) kein Bild gesetzt ist.
export function CmsImg({ src, alt = "", className = "", ...rest }) {
  if (!src) {
    // Eigene bg-Klasse im className gewinnt; sonst dezenter Default.
    const fallbackBg = /(^|\s)bg-/.test(className) ? "" : "bg-volt-purple/10";
    return (
      <div
        className={`${className} ${fallbackBg} flex items-center justify-center text-[10px] text-volt-purple/40 uppercase tracking-wide`}
      >
        Foto folgt
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} {...rest} />;
}
