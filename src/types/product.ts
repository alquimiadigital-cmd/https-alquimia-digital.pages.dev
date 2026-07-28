export type ProductStatus = "draft" | "published" | "archived";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  categoryId: string;
  brandId: string;
  price?: number;
  status: ProductStatus;
  createdAt: string;
  updatedAt: string;
}
