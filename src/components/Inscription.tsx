import img from '../assets/img2.webp'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export default function Inscription() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate(-1);
    };
    return (
        <div className="bg-[#f8dfcc85] min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-6xl bg-white border border-[#f9b785] rounded-[30px] flex flex-col md:flex-row overflow-hidden">
                <div className="w-full md:w-1/2 flex justify-center items-center p-6">
                    <div className="w-full max-w-md shadow-xl rounded-[20px] flex flex-col px-6 py-5 gap-4">
                        
                        <h1 className="text-2xl font-semibold text-[#533722]">
                            Event<span className="text-[#f9b785]">Flow</span>
                        </h1>

                        <h2 className="text-lg font-light text-[#533722]">
                            Bienvenue !!
                        </h2>

                        <h2 className="text-xl font-medium text-[#533722]">
                            Inscrivez-vous
                        </h2>

                        <label className="text-[#533722]">Email :</label>
                        <input 
                            type="email" 
                            className="border border-[#f9b785] rounded-[20px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#f9b785]" 
                        />

                        <label className="text-[#533722]">Mot de passe :</label>
                        <input 
                            type="password" 
                            className="border border-[#f9b785] rounded-[20px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#f9b785]" 
                        />

                        <label className="text-[#533722]">Confirmer le mot de passe :</label>
                        <input 
                            type="password" 
                            className="border border-[#f9b785] rounded-[20px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#f9b785]" 
                        />

                        <div className="flex justify-center mt-2">
                            <button onClick={handleSubmit}
                                className="bg-[#f9b785] text-white rounded-[20px] py-2 px-6 hover:bg-[#f9b785cc] transition-colors duration-300">
                                S'inscrire
                            </button>
                        </div>

                        <p className="text-sm text-center text-[#533722]">
                            Déjà un compte ?{" "}
                            <Link to="/connexion" className="text-[#f9b785] hover:underline">
                                Se connecter
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="hidden md:block md:w-1/2">
                    <img 
                        src={img} 
                        alt="Image" 
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </div>
    )
}