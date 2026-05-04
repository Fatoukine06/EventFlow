import { useState } from "react";
import { Link } from "react-router-dom";
const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Événements", href: "#evenements" },
  { label: "Calendrier", href: "#calendrier" },
  { label: "Participants", href: "#participants" },
  { label: "Statistiques", href: "#statistiques" },
];

function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <nav className="bg-[#F8F5F0] border-b border-[#C49A3C] px-6 py-3 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <a
          href="#accueil"
          className="text-[1.35rem] font-bold tracking-tight text-[#1a1208] shrink-0 font-serif no-underline"
        >
          Event<span className="text-[#C49A3C]">Flow</span>
        </a>

        <ul className="hidden lg:flex items-center gap-6 text-[#3b2e1e] text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-[#C49A3C] transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2 bg-[#f8f5f088] border border-[#C49A3C] rounded-full px-3 py-1.5 text-sm text-stone-400 w-48 shrink-0">
          <input
            type="text"
            placeholder="Rechercher..."
            className="bg-transparent border-none focus:outline-none"
            />
        </div>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            to="/creer"
            className="flex items-center gap-1 bg-[#2d1e0e] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#3e2a12] transition-colors">
            <span className="text-base leading-none">+</span> Créer un événement
          </Link>
          <Link
            to="/connexion"
            
            className="text-sm font-semibold text-[#2d1e0e] border border-[#2d1e0e] px-4 py-2 rounded-full hover:bg-[#2d1e0e] hover:text-white transition-colors"
          >
            Connexion
          </Link>
        </div>

        <button
          className="lg:hidden text-stone-700 focus:outline-none"
          onClick={() => setMenuOuvert(!menuOuvert)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOuvert ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOuvert && (
        <div className="lg:hidden mt-3 pb-4 flex flex-col gap-3 text-stone-700 text-sm font-medium border-t border-stone-200 pt-3">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-[#C49A3C] transition-colors">
              {link.label}
            </a>
          ))}
          <button className="flex items-center gap-1 bg-[#2d1e0e] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#3e2a12] transition-colors w-fit mt-2">
            <span className="text-base leading-none">+</span> Créer un événement
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
