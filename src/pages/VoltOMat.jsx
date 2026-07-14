import { SEITEN } from "../data";
import { NL } from "../lib";

export default function VoltOMat() {
  const s = SEITEN.voltomat || {};
  return (
    <main className="bg-volt-gradient text-white min-h-[70vh]">
      <section className="max-w-3xl mx-auto px-5 md:px-8 pt-16 md:pt-28 pb-24 text-center">
        <h1 className="text-4xl md:text-7xl font-bold uppercase">
          <span className="hl hl-lime">{s.titel}</span>
        </h1>

        <p className="mt-10 text-base md:text-lg leading-snug">
          <NL text={s.text1} />
        </p>

        <p className="mt-6 text-sm md:text-base leading-relaxed opacity-95">
          <NL text={s.text2} />
        </p>

        <a
          href="#"
          className="inline-block mt-12 bg-volt-lime text-volt-purple font-bold tracking-wide text-sm md:text-base px-8 py-3.5 rounded-md shadow-[4px_5px_0_#8FB000] btn-magnet"
        >
          {s.button}
        </a>
      </section>
    </main>
  );
}
