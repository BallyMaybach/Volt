import { Globe, MapPin, Heart, BarChart3, ArrowRight } from "lucide-react";

const SECTIONS = [
  { icon: Globe, title: "Was ist Volt?", text: "Volt ist die erste paneuropäische Bewegung. 2017 als Antwort auf Brexit und wachsenden Populismus gegründet, mit Mitgliedern in über 30 Ländern." },
  { icon: MapPin, title: "Volt in Berlin", text: "Volt Berlin ist seit 2018 aktiv. Mit Mandaten in mehreren Bezirken arbeiten wir an konkreten Verbesserungen für die Stadt." },
  { icon: Heart, title: "Unsere Werte", text: "Pragmatisch, progressiv, positiv. Evidenzbasierte Politik, europäische Solidarität und ein offenes, demokratisches Berlin." },
  { icon: BarChart3, title: "Volt in Zahlen", text: "34.000+ Mitglieder europaweit • 30+ Länder • 100+ gewählte Mandate • 2.500+ Mitglieder in Deutschland." },
];

export default function UeberVolt() {
  return (
    <main className="bg-white text-volt-purple">
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-12 md:pt-20 pb-6 md:pb-12">
        <h1 className="text-[34px] md:text-7xl font-bold leading-[1.05]">Über Volt</h1>
        <p className="mt-5 text-base md:text-xl opacity-80 max-w-2xl">
          Lerne uns kennen — wer wir sind, was wir wollen, und warum Berlin uns wichtig ist.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-12 md:pb-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {SECTIONS.map((s, i) => (
          <div key={i} className="border border-volt-purple/15 p-5 md:p-6 shadow-card hover:shadow-lg transition">
            <div className="w-10 h-10 bg-volt-lime flex items-center justify-center mb-4">
              <s.icon size={20} className="text-volt-purple" />
            </div>
            <h3 className="font-bold text-lg md:text-xl mb-2">{s.title}</h3>
            <p className="text-sm md:text-base text-black/80 leading-relaxed">{s.text}</p>
          </div>
        ))}
      </section>

      <section className="bg-volt-purple text-white py-12 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Werde Teil der Bewegung</h2>
          <a href="#" className="inline-flex items-center gap-2 bg-volt-lime text-volt-purple font-bold px-5 py-3 btn-magnet">
            Mitglied werden <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </main>
  );
}
