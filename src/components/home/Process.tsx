const steps = [
  "Nos escribís",
  "Diagnóstico",
  "Presupuesto",
  "Reparación",
  "Entrega",
];

export default function Process() {
  return (
    <section className="bg-[#05070c] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-16 text-center text-4xl font-black text-white">

          NUESTRO PROCESO

        </h2>

        <div className="grid gap-8 md:grid-cols-5">

          {steps.map((step, index) => (
            <div
              key={step}
              className="text-center"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-cyan-500 bg-cyan-500/10 text-3xl font-black text-cyan-400">

                {index + 1}

              </div>

              <h3 className="mt-6 text-lg font-bold text-white">
                {step}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}