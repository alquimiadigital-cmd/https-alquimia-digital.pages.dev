import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/20 bg-[#050b14]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* LOGO Y TÍTULO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Alquimia Digital"
            width={52}
            height={52}
            priority
            className="rounded-full border border-cyan-500/30"
          />
          <div>
            <h1 className="text-lg md:text-xl font-extrabold tracking-wider text-white">
              ALQUIMIA <span className="text-cyan-400">DIGITAL</span>
            </h1>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-medium">
              Servicio Técnico Profesional
            </p>
          </div>
        </Link>

        {/* MENÚ DE NAVEGACIÓN DIRECTO */}
        <nav className="hidden xl:flex items-center gap-6">
          <a href="#inicio" className="text-xs font-bold tracking-widest text-gray-300 hover:text-cyan-400">INICIO</a>
          <a href="#servicios" className="text-xs font-bold tracking-widest text-gray-300 hover:text-cyan-400">SERVICIOS</a>
          <a href="#nosotros" className="text-xs font-bold tracking-widest text-gray-300 hover:text-cyan-400">NOSOTROS</a>
          <a href="#proceso" className="text-xs font-bold tracking-widest text-gray-300 hover:text-cyan-400">PROCESO</a>
          <a href="#testimonios" className="text-xs font-bold tracking-widest text-gray-300 hover:text-cyan-400">TESTIMONIOS</a>
          <a href="#faq" className="text-xs font-bold tracking-widest text-gray-300 hover:text-cyan-400">FAQ</a>
          <a href="#contacto" className="text-xs font-bold tracking-widest text-gray-300 hover:text-cyan-400">CONTACTO</a>
        </nav>

        {/* BOTÓN DE WHATSAPP */}
        <a
          href="https://wa.me"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-500"
        >
          WhatsApp
        </a>

      </div>
    </header>
  );
}
