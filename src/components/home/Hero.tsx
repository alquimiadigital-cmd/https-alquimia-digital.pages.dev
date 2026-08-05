import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#050b14] pt-32"
    >
      {/* Fondo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00bfff22,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#07111f_0%,#050b14_100%)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row">

        {/* Texto */}
        <div className="flex-1">

          <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Servicio Técnico Profesional
          </span>

          <h1 className="mt-8 text-5xl font-black leading-none tracking-tight text-white md:text-7xl">
            ALQUIMIA
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              DIGITAL
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
            Reparación, mantenimiento, actualización y optimización de
            computadoras, notebooks, PlayStation, Xbox, Nintendo Switch,
            celulares, Smart TV y electrónica en general.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://api.whatsapp.com/send?phone=541163754822&text=Hola%20ALQUIMIA%20DIGITAL,%20quisiera%20solicitar%20un%20presupuesto."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-emerald-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,.5)]"
            >
              Solicitar Presupuesto
            </a>

            <a
              href="#servicios"
              className="rounded-xl border border-cyan-500 px-8 py-4 font-bold text-cyan-300 transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,.3)]"
            >
              Ver Servicios
            </a>

          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gray-800 pt-8">

            <div>
              <h3 className="text-3xl font-black text-cyan-400">30+</h3>
              <p className="mt-1 text-xs text-gray-400">
                Años de experiencia
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-cyan-400">1000+</h3>
              <p className="mt-1 text-xs text-gray-400">
                Equipos reparados
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-cyan-400">100%</h3>
              <p className="mt-1 text-xs text-gray-400">
                Atención personalizada
              </p>
            </div>

          </div>
        </div>

        {/* Imagen */}
        <div className="flex w-full flex-1 justify-center">

          <div className="relative aspect-square w-full max-w-md">

            <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-cyan-500/10 shadow-[0_0_50px_rgba(6,182,212,.15)]">

              <Image
                src="/hero-console.png"
                alt="Alquimia Digital"
                fill
                priority
                className="object-cover"
                sizes="(max-width:768px)100vw,450px"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}