import React from 'react';

const Rules = () => {
  const rules = [
    { id: 1, title: "Reservation & Payment", desc: "A minimum of 50% down payment is required to reserve your preferred date. Reservations are tentative until payment is received." },
    { id: 2, title: "Cancellation Policy", desc: "Cancellations are non-refundable after 48 hours of payment. Please plan carefully before confirming your booking." },
    { id: 3, title: "Guest Identification", desc: "A valid government-issued ID is mandatory upon reservation. All personal info provided is strictly confidential." },
    { id: 4, title: "Property Care", desc: "Guests are expected to take good care of the resort. Any damage will result in appropriate charges." },
    { id: 5, title: "Stray Animals", desc: "Feeding of stray animals is discouraged. Interaction is at the guest's personal discretion and responsibility." },
    { id: 6, title: "Conduct & Cleanliness", desc: "Keep paradise clean. Management reserves the right to take action for any rule violations." }
  ];

  return (
    <section id="rules" className="py-40 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <span className="text-resort-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Guidelines</span>
          <h2 className="text-5xl md:text-7xl serif text-resort-leaf dark:text-white italic">Resort Etiquette</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {rules.map((rule) => (
            <div key={rule.id} className="group border-t border-resort-accent/30 pt-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-resort-accent/20 text-resort-leaf flex items-center justify-center rounded-full flex-shrink-0 font-bold">
                  {rule.id}
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-resort-leaf dark:text-resort-accent">
                    {rule.title}
                  </h4>
                  <p className="text-sm text-resort-wood font-bold dark:text-zinc-400 leading-loose">
                    {rule.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-16 bg-resort-light dark:bg-zinc-800 rounded-[4rem] text-center shadow-xl border border-resort-accent/20">
          <p className="serif italic text-3xl text-resort-leaf dark:text-white mb-8">
            "By proceeding with the reservation, guests confirm they have read and agreed to comply with all MerryLand policies."
          </p>
          <div className="flex flex-wrap justify-center gap-12 text-[10px] uppercase font-bold tracking-[0.3em] text-resort-wood dark:text-resort-accent">
            <span>Purok 3 Comun, Camalig, Albay</span>
            <span>0961 858 1093</span>
            <span>merrylandprivateresort@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;