export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#05070c] pt-32">

      {/* Fondo */}
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00bfff22,transparent_60%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,#07111f_0%,#05070c_100%)]" />

      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row">

        {/* Texto */}

        <div className="flex-1">

          <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-cyan-300">

            Servicio Técnico Profesional

          </span>

          <h1 className="mt-8 text-5xl font-black leading-none text-white md:text-7xl">

            ALQUIMIA

            <span className="block bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">

              DIGITAL

            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">

            Reparación, mantenimiento, actualización y optimización de
            computadoras, notebooks, PlayStation, Xbox, Nintendo Switch,
            celulares y electrónica en general.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://wa.me/541163754822"
              target="_blank"
              className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-500"
            >
              Solicitar Presupuesto
            </a>

            <a
              href="#servicios"
              className="rounded-xl border border-cyan-500 px-8 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-500/10"
            >
              Ver Servicios
            </a>

          </div>

          <div className="mt-12 grid grid-cols-3 gap-8">

            <div>
              <h3 className="text-3xl font-black text-cyan-400">30+</h3>
              <p className="text-sm text-gray-400">
                Años de experiencia
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-cyan-400">1000+</h3>
              <p className="text-sm text-gray-400">
                Equipos reparados
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-cyan-400">100%</h3>
              <p className="text-sm text-gray-400">
                Atención personalizada
              </p>
            </div>

          </div>

        </div>

        {/* Imagen */}

        <div className="flex flex-1 justify-center">

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

            <img
              src="/hero-console.png"
              alt="Servicio Técnico"
              className="relative w-full max-w-xl drop-shadow-[0_0_60px_rgba(0,180,255,.35)]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}