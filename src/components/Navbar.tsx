import { useState } from "react";

const navLinks = [
  { label: "Accueil", href: "#" },
  { label: "Événements", href: "#" },
  { label: "Calendrier", href: "#" },
  { label: "Participants", href: "#" },
  { label: "Statistiques", href: "#" },
];

function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <nav className="bg-[#F8F5F0] border-b border-stone-200 px-6 py-3 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <a
          href="#"
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

        <div className="hidden lg:flex items-center gap-2 bg-white border border-stone-200 rounded-full px-3 py-1.5 text-sm text-stone-400 w-48 shrink-0">
          <svg className="w-4 h-4 shrink-0 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <span>Rechercher un évi...</span>
        </div>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button className="flex items-center gap-1 bg-[#2d1e0e] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#3e2a12] transition-colors">
            <span className="text-base leading-none">+</span> Créer un événement
          </button>
          <a
            href="#"
            className="text-sm font-semibold text-[#2d1e0e] border border-[#2d1e0e] px-4 py-2 rounded-full hover:bg-[#2d1e0e] hover:text-white transition-colors"
          >
            Connexion
          </a>
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
