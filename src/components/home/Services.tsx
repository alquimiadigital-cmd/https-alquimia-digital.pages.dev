const services = [
  {
    title: "Computadoras",
    color: "cyan",
    items: [
      "Reparación de PC",
      "Notebook",
      "All In One",
      "Cambio de SSD",
      "Ampliación de memoria",
      "Limpieza",
      "Pasta térmica",
      "Recuperación de datos",
    ],
  },
  {
    title: "Consolas",
    color: "violet",
    items: [
      "PlayStation",
      "Xbox",
      "Nintendo Switch",
      "GameStick",
      "HDMI",
      "Limpieza",
      "Actualización",
      "Instalación",
    ],
  },
  {
    title: "Celulares",
    color: "green",
    items: [
      "Android",
      "Pantallas",
      "Baterías",
      "Pin de carga",
      "Parlantes",
      "Micrófono",
      "Software",
      "Actualizaciones",
    ],
  },
  {
    title: "TV LED",
    color: "yellow",
    items: [
      "Tiras LED",
      "Fuente",
      "Main Board",
      "Backlight",
      "Software",
      "Pantallas",
      "Diagnóstico",
    ],
  },
  {
    title: "Electrodomésticos",
    color: "orange",
    items: [
      "Microondas",
      "Licuadoras",
      "Batidoras",
      "Freidoras",
      "Aspiradoras",
      "Cafeteras",
      "Planchas",
    ],
  },
  {
    title: "Software",
    color: "sky",
    items: [
      "Windows",
      "Office",
      "Antivirus",
      "Drivers",
      "Configuración",
      "Instalación",
      "Respaldo",
    ],
  },
];

const colors = {
  cyan: "border-cyan-400 shadow-cyan-500/20",
  violet: "border-fuchsia-500 shadow-fuchsia-500/20",
  green: "border-green-500 shadow-green-500/20",
  yellow: "border-yellow-500 shadow-yellow-500/20",
  orange: "border-orange-500 shadow-orange-500/20",
  sky: "border-sky-500 shadow-sky-500/20",
};

export default function Services() {
  return (
    <section
      id="servicios"
      className="bg-[#05070c] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-14 text-center text-4xl font-black text-white">

          NUESTROS SERVICIOS

        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <article
              key={service.title}
              className={`rounded-2xl border bg-[#0a0d15] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${colors[service.color as keyof typeof colors]}`}
            >
              <h3 className="mb-6 text-2xl font-bold text-white">
                {service.title}
              </h3>

              <ul className="space-y-3 text-gray-300">

                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2"
                  >
                    <span className="text-cyan-400">•</span>

                    {item}

                  </li>
                ))}

              </ul>

              <button className="mt-8 w-full rounded-xl border border-cyan-500 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-500 hover:text-white">

                VER MÁS

              </button>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}