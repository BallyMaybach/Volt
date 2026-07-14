import { useState } from "react";
import { TERMINE, SEITEN } from "../data";
import TerminCard from "../components/TerminCard";
import { NL, CmsImg } from "../lib";

const FILTER = [
  { id: "Alle", cls: "bg-white text-volt-darkest" },
  { id: "Veranstaltung", cls: "bg-volt-blue text-volt-darkest" },
  { id: "Podium", cls: "bg-volt-orange text-volt-darkest" },
  { id: "Bezirkstreffen", cls: "bg-volt-pink text-white" },
];

export default function Mitmachen() {
  const s = SEITEN.mitmachen || {};
  const heroZeilen = s.heroZeilen || [];
  const carousel = s.carouselBilder && s.carouselBilder.length ? s.carouselBilder : [null];

  const LISTE = TERMINE.length ? [...TERMINE, TERMINE[1] || TERMINE[0], TERMINE[2] || TERMINE[0]] : [];
  const [filter, setFilter] = useState("Alle");
  const [slide, setSlide] = useState(0);

  const sichtbar = filter === "Alle" ? LISTE : LISTE.filter((t) => t.type === filter);

  return (
    <main className="bg-volt-purple text-white">

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-5 md:px-8 pt-14 md:pt-24">
        <h1 className="flex flex-col items-start gap-1 md:gap-2 text-4xl md:text-6xl font-bold leading-none uppercase">
          {heroZeilen.map((z, i) => (
            <span key={i} className="hl hl-blue">{z}</span>
          ))}
        </h1>

        <p className="mt-10 text-sm md:text-base leading-relaxed opacity-95">
          <NL text={s.heroText} />
        </p>

        {/* FILTER */}
        <div className="mt-8 space-y-3">
          <div>
            <button
              onClick={() => setFilter("Alle")}
              className={`font-bold text-sm md:text-base px-8 py-2.5 ${FILTER[0].cls} ${
                filter === "Alle" ? "ring-2 ring-volt-lime" : ""
              } btn-magnet`}
            >
              Alle
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            {FILTER.slice(1).map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(filter === f.id ? "Alle" : f.id)}
                className={`font-bold text-sm md:text-base px-5 py-2.5 ${f.cls} ${
                  filter === f.id ? "ring-2 ring-volt-lime" : ""
                } btn-magnet`}
              >
                {f.id}
              </button>
            ))}
          </div>
        </div>

        {/* TERMINE LISTE */}
        <div className="mt-10 space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 pb-16">
          {sichtbar.map((t, i) => (
            <TerminCard key={i} termin={t} />
          ))}
        </div>
      </section>

      {/* BIS NÄCHSTES MAL — CAROUSEL */}
      <section className="max-w-3xl mx-auto px-5 md:px-8 pb-20 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-10">{s.carouselTitel}</h2>

        <CmsImg
          src={carousel[slide % carousel.length]}
          alt="Volt Berlin"
          className="w-full aspect-[3/4] md:aspect-[4/3] object-cover"
        />

        {carousel.length > 1 && (
          <div className="flex justify-center items-center gap-3 mt-5 text-white/70">
            <button
              aria-label="Zurück"
              onClick={() => setSlide((slide - 1 + carousel.length) % carousel.length)}
              className="text-2xl leading-none hover:text-white transition"
            >
              ‹
            </button>
            {carousel.map((_, i) => (
              <button
                key={i}
                aria-label={`Foto ${i + 1}`}
                onClick={() => setSlide(i)}
                className={`w-2 h-2 rounded-full transition ${i === slide ? "bg-white" : "bg-white/30"}`}
              />
            ))}
            <button
              aria-label="Weiter"
              onClick={() => setSlide((slide + 1) % carousel.length)}
              className="text-2xl leading-none hover:text-white transition"
            >
              ›
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
