import WasMehr from "../components/WasMehr";
import TermineSection from "../components/TermineSection";
import SocialRow from "../components/SocialRow";
import { SEITEN } from "../data";
import { NL, CmsImg } from "../lib";

function Fragen({ intro, fragen = [] }) {
  return (
    <>
      <p className="mt-6 text-sm md:text-base leading-relaxed">
        <NL text={intro} />
      </p>
      {fragen.map((f, i) => (
        <div key={i}>
          <h3 className="mt-10 text-xl md:text-3xl font-bold leading-tight">
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
      <section className="max-w-3xl mx-auto px-5 md:px-8 pt-12 md:pt-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] uppercase">
          <NL text={s.annaTitel} />
        </h1>

        <div className="grid grid-cols-2 gap-4 mt-8 items-start">
          <div className="relative aspect-[3/4] overflow-hidden">
            <CmsImg
              src={s.annaBild}
              alt="Anna Auerbach"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
          <p className="text-sm md:text-base leading-relaxed">
            <NL text={s.annaIntro} />
          </p>
        </div>

        <div className="flex justify-end mt-6">
          <CmsImg
            src={s.annaBildJacke}
            alt="Anna Auerbach"
            className="w-1/2 aspect-square object-cover"
          />
        </div>

        <Fragen intro={s.annaIntro} fragen={s.annaFragen} />

        <div className="mt-10 pb-14">
          <SocialRow label={s.annaSocialLabel} />
        </div>
      </section>

      {/* WIR IN DEN MEDIEN */}
      <section className="bg-volt-purple text-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <h2 className="flex flex-col items-start gap-1 md:gap-2 text-4xl md:text-6xl font-bold uppercase mb-10">
            {medienTitel.map((z, i) => (
              <span key={i} className="hl hl-lime">{z}</span>
            ))}
          </h2>

          <div className="grid grid-cols-3 gap-3">
            {(medienBilder.length ? medienBilder : [null, null, null]).map((src, i) => (
              <CmsImg
                key={i}
                src={src}
                alt="Volt in den Medien"
                className="aspect-[3/4] w-full object-cover"
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
              className="inline-block bg-volt-lime text-volt-purple font-bold tracking-wide text-sm md:text-base px-7 py-3 rounded-md shadow-[4px_5px_0_#8FB000] btn-magnet"
            >
              {s.medienButton}
            </a>
          </div>
        </div>
      </section>

      {/* PAUL */}
      <section className="max-w-3xl mx-auto px-5 md:px-8 pt-12 md:pt-20">
        <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] uppercase">
          <NL text={s.paulTitel} />
        </h2>

        <div className="relative aspect-[3/4] max-w-md mt-8 overflow-hidden">
          <CmsImg
            src={s.paulBild}
            alt="Paul Löper"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>

        <Fragen intro={s.paulIntro} fragen={s.paulFragen} />

        <div className="mt-10 pb-14">
          <SocialRow label={s.paulSocialLabel} />
        </div>
      </section>

      <TermineSection title="hier kannst du uns treffen:" centered={false} count={2} />
      <WasMehr />
    </main>
  );
}
