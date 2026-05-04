import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Creer from "./components/Creer";
import Page from "./components/Page"; 
import Connexion from "./components/Connexion";
import Inscription from "./components/Inscription";
function App() {
  return (
    <div className="font-serif h-screen w-full">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/creer" element={<Creer />} />
        <Route path="/Page" element={<Page />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </div>
  )
}

export default App;