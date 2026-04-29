import img from '../assets/img2.webp'
import { Link } from 'react-router-dom'
export default function Inscription() {
    return (
        <div className="bg-[#f8dfcc85]  min-h-screen flex items-center justify-center">
            <div className="h-160 w-240 border border-[#f9b785] bg-white  rounded-[40px] flex flex-row justify-between items-center  ">
                <div className=" h-full w-full  flex justify-center items-center">
                    <div className="w-100 h-140   rounded-[20px] shadow-xl flex flex-col  px-7 py-5 gap-4">
                        <h1 className="text-2xl font-semibold  text-[#533722]">Event<span className="text-[#f9b785]">Flow</span></h1>
                        <h1 className="text-xl  font-light text-shadow-lg text-[#533722]">Bienvenue !!</h1>
                        <h1 className="text-2xl  font-medium text-[#533722]">Inscrivez-vous</h1>
                        <label className="text-[#533722]">Email :</label>
                        <input type="email" className="border border-[#f9b785] rounded-[20px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#f9b785]" />
                        <label className="text-[#533722]">Mot de passe :</label>
                        <input type="password" className="border border-[#f9b785] rounded-[20px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#f9b785]" />
                        <label className="text-[#533722]">Confirmer le mot de passe :</label>
                        <input type="password" className="border border-[#f9b785] rounded-[20px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#f9b785]" />
                        <div className="flex justify-center mt-2">
                            <button className="bg-[#f9b785] text-white rounded-[20px] py-2 px-4 hover:bg-[#f9b785cc] transition-colors duration-300">S'inscrire</button>
                        </div>
                        <p className="text-sm text-center text-[#533722]">Déjà un compte ? <Link to="/connexion" className="text-[#f9b785] hover:underline">Se connecter</Link></p>
                    </div>
                </div>
                <img src={img} alt="Image" className="w-100 h-full object-cover rounded-tr-[40px] rounded-br-[40px]" />
            </div>
        </div>
    )
}