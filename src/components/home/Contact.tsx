import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-cyan-500/10 bg-[#050b14] py-20"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#9d4edd11,transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            ¡Hablemos Hoy Mismo!
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base text-gray-400">
            Escribinos por WhatsApp, escaneá el código QR o visitanos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {/* Información */}
          <div className="flex flex-col justify-between rounded-2xl border border-cyan-500/20 bg-[#07111f]/50 p-8">

            <div>
              <h3 className="text-2xl font-black text-white">
                ALQUIMIA DIGITAL
              </h3>

              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Servicio Técnico Integral
              </p>

              <p className="mt-6 text-sm leading-relaxed text-gray-300">
                Reparación de PC, notebooks, PlayStation, Xbox,
                Nintendo Switch, celulares, Smart TV,
                TV Box y electrónica en general.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://api.whatsapp.com/send?phone=541163754822&text=Hola%20ALQUIMIA%20DIGITAL,%20quisiera%20informaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-6 py-4 text-center font-bold text-white transition hover:bg-emerald-500"
              >
                Escribir por WhatsApp
              </a>
            </div>

          </div>

          {/* QR */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-500/20 bg-[#07111f]/50 p-8 text-center">

            <h3 className="mb-2 text-xl font-bold text-white">
              Escaneá el QR
            </h3>

            <p className="mb-6 text-xs text-gray-400">
              Abrí WhatsApp desde tu teléfono.
            </p>

            <div className="relative flex h-48 w-48 items-center justify-center rounded-xl bg-white p-2">

              <Image
                src="/qr-whatsapp.png"
                alt="QR WhatsApp"
                width={176}
                height={176}
                priority
                className="object-contain"
              />

            </div>

          </div>

          {/* Ubicación */}
          <div className="flex flex-col justify-between rounded-2xl border border-cyan-500/20 bg-[#07111f]/50 p-8 text-center">

            <div>

              <h3 className="mb-2 text-xl font-bold text-white">
                ¿Dónde estamos?
              </h3>

              <p className="mb-6 text-xs text-gray-400">
                Laboratorio y servicio técnico.
              </p>

              <div className="my-4 flex h-32 items-center justify-center rounded-xl border border-cyan-500/10 bg-[#050b14]">
                <span className="text-5xl">📍</span>
              </div>

              <p className="text-sm leading-6 text-gray-300">
                Los Lirios 492
                <br />
                Sierra de la Ventana
                <br />
                Provincia de Buenos Aires
              </p>

            </div>

            <div className="mt-6">

              <a
                href="https://www.google.com/maps/search/?api=1&query=-38.1251314,-61.7960823"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl border border-cyan-500 px-6 py-4 text-center font-bold text-cyan-300 transition hover:bg-cyan-500/10"
              >
                Ver en Google Maps
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}