export default function Footer() {
    return (
        <div>

    
        <div className="bg-linear-to-br from-[#3E2514]  to-[#5C3518] px-4 py-12 md:px-10 md:py-20">

            <p className="text-center font-bold font-serif text-2xl md:text-5xl leading-tight">
            <span className="text-white">Prêt à créer votre</span> <br />
            <span className="text-[#ecbb52] text-[italic]">prochain événement ?</span>
            </p>

            <p className="text-white text-center mt-5 text-sm md:text-base">
            Rejoignez plus de 1 500 organisateurs qui font confiance à EventFlow
            pour donner vie à <br /> leurs idées.
            </p>

        
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">

            <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-yellow-900 text-white hover:bg-amber-800 transition">
                <span>Accéder au dashboard</span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </button>

            <button className="px-6 py-3 rounded-lg text-white border border-white hover:bg-white hover:text-yellow-950 transition">
                Voir une démo live
            </button>

            </div>
        </div>

        
        <div className="w-full font-serif text-center px-4 py-9.5 bg-amber-950">
            <h1 className="text-2xl font-bold">
            <span className="text-white">Event</span>
            <span className="text-yellow-900">Flow</span>
            </h1>

            <p className="text-yellow-900 text-xs md:text-sm mt-2">
            © 2025 EventFlow — Projet Dev Frontend · M. SOUMARE · UNIPRO
            </p>
        </div>

        </div>
    );
}