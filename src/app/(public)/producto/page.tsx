import { createMetadata } from "@/lib/metadata";
import { publicRoutes } from "@/constants/routes";

export const metadata = createMetadata({
  title: "Producto",
  alternates: {
    canonical: publicRoutes.product,
  },
});

export default function ProductPage() {
  return <main className="mx-auto max-w-6xl px-6 py-16">Producto</main>;
}
