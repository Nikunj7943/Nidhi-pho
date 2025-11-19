import React from 'react';
import { Users, Video, Camera, Sparkles } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: "Wedding Photography",
    description: "Capturing your special day with cinematic elegance and emotional depth. Pre-wedding and destination shoots available.",
    icon: <Users className="w-8 h-8 text-brand-gold" />
  },
  {
    title: "Portrait Sessions",
    description: "Professional headshots, family portraits, and creative modeling portfolios designed to bring out your personality.",
    icon: <Camera className="w-8 h-8 text-brand-red" />
  },
  {
    title: "Cinematography",
    description: "High-definition video coverage for events, music videos, and commercial reels. We make your moments move.",
    icon: <Video className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Event Coverage",
    description: "From corporate gatherings to birthday parties, we document the highlights so you can enjoy the moment.",
    icon: <Sparkles className="w-8 h-8 text-purple-400" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Our <span className="text-brand-gold">Services</span></h2>
          <div className="w-24 h-1 bg-brand-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-brand-dark p-8 rounded-xl border border-gray-800 hover:border-brand-gold/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="mb-6 p-4 bg-gray-900 rounded-full inline-block group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
