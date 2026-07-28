import type { Metadata } from "next";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const metadata: Metadata = {
  title: "Nosotros | ALQUIMIA DIGITAL",
  description: "Conocé la visión industrial y el enfoque técnico de ALQUIMIA DIGITAL para repuestos y soluciones de mantenimiento.",
};

export default function NosotrosPage() {
  return (
    <main className="bg-slate-950">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Nosotros"
          title="Especialistas en soluciones industriales confiables"
          description="Acompañamos a empresas que necesitan disponibilidad operativa, mantenimiento eficiente y repuestos de calidad para procesos críticos."
        />

        <div className="mt-12 grid gap-8 rounded-3xl border border-white/10 bg-slate-900/70 p-8 lg:grid-cols-2">
          <div className="space-y-4 text-slate-400">
            <p>
              ALQUIMIA DIGITAL nace con un enfoque claro: ofrecer respuestas técnicas y comerciales ágiles para sectores que dependen de la continuidad de sus operaciones.
            </p>
            <p>
              Trabajamos con criterio industrial, conocimiento de mercado y un compromiso con la trazabilidad, el asesoramiento y la eficiencia en cada operación.
            </p>
          </div>
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-6 text-slate-300">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Nuestro enfoque</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>• Respuesta rápida ante requerimientos técnicos y de stock.</li>
              <li>• Soporte de mantenimiento y optimización de procesos.</li>
              <li>• Relación cercana con clientes y operadores industriales.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
