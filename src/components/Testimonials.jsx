import React from 'react';

const Testimonials = () => {
  const stories = [
    {
      initial: "M",
      name: "Maria Clarissa",
      role: "Local Guide",
      text: "The absolute privacy we had during our stay was unmatched. Having the entire mountain view to ourselves made the celebration truly special.",
      delay: ""
    },
    {
      initial: "R",
      name: "Robert James",
      role: "Business Owner",
      text: "Modern sanctuary at its best. The stone architecture provides a sophisticated backdrop for photos. We'll be back for sure!",
      delay: "lg:translate-y-8"
    },
    {
      initial: "A",
      name: "Ana Dela Cruz",
      role: "Family Guest",
      text: "Safe for the kids and tranquil for the adults. The mosaic pool is always pristine and the breeze is just refreshing.",
      delay: ""
    }
  ];

  return (
    <section id="testimonials" className="py-40 bg-resort-light dark:bg-zinc-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <span className="text-resort-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Guest Stories</span>
          <h2 className="text-5xl md:text-7xl serif text-resort-leaf dark:text-white italic">Memories Found</h2>
          <div className="w-32 h-1 bg-resort-accent/30 mx-auto mt-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {stories.map((story, index) => (
            <div key={index} className={`bg-white dark:bg-zinc-800 p-12 rounded-[3rem] shadow-xl relative group border border-resort-accent/5 ${story.delay}`}>
              <span className="text-6xl serif text-resort-accent/20 absolute top-8 left-8">“</span>
              <p className="text-resort-wood dark:text-zinc-300 font-medium italic leading-loose mb-10 relative z-10">
                {story.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full leaf-gradient flex items-center justify-center text-white font-bold serif shadow-lg">
                  {story.initial}
                </div>
                <div>
                  <p className="font-bold text-resort-leaf dark:text-resort-accent text-sm uppercase tracking-wider">{story.name}</p>
                  <p className="text-[10px] uppercase opacity-50 font-bold">{story.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;