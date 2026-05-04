import Navbar from "./Navbar";
import EventsGrid from "./Evenements";
import Temoignages from "./Temoignages";
import Planning from "./Planning";
import TabBord from "./TabBord";
import Hero from "./Hero";
import Footer from "./Footer";
export default function LandingPage(){
    return(
        <div>
            <section id="accueil"><Navbar /><Hero /></section>
            <section id="evenements"><EventsGrid /></section>
            <section id="calendrier"><Planning /></section>
            <section id="participants"><Temoignages /></section>
            <section id="statistiques"><TabBord /></section>
            <section id="footer"><Footer /></section>
        </div>
    )
}