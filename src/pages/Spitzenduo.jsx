import TermineSection from "../components/TermineSection";
import SocialRow from "../components/SocialRow";
import { SEITEN } from "../data";
import { NL, CmsImg } from "../lib";

function Fragen({ fragen = [] }) {
  return (
    <>
      {fragen.map((f, i) => (
        <div key={i}>
          <h3 className="mt-10 text-xl md:text-2xl font-bold leading-tight">
            <NL text={f.frage} />
          </h3>
          <p className="mt-4 text-sm md:text-base leading-relaxed">
            <NL text={f.antwort} />
          </p>
        </div>
      ))}
    </>
  );
}

export default function Spitzenduo() {
  const s = SEITEN.paulAnna || {};
  const medienTitel = s.medienTitelZeilen || [];
  const medienBilder = s.medienBilder || [];

  return (
    <main className="bg-white text-volt-purple">

      {/* ANNA */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 pt-12 md:pt-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] uppercase">
          <NL text={s.annaTitel} />
        </h1>

        {/* Desktop: Portrait links, Text + Jacke-Foto rechts. Mobile: kompakte Collage. */}
        <div className="grid grid-cols-2 md:grid-cols-[4fr_5fr] gap-4 md:gap-10 mt-8 items-start">
          <div className="relative aspect-[3/4] overflow-hidden">
            <CmsImg
              src={s.annaBild}
              alt="Anna Auerbach"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <p className="text-xs md:text-sm leading-relaxed">
              <NL text={s.annaIntro} />
            </p>
            <div className="mt-4 md:mt-8">
              <CmsImg
                src={s.annaBildJacke}
                alt="Anna Auerbach — Freiheit ist die schönste Stadt der Welt"
                className="w-full md:w-3/4 aspect-square object-cover"
              />
            </div>
          </div>
        </div>

        <Fragen fragen={s.annaFragen} />

        <div className="mt-10 pb-14">
          <SocialRow label={s.annaSocialLabel} />
        </div>
      </section>

      {/* WIR IN DEN MEDIEN */}
      <section className="bg-volt-purple text-white py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h2 className="flex flex-col items-start gap-1 text-3xl md:text-4xl font-bold uppercase mb-8 md:mb-10">
            {medienTitel.map((z, i) => (
              <span key={i} className="hl hl-lime">{z}</span>
            ))}
          </h2>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {(medienBilder.length ? medienBilder.slice(0, 3) : [null, null, null]).map((src, i) => (
              <CmsImg
                key={i}
                src={src}
                alt="Volt in den Medien"
                className={`aspect-[4/3] w-full object-cover bg-gray-300 ${i > 0 ? "hidden md:block" : ""}`}
              />
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 mt-6 text-white/60">
            <span className="text-lg leading-none">‹</span>
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="w-2 h-2 rounded-full bg-white/30" />
            <span className="w-2 h-2 rounded-full bg-white/30" />
            <span className="text-lg leading-none">›</span>
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-block bg-volt-lime text-volt-purple font-bold tracking-wide text-sm md:text-base px-7 py-3 rounded-md shadow-[4px_5px_0_#8FB000] btn-magnet uppercase"
            >
              {s.medienButton || "Mehr erfahren"}
            </a>
          </div>
        </div>
      </section>

      {/* PAUL */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 pt-12 md:pt-24">
        <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] uppercase">
          <NL text={s.paulTitel} />
        </h2>

        <div className="relative aspect-[3/4] max-w-sm mt-8 overflow-hidden">
          <CmsImg
            src={s.paulBild}
            alt="Paul Löper"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>

        <p className="mt-8 text-sm md:text-base leading-relaxed">
          <NL text={s.paulIntro} />
        </p>

        <Fragen fragen={s.paulFragen} />

        <div className="mt-10 pb-14">
          <SocialRow label={s.paulSocialLabel} />
        </div>
      </section>

      <TermineSection title="Triff uns!" centered />
    </main>
  );
}
