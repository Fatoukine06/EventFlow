import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
function HeroTitle() {
  return (
    <h1 className="font-serif font-bold text-[#2C1A0E] text-6xl mt-5 leading-[1.05] tracking-tight max-w-6xl  ">
      Créez des événements
      <br />
      qui{' '}
      <span className="italic text-[#C49A3C]">marquent les esprits</span>
    </h1>
  );
}

function HeroSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-8 text-[#6B5040] max-w-2xl text-[1.1rem] leading-[1.7] font-light">
      {children}
    </p>
  );
}

function HeroCTAButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex items-center gap-2 px-7 py-4 rounded-lg text-sm font-medium text-[#FDFBF7] bg-[#5C3518] hover:bg-[#4A2A13] hover:-translate-y-0.5 whitespace-nowrap transition-all shadow-[0_4px_14px_rgba(92,53,24,0.2)]">
      {children}
      <ArrowRight size={16} />
    </button>
  );
}

function OutlineButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-8 py-4 rounded-lg text-sm font-medium text-[#5C3518] border border-[#C49A3C] hover:bg-[#F2E8DC] whitespace-nowrap bg-transparent transition-colors">
      {children}
    </button>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="font-serif font-bold text-[#2C1A0E] text-[2.75rem]">
        {value}
      </div>
      <div className="mt-2 text-[#8C7A6B] uppercase font-medium text-[0.7rem] tracking-widest">
        {label}
      </div>
    </div>
  );
}

function StatsBlock({ stats }: { stats: Array<{ value: string; label: string }> }) {
  return (
    <div className="mt-24 flex items-center justify-center gap-24 flex-wrap">
      {stats.map((s) => (
        <StatItem key={s.label} value={s.value} label={s.label} />
      ))}
    </div>
  );
}

export default function Hero() {
  const stats = [
    { value: '2 400+', label: 'Événements créés' },
    { value: '48 K', label: 'Participants inscrits' },
    { value: '98%', label: 'Satisfaction' },
  ];

  return (
    <section className="w-full px-8 pt-20 pb-24 flex flex-col items-center text-center">
      <HeroTitle />
      <HeroSubtitle>
        De la conception à l'inscription, gérez chaque détail de vos événements
        avec élégance. Conférences, festivals, soirées — tout en un seul tableau
        de bord.
      </HeroSubtitle>
      <div className="mt-10 flex items-center gap-4 flex-wrap justify-center">
        <Link to="/Creer">
          <HeroCTAButton>Créer mon premier événement</HeroCTAButton>
        </Link>
        <OutlineButton>Découvrir les événements</OutlineButton>
      </div>
      <StatsBlock stats={stats} />
    </section>
  );
}
