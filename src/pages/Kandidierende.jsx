import { useState } from "react";
import { Link } from "react-router-dom";
import WasMehr from "../components/WasMehr";
import TermineSection from "../components/TermineSection";
import { KANDIDATEN, SEITEN } from "../data";
import { NL } from "../lib";

export default function Kandidierende() {
  const s = SEITEN.alleKandis || {};
  const titelZeilen = s.titelZeilen || [];
  const [alleAnzeigen, setAlleAnzeigen] = useState(false);
  const sichtbar = alleAnzeigen ? KANDIDATEN : KANDIDATEN.slice(0, 9);

  return (
    <main className="bg-white text-volt-purple">

      <section className="max-w-3xl mx-auto px-5 md:px-8 pt-12 md:pt-20 pb-14">
        <h1 className="text-3xl md:text-5xl font-bold leading-[1.1] uppercase">
          {titelZeilen.map((z, i) => (
            <span key={i}>{i > 0 && <br />}{z}</span>
          ))}
        </h1>
        <p className="mt-6 text-sm md:text-base leading-relaxed">
          <NL text={s.subtitle} />
        </p>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-x-4 gap-y-8 mt-10">
          {sichtbar.map((k) => (
            <Link key={k.slug} to={`/kandidierende/${k.slug}`} className="group">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={k.foto}
                  alt={k.name}
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-2 font-bold text-xs md:text-base leading-tight group-hover:underline">
                {k.name}
              </div>
              <div className="text-[11px] md:text-sm leading-tight mt-0.5">
                Listenplatz {k.listenplatz}
              </div>
              <div className="text-[11px] md:text-sm leading-tight">{k.bezirk}</div>
            </Link>
          ))}
        </div>

        {!alleAnzeigen && KANDIDATEN.length > 9 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setAlleAnzeigen(true)}
              className="bg-volt-purple text-white font-bold tracking-wide text-sm md:text-base px-7 py-3 rounded-md btn-magnet"
            >
              WEITERE KANDIDATEN
            </button>
          </div>
        )}
      </section>

      <TermineSection title="hier kannst du uns treffen:" centered={false} count={2} />
      <WasMehr />
    </main>
  );
}
