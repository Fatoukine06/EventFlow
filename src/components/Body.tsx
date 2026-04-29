import {
    LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
    XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";


const inscriptionsData = [
    { mois: "Jan", thisYear: 120, lastYear: 80 },
    { mois: "Fév", thisYear: 180, lastYear: 110 },
    { mois: "Mar", thisYear: 240, lastYear: 150 },
    { mois: "Avr", thisYear: 310, lastYear: 200 },
    { mois: "Mai", thisYear: 480, lastYear: 260 },
    { mois: "Jun", thisYear: 390, lastYear: 310 },
    { mois: "Jul", thisYear: 420, lastYear: 340 },
];

const categoriesData = [
    { cat: "Musique", count: 42 },
    { cat: "Conf.", count: 68 },
    { cat: "Art", count: 29 },
    { cat: "Sport", count: 55 },
    { cat: "Gastro", count: 18 },
    { cat: "Autre", count: 33 },
];

const statutData = [
    { name: "À venir", value: 48, color: "#9A5E2C" },
    { name: "En cours", value: 23, color: "#C49A3C" },
    { name: "Terminé", value: 29, color: "#C4A48A" },
];



type PayloadItem = {
    name: string;
    value: any;
    color: string;
};

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: PayloadItem[]; label?: string }) {
    if (!active || !payload?.length) return null;
    return (
        <div className="bg-white border border-[#e5c19b] rounded-xl px-3 py-2 text-xs shadow-md">
        <p className="text-[#3E2514] mb-1 font-medium">{label}</p>
        {payload.map((p: PayloadItem, i: number) => (
            <p key={i} style={{ color: p.color }} className="font-semibold">
            {p.name}: {p.value}
            </p>
        ))}
        </div>
    );
}
export default function Body(){
    return(
        <div>
            <div className="bg-white w-full py-3 border-b border-[#e5c19b] flex flex-row items-center px-6  justify-between gap-100 ">
                <div className='flex flex-row items-center space-x-3 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-[#3E2514] cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <p className=' text-sm text-[#3e2514a7] '>Dashboard </p>
                    <p className='text-sm text-[#3e2514a7] items-center'> / </p>
                    <p className='text-sm text-[#3E2514] font-semibold whitespace-nowrap'>Vue d'ensemble</p>
                </div>
                <div className='flex flex-row items-center '>
                    <div className='flex flex-row relative items-center  bg-[#e5c2a259]  px-2 py-1 text-sm rounded-full border border-[#e5c19b] '>
                        <input type="text" className='bg-transparent border border-none outline-none' placeholder="Rechercher..." />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-[#3E2514] cursor-pointer mr-3 absolute right-0">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-[#3E2514] cursor-pointer ml-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-[#3E2514] cursor-pointer ml-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-[#3E2514] cursor-pointer ml-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-lg text-[#3E2514]  font-semibold whitespace-nowrap mx-7 mt-4'>Vue d'ensemble</p>
                    <p className=' text-[12px] text-[#b4653082] mx-7 '>Bienvenue, Amina - Voici vos evenements du jour</p>
                </div>
                <div className='flex flex-row items-center space-x-3   mt-4 mx-7'>
                        <select className='bg-white text-[#3E2514] text-sm  py-1 px-3 rounded-lg border border-[#e5c19b] cursor-pointer outline-none'>
                            <option>Aujourd'hui</option>
                            <option>Cette semaine</option>
                        <option>Ce mois</option>
                    </select>
                    <div className='flex items-center justify-center bg-[#e5c19b] text-[#3E2514] font-semibold py-1 text-[13px] px-3 rounded-lg cursor-pointer hover:bg-[#d4b08a] '>
                        + Créer un événement
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-7 gap-10 ">
                <div className="h-25 w-52 rounded-xl  border border-[#c79366] bg-white ">
                    <div className="flex flex-row justify-between">
                        <p className="text-[12px] text-[#c79366] mt-2.5 ml-5">Événements créés</p>
                    </div>
                    <div className="flex flex-row gap-10 items-center ">
                        <h1 className="text-[24px] text-[#4a2f17] ml-5 mt-3">2 400</h1>
                        <div className="h-6 w-19 text-[12px]  rounded-full mt-3 bg-[#05C16833] text-[#14CA74] flex gap-1 justify-center items-center p-2">
                            <p>+11.01%</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-[#14CA74]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="h-25 w-52 rounded-xl  border border-[#c79366] bg-white ">
                    <div className="flex flex-row justify-between">
                        <p className="text-[12px] text-[#c79366] mt-2.5 ml-5">Participants inscrits</p>
                    </div>
                    <div className="flex flex-row gap-10 items-center ">
                        <h1 className="text-[24px] text-[#4a2f17] ml-5 mt-3">48.3k</h1>
                        <div className="h-6 w-19 text-[12px]  rounded-full mt-3 bg-[#05C16833] text-[#14CA74] flex gap-1 justify-center items-center p-2">
                            <p>+15.03%</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-[#14CA74]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="h-25 w-52 rounded-xl   border border-[#c79366] bg-white">
                    <div className="flex flex-row justify-between">
                        <p className="text-[12px] text-[#c79366] mt-2.5 ml-5">Nouveaux inscrits</p>
                    </div>
                    <div className="flex flex-row gap-10 items-center ">
                        <h1 className="text-[24px] text-[#4a2f17] ml-5 mt-3">1 256</h1>
                        <div className="h-6 w-19 text-[12px] border border-[#FF5A6533] rounded-full mt-3 bg-[#FF5A6533] text-[#FF5A65] flex gap-1 justify-center items-center p-2">
                            <p>-0.03%</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-[#FF5A65]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="h-25 w-52 rounded-xl   border border-[#c79366] bg-white">
                    <div className="flex flex-row justify-between">
                        <p className="text-[12px] text-[#c79366] mt-2.5 ml-5">Nouveaux inscrits</p>
                    </div>
                    <div className="flex flex-row gap-10 items-center ">
                        <h1 className="text-[24px] text-[#4a2f17] ml-5 mt-3">23</h1>
                        <div className="h-6 w-19 text-[12px]  rounded-full mt-3 bg-[#05C16833] text-[#14CA74] flex gap-1 justify-center items-center p-2">
                            <p>+6.08%</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-[#14CA74]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                            </svg>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="bg-white border border-[#e5c19b] rounded-2xl p-6 mb-6 mx-7">
            <div className="flex items-center justify-between mb-5">
                <div className="flex gap-5">
                    {["Inscriptions", "Événements créés", "Statut activité"].map((t, i) => (
                    <button
                        key={t}
                        className={`text-sm pb-1 border-b-2 transition-colors
                        ${i === 0
                            ? "border-[#3E2514] text-[#3E2514] font-semibold"
                            : "border-transparent text-[#3e251499] font-normal hover:text-[#3e2514]"}`}
                    >
                        {t}
                    </button>
                    ))}
                </div>
                <div className="flex gap-4 text-xs mt-5 text-[#3f2514]">
                <span className="flex items-center gap-1.5">
                    <span className="inline-block w-5 h-0.5 bg-[#92400e] rounded" />
                    Cette année
                    </span>
                    <span className="flex items-center gap-1.5">
                    <span className="inline-block w-5 h-0.5 bg-[#feebd5] rounded" />
                    Année passée
                    </span>
                </div>
                </div>
                <ResponsiveContainer width="100%" height={220}>
                <LineChart data={inscriptionsData}>
                    <XAxis dataKey="mois" tick={{ fontSize: 11, fill: "#3e2514b2" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "#3e2514b2" }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="thisYear" name="Cette année"  stroke="#92400e" strokeWidth={2.5} dot={false} />
                    <Line type="monotone" dataKey="lastYear" name="Année passée" stroke="#d6d3d1" strokeWidth={1.5} strokeDasharray="5 4" dot={false} />
                </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="flex flex-row gap-6 mx-7">
                <div className="bg-white w-140 border border-[#e5c19b] rounded-2xl p-6">
                <p className="text-sm font-semibold text-stone-800 mb-5">Événements par catégorie</p>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={categoriesData} barSize={28}>
                    <XAxis dataKey="cat" tick={{ fontSize: 11, fill: "#3e2514b2" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "#3e2514b2" }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="count" name="Événements" radius={[5, 5, 0, 0]}>
                        {categoriesData.map((_, i) => (
                        <Cell key={i} fill={["#b45309","#d97706","#78350f","#a8a29e","#d6b896","#57534e"][i]} />
                        ))}
                    </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="bg-white border border-[#e5c19b] rounded-2xl py-6 px-10.5">
                <p className="text-sm font-semibold text-stone-800 mb-5">Répartition par statut</p>
                <div className="flex items-center gap-6">
                    <ResponsiveContainer width={160} height={160}>
                    <PieChart>
                        <Pie data={statutData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" paddingAngle={3}>
                        {statutData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                    </ResponsiveContainer>
                    {/* Légende */}
                    <div className="flex flex-col gap-3 flex-1">
                    {statutData.map((s) => (
                        <div key={s.name} className="flex items-center space-x-2 justify-between">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                            <span className="text-xs text-[#3e2514b2]">{s.name}</span>
                        </div>
                        <span className="text-xs font-semibold text-[#3e2514b2]">{s.value}%</span>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}