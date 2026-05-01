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
        <div className="w-full h-160  bg-[#FDFAF6]">
            <div className="flex flex-col justify-center items-center py-12 gap-3 text-center">                
                <div className="text-xs font-sans text-[#c4993cd3] font-semibold tracking-widest flex uppercase space-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5  ">
                        <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684ZM13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z" />
                    </svg>
                    <h3>Planning</h3>
                </div>
                <h1 className="text-4xl font-semibold tracking-wider text-[#2c1a0e]">Votre calendrier d'événements</h1>
                <p className=" text-[#6B5040] font-sans">Ne manquez aucune date importante</p>

                <div className="flex flex-col lg:flex-row justify-center lg:gap-10 gap-5 mt-8">
                    <div className="bg-white rounded-2xl p-5 lg:w-110 w-99 border border-[#e5c68381] shadow-sm">
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
                                    className={`w-9 h-9 flex flex-col items-center justify-center rounded-lg cursor-pointer
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
                    <div className="flex flex-col gap-4 lg:w-160 w-100">
                        {events.map((event, index) => (
                            <div
                            key={index}
                            className="bg-white border border-[#e5c68381] rounded-2xl p-4  flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <div className="bg-[#f2c49e9e] rounded-xl px-3.5 py-1 text-center">
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
                            <div className="bg-[#f2c49e9e] text-xs px-3 py-1 rounded-full">
                                {event.participants}
                            </div>
                            </div>
                        ))}
                        </div>
        
    
                </div>
            </div>
        </div>
    )
}