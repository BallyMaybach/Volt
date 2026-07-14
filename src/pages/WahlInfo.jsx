import { Link } from "react-router-dom";
import WasMehr from "../components/WasMehr";
import { SEITEN } from "../data";
import { NL } from "../lib";

export default function WahlInfo() {
  const s = SEITEN.countdown || {};
  const heroZeilen = s.heroZeilen || [];

  return (
    <main className="bg-volt-purple text-white">

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-5 md:px-8 pt-14 md:pt-24">
        <h1 className="flex flex-col items-start gap-1 md:gap-2 text-4xl md:text-6xl font-bold leading-none uppercase">
          {heroZeilen.map((z, i) => (
            <span key={i} className="hl hl-orange">{z}</span>
          ))}
        </h1>

        <p className="mt-10 text-sm md:text-base opacity-90"><NL text={s.introText1} /></p>
        <p className="mt-4 text-sm md:text-base leading-relaxed opacity-95">
          <NL text={s.introText2} />
        </p>
      </section>

      {/* SUB-FRAGE */}
      <section className="max-w-3xl mx-auto px-5 md:px-8 pt-12 md:pt-16">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight">
          <NL text={s.subFrageTitel} />
        </h2>
        <p className="mt-5 text-sm md:text-base leading-relaxed opacity-95">
          <NL text={s.subFrageText} />
        </p>
      </section>

      {/* WÄHLEN MIT 16 */}
      <section className="max-w-3xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-16 md:pb-24">
        <h2 className="text-3xl md:text-5xl font-bold uppercase">
          <span className="hl hl-orange">{s.waehlenMit16Titel}</span>
        </h2>
        <p className="mt-8 text-sm md:text-base leading-relaxed opacity-95">
          <NL text={s.waehlenMit16Text} />
        </p>
      </section>

      {/* VOLT-O-MAT TEASER */}
      <section className="bg-volt-lime text-volt-purple py-14 md:py-20 text-center">
        <div className="max-w-2xl mx-auto px-5 md:px-8">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">{s.voltomatTitel}</h2>
          <p className="mt-8 text-sm md:text-base font-medium leading-snug">
            Wo du bei der AGH-Wahl 2026 stehst –<br />Frage für Frage, mit Quellen.
          </p>
          <p className="mt-5 text-sm md:text-base leading-relaxed">
            <NL text={s.voltomatText} />
          </p>
          <Link
            to="/volt-o-mat"
            className="inline-block mt-10 bg-white text-volt-purple font-bold tracking-wide text-sm md:text-base px-8 py-3.5 rounded-md shadow-card btn-magnet"
          >
            {s.voltomatButton}
          </Link>
        </div>
      </section>

      <WasMehr />
    </main>
  );
}
