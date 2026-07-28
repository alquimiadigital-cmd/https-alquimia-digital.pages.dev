import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center">
      <div className="max-w-xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">404</p>
        <h1 className="text-4xl font-semibold text-white">Página no encontrada</h1>
        <p className="text-lg text-slate-400">
          La página que buscas no está disponible en este momento.
        </p>
        <Link href="/" className="inline-flex rounded-full border border-cyan-400/40 px-5 py-3 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/10">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
