function Temoignages() {
  const temoignages = [
    {
      id: 1,
      texte: "EventFlow a révolutionné la gestion de nos conférences annuelles. Le calendrier intégré nous fait économiser des heures chaque semaine.",
      initiales: "MS",
      nom: "Moussa Sarr",
      role: "Directeur — Forum Africain du Business",
      couleurAvatar: "bg-amber-700",
    },
    {
      id: 2,
      texte: "La gestion des inscriptions est fluide, les participants reçoivent leurs billets en quelques secondes. Je ne pourrais plus m'en passer.",
      initiales: "FK",
      nom: "Fatou Koné",
      role: "Productrice — Festival Teranga",
      couleurAvatar: "bg-amber-800",
    },
    {
      id: 3,
      texte: "Interface élégante, outil puissant. Mes clients sont impressionnés par la qualité des pages d'événements que je crée avec EventFlow.",
      initiales: "ND",
      nom: "Ndéye Diallo",
      role: "Event Manager Freelance",
      couleurAvatar: "bg-slate-700",
    },
  ];

  return (
    <section className="bg-[#f0ede8] py-20 px-8">
      <div className="text-center mb-14">
        <p className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-4">
          ✦ Ils nous font confiance
        </p>
        <h2 className="text-5xl font-bold text-stone-900 mb-4"
            style={{ fontFamily: "Georgia, serif" }}>
          Ce que disent nos organisateurs
        </h2>
        <p className="text-stone-500 text-base font-light">
          Des professionnels qui ont transformé leur façon d'organiser
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        {temoignages.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100"
          >
            <div className="flex gap-1 mb-5">
              {[1, 2, 3, 4, 5].map((etoile) => (
                <span key={etoile} className="text-amber-400 text-lg">★</span>
              ))}
            </div>
            <p className="text-stone-600 text-sm leading-relaxed mb-8 italic">
              « {t.texte} »
            </p>
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-full ${t.couleurAvatar} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                {t.initiales}
              </div>
              <div>
                <p className="text-stone-900 font-semibold text-sm">{t.nom}</p>
                <p className="text-stone-400 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Temoignages;
