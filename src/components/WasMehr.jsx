import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { WAS_MEHR_LINKS } from "../data";

export default function WasMehr() {
  return (
    <section className="bg-volt-purple text-white pt-14 md:pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h2 className="flex flex-col items-start gap-1 text-3xl md:text-5xl font-bold uppercase mb-10 md:mb-12">
          <span className="hl hl-lime">Was</span>
          <span className="hl hl-lime">mehr?</span>
        </h2>

        <div className="relative">
          <nav className="text-xl md:text-3xl font-bold uppercase leading-[1.7] md:leading-[1.8] pr-16 md:pr-24">
            {WAS_MEHR_LINKS.map((l, i) => {
              const isExternal = l.to.startsWith("http");
              const linkClass =
                "inline-block whitespace-nowrap text-volt-lime hover:text-white transition-colors";
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
                  <span className="text-volt-lime mx-3 md:mx-4">.</span>
                </span>
              );
            })}
          </nav>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Nach oben"
            className="absolute right-0 bottom-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-volt-lime text-volt-purple flex items-center justify-center btn-magnet"
          >
            <ArrowUp size={24} strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
}
