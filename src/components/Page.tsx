import Sidebar from "./Sidebar";
import Body from "./Body";
export default function Page(){
    return(
        <div className="flex flex-row">
            <Sidebar/>
            <Body/>
        </div>
    )
}