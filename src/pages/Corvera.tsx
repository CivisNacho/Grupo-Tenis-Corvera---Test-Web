import { motion } from 'motion/react';
import { CORVERA_IMAGES } from '../constants';

export default function Corvera() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-16">
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-primary uppercase tracking-[2px]">Ubicación</span>
        <h1 className="text-4xl font-bold uppercase">Conocer Corvera</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {CORVERA_IMAGES.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl border border-border-card shadow-sm flex flex-col items-center gap-6 group"
          >
            <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-bg-alt">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain p-4 transition-transform group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[10px] font-bold text-primary tracking-[3px] uppercase text-center">{item.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
