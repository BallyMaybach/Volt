const SocialIcons = [
  { label: "Facebook", src: "/images/facebook.svg", href: "https://www.facebook.com/BerlinVolt/?locale=de_DE" },
  { label: "Instagram", src: "/images/insta.svg", href: "https://www.instagram.com/volt_berlin/" },
  { label: "X", src: "/images/x.svg", href: "https://x.com/volt_berlin" },
  { label: "YouTube", src: "/images/youtube.svg", href: "https://www.youtube.com/@voltdeutschland" },
];

export default function Footer() {
  return (
    <footer className="bg-volt-darkest text-white pt-16 pb-8 mt-0 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* TOP SECTION: Logo + Socials */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="text-3xl md:text-5xl font-bold tracking-tight mb-8 flex flex-wrap justify-center items-center gap-3 md:gap-4">
            <span>ZUKUNFT</span>
            <div className="relative w-10 h-10 md:w-14 md:h-14 shrink-0">
              <img
                src="/images/stars.svg"
                alt="Stars"
                className="w-full h-full animate-[spin_20s_linear_infinite]"
              />
            </div>
            <span>MADE IN EUROPE</span>
          </div>

          <div className="text-lg md:text-xl font-bold mb-6">
            Werde teil der bewegung
          </div>

          <div className="flex items-center gap-4">
            {SocialIcons.map(({ label, src, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center btn-magnet hover:scale-110 transition-transform"
              >
                <img src={src} alt={label} className="w-full h-full" />
              </a>
            ))}
          </div>
        </div>

        {/* MIDDLE SECTION: Buttons + Contact */}
        <div className="grid grid-cols-[auto_1fr] gap-6 md:gap-20 mb-16 max-w-4xl mx-auto">
          {/* CTA BUTTONS */}
          <div className="flex flex-col gap-3 items-start">
            <a href="https://voltdeutschland.org/berlin/spenden" target="_blank" rel="noopener noreferrer" className="bg-volt-lime text-volt-purple text-sm md:text-xl font-bold whitespace-nowrap px-3 md:px-6 py-1.5 md:py-2 inline-block btn-magnet">
              Spenden
            </a>
            <a href="#" className="bg-volt-lime text-volt-purple text-sm md:text-xl font-bold whitespace-nowrap px-3 md:px-6 py-1.5 md:py-2 inline-block btn-magnet">
              Newsletter
            </a>
            <a href="#" className="bg-volt-lime text-volt-purple text-sm md:text-xl font-bold whitespace-nowrap px-3 md:px-6 py-1.5 md:py-2 inline-block btn-magnet">
              Volt Deutschland
            </a>
          </div>

          {/* KONTAKT */}
          <div className="text-left space-y-4">
            <div className="font-bold text-lg md:text-xl mb-4">Kontakt</div>
            <div className="space-y-1">
              <div className="text-xs md:text-sm opacity-90">Allgemeine Fragen und Feedback</div>
              <div className="text-[13px] md:text-base font-bold break-words">berlin@voltdeutschland.org</div>
            </div>
            <div className="space-y-1 pt-2">
              <div className="text-xs md:text-sm opacity-90">Presse- und Medienanfragen</div>
              <div className="text-[13px] md:text-base font-bold break-words">presse@voltberlin.org</div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Links + Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-sm md:text-[13px] opacity-90">
          <div className="flex gap-6 font-medium">
            <a href="https://voltdeutschland.org/berlin/impressum" target="_blank" rel="noopener noreferrer" className="hover:text-volt-lime transition-colors">Impressum</a>
            <a href="https://voltdeutschland.org/datenschutz" target="_blank" rel="noopener noreferrer" className="hover:text-volt-lime transition-colors">Datenschutz</a>
            <a href="https://voltdeutschland.org/berlin/transparenz" target="_blank" rel="noopener noreferrer" className="hover:text-volt-lime transition-colors">Transparenz</a>
          </div>
          <div className="font-medium text-center md:text-right">
            Made with <span className="text-[#9D66FF]">💜</span> by Volt EUR Tech Team for Volt Berlin
          </div>
        </div>
      </div>
    </footer>
  );
}
