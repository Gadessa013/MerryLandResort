import React from 'react';

const Hero = ({ onBookClick }) => {
  return (
    /* We use w-full and h-screen to ensure the section fills the monitor */
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-resort-light dark:bg-zinc-950 sun-glow pt-24">
        
        {/* THE FIX: We remove the 'max-w' constraint from this wrapper */}
        <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none opacity-90 dark:opacity-20">
            {/* We make the SVG width 100% so it touches both edges of your monitor */}
            <svg className="w-full h-auto min-w-[100vw] translate-y-20" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMax slice" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 450C200 420 400 480 600 400C800 320 1000 380 1000 380V600H0V450Z" fill="#a3ad91" fillOpacity="0.2"/>
                <path d="M500 60L180 560H820L500 60Z" fill="#a68a70" fillOpacity="0.4"/>
                <path d="M500 60L460 200C480 190 520 190 540 200L500 60Z" fill="white" fillOpacity="0.5"/>
                <path d="M0 580C200 540 400 570 600 510C800 450 1000 500 1000 500V600H0V580Z" fill="#3d4a3e" fillOpacity="0.9"/>
                <path d="M0 530C150 490 350 520 550 460C750 400 1000 440 1000 440V600H0V530Z" fill="#1e2b1f"/>
                <g fill="#1e2b1f">
                    <circle cx="50" cy="560" r="40"/><circle cx="150" cy="540" r="50"/><circle cx="280" cy="510" r="45"/><circle cx="450" cy="480" r="60"/><circle cx="650" cy="460" r="55"/><circle cx="850" cy="440" r="70"/><circle cx="950" cy="450" r="40"/>
                </g>
            </svg>
        </div>
        
        {/* The Text remains centered for readability */}
        <div className="text-center max-w-5xl z-10 px-6 relative animate-fade-up">
            <span className="text-resort-leaf dark:text-resort-accent font-bold tracking-[0.5em] uppercase text-[10px] block opacity-80 mb-4">
                Purok 3 Comun, Camalig, Albay
            </span>
            <h1 className="text-7xl md:text-[11.5rem] serif italic font-bold text-resort-leaf dark:text-white leading-[0.75] mb-12 drop-shadow-sm">
                Dive <span className="not-italic text-resort-accent">Into</span> <br /> <span className="text-resort-stone/80">Fun!</span>
            </h1>
            <p className="text-sm md:text-xl font-bold text-resort-wood dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-16 tracking-wide drop-shadow-sm">
                Create unforgettable memories at MerryLand—the perfect sanctuary in the heart of Albay.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                <button onClick={onBookClick} className="leaf-gradient text-white px-16 py-6 rounded-full font-bold text-xs uppercase tracking-[0.3em] shadow-2xl hover:scale-105 transition-all">
                    Start Your Visit
                </button>
                <a href="#gallery" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] hover:text-resort-accent transition-colors">
                    <span className="w-12 h-0.5 bg-resort-leaf group-hover:w-20 group-hover:bg-resort-accent transition-all"></span>
                    Explore Gallery
                </a>
            </div>
        </div>
    </section>
  );
};

export default Hero;