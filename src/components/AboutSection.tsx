import React from 'react';
import { UtensilsCrossed, ShoppingBag, PartyPopper, CalendarDays, Flame } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const experiences = [
    {
      icon: UtensilsCrossed,
      title: 'Dine-In',
      description: 'Chill with your crew in our neon-lit Joyland commercial spot. Fast seating and hot wings straight from the fryers.'
    },
    {
      icon: ShoppingBag,
      title: 'Take-Out',
      description: 'Grab fresh, piping hot boxes on your way home across Al-Rehman Garden, Saggian, or Shahdara.'
    },
    {
      icon: PartyPopper,
      title: 'Catering',
      description: 'Large wing platters, party boxes, and sauce buckets tailored for birthdays, match screenings, and hangouts.'
    },
    {
      icon: CalendarDays,
      title: 'Events',
      description: 'Bring the Main Chick & Side Ting™ experience to your private gatherings with custom flavor setups.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
              <Flame className="w-4 h-4 text-orange-500" />
              <span>The Wings &amp; Tingz Story</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none text-balance">
              Not Just Wings. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-amber-400">
                It’s A Whole Ting.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              Wings &amp; Tingz brings bold flavors, crispy bites and a fun dine-in experience to Al-Rehman Garden, Lahore. Whether you're grabbing a quick bite, chilling with your crew, catering an event or satisfying a serious wing craving, we're here to serve the good stuff.
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              We took modern American chicken-wing culture, injected Lahore's fearless love for fiery spice, and created a destination where extra napkins aren't optional — they're mandatory.
            </p>

            {/* Badges Bar */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-zinc-300">
              <span className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-orange-400 font-bold">
                100% Halal Chicken
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-amber-400 font-bold">
                Double-Dredged Crunch
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-red-400 font-bold">
                Hand-Tossed Glazes
              </span>
            </div>
          </div>

          {/* Right Column: 4 Experience Blocks (Dine-In, Take-Out, Catering, Events) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {experiences.map((exp) => {
              const Icon = exp.icon;
              return (
                <div
                  key={exp.title}
                  className="bg-zinc-950 border border-zinc-800/90 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-white mb-2 uppercase tracking-wide">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
