import React, { useState } from 'react';
import { OWNER_IMAGE_URL } from '../constants';
import { Camera, Award, Heart, ImageOff } from 'lucide-react';

const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-20 bg-brand-dark relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-4 border-gray-800 group bg-gray-800 min-h-[500px] flex flex-col">
              {/* Image with Fallback Error State */}
              {!imgError ? (
                <img
                  src={OWNER_IMAGE_URL}
                  alt="Nanu Photographer"
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700 bg-gray-800"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-[500px] flex flex-col items-center justify-center bg-gray-900 text-gray-500 p-8 text-center relative z-20">
                  <ImageOff size={48} className="mb-4 opacity-50" />
                  <p className="font-bold text-white mb-2">Image Not Found</p>
                  <p className="text-sm mb-4 max-w-xs text-gray-400">
                    Please ensure <span className="text-brand-red font-mono">Images/owner.jpg</span> is uploaded correctly.
                  </p>
                </div>
              )}

               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 pointer-events-none"></div>
               
               {/* Overlay Text */}
               <div className="absolute bottom-6 left-6 pointer-events-none z-30">
                 <p className="text-white font-serif text-2xl">Nayan</p>
                 <p className="text-brand-gold text-sm uppercase tracking-wider">Lead Photographer</p>
               </div>
            </div>
            {/* Decorative Background Element */}
            <div className="absolute top-10 -left-10 w-full h-full border-2 border-brand-red/30 rounded-lg -z-0 hidden md:block"></div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Behind the <span className="text-brand-red">Lens</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Welcome to Nidhi Studio. I'm Nayan, a passionate photographer dedicated to freezing time through my lens. With years of experience in capturing the raw emotions of weddings, the personality in portraits, and the energy of events, I believe every photo should tell a story.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              My style combines artistic composition with natural moments. Whether you are holding sparklers in celebration or sharing a quiet moment, I am there to make it eternal.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <Camera className="text-brand-gold mb-2" />
                <h3 className="text-white font-bold">Pro Gear</h3>
                <p className="text-xs text-gray-500">High-end equipment</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <Heart className="text-brand-red mb-2" />
                <h3 className="text-white font-bold">Passion</h3>
                <p className="text-xs text-gray-500">Love for the craft</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <Award className="text-blue-400 mb-2" />
                <h3 className="text-white font-bold">Quality</h3>
                <p className="text-xs text-gray-500">Top tier editing</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;