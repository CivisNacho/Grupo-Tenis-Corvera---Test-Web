import { motion } from 'motion/react';
import { GALLERY } from '../constants';

export default function Videos() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-24">
      <section className="space-y-12">
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[2px]">Archivo</span>
          <h1 className="text-4xl font-bold uppercase">Galería Fotos</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {GALLERY.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-xl overflow-hidden border border-border-card shadow-sm group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-12">
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[2px]">Multimedia</span>
          <h2 className="text-4xl font-bold uppercase">Videos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div
              key={i}
              className="aspect-video bg-bg-alt rounded-2xl overflow-hidden border border-border-card flex items-center justify-center text-text-muted italic text-sm shadow-inner"
            >
              <p>Youtube Video {i + 1}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
