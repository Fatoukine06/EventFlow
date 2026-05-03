import CreateEvent from "./components/Creation"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CreateEvent />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
