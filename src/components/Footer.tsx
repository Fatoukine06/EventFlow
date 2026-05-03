import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div>

    
        <div className="bg-linear-to-br from-[#2C1A0E] via-[#3E2514] to-[#5C3518] px-4 py-12 md:px-10 md:py-25">

            <p className="text-center font-bold font-serif text-2xl md:text-5xl leading-tight">
            <span className="text-white">Prêt à créer votre</span> <br />
            <span className="text-[#E8C870] italic">prochain événement ?</span>
            </p>

            <p className="text-white text-center mt-5 text-sm md:text-base">
            Rejoignez plus de 1 500 organisateurs qui font confiance à EventFlow
            pour donner vie à <br /> leurs idées.
            </p>

        
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">

            <Link
                to="/creer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#E8C870] text-[#2C1A0E] font-bold hover:bg-[#D4B760] transition ease-in-out transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                >
                <span>Commencer maintenant</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </Link>

            <button className="px-6 py-3 rounded-lg text-[#E8D8C8] border border-[#E8d8c8] hover:bg-[#e8d8c838]  transition">
                Voir une démo live
            </button>

            </div>
        </div>

        
        <div className="w-full font-serif text-center px-4 py-5 bg-[#2C1A0E]">
            <h1 className="text-2xl font-bold">
            <span className="text-white">Event</span>
            <span className="text-[#C49A3C]">Flow</span>
            </h1>

            <p className="text-[#8C6E58] text-xs md:text-sm mt-2">
            © 2025 EventFlow - Tous droits réservés.
            </p>
        </div>

        </div>
    );
}