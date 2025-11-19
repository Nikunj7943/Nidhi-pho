import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop"
          alt="Photography Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-dark"></div>
      </div>

      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h2 className="text-brand-gold font-medium tracking-[0.3em] mb-4 text-sm md:text-base uppercase">
          Capturing Moments, Creating Memories
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
          NIDHI <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-600">STUDIO</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl mb-10 font-light">
          Professional photography services by Nanu. Specializing in weddings, portraits, and cinematic storytelling.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
            href="#portfolio"
            className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
            >
            View Gallery
            </a>
            <a
            href="#contact"
            className="px-8 py-3 bg-brand-red text-white hover:bg-red-700 transition-all duration-300 rounded-sm shadow-lg shadow-red-900/20"
            >
            Get in Touch
            </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
