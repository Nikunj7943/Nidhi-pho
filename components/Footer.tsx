import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-gray-900 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">NIDHI <span className="text-brand-red">STUDIO</span></h3>
          <p className="text-xs text-gray-500">Nanu Photography © {new Date().getFullYear()}. All rights reserved.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
