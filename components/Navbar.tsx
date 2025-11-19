import React, { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-md py-2 border-b border-gray-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          {/* Using text/icon fallback if logo image isn't perfectly sized, but conceptually the Logo goes here */}
          <div className="relative">
            <Camera className="w-8 h-8 text-brand-red group-hover:text-brand-gold transition-colors" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-brand-gold rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold text-white leading-none tracking-widest">NIDHI<span className="text-brand-red">STUDIO</span></span>
            <span className="text-[0.6rem] text-gray-400 tracking-[0.2em] uppercase">Nanu Photography</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-brand-gold hover:underline underline-offset-4 transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-brand-red text-white text-sm font-bold rounded hover:bg-red-700 transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-xl border-b border-gray-800 absolute w-full">
          <div className="flex flex-col p-4 gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-200 hover:text-brand-red font-medium py-2 border-b border-gray-800"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
