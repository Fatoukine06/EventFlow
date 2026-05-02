export default function TabBord() {
    return (
        <div className="bg-red-50 px-4 py-12 md:px-10 flex flex-col gap-3 md:py-20">
        
        <h1 className="text-yellow-600 font-sans uppercase text-center text-[12px] font-semibold tracking-widest mb-2">
            ✦ Tableau de Bord
        </h1>

        <p className="text-center text-2xl md:text-4xl text-amber-950 font-bold  mt-3">
            Pilotez vos événements <br className="hidden md:block" />
            en temps réel
        </p>

        <p className="text-amber-950 text-center mt-5 text-sm md:text-base">
            Accédez à votre tableau de bord pour visualiser vos statistiques,
            suivre vos <br /> participants et gérer l'ensemble de vos événements
            depuis un seul endroit.
        </p>

        <div className="flex justify-center mt-8">
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-950 text-white hover:bg-amber-800 transition">
            
            <span>Accéder au dashboard</span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>

            </button>
        </div>

        </div>
    );
}