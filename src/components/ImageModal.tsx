import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export default function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-zoom-out"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative max-w-5xl w-full max-h-full flex items-center justify-center"
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 md:-right-12 text-white hover:text-accent transition-colors p-2"
              aria-label="Cerrar"
            >
              <X size={32} />
            </button>
            
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl"
              referrerPolicy="no-referrer"
            />
            
            {imageAlt && (
              <div className="absolute -bottom-12 left-0 right-0 text-center">
                <p className="text-white font-medium text-lg">{imageAlt}</p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
