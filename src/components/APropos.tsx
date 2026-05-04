export default function APropos() {
    return (
        <div className="bg-[#2c1a0e] min-h-screen px-4">            
            <div className="flex flex-col justify-center items-center py-12 gap-3 text-center">                
                <div className="text-xs font-sans text-[#E8C870] font-semibold tracking-widest flex uppercase space-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5  ">
                        <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684ZM13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z" />
                    </svg>
                    <h3>Pourquoi EventFlow </h3>
                </div>
                <p className="text-white mt-4 font-semibold text-2xl sm:text-3xl md:text-4xl max-w-2xl">
                    Tout ce qu'il faut pour organiser sans friction
                </p>
                <p className="text-[#D8C0A8] mt-3 text-sm sm:text-base">
                    Un outil complet pensé pour les organisateurs exigeants
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full max-w-6xl">
                    <div className="border border-[#d8c0a874] relative rounded-[20px] p-6 bg-[#fdfaf610]">
                        <div className="border border-[#d8c0a874] h-12 w-12 absolute rounded-lg flex items-center justify-center text-2xl bg-[#724d1d84]">
                            🗓️
                        </div>
                        <h3 className="text-white text-lg mt-16">
                            Calendrier Intelligent
                        </h3>
                        <p className="text-[#D8C0A8] mt-3 text-sm">
                            Visualisez tous vos événements sur un calendrier interactif. Détectez les conflits et optimisez votre planning en un coup d'œil.
                        </p>
                    </div>
                    <div className="border border-[#d8c0a874] relative rounded-[20px] p-6 bg-[#fdfaf610]">
                        <div className="border border-[#d8c0a874] h-12 w-12 absolute rounded-lg flex items-center justify-center text-2xl bg-[#724d1d84]">
                            👥
                        </div>
                        <h3 className="text-white text-lg mt-16">
                            Gestion des Participants
                        </h3>
                        <p className="text-[#D8C0A8] mt-3 text-sm">
                            Gérez facilement les inscriptions, les communications et les informations des participants.
                        </p>
                    </div>
                    <div className="border border-[#d8c0a874] relative rounded-[20px] p-6 bg-[#fdfaf610]">
                        <div className="border border-[#d8c0a874] h-12 w-12 absolute rounded-lg flex items-center justify-center text-2xl bg-[#724d1d84]">
                            📊
                        </div>
                        <h3 className="text-white text-lg mt-16">
                            Tableau de Bord analytique
                        </h3>
                        <p className="text-[#D8C0A8] mt-3 text-sm">
                            Obtenez des insights détaillés sur la performance de vos événements grâce à notre tableau de bord analytique.
                        </p>
                    </div>
                    <div className="border border-[#d8c0a874] relative rounded-[20px] p-6 bg-[#fdfaf610]">
                        <div className="border border-[#d8c0a874] h-12 w-12 absolute rounded-lg flex items-center justify-center text-2xl bg-[#724d1d84]">
                            🔔
                        </div>
                        <h3 className="text-white text-lg mt-16">
                            Notifications Automatiques
                        </h3>
                        <p className="text-[#D8C0A8] mt-3 text-sm">
                            Restez informé en temps réel grâce à nos notifications automatiques personnalisables.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}