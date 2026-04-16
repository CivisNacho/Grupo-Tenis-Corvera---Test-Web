import { motion } from 'motion/react';
import { TEAM } from '../constants';

export default function Principal() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-24">
      {/* Equipo Tecnico */}
      <section className="space-y-12">
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[2px]">Staff</span>
          <h2 className="text-4xl font-bold">EQUIPO TÉCNICO</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden border border-border-card shadow-sm group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-bg-alt">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-bold text-lg leading-tight">{member.name}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {member.roles.map((role, i) => (
                    <span key={i} className="text-[9px] font-bold bg-primary/5 text-primary px-2 py-0.5 rounded uppercase tracking-wider">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Escuela de Tenis */}
      <section className="space-y-12">
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[2px]">Formación</span>
          <h2 className="text-4xl font-bold">ESCUELA DE TENIS</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-border-card shadow-lg">
              <img
                src="/.cm4all/uproc.php/0/.grupo.jpg/picture-800?_=19b059d2f50"
                alt="Grupo"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm text-text-muted italic">grupo</p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-border-card shadow-lg">
              <img
                src="/.cm4all/uproc.php/0/.ec14.jpg/picture-800?_=19b05a13e60"
                alt="ec14"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-text-muted italic">ec14</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <img src="/.cm4all/uproc.php/0/.Captura11111111.PNG/picture-800?_=19b05b13450" alt="Info 1" className="rounded-xl w-full border border-border-card shadow-sm" referrerPolicy="no-referrer" />
          <img src="/.cm4all/uproc.php/0/.minisandrainesmarina1.jpg/picture-800?_=19b05b91ac1" alt="Info 2" className="rounded-xl w-full border border-border-card shadow-sm" referrerPolicy="no-referrer" />
          <img src="/.cm4all/uproc.php/0/.Captura_1.PNG/picture-800?_=19b05a21c00" alt="Info 3" className="rounded-xl w-full border border-border-card shadow-sm" referrerPolicy="no-referrer" />
          <img src="/.cm4all/uproc.php/0/.minisandrainesmarina2_1.jpg/picture-800?_=19b05ba6ad1" alt="Info 4" className="rounded-xl w-full border border-border-card shadow-sm" referrerPolicy="no-referrer" />
        </div>
      </section>
    </div>
  );
}
