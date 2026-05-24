import type { MetadataRoute } from "next";

const SITE = "https://lumen-gamma-nine.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
