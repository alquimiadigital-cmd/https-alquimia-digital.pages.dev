import { createMetadata } from "@/lib/metadata";
import { publicRoutes } from "@/constants/routes";

export const metadata = createMetadata({
  title: "Catálogo",
  alternates: {
    canonical: publicRoutes.catalog,
  },
});

export default function CatalogPage() {
  return <main className="mx-auto max-w-6xl px-6 py-16">Catálogo</main>;
}
