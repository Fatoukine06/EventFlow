
import Page from "./components/Page"
import TabBord from "./components/TabBord"
import { Routes, Route, BrowserRouter } from "react-router-dom"
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TabBord />} />
        <Route path="/Page" element={<Page />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
