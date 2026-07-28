import type { Metadata } from "next";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { serviceHighlights } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios | ALQUIMIA DIGITAL",
  description: "Explora los servicios especializados de ALQUIMIA DIGITAL en repuestos, hidráulica, metalúrgica, rodamientos y transmisión industrial.",
};

export default function ServiciosPage() {
  return (
    <main className="bg-slate-950">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Cobertura técnica para operaciones industriales"
          description="Diseñamos una oferta orientada a la continuidad, la eficiencia y la disponibilidad de equipos clave."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {serviceHighlights.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-400">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
