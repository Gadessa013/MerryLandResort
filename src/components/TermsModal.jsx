import React from 'react';

const TermsModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-fade-in">
      <div className="absolute inset-0 bg-resort-leaf/60 backdrop-blur-xl" onClick={onClose}></div>
      
      <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-[3rem] p-12 md:p-16 shadow-3xl max-h-[90vh] flex flex-col">
        <div className="text-center mb-10">
          <h3 className="text-4xl serif italic text-resort-leaf dark:text-resort-accent">Resort Policies</h3>
          <div className="w-16 h-1 bg-resort-accent/20 mx-auto mt-4"></div>
        </div>
        
        <div className="space-y-8 overflow-y-auto pr-4 custom-scrollbar text-resort-wood/80 dark:text-zinc-400">
          <section className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-resort-accent">01. Booking & Reservation</h4>
            <p className="text-sm leading-loose font-bold">A 50% down payment is required to secure your date. Reservations are strictly non-transferable and subject to verification upon arrival.</p>
          </section>

          <section className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-resort-accent">02. Assumption of Risk</h4>
            <p className="text-sm leading-loose font-bold">Guests acknowledge that use of the swimming pools and highland facilities is at their own risk. MerryLand is not liable for accidents resulting from negligence or rule violations.</p>
          </section>

          <section className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-resort-accent">03. Property Stewardship</h4>
            <p className="text-sm leading-loose font-bold">You are entering a private sanctuary. Any damage to the mosaic tiles, pavilions, or landscaping will be charged at the full restoration cost.</p>
          </section>

          <section className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-resort-accent">04. Quiet Hours & Conduct</h4>
            <p className="text-sm leading-loose font-bold">To preserve the serenity of Camalig, strict quiet hours are observed from 10 PM to 6 AM. Management reserves the right to eject guests for unruly behavior without refund.</p>
          </section>
        </div>

        <button 
          onClick={onClose} 
          className="mt-10 leaf-gradient text-white py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl hover:scale-105 transition-transform"
        >
          I Understand & Agree
        </button>
      </div>
    </div>
  );
};

export default TermsModal;