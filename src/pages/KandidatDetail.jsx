import { useParams, Link } from "react-router-dom";
import WasMehr from "../components/WasMehr";
import SocialRow from "../components/SocialRow";
import { KANDIDATEN, PLATZHALTER, PLATZHALTER_LANG } from "../data";

export default function KandidatDetail() {
  const { slug } = useParams();
  const k = KANDIDATEN.find((x) => x.slug === slug);

  if (!k) {
    return (
      <main className="bg-white text-volt-purple min-h-[60vh] flex flex-col items-center justify-center gap-4 px-5">
        <div className="text-2xl font-bold">Kandidat:in nicht gefunden</div>
        <Link to="/kandidierende" className="bg-volt-lime text-volt-purple font-bold px-5 py-2.5 btn-magnet">
          Zur Landesliste
        </Link>
      </main>
    );
  }

  const [vorname, ...rest] = k.name.split(" ");
  const nachname = rest.join(" ");

  return (
    <main className="bg-white text-volt-purple">
      <section className="max-w-3xl mx-auto px-5 md:px-8 pt-12 md:pt-20 pb-14">
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] uppercase">
          {vorname}<br />{nachname}
        </h1>

        <div className="relative aspect-[4/5] max-w-md mt-8 overflow-hidden">
          <img src={k.foto} alt={k.name} className="absolute inset-0 w-full h-full object-cover object-top" />
        </div>

        <p className="mt-4 text-sm md:text-base font-medium">
          AGH Kandidat:in&ensp;I&ensp;Listenplatz: {k.listenplatz} | Alter: {k.alter}<br />
          {k.bezirk}
        </p>

        <h2 className="mt-12 text-2xl md:text-4xl font-bold">Herzensthema</h2>
        <p className="mt-4 text-sm md:text-base leading-relaxed">{PLATZHALTER}</p>
        <p className="mt-4 text-sm md:text-base leading-relaxed opacity-90">
          Kein neutraler Wahl-o-Mat:<br />{PLATZHALTER_LANG}
        </p>

        <h2 className="mt-12 text-2xl md:text-4xl font-bold">Über mich</h2>
        <p className="mt-4 text-sm md:text-base leading-relaxed">
          {vorname} setzt sich für {k.themen} ein — mit einem klaren, europäischen
          Blick auf Berlin.
        </p>
        <p className="mt-4 text-sm md:text-base leading-relaxed">
          {vorname} ist geborene und leidenschaftliche Berliner:in und kandidiert
          im {k.wahlkreis} für das Abgeordnetenhaus.
        </p>

        <div className="relative aspect-[4/5] max-w-xs mt-8 overflow-hidden">
          <img src={k.foto} alt={k.name} className="absolute inset-0 w-full h-full object-cover object-top" />
        </div>

        <h2 className="mt-12 text-2xl md:text-4xl font-bold">Berlin ist…</h2>
        <p className="mt-4 text-sm md:text-base leading-relaxed italic">
          Hier kommt ein Zitat über Berlin
        </p>
        <p className="mt-4 text-sm md:text-base leading-relaxed opacity-90">
          {PLATZHALTER}
        </p>

        <div className="mt-14">
          <SocialRow label={`Folge ${vorname} für weitere spannende Artiken`} />
        </div>
      </section>

      <WasMehr />
    </main>
  );
}
