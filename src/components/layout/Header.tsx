import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/20 bg-[#050b14]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-cyan-500/30 transition duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,.5)]">
            <Image
              src="/logo.png"
              alt="Alquimia Digital"
              fill
              priority
              className="object-cover"
              sizes="56px"
            />
          </div>

          <div>
            <h1 className="text-base md:text-lg font-black tracking-wider text-white leading-none">
              ALQUIMIA <span className="text-cyan-400">DIGITAL</span>
            </h1>

            <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-gray-400">
              Servicio Técnico Profesional
            </p>
          </div>
        </Link>

        {/* Menú */}
        <nav className="hidden xl:flex items-center gap-6">
          <a href="#inicio" className="text-xs font-bold tracking-widest text-gray-300 hover:text-cyan-400 transition">
            INICIO
          </a>

          <a href="#servicios" className="text-xs font-bold tracking-widest text-gray-300 hover:text-cyan-400 transition">
            SERVICIOS
          </a>

          <a href="#proceso" className="text-xs font-bold tracking-widest text-gray-300 hover:text-cyan-400 transition">
            PROCESO
          </a>

          <a href="#testimonios" className="text-xs font-bold tracking-widest text-gray-300 hover:text-cyan-400 transition">
            TESTIMONIOS
          </a>

          <a href="#faq" className="text-xs font-bold tracking-widest text-gray-300 hover:text-cyan-400 transition">
            FAQ
          </a>

          <a href="#contacto" className="text-xs font-bold tracking-widest text-gray-300 hover:text-cyan-400 transition">
            CONTACTO
          </a>
        </nav>

        {/* WhatsApp */}
        <a
          href="https://api.whatsapp.com/send?phone=541163754822&text=Hola%20ALQUIMIA%20DIGITAL,%20quisiera%20solicitar%20un%20presupuesto."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-emerald-500"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}