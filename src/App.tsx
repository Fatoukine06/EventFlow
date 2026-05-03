
import Page from "./components/Page"
import TabBord from "./components/TabBord"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Creer from "./components/Creer"
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TabBord />} />
        <Route path="/Page" element={<Page />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    <Creer/>
      
    </>
  )
}

export default App
