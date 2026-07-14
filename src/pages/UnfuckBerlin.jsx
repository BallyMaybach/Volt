import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { SEITEN } from "../data";
import { NL, CmsImg } from "../lib";

const INTRO_FALLBACK =
  "Hinter unf*ck Berlin steckt eine einfache Idee: Probleme verschwinden nicht, wenn man höflicher über sie spricht. Aber sie verschwinden auch nicht, wenn man nur über sie klagt.\nDeshalb ist das hier keine Protestkampagne. Es ist eine Einladung, wieder Erwartungen an diese Stadt zu haben. Wir bringen eine mutige Vision mit: faktenbasiert, lernfähig und europäisch. Wir entscheiden nicht nach Lagern oder Ideologien, sondern danach, was wirkt.\nAndere Metropolen haben viele unserer Herausforderungen längst gelöst. Wir bringen die besten Ideen aus ganz Europa auf Berlins Straßen.\nWenn du das auch willst, mach mit!\nSei ein Teil der Bewegung und hilf uns, diese Stadt neu zu denken.";

const KRAFT_FALLBACK =
  "Berlin ist großartig, aber müde von einer Politik, die sich im Klein-Klein verliert, statt mutig in die Zukunft zu denken.\nBerlin ist vielfältig, aber blockiert von einer Verwaltung, die zu oft nicht liefert.\nBerlin ist pulsierend, aber sein Herzschlag erreicht die Politik nicht.\nWir glauben: Das muss nicht so bleiben.\nBerlin unf*ckt sich nicht von allein.\nDie Stadt braucht mehr als kleine Korrekturen am Status quo. Sie braucht deinen Mut zur Veränderung. Wir arbeiten für eine selbstbewusste Metropolregion, die zur treibenden Kraft für eine innovative, gerechte und nachhaltige Gesellschaft wird.\nDenn was f*cked ist, lässt sich auch unf*cken.";

const SCHLUSS_FALLBACK =
  "Und trotzdem warten wir monatelang auf Briefe vom Amt. Auf Busse, die nicht kommen. Auf Wohnungen, die wir uns leisten können. Auf Schulen, die marode sind. Berlin ist nicht kaputt.\nAber gelähmt von der gepflegten Unzuständigkeit seiner Politik und Verwaltung. Die Stadt bleibt weit unter ihren Möglichkeiten – und das Gefühl wächst, dass es nicht besser wird, sondern schlechter. Und genau deshalb steht plötzlich überall in dieser Stadt: unf*ck Berlin.\nWir glauben: Das muss nicht so bleiben.";

export default function UnfuckBerlin() {
  const s = SEITEN.unfck || {};
  const heroZeilen = s.heroZeilen || ["unf*ck", "berlin"];
  const collage = [...(s.collage1 || []), ...(s.stickerBilder || [])];

  return (
    <main className="bg-volt-purple text-white">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 pt-14 md:pt-20 md:text-center">
        <h1 className="flex flex-col items-start md:items-center gap-2 text-6xl md:text-8xl font-bold leading-none lowercase">
          {heroZeilen.map((z, i) => (
            <span key={i} className="hl hl-lime">{z}</span>
          ))}
        </h1>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 pt-12 md:pt-16">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight max-w-xl">
          <NL text={s.introTitel || "Eine Politik, die unsere Zukunft gestaltet, statt die Gegenwart zu verwalten."} />
        </h2>
        <p className="mt-8 text-xs md:text-sm leading-relaxed max-w-2xl">
          <NL text={s.heroText || INTRO_FALLBACK} />
        </p>

        <div id="sticker" className="mt-8">
          <a
            href="#"
            className="inline-block bg-volt-lime text-volt-purple font-bold tracking-wide text-sm md:text-base px-6 py-3 rounded-md shadow-[4px_5px_0_#8FB000] btn-magnet uppercase"
          >
            {s.stickerButton || "Sticker abgreifen"}
          </a>
        </div>
      </section>

      {/* GROSSES VIDEO-BILD */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 pt-12 md:pt-16">
        <div className="relative">
          <CmsImg
            src={s.grossesBild}
            alt="unf*ck berlin Straßen-Schablone"
            className="w-full aspect-[4/3] md:aspect-[16/9] object-cover bg-gray-300"
          />
          <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-card">
              <Play size={26} className="text-volt-purple fill-volt-purple ml-1" />
            </span>
          </span>
        </div>
      </section>

      {/* DIE KRAFT */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 pt-14 md:pt-20">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          <NL text={s.kraftTitel || "Die Kraft,\nVisionen umzusetzen."} />
        </h2>
        <p className="mt-8 text-xs md:text-sm leading-relaxed max-w-2xl">
          <NL text={s.textBlock1 || KRAFT_FALLBACK} />
        </p>

        <div className="mt-8">
          <Link
            to="/wahlprogramm"
            className="inline-block bg-volt-lime text-volt-purple font-bold tracking-wide text-sm md:text-base px-6 py-3 rounded-md shadow-[4px_5px_0_#8FB000] btn-magnet uppercase"
          >
            {s.programmButton || "Gesamewahlprogramm lesen"}
          </Link>
        </div>
      </section>

      {/* FOTO-COLLAGE */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 pt-14 md:pt-20">
        {/* Mobile: gestapelt — Desktop: Collage-Raster */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          <div className="md:col-span-6">
            <CmsImg src={collage[0]} alt="unf*ck berlin Aktion" className="w-full aspect-[3/4] object-cover bg-gray-300" />
          </div>
          <div className="md:col-span-5 md:mt-16">
            <CmsImg src={collage[1]} alt="unf*ck berlin Aktion" className="w-full aspect-[3/4] object-cover bg-gray-300" />
          </div>
          <div className="md:col-span-4 md:col-start-3">
            <CmsImg src={collage[2]} alt="unf*ck berlin Aktion" className="w-full aspect-[3/4] object-cover bg-gray-300" />
          </div>
          <div className="md:col-span-4">
            <CmsImg src={collage[3]} alt="unf*ck berlin Aktion" className="w-full aspect-[3/4] object-cover bg-gray-300" />
          </div>
        </div>
      </section>

      {/* SCHLUSS */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-16 md:pb-24">
        <h2 className="text-sm md:text-base font-bold">
          {s.schlussTitel || "Berlin ist eine der aufregendsten Städte der Welt!"}
        </h2>
        <p className="mt-4 text-xs md:text-sm leading-relaxed max-w-2xl">
          <NL text={s.textBlock2 || SCHLUSS_FALLBACK} />
        </p>

        <div className="mt-8">
          <Link
            to="/wahl-info"
            className="inline-block bg-volt-lime text-volt-purple font-bold tracking-wide text-sm md:text-base px-6 py-3 rounded-md shadow-[4px_5px_0_#8FB000] btn-magnet uppercase"
          >
            {s.stimmeButton || "Erste & Zweite Stimme: Volt"}
          </Link>
        </div>
      </section>
    </main>
  );
}
