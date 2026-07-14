import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Countdown from "../components/Countdown";
import TermineSection from "../components/TermineSection";
import { SEITEN, KANDIDATEN } from "../data";
import { NL } from "../lib";

export default function Home() {
  const navigate = useNavigate();
  const s = SEITEN.startseite || {};
  const heroZeilen = s.heroZeilen || [];
  const kandidatenZeilen = s.kandidatenZeilen || [];
  // Kandidaten-Grid: die ersten 9 Fotos aus der Kandidaten-Liste (Sanity)
  const fotos = KANDIDATEN.slice(0, 9);

  return (
    <main className="bg-volt-purple text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="md:mx-auto md:max-w-6xl md:px-8 md:flex md:flex-row-reverse md:items-center md:gap-10 md:min-h-[80vh]">

          {/* Foto */}
          <Link
            to="/spitzenduo"
            className="block relative md:flex-1 md:flex md:justify-center"
            aria-label="Zum Spitzenduo"
          >
            <img
              src={s.heroBild}
              alt="Unsere Spitzenkandidaten"
              className="w-full max-w-2xl mx-auto h-auto md:max-w-sm md:rounded-[1.5rem]"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-volt-purple to-transparent md:hidden" />
          </Link>

          {/* Text */}
          <div className="relative z-10 -mt-72 md:mt-0 px-5 md:px-0 md:flex-1">
            <h1 className="flex flex-col items-center md:items-start gap-1 md:gap-2 text-[42px] md:text-6xl lg:text-7xl font-bold leading-none uppercase text-center md:text-left">
              {heroZeilen.map((z, i) => (
                <span key={i} className="hl hl-lime">{z}</span>
              ))}
            </h1>

            <p className="text-center md:text-left text-sm md:text-lg leading-snug mt-6 max-w-md mx-auto md:mx-0">
              <NL text={s.heroText} />
            </p>

            <div className="text-center md:text-left mt-7">
              <button
                onClick={() => navigate("/spitzenduo")}
                className="inline-block bg-volt-lime text-volt-purple font-bold tracking-wide text-sm md:text-base px-7 py-3 rounded-md shadow-[4px_5px_0_#8FB000] btn-magnet"
              >
                {s.heroButton}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTDOWN bis zur Wahl am 20.09.2026 */}
      <section className="pt-12 md:pt-16 pb-10 md:pb-14 px-5">
        <Countdown />
      </section>

      {/* ERSTWÄHLER */}
      <section className="px-5 pb-14 md:pb-20 text-center max-w-md md:max-w-2xl mx-auto">
        <p className="text-sm md:text-base leading-snug">
          <NL text={s.erstwaehlerText} />
        </p>
        <Link to="/wahl-info" className="inline-flex items-center gap-2 font-bold text-sm md:text-base mt-4 hover:text-volt-lime transition">
          {s.erstwaehlerLink} <ArrowRight size={16} />
        </Link>
      </section>

      {/* WAHLKAMPF KALENDER */}
      <TermineSection title={s.kalenderTitel || "Wahlkampf Kalender"} />

      {/* UNSERE KANDIDATEN */}
      <section className="relative">
        <div className="grid grid-cols-3 md:max-w-3xl md:mx-auto md:rounded-[1.5rem] md:overflow-hidden">
          {fotos.map((k) => (
            <div key={k.slug} className="relative aspect-[3/4]">
              <img
                src={k.foto}
                alt={k.name}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-volt-purple/40" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="h-full flex flex-col items-center justify-center">
            <h2 className="flex flex-col items-center gap-1 md:gap-2 text-4xl md:text-7xl font-bold uppercase text-center">
              {kandidatenZeilen.map((z, i) => (
                <span key={i} className="hl hl-white">{z}</span>
              ))}
            </h2>
          </div>
          <Link
            to="/kandidierende"
            className="pointer-events-auto absolute inset-x-0 top-[68%] mx-auto w-fit flex items-center gap-2 font-bold text-sm md:text-lg text-white drop-shadow hover:text-volt-lime transition"
          >
            {s.kandidatenLink} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}
