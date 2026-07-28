import Image from "next/image";
import Link from "next/link";

const menu = [
  "Inicio",
  "Servicios",
  "Nosotros",
  "Proceso",
  "Testimonios",
  "FAQ",
  "Contacto",
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-cyan-500/20 bg-[#05070c]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Alquimia Digital"
            width={56}
            height={56}
            className="rounded-full border border-cyan-500 shadow-lg shadow-cyan-500/40"
          />

          <div>
            <h1 className="text-xl font-black tracking-wide text-white">
              ALQUIMIA
            </h1>

            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
              DIGITAL
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {menu.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-gray-300 transition hover:text-cyan-400"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/541163754822"
          target="_blank"
          className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}