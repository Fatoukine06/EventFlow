import Connexion from "./components/Connexion"
import Inscription from "./components/Inscription"
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div className="font-serif">
        <Routes>
          <Route path="/" element={<Connexion />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
        </Routes>
    </div>
  )
}

export default App
