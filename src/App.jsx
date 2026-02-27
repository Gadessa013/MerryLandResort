import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Rules from './components/Rules';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import TermsModal from './components/TermsModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  
  // 1. Initialize Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('color-theme') === 'dark' || 
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // 2. Sync the 'dark' class on the HTML tag
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden transition-colors duration-500 bg-resort-light dark:bg-zinc-950">
      {/* 3. Pass the toggle function and state to Navbar */}
      <Navbar 
        onBookClick={() => setIsBookingOpen(true)} 
        onThemeToggle={() => setIsDarkMode(!isDarkMode)} 
        isDarkMode={isDarkMode} 
      />
      
      <main className="w-full">
        <Hero onBookClick={() => setIsBookingOpen(true)} />
        <div className="reveal w-full"><Experience /></div>
        <div className="reveal w-full"><Amenities onBookClick={() => setIsBookingOpen(true)} /></div>
        <div className="reveal w-full"><Gallery /></div>
        <div className="reveal w-full"><Rules /></div>
        <div className="reveal w-full"><Testimonials /></div>
        <Footer onTermsClick={() => setIsTermsOpen(true)} />
      </main>

      {isBookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-resort-leaf/60 backdrop-blur-xl" onClick={() => setIsBookingOpen(false)}></div>
          <div className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-[4rem] p-16 shadow-3xl text-center animate-fade-up">
            <h3 className="text-4xl serif italic text-resort-leaf dark:text-resort-accent mb-8">Reservations</h3>
            <div className="p-10 border-2 border-resort-accent/20 rounded-[2rem] mb-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-resort-accent mb-2">Direct Line</p>
                <p className="text-3xl font-bold text-resort-leaf dark:text-white">0961 858 1093</p>
            </div>
            <button onClick={() => setIsBookingOpen(false)} className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity uppercase">Return to Sanctuary</button>
          </div>
        </div>
      )}

      {isTermsOpen && <TermsModal onClose={() => setIsTermsOpen(false)} />}
    </div>
  );
}

export default App;