import Planning from "./components/Planning"
import EventsGrid from "./components/Evenements"

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
