import Navbar from "./Navbar";
import EventsGrid from "./Evenements";
import APropos from "./APropos";
import Planning from "./Planning";
import TabBord from "./TabBord";
import Footer from "./Footer";
export default function LandingPage(){
    return(
        <div>
            <Navbar/>
            <EventsGrid/>
            <APropos/>
            <Planning/>
            <TabBord/>
            <Footer/>
        </div>
    )
}