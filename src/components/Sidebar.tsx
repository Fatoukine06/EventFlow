import { useState } from "react";
import {
    LayoutDashboard, Calendar, Users, BarChart2, Star, Settings,
    LogOut, User
} from "lucide-react";
export default function Sidebar(){
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeNav, setActiveNav]     = useState("overview");
    
    // Sections de navigation
    const navSections = [
        {
        label: "Principal",
        items: [
            { id: "overview",      icon: LayoutDashboard, label: "Vue d'ensemble" },
            { id: "events",        icon: Star,            label: "Événements" },
        ],
        },
        {
        label: "Gestion",
        items: [
            { id: "calendar",      icon: Calendar,  label: "Calendrier" },
            { id: "participants",  icon: Users,     label: "Participants" },
            { id: "stats",         icon: BarChart2, label: "Statistiques" },
        ],
        },
        {
        label: "Compte",
        items: [
            { id: "profile",   icon: User,     label: "Mon profil" },
            { id: "settings",  icon: Settings, label: "Paramètres" },
        ],
        },
    ];

    function NavItem({ icon: Icon, label, active, onClick }: { icon: React.ComponentType<{ size: number; strokeWidth: number }>; label: string; active: boolean; onClick: () => void }) {
    return (
        <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-colors text-left
            ${active
            ? "bg-amber-50 text-[#bd6226] font-semibold"
            : "text-[#3E2514] hover:bg-stone-100 font-normal"}`}
        >
        {Icon && <Icon size={15} strokeWidth={active ? 2 : 1.5} />}
        {label}
        </button>
    );
}
    return(
        <aside className={`
            flex flex-col bg-white border-r border-[#e5c19b] shrink-0 overflow-hidden
            transition-all duration-300
            ${sidebarOpen ? "w-56" : "w-0"}
        `}>
    
            <div className="px-5 py-4 border-b border-[#e5c19b] flex items-center justify-between">
            <span className="text-xl font-bold text-[#3E2514] flex items-center ">
                Event<span className="text-[#d37c42]">Flow</span>
            </span>
            </div>
    
            <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
            {navSections.map((section) => (
                <div key={section.label}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#3E2514] px-3 mb-1">
                    {section.label}
                </p>
                <div className="space-y-0.5">
                    {section.items.map((item) => (
                    <NavItem
                        key={item.id}
                        icon={item.icon}
                        label={item.label}
                        active={activeNav === item.id}
                        onClick={() => setActiveNav(item.id)}
                    />
                    ))}
                </div>
                </div>
            ))}
            </nav>
            <div className="px-3 pb-4 border-t border-[#e5c19b] pt-3">
            <div className="flex items-center gap-3 bg-[#f9f5f0] rounded-xl px-3 py-2 cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-amber-600 to-amber-400 flex items-center justify-center text-xs font-bold text-white shrink-0">
                AK
                </div>
                <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-stone-800 truncate">Amina Kouyaté</p>
                <p className="text-[11px] text-[#3E2514]">Organisatrice</p>
                </div>
                <LogOut size={10} className="text-[#3E2514] shrink-0" />
            </div>
            </div>
        </aside> 
        
    )
}