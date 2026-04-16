import { useState } from 'react';
import { motion } from 'motion/react';
import { TEAM } from '../constants';
import ImageModal from '../components/ImageModal';

export default function Principal() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const openImage = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-24">
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
      />
      
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
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 cursor-zoom-in"
                  referrerPolicy="no-referrer"
                  onClick={() => openImage(member.image, member.name)}
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
                src="https://www.teniscorvera.com/.cm4all/uproc.php/0/.grupo.jpg/picture-800?_=19b059d2f50"
                alt="Grupo"
                className="w-full h-auto cursor-zoom-in"
                referrerPolicy="no-referrer"
                onClick={() => openImage("https://www.teniscorvera.com/.cm4all/uproc.php/0/.grupo.jpg/picture-800?_=19b059d2f50", "Grupo")}
              />
            </div>
            <p className="text-sm text-text-muted italic text-center">Escuela de Tenis Corvera</p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-border-card shadow-lg">
              <img
                src="https://www.teniscorvera.com/.cm4all/uproc.php/0/.ec14.jpg/picture-800?_=19b05a13e60"
                alt="Escuela de Tenis"
                className="w-full h-auto cursor-zoom-in"
                onClick={() => openImage("https://www.teniscorvera.com/.cm4all/uproc.php/0/.ec14.jpg/picture-800?_=19b05a13e60", "Escuela de Tenis")}
              />
            </div>
            <p className="text-sm text-text-muted italic text-center">Entrenamiento</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <img src="https://www.teniscorvera.com/.cm4all/uproc.php/0/.Captura11111111.PNG" alt="Información" className="rounded-xl w-full border border-border-card shadow-sm cursor-zoom-in" referrerPolicy="no-referrer" onClick={() => openImage("https://www.teniscorvera.com/.cm4all/uproc.php/0/.Captura11111111.PNG", "Información")} />
          <img src="https://www.teniscorvera.com/.cm4all/uproc.php/0/.minisandrainesmarina1.jpg" alt="Información" className="rounded-xl w-full border border-border-card shadow-sm cursor-zoom-in" referrerPolicy="no-referrer" onClick={() => openImage("https://www.teniscorvera.com/.cm4all/uproc.php/0/.minisandrainesmarina1.jpg", "Información")} />
          <img src="https://www.teniscorvera.com/.cm4all/uproc.php/0/.Captura_1.PNG" alt="Información" className="rounded-xl w-full border border-border-card shadow-sm cursor-zoom-in" referrerPolicy="no-referrer" onClick={() => openImage("https://www.teniscorvera.com/.cm4all/uproc.php/0/.Captura_1.PNG", "Información")} />
          <img src="https://www.teniscorvera.com/.cm4all/uproc.php/0/.minisandrainesmarina2_1.jpg" alt="Información" className="rounded-xl w-full border border-border-card shadow-sm cursor-zoom-in" referrerPolicy="no-referrer" onClick={() => openImage("https://www.teniscorvera.com/.cm4all/uproc.php/0/.minisandrainesmarina2_1.jpg", "Información")} />
        </div>
      </section>
    </div>
  );
}
