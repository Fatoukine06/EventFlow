const events = [
    {
        date: "12",
        month: "MAI",
        title: "Festival des Rythmes Africains",
        location: "Dakar, Place de la Nation",
        participants: "340 inscrits",
    },
    {
        date: "18",
        month: "MAI",
        title: "Sommet Tech & Innovation Afrique",
        location: "CICAD, Dakar",
        participants: "1 200 inscrits",
    },
    {
        date: "24",
        month: "MAI",
        title: "Atelier Entrepreneuriat Féminin",
        location: "Centre Léopold Sédar Senghor",
        participants: "62 inscrits",
    },
    {
        date: "31",
        month: "MAI",
        title: "Gala de Clôture — Mois de la Culture",
        location: "Hôtel Radisson Blu, Dakar",
        participants: "180 inscrits",
    },
    ];
    const eventsDays = [12, 18, 24, 31];
    export default function Planning() {
    return (
        <div className="w-full bg-[#FDFAF6] px-4 py-12">
            <div className="flex flex-col items-center text-center gap-3">
                <div className="text-xs text-[#c4993cd3] font-semibold tracking-widest flex uppercase items-center gap-2">
                    <span>✨</span>
                    <h3>Planning</h3>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2c1a0e]">
                    Votre calendrier d'événements
                    </h1>
                    <p className="text-[#6B5040] text-sm sm:text-base">
                    Ne manquez aucune date importante
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 w-full ">
                        <div className="bg-white rounded-2xl p-5 border border-[#e5c68381] shadow-sm lg:w-110 w-full">
                        
                        <div className="flex justify-between items-center mb-4">
                            <button>{"<"}</button>
                            <h2 className="font-medium">Mai 2025</h2>
                            <button>{">"}</button>
                        </div>
                        <div className="grid grid-cols-7 text-sm text-[#6B5040] mb-2">
                            {["LU", "MA", "ME", "JE", "VE", "SA", "DI"].map((day) => (
                            <span key={day}>{day}</span>
                            ))}
                        </div>
                        <div className="grid grid-cols-7 gap-y-3 text-sm">
                            {Array.from({ length: 31 }, (_, i) => {
                                const day = i + 1;
                                const hasEvent = eventsDays.includes(day);
                                return (
                                <div
                                    key={day}
                                    className={`w-8 h-8 sm:w-9 sm:h-9 flex flex-col items-center justify-center rounded-lg cursor-pointer
                                    ${
                                    day === 20
                                        ? "bg-[#5C3518] text-white"
                                        : "hover:bg-[#e9a9759e]"
                                    }`}>
                                    <span>{day}</span>
                                    {hasEvent && (
                                    <span className="w-1.5 h-1.5 bg-[#ba8458] rounded-full mt-1"></span>
                                    )}
                                </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="bg-white w-full border border-[#e5c68381] rounded-2xl lg:p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                                <div className="flex gap-4 items-center">
                                    <div className="bg-[#f2c49e9e] rounded-xl px-3 py-1 text-center">
                                        <p className="text-lg font-semibold">{event.date}</p>
                                        <p className="text-xs text-[#6B5040]">{event.month}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#2c1a0e]">
                                        {event.title}
                                        </h3>
                                        <p className="text-sm text-[#6B5040]">
                                        📍 {event.location}
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-[#f2c49e9e] text-xs px-3 py-1 rounded-full self-start sm:self-auto">
                                    {event.participants}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}