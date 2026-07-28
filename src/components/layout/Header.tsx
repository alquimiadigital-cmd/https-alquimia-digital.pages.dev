import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/20 bg-[#050b14]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
                {/* LOGO Y TÍTULO */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border border-cyan-500/30 transition duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <Image
              src="/logo.png"
              alt="Alquimia Digital"
              fill
              priority
              className="object-cover"
              sizes="56px"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-base md:text-lg font-black tracking-wider text-white font-sans leading-none">
              ALQUIMIA <span className="text-cyan-400">DIGITAL</span>
            </h1>
            <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-medium mt-1 leading-none">
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
