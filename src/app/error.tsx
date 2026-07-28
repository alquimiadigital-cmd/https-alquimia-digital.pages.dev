"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h2 className="text-2xl font-semibold">Algo salió mal</h2>
      <p className="text-sm text-slate-600">Se produjo un error inesperado en la aplicación.</p>
      <button
        className="rounded-full border border-slate-300 px-4 py-2 text-sm"
        onClick={() => reset()}
      >
        Reintentar
      </button>
    </div>
  );
}
