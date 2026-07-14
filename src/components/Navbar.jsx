import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `font-bold text-xs md:text-sm transition ${isActive ? "text-volt-lime" : "text-white hover:text-volt-lime"}`;

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "bg-volt-purple border-white/10 shadow-md"
          : "bg-volt-purple border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-2.5 md:py-4">
        <Link to="/" aria-label="Startseite">
          <Logo />
        </Link>

        <nav className="flex items-center gap-4 md:gap-8">
          <NavLink to="/wahlprogramm" className={linkClass}>Wahlprogramm</NavLink>
          <a
            href="https://voltdeutschland.org/berlin/spenden"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-xs md:text-sm text-white hover:text-volt-lime transition"
          >
            Spenden
          </a>
          <NavLink to="/mitmachen" className={linkClass}>Mitmachen</NavLink>
        </nav>
      </div>
    </header>
  );
}
