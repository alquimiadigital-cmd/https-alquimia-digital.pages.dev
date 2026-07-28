import { createMetadata } from "@/lib/metadata";
import { publicRoutes } from "@/constants/routes";

export const metadata = createMetadata({
  title: "Empresa",
  alternates: {
    canonical: publicRoutes.company,
  },
});

export default function EmpresaPage() {
  return <main className="mx-auto max-w-6xl px-6 py-16">Empresa</main>;
}
