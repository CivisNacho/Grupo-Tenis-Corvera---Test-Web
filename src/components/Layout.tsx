import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { cn } from '../lib/utils';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-main">
      {/* Header */}
      <header className="h-28 px-6 md:px-12 flex items-center justify-between border-b border-border-light bg-white sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-6">
          <div className="h-20 w-auto bg-white p-1 rounded border border-border-light shadow-sm">
            <img 
              src="https://www.teniscorvera.com/.cm4all/uproc.php/0/.logo%20corvera.jpg/picture-800?_=19c8299af88" 
              alt="Grupo Tenis Corvera" 
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl text-primary leading-none tracking-tight">
              GRUPO TENIS
            </span>
            <span className="font-extrabold text-2xl text-primary leading-none tracking-tight">
              CORVERA
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary",
                location.pathname === link.href ? "text-primary border-b-2 border-primary pb-1" : "text-text-main"
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-text-main"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-28 left-0 right-0 md:hidden bg-white border-b border-border-light px-6 py-6 space-y-2 shadow-xl"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-lg uppercase tracking-wider",
                  location.pathname === link.href ? "bg-bg-alt text-primary" : "text-text-main hover:bg-bg-alt"
                )}
              >
                {link.title}
              </Link>
            ))}
          </motion.nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border-light py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-text-muted">
          <div>&copy; {new Date().getFullYear()} Grupo Tenis Corvera. Todos los derechos reservados.</div>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="flex items-center gap-1">📍 Calle Deporte S/N, Corvera, Murcia</span>
            <span className="flex items-center gap-1">📞 +34 968 000 000</span>
            <span className="flex items-center gap-1">✉️ info@teniscorvera.com</span>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}
