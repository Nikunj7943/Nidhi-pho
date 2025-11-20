import React, { useState } from 'react';
import { CATEGORIES } from '../constants';

// Using the uploaded local file path (ChatGPT environment).
const portfolioData = [
  { id: 1, category: 'Wedding', type: 'image', url: '/Images/royalwediing.webp', title: 'Royal Wedding' },
  { id: 2, category: 'Portrait', type: 'image', url: '/Images/Prewedding.heic', title: 'Urban Style' },
  { id: 3, category: 'Event', type: 'image', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop', title: 'Concert Night' },
  { id: 4, category: 'Nature', type: 'image', url: '/Images/Prewedding2.heic', title: 'Misty Forest' },

  // Instagram embed (use iframe)
  { id: 5, category: 'Wedding', type: 'image', url: 'Images/wedding1.heic', title: 'The Ring' },

  // Local uploaded image (ChatGPT preview path) — replaced one image with uploaded file path
  { id: 6, category: 'Portrait', type: 'image', url: '/Images/potrate.webp', title: 'Lavy' },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-white mb-6 md:mb-0">
            Featured <span className="text-brand-red">Works</span>
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-gold text-black font-bold'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer bg-gray-800">
              {item.type === 'instagram' ? (
                <iframe
                  src={item.url}
                  title={item.title}
                  className="w-full h-full border-0 rounded-lg"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              ) : (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // graceful fallback: replace with a tiny transparent placeholder or indicate broken image
                    (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000"></svg>';
                  }}
                />
              )}

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
