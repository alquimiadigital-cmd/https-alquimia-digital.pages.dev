import { privateRoutes } from "@/constants/routes";

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Panel administrativo</h1>
      <p className="mt-4 text-slate-600">Ruta base para el módulo admin.</p>
      <a className="mt-6 inline-block underline" href={privateRoutes.dashboard}>
        Ir al dashboard
      </a>
    </main>
  );
}
