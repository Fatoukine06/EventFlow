export default function APropos(){
    return(
        <div className="bg-[#2c1a0e] h-170">
            <div className="flex flex-col justify-center items-center py-10 gap-2 ">
                <h3 className="text-[12px]  mt-4 text-[#E8C870] font-semibold tracking-wider">POURQUOI EVENTFLOW</h3>
                <p className="text-white mt-5 font-semibold text-4xl w-110">Tout ce qu'il faut pour organiser sans friction</p>
                <p className="text-[#D8C0A8] mt-4 ">Un outil complet pensé pour les organisateurs exigeants</p>
                <div className="flex flex-row justify-center items-center gap-4 mt-12 ">
                    <div className="border border-[#d8c0a874] relative w-70 h-80 rounded-[20px] p-6 bg-[#fdfaf610] ">
                        <div className="border border-[#d8c0a874] h-15 w-15 p-1 absolute rounded-lg flex items-center justify-center text-3xl bg-[#724d1d84]">🗓️</div>
                        <h3 className="text-white text-xl mt-20">Calendrier Intelligent</h3>
                        <p className="text-[#D8C0A8] mt-4">Visualisez tous vos événements sur un calendrier interactif. Détectez les conflits et optimisez votre planning en un coup d'œil.</p>
                    </div>
                    <div className="border border-[#d8c0a874] relative w-70 h-80 rounded-[20px] p-6 bg-[#fdfaf610] ">
                        <div className="border border-[#d8c0a874] h-15 w-15 p-1 absolute rounded-lg flex items-center justify-center text-3xl bg-[#724d1d84]">👥</div>
                        <h3 className="text-white text-xl mt-20">Gestion des Participants</h3>
                        <p className="text-[#D8C0A8] mt-4">Gérez facilement les inscriptions, les communications et les informations des participants.</p>
                    </div>
                    <div className="border border-[#d8c0a874] relative w-70 h-80 rounded-[20px] p-6 bg-[#fdfaf610] ">
                        <div className="border border-[#d8c0a874] h-15 w-15 p-1 absolute rounded-lg flex items-center justify-center text-3xl bg-[#724d1d84]">📊</div>
                        <h3 className="text-white text-xl mt-20">Tableau de Bord analytique</h3>
                        <p className="text-[#D8C0A8] mt-4">Obtenez des insights détaillés sur la performance de vos événements grâce à notre tableau de bord analytique.</p>
                    </div>
                    <div className="border border-[#d8c0a874] relative w-70 h-80 rounded-[20px] p-6  bg-[#fdfaf610] ">
                        <div className="border border-[#d8c0a874] h-15 w-15 p-1 absolute rounded-lg flex flex-col items-center justify-center text-3xl bg-[#724d1d84]">🔔</div>
                        <h3 className="text-white text-xl mt-20">Notifications Automatiques</h3>
                        <p className="text-[#D8C0A8] mt-4">Restez informé en temps réel grâce à nos notifications automatiques personnalisables.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}