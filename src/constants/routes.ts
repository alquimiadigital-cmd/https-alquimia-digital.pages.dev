export const publicRoutes = {
  home: "/",
  company: "/empresa",
  catalog: "/catalogo",
  product: "/producto",
  contact: "/contacto",
} as const;

export const privateRoutes = {
  admin: "/admin",
  dashboard: "/admin/dashboard",
  products: "/admin/productos",
  categories: "/admin/categorias",
  quotes: "/admin/cotizaciones",
  customers: "/admin/clientes",
  settings: "/admin/configuracion",
} as const;

export const routes = {
  public: publicRoutes,
  private: privateRoutes,
} as const;
