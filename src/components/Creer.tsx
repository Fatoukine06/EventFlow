import { useState } from "react";
import {useNavigate} from "react-router-dom"
export default function CreateEvent() {

    const [titre, setTitre] = useState("");
    const [categorie, setCategorie] = useState("");
    const [date, setDate] = useState("");
    const [lieu, setLieu] = useState("");
    const [places, setPlaces] = useState("");
    const [prix, setPrix] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        alert("🎉 Événement publié avec succès !");
        navigate(-1);

    };

    return (
        <div className="min-h-screen bg-[#FAF5EF] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-lg mx-auto">

            <h1 className="text-2xl sm:text-3xl font-bold text-[#2C1A0E] mb-2">
            Créer un événement
            </h1>
            <p className="text-sm text-[#8C6E58] mb-6 sm:mb-8">
            Remplissez le formulaire ci-dessous pour publier votre événement.
            </p>

            <div className="bg-white rounded-2xl border border-[#EDE0D4] p-4 sm:p-6 flex flex-col gap-5">

            <div>
                <label className="block text-sm font-semibold text-[#2C1A0E] mb-1">
                Titre de l'événement
                </label>
                <input
                type="text"
                placeholder="Ex : Festival des Rythmes Africains"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
                className="w-full border border-[#E8D8C8] rounded-xl px-4 py-3 text-sm text-[#2C1A0E] placeholder-[#C4A48A] outline-none focus:border-[#C49A3C]"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-[#2C1A0E] mb-1">
                Catégorie
                </label>
                <select
                value={categorie}
                onChange={(e) => setCategorie(e.target.value)}
                className="w-full border border-[#E8D8C8] rounded-xl px-4 py-3 text-sm text-[#2C1A0E] outline-none focus:border-[#C49A3C] bg-white"
                >
                <option value="">-- Choisir une catégorie --</option>
                <option value="Musique">🎵 Musique</option>
                <option value="Conférence">💼 Conférence</option>
                <option value="Art & Culture">🎨 Art & Culture</option>
                <option value="Sport">⚽ Sport</option>
                <option value="Business">📊 Business</option>
                <option value="Gastronomie">🍽️ Gastronomie</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                <label className="block text-sm font-semibold text-[#2C1A0E] mb-1">
                    Date de l'événement
                </label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full border border-[#E8D8C8] rounded-xl px-4 py-3 text-sm text-[#2C1A0E] outline-none focus:border-[#C49A3C]"
                />
                </div>
                <div>
                <label className="block text-sm font-semibold text-[#2C1A0E] mb-1">
                    Nombre de places
                </label>
                <input
                    type="number"
                    placeholder="Ex : 200"
                    value={places}
                    onChange={(e) => setPlaces(e.target.value)}
                    className="w-full border border-[#E8D8C8] rounded-xl px-4 py-3 text-sm text-[#2C1A0E] placeholder-[#C4A48A] outline-none focus:border-[#C49A3C]"
                />
                </div>

            </div>

            <div>
                <label className="block text-sm font-semibold text-[#2C1A0E] mb-1">
                Lieu
                </label>
                <input
                type="text"
                placeholder="Ex : Place de la Nation, Dakar"
                value={lieu}
                onChange={(e) => setLieu(e.target.value)}
                className="w-full border border-[#E8D8C8] rounded-xl px-4 py-3 text-sm text-[#2C1A0E] placeholder-[#C4A48A] outline-none focus:border-[#C49A3C]"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-[#2C1A0E] mb-1">
                Prix (laisser 0 si gratuit)
                </label>
                <div className="flex items-center border border-[#E8D8C8] rounded-xl overflow-hidden focus-within:border-[#C49A3C]">
                <input
                    type="number"
                    placeholder="0"
                    value={prix}
                    onChange={(e) => setPrix(e.target.value)}
                    className="flex-1 px-4 py-3 text-sm text-[#2C1A0E] placeholder-[#C4A48A] outline-none"
                />
                <span className="px-4 py-3 bg-[#F2E8DC] text-sm text-[#8C6E58] border-l border-[#E8D8C8]">
                    FCFA
                </span>
                </div>
            </div>

            <button
                onClick={handleSubmit}
                className="w-full bg-[#5C3518] hover:bg-[#7A4A22] text-white font-semibold py-3.5 rounded-xl text-sm transition-all mt-2 active:scale-95"
            >
                🎉 Publier l'événement
            </button>

            </div>
        </div>
        </div>
    );
}