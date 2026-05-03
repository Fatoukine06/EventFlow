interface EventItem {
    id: number;
    badge: string;
    emoji: string;
    categorie: string;
    titre: string;
    date: string;
    lieu: string;
    prix: string;
    inscrits: string;
    avatars: string[];
    bgFrom: string;
    bgTo: string;
}

const events: EventItem[] = [
    {
        id: 1,
        badge: "Places restantes",
        emoji: "🎵",
        categorie: "MUSIQUE",
        titre: "Festival des Rythmes Africains 2025",
        date: "12 Mai 2025",
        lieu: "Dakar, Place de la Nation",
        prix: "15 000 FCFA",
        inscrits: "+340 inscrits",
        avatars: ["M", "F", "D"],
        bgFrom: "#3B1A0A",
        bgTo: "#7A4A22",
    },
    {
        id: 2,
        badge: "Gratuit",
        emoji: "💼",
        categorie: "CONFÉRENCE",
        titre: "Sommet Tech & Innovation Afrique",
        date: "18–19 Mai 2025",
        lieu: "CICAD, Dakar",
        prix: "Gratuit",
        inscrits: "+1 200 inscrits",
        avatars: ["A", "K", "S"],
        bgFrom: "#6B3A2A",
        bgTo: "#B07850",
    },
    {
        id: 3,
        badge: "VIP dispo",
        emoji: "🎨",
        categorie: "ART & CULTURE",
        titre: "Exposition Contemporaine — Diaspora & Identité",
        date: "1–30 Juin 2025",
        lieu: "Musée IFAN, Dakar",
        prix: "5 000 FCFA",
        inscrits: "+85 inscrits",
        avatars: ["L", "N", "P"],
        bgFrom: "#4A2E00",
        bgTo: "#C49A3C",
    },
    ];

    const avatarColors = ["#C49A3C", "#9A5E2C", "#5C3518"];

    function EventCard({ event } : { event: EventItem }) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm w-full max-w-sm flex flex-col">

        <div
            className="relative h-52 flex items-center justify-center"
            style={{
            background: `linear-gradient(135deg, ${event.bgFrom} 0%, ${event.bgTo} 100%)`,
            }}
        >
            <span className="absolute top-4 right-4 bg-[#FDFAF6] text-[#3E2514] text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
            {event.badge}
            </span>
            <span className="text-6xl drop-shadow">{event.emoji}</span>
        </div>

        <div className="p-5 flex flex-col flex-1">

            <p className="text-[10px] font-bold text-[#C49A3C] tracking-widest uppercase mb-2">
            {event.categorie}
            </p>

            <h3 className="text-[17px] font-bold text-[#2C1A0E] leading-snug mb-3">
            {event.titre}
            </h3>

            <div className="flex items-center gap-2 text-sm text-[#8C6E58] mb-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{event.date}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-[#8C6E58] mb-5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span>{event.lieu}</span>
            </div>

            <div className="h-px bg-[#EDE0D4] mb-4" />

            <div className="flex items-center justify-between">
            <p className="text-base font-bold text-[#2C1A0E]">{event.prix}</p>

            <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                {event.avatars.map((lettre, i) => (
                    <div
                    key={i}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white"
                    style={{ backgroundColor: avatarColors[i] }}
                    >
                    {lettre}
                    </div>
                ))}
                </div>
                <span className="text-xs text-[#8C6E58]">{event.inscrits}</span>
            </div>
            </div>

        </div>
        </div>
    );
    }

    export default function EventsGrid() {
    return (
        <div className="min-h-screen bg-[#FAF5EF] py-16 px-6">

        <div className="text-center mb-12">
            <h2
            className="text-4xl font-bold text-[#2C1A0E] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
            >
            Événements à venir
            </h2>
            <p className="text-[#8C6E58] text-sm">
            Rejoignez des milliers de participants dans des expériences uniques
            </p>
        </div>

        <div className="flex flex-row gap-6 justify-center w-full h-100 ">
            {events.map((event) => (
            <EventCard key={event.id} event={event} />
            ))}
        </div>

        </div>
    );
}