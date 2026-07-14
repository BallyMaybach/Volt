import { useRef, useState } from "react";
import { Code } from "lucide-react";
import FotoPlatzhalter from "./FotoPlatzhalter";

// Vorher/Nachher-Slider — solange keine echten Fotos da sind mit Platzhaltern.
export default function BeforeAfter() {
  const ref = useRef(null);
  const [pos, setPos] = useState(50);

  function move(clientX) {
    const rect = ref.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(97, Math.max(3, pct)));
  }

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[16/9] overflow-hidden select-none cursor-ew-resize touch-none"
      onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); move(e.clientX); }}
      onPointerMove={(e) => e.buttons === 1 && move(e.clientX)}
    >
      {/* Nachher (rechts, volle Fläche) */}
      <div className="absolute inset-0 bg-volt-blue/30 flex items-center justify-center">
        <FotoPlatzhalter label="Nachher — mit Volt" className="w-full h-full bg-transparent text-volt-purple/50" />
      </div>

      {/* Vorher (links, geclippt) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <div className="absolute inset-0 w-[100vw] max-w-none bg-volt-darkest flex items-center justify-center">
          <FotoPlatzhalter label="Vorher — ohne Volt" className="w-full h-full bg-transparent" dark />
        </div>
      </div>

      {/* Griff */}
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -translate-x-1/2 w-0.5 bg-white" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-volt-purple flex items-center justify-center shadow-card">
          <Code size={16} />
        </div>
      </div>
    </div>
  );
}
