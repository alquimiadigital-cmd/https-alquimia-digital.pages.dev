import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function createMetadata(overrides: Metadata = {}): Metadata {
  return {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    keywords: siteConfig.seo.keywords,
    metadataBase: new URL(siteConfig.domain),
    alternates: {
      canonical: siteConfig.domain,
    },
    openGraph: {
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      url: siteConfig.domain,
      siteName: siteConfig.companyName,
      locale: "es_AR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
    },
    ...overrides,
  };
}
