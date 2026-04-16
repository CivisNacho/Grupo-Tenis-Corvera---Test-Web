import { motion } from 'motion/react';
import { EVENTS } from '../constants';

export default function Eventos() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-16">
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-primary uppercase tracking-[2px]">Histórico</span>
        <h1 className="text-4xl font-bold uppercase">Eventos</h1>
      </div>

      <div className="space-y-24">
        {EVENTS.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
          >
            <div className="flex-1 w-full">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={event.image}
                  alt={event.title}
                  className="relative rounded-2xl w-full shadow-xl border border-border-card"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Destacado</span>
                <h2 className="text-3xl font-bold text-text-main">{event.title}</h2>
              </div>
              <p className="text-lg text-text-muted leading-relaxed text-justify">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
