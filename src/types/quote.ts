export interface QuoteItem {
  id: string;
  productId: string;
  quantity: number;
  notes?: string;
}

export interface Quote {
  id: string;
  customerId: string;
  items: QuoteItem[];
  status: "pending" | "approved" | "rejected";
  createdAt: string;
  updatedAt: string;
}
