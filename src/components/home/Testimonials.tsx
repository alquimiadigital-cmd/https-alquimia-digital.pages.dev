const testimonials = [
  {
    name: "Martín G.",
    text: "Excelente atención. Repararon mi notebook en menos de 24 horas. Totalmente recomendables.",
  },
  {
    name: "Lucas P.",
    text: "Mi Play volvió como nueva. Muy rápidos, excelente precio y garantía.",
  },
  {
    name: "Carolina S.",
    text: "Muy profesionales. Solucionaron un problema que nadie encontraba.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#070b12] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-14 text-center text-4xl font-black text-white">
          LO QUE DICEN NUESTROS CLIENTES
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-cyan-500/20 bg-[#0d1118] p-8"
            >
              <div className="mb-5 text-yellow-400 text-2xl">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-7">
                "{item.text}"
              </p>

              <div className="mt-8 font-semibold text-cyan-400">
                {item.name}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}