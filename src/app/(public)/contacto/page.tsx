import type { Metadata } from "next";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto | ALQUIMIA DIGITAL",
  description: "Contactá a ALQUIMIA DIGITAL para solicitar información comercial o técnica sobre repuestos industriales y soluciones de mantenimiento.",
};

export default function ContactoPage() {
  return (
    <main className="bg-slate-950">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tus necesidades industriales"
          description="Estamos listos para recibir consultas, cotizaciones y requerimientos técnicos."
        />

        <div className="mt-12 grid gap-8 rounded-3xl border border-white/10 bg-slate-900/70 p-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-slate-400">
            <p>
              Escribinos para recibir asesoramiento sobre repuestos, componentes hidráulicos, rodamientos, transmisión industrial y soluciones para mantenimiento y operación.
            </p>
            <p>
              Nuestro enfoque combina respuesta rápida, criterio técnico y acompañamiento para que tu operación siga funcionando sin interrupciones.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-6 text-sm text-slate-300">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Datos</p>
            <ul className="mt-4 space-y-3">
              <li><span className="text-white">Email:</span> {siteConfig.email}</li>
              <li><span className="text-white">Teléfono:</span> {siteConfig.phone}</li>
              <li><span className="text-white">Ubicación:</span> {siteConfig.address}</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
