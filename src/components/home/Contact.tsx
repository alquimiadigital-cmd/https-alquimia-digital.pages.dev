export default function Contact() {
  return (
    <section className="bg-[#070b12] py-24">

      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">

        <div className="rounded-2xl border border-cyan-500/20 bg-[#0d1118] p-8">

          <h3 className="text-3xl font-black text-white">

            ALQUIMIA DIGITAL

          </h3>

          <p className="mt-4 text-gray-400">
            Servicio Técnico Integral
          </p>

          <a
            href="https://wa.me/541163754822"
            className="mt-8 inline-block rounded-xl bg-green-600 px-8 py-4 font-semibold text-white"
          >
            WhatsApp
          </a>

        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-[#0d1118] p-8">

          <h3 className="text-2xl font-bold text-white">
            Escaneá y escribinos
          </h3>

          <div className="mt-8 flex h-64 items-center justify-center rounded-xl border border-dashed border-cyan-500 text-gray-500">

            QR WhatsApp

          </div>

        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-[#0d1118] p-8">

          <h3 className="text-2xl font-bold text-white">

            ¿Dónde estamos?

          </h3>

          <div className="mt-8 flex h-64 items-center justify-center rounded-xl border border-dashed border-cyan-500 text-gray-500">

            Google Maps

          </div>

        </div>

      </div>

    </section>
  );
}