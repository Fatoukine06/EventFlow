import Hero from "./components/Hero";

function App() {
  return (
    <div className="relative min-h-screen w-full font-sans bg-[#FDFBF7] overflow-hidden selection:bg-[#C49A3C] selection:text-white">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 99px, rgba(196,154,60,0.06) 99px, rgba(196,154,60,0.06) 100px), repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(196,154,60,0.06) 99px, rgba(196,154,60,0.06) 100px)",
        }}
      />
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
import LandingPage from "./components/LandingPage"


function App() {
  return (
    <div className="  font-serif h-screen w-full">
      <LandingPage/>
    </div>
  )
}

export default App;
