const features = [
  {
    title: "30+ años",
    text: "Experiencia",
    icon: "⚙️",
  },
  {
    title: "Atención",
    text: "Rápida",
    icon: "⏱️",
  },
  {
    title: "Repuestos",
    text: "Originales y alternativos",
    icon: "🔧",
  },
  {
    title: "Diagnóstico",
    text: "Profesional",
    icon: "🖥️",
  },
  {
    title: "WhatsApp",
    text: "Respuesta inmediata",
    icon: "💬",
  },
  {
    title: "Retiro",
    text: "Y entrega",
    icon: "🚚",
  },
];

export default function Features() {
  return (
    <section className="bg-[#070b12] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-center text-4xl font-black text-white">
          ¿POR QUÉ ELEGIRNOS?
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">

          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-cyan-500/20 bg-[#0d1118] p-6 text-center transition hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="mb-4 text-5xl">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}