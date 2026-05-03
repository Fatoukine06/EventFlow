import Planning from "./components/Planning"
import EventsGrid from "./components/Evenements"

import Page from "./components/Page"
import TabBord from "./components/TabBord"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Creer from "./components/Creer"
import Navbar from "./components/Navbar";

import Temoignages from './components/Temoignages'

function App() {
  return (
    <div className="w-full h-screen font-[serif]">
      <Planning/>
    </div>
  )
    <>
      <Temoignages />
      <EventsGrid/>
    </>
  );
}

export default App
