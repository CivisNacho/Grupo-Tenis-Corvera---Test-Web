import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GALLERY } from '../constants';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="h-[380px] relative overflow-hidden bg-gradient-to-br from-[#2d5a27] to-[#1e3d1a] flex items-center px-6 md:px-12">
        <div className="relative z-10 text-white max-w-lg">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold leading-[1.1] mb-4"
          >
            GRUPO TENIS CORVERA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-90 mb-8 leading-relaxed"
          >
            ¡¡QUE NO TE LO CUENTEN, VEN Y DISFRUTA DEL TENIS!!
          </motion.p>
          <Link
            to="/contacto"
            className="inline-block px-7 py-3.5 bg-accent text-primary font-bold rounded-sm uppercase text-xs tracking-wider hover:brightness-110 transition-all"
          >
            Reservar Pista
          </Link>
        </div>
        
        {/* Decorative Visual */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-24 flex items-center justify-center pointer-events-none">
          <div className="border-2 border-white/20 w-[400px] h-[200px] relative">
            <div className="absolute inset-0 border-r-2 border-white/20 w-1/2" />
          </div>
        </div>
      </section>

      {/* Grid Sections / Noticias */}
      <section className="bg-bg-alt py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-bold text-primary uppercase tracking-[2px]">Actualidad</span>
            <h2 className="text-2xl font-semibold">NOTICIAS</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border-card shadow-sm space-y-3">
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Formación</span>
              <h3 className="text-lg font-semibold">Escuela de Tenis</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Programas adaptados para todas las edades y niveles, desde iniciación hasta competición.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border-card shadow-sm space-y-3">
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Competición</span>
              <h3 className="text-lg font-semibold">Torneos y Ligas</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Calendario actualizado de competiciones federadas y ligas sociales durante todo el año.
              </p>
            </div>
          </div>

          {/* Existing Content Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
            <div className="bg-white p-8 rounded-xl border border-border-card space-y-6">
              <h3 className="text-xl font-bold text-primary">TORNEO AVILES</h3>
              <p className="text-sm font-medium text-text-muted">SÁBADO: ORDEN DE JUEGO</p>
              <div className="grid grid-cols-2 gap-4">
                <img src="/.cm4all/uproc.php/0/.logo%20corvera.jpg/picture-800?_=19c8299af88" alt="Logo" className="rounded-lg w-full grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                <img src="/.cm4all/uproc.php/0/.Captura%20cartel_1.PNG/picture-800?_=19b66cf2c60" alt="Cartel" className="rounded-lg w-full" referrerPolicy="no-referrer" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border-card space-y-6">
              <h3 className="text-xl font-bold text-primary uppercase">Entrenamientos Abril / Mayo</h3>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold bg-accent/20 text-primary px-2 py-0.5 rounded uppercase">Juego de Pies</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <img src="/.cm4all/uproc.php/0/.CALENDARIO.PNG/picture-400?_=19c57cb2b0f" alt="Cal" className="rounded-lg w-full border border-border-light" referrerPolicy="no-referrer" />
                <img src="/.cm4all/uproc.php/0/.abril.PNG/picture-400?_=19d1e973f09" alt="Abr" className="rounded-lg w-full border border-border-light" referrerPolicy="no-referrer" />
                <img src="/.cm4all/uproc.php/0/.mayo.PNG/picture-400?_=19d1e9810d7" alt="May" className="rounded-lg w-full border border-border-light" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-primary uppercase tracking-[2px]">Visual</span>
            <h2 className="text-4xl font-bold">GALERÍA</h2>
          </div>
          <Link to="/videos" className="text-sm font-bold text-primary hover:underline">Ver todo →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY.slice(0, 8).map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="aspect-square overflow-hidden rounded-lg border border-border-card"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
