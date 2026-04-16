import { useState } from 'react';
import { motion } from 'motion/react';
import { CORVERA_IMAGES } from '../constants';
import ImageModal from '../components/ImageModal';

export default function Corvera() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const openImage = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-16">
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
      />
      
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-primary uppercase tracking-[2px]">Ubicación</span>
        <h1 className="text-4xl font-bold uppercase">Conocer Corvera</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="grid grid-cols-2 gap-4">
          {CORVERA_IMAGES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 rounded-xl border border-border-card shadow-sm flex flex-col items-center gap-4 group"
            >
              <div className="w-full aspect-square overflow-hidden rounded-lg bg-bg-alt flex items-center justify-center cursor-zoom-in">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain p-2 transition-transform group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  onClick={() => openImage(item.image, item.title)}
                />
              </div>
              <span className="text-[9px] font-bold text-primary tracking-[2px] uppercase text-center opacity-70">{item.title}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-2xl border border-border-card shadow-sm space-y-6 text-text-main"
        >
          <div className="space-y-4 text-sm leading-relaxed text-text-muted">
            <p>
              Se cree que el municipio deriva del latín <strong className="text-primary">"corvum"</strong>. Haría alusión a las grandes bandadas de cuervos que se refugiaban en las peñas de la ermita de la Consolación.
            </p>
            <p>
              En <span className="font-semibold text-text-main">1924</span> se le añade el apelativo de Asturias para diferenciarla de otros municipios españoles con el mismo nombre.
            </p>
            <p>
              Corvera es un municipio situado en la zona norte-centro de Asturias. No tiene costa pero su capital, <strong className="text-primary italic">Nubledo</strong>, está a solo 8 km. del mar Cantábrico. Forma parte de la comarca y partido judicial de Avilés.
            </p>
            <p>
              El municipio de Corvera tiene <span className="font-semibold text-text-main">45,48 kms²</span> de superficie repartidas en 7 parroquias: Las Vegas (1 km.), Molleda (4,9 km.), Trasona (8,7 km.), Los Campos (1,7 km.), Cancienes (11,6 km.), Solís (14 km.) y Villa (3,5 km.).
            </p>
            <p>
              Limita al Norte con <span className="italic">Avilés y Gozón</span>; al Este con <span className="italic">Carreño y Gijón</span>; al Sur con <span className="italic">Llanera e Illas</span> y al Oeste con <span className="italic">Castrillón</span>.
            </p>
            <p>
              Como toda la cornisa cantábrica, tiene un <strong className="text-text-main">clima oceánico-atlántico</strong>, caracterizado por sus abundantes precipitaciones, regulares durante todo el año, y por sus suaves temperaturas, debido a la proximidad e influencia del mar. Su censo actual ronda los <span className="font-semibold text-primary">18.000 habitantes</span>.
            </p>
            <p>
              El verde es el color predominante en Corvera. El paisaje privilegiado invita al montañismo y senderismo, destacando el <strong className="text-primary italic">Embalse de Trasona</strong>. Este pantano es un referente europeo gracias al piragüismo, sede de prestigiosos campeonatos.
            </p>
            <p>
              Además, cuenta con un valioso patrimonio cultural como el <strong className="text-text-main">Palacio Rodríguez de León</strong> (siglo VII) y diversos templos como la iglesia de Santa María de Solís, Cancienes, la ermita de la Consolación, la ermita de los Santos Justo y Pastor o la capilla de San Pelayo.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
