"use client";

import { useState } from "react";

const faq = [
  {
    q: "¿El diagnóstico tiene costo?",
    a: "Depende del equipo. Consultanos por WhatsApp.",
  },
  {
    q: "¿Todas las reparaciones tienen garantía?",
    a: "Sí. Todas las reparaciones cuentan con garantía.",
  },
  {
    q: "¿Realizan retiro y entrega?",
    a: "Sí, según la zona y disponibilidad.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#05070c] py-24">

      <div className="mx-auto max-w-5xl px-6">

        <h2 className="mb-12 text-center text-4xl font-black text-white">

          PREGUNTAS FRECUENTES

        </h2>

        <div className="space-y-5">

          {faq.map((item, index) => (

            <div
              key={item.q}
              className="rounded-xl border border-cyan-500/20 bg-[#0d1118]"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-white">
                  {item.q}
                </span>

                <span className="text-cyan-400 text-2xl">
                  {open === index ? "−" : "+"}
                </span>

              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-400">
                  {item.a}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}