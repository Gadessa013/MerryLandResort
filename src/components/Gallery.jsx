import React, { useRef, useState } from 'react';

const Gallery = () => {
  const scrollRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState(null);

  // Scroll logic for the slider
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({ 
        left: direction * scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  // Image data recovered from the source code
  const images = [
    { src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80", title: "The Main Basin" },
    { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80", title: "Social Pavilions" },
    { src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80", title: "Golden Hour" },
    { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80", title: "Stone Details" },
    { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80", title: "Tranquil Glow" },
    { src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80", title: "Garden Paths" },
    { src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80", title: "Sanctuary Vistas" },
    { src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80", title: "Estate Grounds" },
    
  ];

  return (
    <section id="gallery" className="py-40 bg-resort-light dark:bg-zinc-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Gallery Header */}
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="text-resort-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Visual Journey
            </span>
            <h2 className="text-5xl md:text-7xl serif text-resort-leaf dark:text-white italic">
              Atmosphere
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll(-1)} 
              className="w-16 h-16 rounded-full border-2 border-resort-accent/30 flex items-center justify-center hover:bg-resort-leaf hover:text-white transition-all shadow-sm group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll(1)} 
              className="w-16 h-16 rounded-full border-2 border-resort-accent/30 flex items-center justify-center hover:bg-resort-leaf hover:text-white transition-all shadow-sm group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Gallery Slider */}
        <div 
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto snap-x snap-mandatory pb-12 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedImg(img)}
              className="min-w-[85%] md:min-w-[45%] lg:min-w-[40%] aspect-video snap-center relative rounded-[3rem] overflow-hidden group shadow-xl cursor-zoom-in"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                <p className="text-white serif text-3xl italic font-bold">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Enlargement Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-6 md:p-20"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-10 right-10 text-white hover:scale-110 transition-transform">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={selectedImg.src} 
            alt={selectedImg.title} 
            className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain animate-fade-up"
          />
          <p className="absolute bottom-10 text-white serif italic text-2xl">
            {selectedImg.title}
          </p>
        </div>
      )}
    </section>
  );
};

export default Gallery;