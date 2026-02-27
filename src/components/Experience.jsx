import React from 'react';

const Experience = () => {
  return (
    <section id="why-us" className="py-32 bg-white dark:bg-zinc-950 relative transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                <div className="max-w-2xl">
                    <span className="text-resort-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Exclusivity Defined</span>
                    <h2 className="text-5xl md:text-7xl serif text-resort-leaf dark:text-white italic text-center md:text-left">The MerryLand Experience</h2>
                </div>
                <div className="h-px flex-1 bg-resort-accent/20 mx-12 hidden md:block mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="group text-center md:text-left">
                    <span className="text-4xl serif italic text-resort-accent/50 group-hover:text-resort-accent transition-colors duration-500 font-bold">01</span>
                    <h3 className="text-xl font-bold mt-6 mb-4 uppercase tracking-widest text-resort-leaf dark:text-white">Absolute Privacy</h3>
                    <p className="text-sm text-resort-wood/70 dark:text-zinc-400 font-bold leading-loose">
                        We host only one group at a time. The entire property is your private villa for the duration of your stay. 
                    </p>
                </div>

                <div className="group text-center md:text-left">
                    <span className="text-4xl serif italic text-resort-accent/50 group-hover:text-resort-accent transition-colors duration-500 font-bold">02</span>
                    <h3 className="text-xl font-bold mt-6 mb-4 uppercase tracking-widest text-resort-leaf dark:text-white">Highland Air</h3>
                    <p className="text-sm text-resort-wood/70 dark:text-zinc-400 font-bold leading-loose">
                        Perched in the foothills of Camalig, enjoy naturally cooler temperatures and the fresh breeze of Albay's landscapes. 
                    </p>
                </div>

                <div className="group text-center md:text-left">
                    <span className="text-4xl serif italic text-resort-accent/50 group-hover:text-resort-accent transition-colors duration-500 font-bold">03</span>
                    <h3 className="text-xl font-bold mt-6 mb-4 uppercase tracking-widest text-resort-leaf dark:text-white">Curated Comfort</h3>
                    <p className="text-sm text-resort-wood/70 dark:text-zinc-400 font-bold leading-loose">
                        From mosaic pools to modern stone pavilions, every corner is designed to be photogenic and functional. 
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Experience;