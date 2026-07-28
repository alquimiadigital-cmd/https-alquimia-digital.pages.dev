export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  companyName: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  email: string;
  whatsapp: string;
  phone: string;
  address: string;
  domain: string;
  url: string;
  socialLinks: SocialLink[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const siteConfig: SiteConfig = {
  companyName: "Alquimia Digital",
  name: "Alquimia Digital",
  shortName: "Alquimia",
  tagline: "Arquitectura empresarial para desarrollo escalable",
  description:
    "Arquitectura base para operaciones industriales y desarrollo funcional escalable.",
  email: "ventas@alquimiadigital.com",
  whatsapp: "",
  phone: "",
  address: "Córdoba, Argentina",
  domain: "https://alquimia-digital.pages.dev",
  url: "https://alquimia-digital.pages.dev",
  socialLinks: [],
  seo: {
    title: "Alquimia Digital | Arquitectura empresarial",
    description:
      "Base técnica preparada para desarrollar soluciones empresariales en Next.js.",
    keywords: ["industrial", "arquitectura", "nextjs", "empresa"],
  },
};

export const siteMetadata = {
  titleTemplate: "%s | Alquimia Digital",
  defaultTitle: siteConfig.seo.title,
  description: siteConfig.seo.description,
};
