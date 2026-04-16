import { motion } from 'motion/react';
import { ACTIVITIES } from '../constants';
import { Download } from 'lucide-react';

export default function Actividades() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-20">
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-primary uppercase tracking-[2px]">Propuesta</span>
        <h1 className="text-4xl font-bold uppercase">Actividades</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          {ACTIVITIES.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="overflow-hidden rounded-xl border border-border-card shadow-sm">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm text-text-muted italic">{activity.title}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-12">
          <div className="bg-white p-8 rounded-2xl border border-border-card shadow-sm space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Documentación</span>
              <h2 className="text-2xl font-bold">METODOLOGÍA</h2>
            </div>
            <a
              href="/.cm4all/uproc.php/0/DossierTenis%201.pdf?cdp=a&_=19b19ce5be8"
              className="flex items-center gap-4 p-6 bg-bg-alt rounded-xl border border-border-light hover:border-primary transition-all group"
            >
              <div className="p-4 bg-primary/10 text-primary rounded-lg group-hover:scale-110 transition-transform">
                <Download size={28} />
              </div>
              <div>
                <p className="font-bold text-text-main">DossierTenis 1.pdf</p>
                <p className="text-xs text-text-muted uppercase tracking-tighter">422.65KB • PDF Document</p>
              </div>
            </a>
          </div>

          <div className="space-y-8">
            <div className="aspect-video bg-bg-alt rounded-2xl overflow-hidden border border-border-card flex items-center justify-center text-text-muted italic text-sm">
              <p>Youtube Widget Placeholder</p>
            </div>
            <div className="aspect-video bg-bg-alt rounded-2xl overflow-hidden border border-border-card flex items-center justify-center text-text-muted italic text-sm">
              <p>Youtube Widget Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
