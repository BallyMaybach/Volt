import { BEZIRKE } from "../data";

const HEX_W = 78;
const HEX_H = 88;
const COL_GAP = 6;
const ROW_GAP = 8;

export default function HexMap({ activeIds = [], onSelect }) {
  // Compute pixel positions: even cols offset down by half a row
  const cellW = HEX_W + COL_GAP;
  const cellH = HEX_H + ROW_GAP;

  return (
    <div className="relative mx-auto" style={{ width: 5 * cellW, height: 5 * cellH }}>
      {BEZIRKE.map((b) => {
        const left = b.col * cellW;
        const top = b.row * cellH + (b.col % 2 === 1 ? cellH / 2 : 0);
        const isActive = activeIds.includes(b.id) || b.active;
        return (
          <button
            key={b.id}
            onClick={() => onSelect?.(b)}
            className="absolute group focus:outline-none"
            style={{ left, top, width: HEX_W, height: HEX_H }}
            aria-label={b.name}
          >
            <div
              className={`hex w-full h-full flex items-center justify-center text-center px-1 transition-all
              ${isActive
                ? "bg-volt-purple"
                : "bg-white/95"}`}
            >
              <span
                className={`text-[9px] font-bold leading-tight ${isActive ? "text-volt-lime" : "text-volt-purple/70"}`}
              >
                {b.name}
              </span>
            </div>
            {isActive && (
              <div
                className="absolute inset-0 hex pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 2px #D6FF1D" }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
