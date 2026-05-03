import Footer from "./components/Footer"
import Creer from "./components/Creer"
import { Routes, Route } from "react-router-dom"
function App() {


  return (
    <div className="font-[Playfair Display]">
      <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/creer" element={<Creer />} />
      </Routes>
      
    </div>
  )
}

export default App
