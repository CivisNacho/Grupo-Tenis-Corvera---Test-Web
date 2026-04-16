import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function Contacto() {
  return (
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 space-y-12">
      <div className="text-center space-y-4">
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[2px]">Atención</span>
          <h1 className="text-4xl font-bold uppercase">Contacto</h1>
        </div>
        <p className="text-text-muted text-sm">Publique sus preguntas o peticiones usando este formulario en línea. ¡Muchas gracias!</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-12 rounded-2xl border border-border-card shadow-sm"
      >
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-primary uppercase tracking-wider ml-1">Nombre *</label>
              <input
                type="text"
                required
                className="w-full bg-bg-alt border border-border-light rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-primary uppercase tracking-wider ml-1">Apellido(s) *</label>
              <input
                type="text"
                required
                className="w-full bg-bg-alt border border-border-light rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-primary uppercase tracking-wider ml-1">Email *</label>
            <input
              type="email"
              required
              className="w-full bg-bg-alt border border-border-light rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-primary uppercase tracking-wider ml-1">Teléfono</label>
            <input
              type="tel"
              className="w-full bg-bg-alt border border-border-light rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-primary uppercase tracking-wider ml-1">Mensaje</label>
            <textarea
              rows={5}
              placeholder="Mi mensaje"
              className="w-full bg-bg-alt border border-border-light rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none text-sm"
            />
          </div>

          <div className="pt-4 text-center">
            <p className="text-[10px] text-text-muted mb-6 uppercase tracking-tighter">* campos obligatorios</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-accent text-primary px-10 py-4 rounded font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all shadow-md active:scale-95"
            >
              <Send size={16} />
              Enviar Mensaje
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
