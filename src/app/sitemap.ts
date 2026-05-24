import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE = "https://lumen-leon.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: locale === routing.defaultLocale ? SITE : `${SITE}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === routing.defaultLocale ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l,
          l === routing.defaultLocale ? SITE : `${SITE}/${l}`,
        ]),
      ),
    },
  }));
}
