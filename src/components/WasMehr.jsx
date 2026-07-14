import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { WAS_MEHR_LINKS } from "../data";

export default function WasMehr() {
  return (
    <section className="bg-volt-purple text-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h2 className="flex flex-col items-start gap-1 md:gap-2 text-4xl md:text-6xl font-bold uppercase mb-10">
          <span className="hl hl-lime">Was</span>
          <span className="hl hl-lime">mehr?</span>
        </h2>

        <nav className="text-2xl md:text-4xl font-bold uppercase leading-[1.6] md:leading-[1.7]">
          {WAS_MEHR_LINKS.map((l, i) => {
            const isExternal = l.to.startsWith("http");
            const linkClass = `inline-block whitespace-nowrap ${
              l.muted
                ? "text-volt-lime/40 hover:text-volt-lime/70"
                : "text-volt-lime hover:text-white"
            } transition-colors`;
            return (
            <span key={i}>
              {isExternal ? (
                <a href={l.to} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {l.label}
                </a>
              ) : (
                <Link to={l.to} className={linkClass}>
                  {l.label}
                </Link>
              )}
              {i < WAS_MEHR_LINKS.length - 1 && (
                <span className="text-volt-lime mx-3 md:mx-4">.</span>
              )}
            </span>
            );
          })}
          <span className="text-volt-lime ml-3 md:ml-4">.</span>
        </nav>

        <div className="flex justify-end mt-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Nach oben"
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-volt-lime text-volt-purple flex items-center justify-center btn-magnet"
          >
            <ArrowUp size={26} strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
}
