import { X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BEZIRK_THEMEN, KANDIDATEN } from "../data";

export default function BezirkSheet({ bezirk, onClose }) {
  if (!bezirk) return null;
  const themen = (BEZIRK_THEMEN[bezirk.id] || BEZIRK_THEMEN.tempelhof).slice(0, 2);
  const inBezirk = KANDIDATEN.filter((k) => k.bezirk === bezirk.name);
  const kandidaten = (inBezirk.length > 0 ? inBezirk : KANDIDATEN).slice(0, 2);

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto bg-white text-volt-purple rounded-t-[20px] sheet-in">
        <div className="flex items-center justify-between px-5 pt-5">
          <h3 className="text-2xl font-bold mx-auto">{bezirk.name}</h3>
          <button onClick={onClose} aria-label="Schließen" className="w-8 h-8 flex items-center justify-center">
            <X size={18} />
          </button>
        </div>

        <div className="px-5 pt-4 pb-6 space-y-5">
          {themen.map((t, i) => (
            <div key={i}>
              <span className="inline-block bg-volt-purple text-white text-xs font-bold px-4 py-1.5">
                {t.tag}
              </span>
              <ul className="mt-2 list-disc list-inside font-bold text-sm">
                <li>{t.title}</li>
              </ul>
              <p className="mt-1.5 text-sm text-volt-purple/90">{t.desc}</p>
            </div>
          ))}

          <Link
            to={`/bezirk/${bezirk.id}`}
            className="flex justify-end items-center gap-1 font-bold text-sm pt-1 hover:opacity-80 transition"
          >
            Zum Bezirk <ArrowRight size={14} />
          </Link>
        </div>

        <div className="border-t border-black/10" />

        <div className="px-5 py-5 space-y-3">
          <h4 className="font-bold text-base">Kandidierende im Bezirk</h4>
          {kandidaten.map((k) => (
            <Link key={k.slug} to={`/kandidierende/${k.slug}`} className="flex items-center gap-3 py-2 group">
              <img src={k.foto} alt={k.name} className="w-12 h-12 object-cover object-top" />
              <div className="flex-1">
                <div className="font-bold group-hover:underline">{k.name}</div>
                <div className="text-xs text-volt-purple font-medium">{k.wahlkreis}</div>
                <div className="text-xs text-volt-purple/80">{k.themen}</div>
              </div>
            </Link>
          ))}
          <Link to="/kandidierende" className="flex justify-end items-center gap-1 font-bold text-sm hover:opacity-80 transition">
            Alle Kandidierenden sehen <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
