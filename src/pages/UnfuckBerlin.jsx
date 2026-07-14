import WasMehr from "../components/WasMehr";
import { SEITEN } from "../data";
import { NL, CmsImg } from "../lib";

export default function UnfuckBerlin() {
  const s = SEITEN.unfck || {};
  const heroZeilen = s.heroZeilen || [];
  const collage1 = s.collage1 || [];
  const stickerBilder = s.stickerBilder || [];

  return (
    <main className="bg-volt-purple text-white">

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-5 md:px-8 pt-14 md:pt-24 text-center">
        <h1 className="flex flex-col items-center gap-2 text-6xl md:text-8xl font-bold leading-none lowercase">
          {heroZeilen.map((z, i) => (
            <span key={i} className="hl hl-lime">{z}</span>
          ))}
        </h1>
        <p className="mt-10 text-sm md:text-base text-volt-orange font-medium max-w-md mx-auto">
          <NL text={s.heroText} />
        </p>
      </section>

      {/* COLLAGE 1: Nacht-Aktionen */}
      <section className="max-w-3xl mx-auto px-5 md:px-8 pt-12">
        <div className="grid grid-cols-2 gap-4 items-end">
          <CmsImg src={collage1[0]} alt="Unf*ck Berlin Nacht-Aktion" className="aspect-[3/4] w-full object-cover" />
          <CmsImg src={collage1[1]} alt="Unf*ck Berlin Straßen-Projektion" className="aspect-[4/3] w-full object-cover" />
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-5 md:px-8 py-10">
        <p className="text-sm md:text-base leading-relaxed"><NL text={s.textBlock1} /></p>
      </div>

      {/* GROSSES FOTO: Funkturm */}
      <section className="max-w-3xl mx-auto px-5 md:px-8">
        <CmsImg src={s.grossesBild} alt="Unf*ck Berlin am Funkturm" className="w-full aspect-[4/5] object-cover" />
      </section>

      <div className="max-w-3xl mx-auto px-5 md:px-8 py-10">
        <p className="text-sm md:text-base leading-relaxed"><NL text={s.textBlock2} /></p>
      </div>

      {/* STICKER-COLLAGE */}
      <section className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-3 gap-3">
          <CmsImg src={stickerBilder[0]} alt="Unf*ck Berlin Sticker" className="aspect-square col-span-1 self-end w-full object-cover" />
          <CmsImg src={stickerBilder[1]} alt="Unf*ck Berlin Sticker am Mast" className="aspect-[3/4] col-span-2 w-full object-cover" />
          <CmsImg src={stickerBilder[2]} alt="Unf*ck Berlin Projektion" className="aspect-[3/4] col-span-2 col-start-1 w-full object-cover" />
        </div>

        <div id="sticker" className="text-center mt-12 pb-16">
          <a
            href="#"
            className="inline-block bg-volt-lime text-volt-purple font-bold tracking-wide text-sm md:text-base px-7 py-3 rounded-md shadow-[4px_5px_0_#8FB000] btn-magnet"
          >
            {s.stickerButton}
          </a>
        </div>
      </section>

      <WasMehr />
    </main>
  );
}
