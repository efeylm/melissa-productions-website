import { useState } from 'react';
import { GALLERY_ITEMS } from '../data/content';
import { Sparkles, MapPin, Eye, X } from 'lucide-react';

export default function ShowcaseGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'bando', name: 'Bandolarımız' },
    { id: 'orkestra', name: 'Orkestralar' },
    { id: 'dj-live', name: 'DJ & Live' },
    { id: 'kurumsal', name: 'Kurumsal Etkinlik' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 md:py-32 relative bg-surface-container-lowest">
      {/* Background Glow */}
      <div className="glow-orb w-[600px] h-[600px] bg-primary/5 bottom-10 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-primary/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
              Sahneden Kareler
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            Etkinlik Galerisi
          </h2>
          <p className="text-on-surface-variant text-base sm:text-lg">
            Gerçekleştirdiğimiz prestijli organizasyonlardan ve sahne performanslarımızdan anlar.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'btn-gradient text-white shadow-lg'
                  : 'glass-panel text-on-surface-variant hover:text-white hover:border-white/20'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 aspect-[4/3] cursor-pointer shadow-lg hover:border-primary/40 transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-[#090c10]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* View Overlay Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full glass-panel border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-1 text-[11px] text-primary mb-1">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full glass-panel text-white hover:text-primary transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden glass-panel-heavy border border-white/20 p-2 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[70vh] w-auto mx-auto object-contain rounded-2xl"
            />
            <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h4 className="font-display font-bold text-lg text-white">{selectedImage.title}</h4>
                <p className="text-xs text-on-surface-variant flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {selectedImage.location}
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30 uppercase">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
