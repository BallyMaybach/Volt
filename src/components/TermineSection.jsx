import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TERMINE } from "../data";
import TerminCard from "./TerminCard";

export default function TermineSection({ title = "Wahlkampf Kalender", centered = true, count }) {
  const termine = count ? TERMINE.slice(0, count) : TERMINE;

  return (
    <section className="bg-volt-lime text-volt-purple py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h2 className={`text-2xl md:text-4xl font-bold mb-6 md:mb-10 ${centered ? "text-center" : "text-left"}`}>
          {title}
        </h2>
        <div className="grid md:grid-cols-3 gap-3 md:gap-6">
          {termine.map((t, i) => (
            <TerminCard key={i} termin={t} />
          ))}
        </div>
        <Link
          to="/mitmachen"
          className="mt-8 flex justify-center items-center gap-2 font-bold text-lg text-volt-purple hover:opacity-80 transition"
        >
          Alle Termine <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
