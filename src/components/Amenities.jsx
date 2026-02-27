import React from 'react';

const Amenities = ({ onBookClick }) => {
  return (
    <section id="amenities" className="py-32 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-4 border-white/50">
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Resort View" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-resort-accent rounded-[3rem] -z-10 opacity-10"></div>
                <div className="absolute top-12 -right-6 p-10 bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl z-20 hidden lg:block border border-resort-stone/10 text-center">
                    <p className="text-resort-leaf dark:text-resort-accent serif italic text-2xl mb-1">Exclusive Sanctuary</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Camalig District</p>
                </div>
            </div>

            <div className="space-y-10 text-center lg:text-left">
                <div className="space-y-6">
                    <span className="text-resort-accent font-bold uppercase tracking-[0.3em] text-[10px]">Welcome</span>
                    <h2 className="text-5xl md:text-7xl serif text-resort-leaf dark:text-white leading-tight italic">Elegance in the <br />Highlands</h2>
                    <p className="text-resort-wood dark:text-zinc-300 text-lg leading-loose font-bold">
                        MerryLand Resort represents the pinnacle of private leisure in Albay. Our mosaic-tiled pools and architecturally ventilated pavilions provide an atmosphere of quiet luxury.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-y-8">
                    {['Adult & Kiddie Pools', 'Stone Pavilions', 'Gated Security', 'High-Speed Wi-Fi'].map((item) => (
                        <div key={item} className="flex items-center gap-4 justify-center lg:justify-start">
                            <div className="w-2.5 h-2.5 rounded-full bg-resort-accent"></div>
                            <span className="text-xs uppercase font-bold tracking-widest">{item}</span>
                        </div>
                    ))}
                </div>
                <button onClick={onBookClick} className="border-2 border-resort-leaf text-resort-leaf dark:text-white dark:border-white/30 px-12 py-5 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-resort-leaf hover:text-white transition-all shadow-lg">
                    Plan Your Escape
                </button>
            </div>
        </div>
    </section>
  );
};

export default Amenities;