import React, { useState } from 'react';

const Footer = ({ onTermsClick }) => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleFormInquiry = (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
    }, 2500);
  };

  return (
    <>
      <section id="contact" className="py-32 w-full px-6 flex justify-center">
        <div className="max-w-6xl w-full bg-resort-leaf rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-white/5">
          
          {/* Left Side: Contact Details */}
          <div className="lg:w-1/3 p-12 text-white flex flex-col justify-center space-y-12">
            <div>
              <h2 className="text-4xl serif italic mb-4">Connect</h2>
              <p className="text-white/70 text-sm font-bold leading-relaxed">
                Reach out to our coordination team for custom event packages and seasonal rates.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-xs">📍</div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Purok 3 Comun, Camalig, Albay</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-xs">📞</div>
                <span className="text-[10px] font-bold uppercase tracking-widest">0961 858 1093</span>
              </div>
              
              {/* RESTORED: Facebook Messenger Button */}
              <a 
                href="https://web.facebook.com/profile.php?id=61558661704165" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-resort-leaf px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:translate-y-[-3px] transition-all shadow-xl"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.112.308 2.289.475 3.503.475 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0z"/></svg>
                Messenger
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-2/3 p-12 bg-white dark:bg-zinc-800 flex flex-col justify-center">
            {formStatus === 'idle' && (
              <form onSubmit={handleFormInquiry} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input type="text" placeholder="Your Name" required className="w-full bg-transparent border-b border-resort-stone/30 py-2 outline-none dark:text-white font-bold" />
                  <input type="tel" placeholder="Contact Number" required className="w-full bg-transparent border-b border-resort-stone/30 py-2 outline-none dark:text-white font-bold" />
                </div>
                <textarea placeholder="Event Details" required className="w-full h-24 bg-transparent border-b border-resort-stone/30 py-2 outline-none dark:text-white resize-none font-bold"></textarea>
                <button type="submit" className="leaf-gradient text-white px-12 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest self-start shadow-lg">
                  Submit Inquiry
                </button>
              </form>
            )}

            {formStatus === 'loading' && (
              <div className="text-center py-10 space-y-4">
                <div className="w-8 h-8 border-2 border-resort-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="serif italic text-xl text-resort-leaf">Sending Request...</p>
              </div>
            )}

            {formStatus === 'success' && (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 border-2 border-resort-leaf rounded-full flex items-center justify-center text-resort-leaf mx-auto">✓</div>
                <h3 className="serif italic text-3xl text-resort-leaf dark:text-white">Inquiry Received</h3>
                <button onClick={() => setFormStatus('idle')} className="text-[10px] font-bold uppercase tracking-widest underline underline-offset-4 opacity-50 hover:opacity-100">Send another</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Footer Bottom */}
      <footer className="py-20 bg-white dark:bg-zinc-950 border-t border-resort-accent/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 leaf-gradient rounded-full flex items-center justify-center text-white serif font-bold shadow-lg">M</div>
            <div className="text-left">
              <span className="block text-sm serif font-bold text-resort-leaf dark:text-white">MerryLand</span>
              <span className="text-[8px] uppercase tracking-[0.3em] opacity-50 font-bold dark:text-white">Private Resort</span>
            </div>
          </div>
          
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest text-resort-leaf dark:text-white">
            <button onClick={onTermsClick} className="hover:text-resort-accent transition-colors">Terms & Conditions</button>
            {/* RESTORED: Footer Facebook Link */}
            <a href="https://web.facebook.com/profile.php?id=61558661704165" target="_blank" rel="noreferrer" className="hover:text-resort-accent transition-colors">Facebook</a>
            <a href="#rules" className="hover:text-resort-accent transition-colors">House Rules</a>
          </div>
          
          <p className="text-resort-wood/40 text-[9px] font-bold uppercase tracking-widest">© 2024 MerryLand Resort</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;