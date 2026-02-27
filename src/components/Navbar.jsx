import React from 'react';

const Navbar = ({ onBookClick, isDarkMode, onThemeToggle }) => {
  return (
    <nav className="fixed w-full z-[60] bg-resort-light/95 dark:bg-zinc-900/80 backdrop-blur-md border-b border-resort-accent/10 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex justify-between h-24 items-center">
                <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <div className="w-12 h-12 leaf-gradient rounded-full flex items-center justify-center text-white text-xl serif shadow-xl group-hover:scale-110 transition-transform font-bold">M</div>
                    <div className="flex flex-col">
                        <span className="text-xl serif font-bold tracking-tight text-resort-leaf dark:text-resort-accent uppercase">MerryLand</span>
                        <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-resort-stone">Private Resort</span>
                    </div>
                </div>
                
                <div className="hidden md:flex space-x-10 items-center">
                    <a href="#home" className="text-xs uppercase tracking-[0.2em] font-bold hover:text-resort-accent transition-colors">Home</a>
                    <a href="#why-us" className="text-xs uppercase tracking-[0.2em] font-bold hover:text-resort-accent transition-colors">Experience</a>
                    <a href="#gallery" className="text-xs uppercase tracking-[0.2em] font-bold hover:text-resort-accent transition-colors">Gallery</a>
                    <a href="#rules" className="text-xs uppercase tracking-[0.2em] font-bold hover:text-resort-accent transition-colors">Rules</a>
                    
                    <div className="h-4 w-px bg-resort-stone/30"></div>

                    {/* Use isDarkMode to show/hide the correct icon */}
                    <button onClick={onThemeToggle} className="p-2 hover:scale-110 transition-all text-resort-leaf dark:text-resort-accent">
                        {!isDarkMode ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                        ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg>
                        )}
                    </button>

                    <button onClick={onBookClick} className="leaf-gradient text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-2xl hover:translate-y-[-2px] transition-all active:scale-95">
                        Book A Visit
                    </button>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;