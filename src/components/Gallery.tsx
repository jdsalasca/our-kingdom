import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Gallery images from public/images/gallery
  const images: GalleryImage[] = [
    {
      id: '1',
      src: '/images/gallery/WIN_20250630_12_35_48_Pro.jpg',
      alt: 'Happy moment 1',
      title: 'Beautiful Memory 1'
    },
    {
      id: '2',
      src: '/images/gallery/WIN_20250630_12_35_15_Pro.jpg',
      alt: 'Happy moment 2',
      title: 'Beautiful Memory 2'
    },
    {
      id: '3',
      src: '/images/gallery/WIN_20250628_20_13_21_Pro.jpg',
      alt: 'Happy moment 3',
      title: 'Beautiful Memory 3'
    },
    {
      id: '4',
      src: '/images/gallery/WIN_20250628_20_13_02_Pro.jpg',
      alt: 'Happy moment 4',
      title: 'Beautiful Memory 4'
    },
    {
      id: '5',
      src: '/images/gallery/WIN_20250628_20_12_53_Pro.jpg',
      alt: 'Happy moment 5',
      title: 'Beautiful Memory 5'
    }
  ];

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen p-8" style={{
      background: 'linear-gradient(135deg, #9b59b6 0%, #e91e63 50%, #f4d03f 100%)'
    }}>
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1 
          className="pixel-title text-4xl md:text-6xl mb-4"
          style={{ color: '#fff' }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          📸 Our Gallery
        </motion.h1>
        <motion.p 
          className="pixel-text text-xl mt-2 max-w-2xl mx-auto"
          style={{ color: 'rgba(255,255,255,0.9)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Capturing our beautiful moments together in pixel-art style
        </motion.p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-lg p-2" style={{
                border: '4px solid #232336',
                background: '#232336',
                boxShadow: '0 0 0 4px #fff, 4px 4px 0px #000, inset 2px 2px 0px rgba(255,255,255,0.3)'
              }}>
                <div className="aspect-square overflow-hidden rounded">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
                }}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="pixel-title text-white text-lg">{image.title}</h3>
                    <p className="pixel-text text-white/80 text-sm">Click to view</p>
                  </div>
                </div>

                {/* Pixel art corner decoration */}
                <div className="absolute top-2 right-2 text-2xl">📷</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] p-4 rounded-lg"
              style={{
                background: 'linear-gradient(135deg, #232336 0%, #4a7c59 100%)',
                border: '4px solid #000',
                boxShadow: '0 0 0 4px #fff, 8px 8px 0px #000, 0 0 30px rgba(233, 30, 99, 0.4), inset 2px 2px 0px rgba(255,255,255,0.3)'
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-4 -right-4 z-10 pixel-button p-3 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #e91e63 0%, #f4d03f 100%)',
                  minWidth: '44px',
                  minHeight: '44px'
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[70vh] object-contain rounded"
                />
                
                {/* Image Info */}
                <div className="mt-4 text-center">
                  <h3 className="pixel-title text-white text-2xl mb-2">{selectedImage.title}</h3>
                  <p className="pixel-text text-white/80">Our beautiful memories together</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Back */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.button
          onClick={() => window.history.back()}
          className="pixel-button px-8 py-4 text-lg"
          style={{
            background: 'linear-gradient(135deg, #4a7c59 0%, #f4d03f 100%)'
          }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Our Kingdom
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Gallery; 