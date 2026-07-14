import { Camera } from "lucide-react";

// Platzhalter für Kampagnen-Fotos, die noch nicht vorliegen.
// label z.B. "Sticker-Foto" — className steuert Größe/Aspect-Ratio.
export default function FotoPlatzhalter({ label = "Foto folgt", className = "", dark = false }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 select-none ${
        dark ? "bg-volt-darkest/80 text-white/40" : "bg-white/10 text-white/50"
      } ${className}`}
    >
      <Camera size={28} />
      <span className="text-xs font-bold uppercase tracking-wide">{label}</span>
    </div>
  );
}
