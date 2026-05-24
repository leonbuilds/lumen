"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LangToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("nav");

  const next = locale === "zh" ? "en" : "zh";

  return (
    <button
      type="button"
      aria-label={t("langToggle")}
      onClick={() =>
        router.replace(pathname, { locale: next as (typeof routing.locales)[number] })
      }
      className="inline-flex h-9 items-center rounded-full border border-border bg-surface px-3 text-xs font-mono text-muted-foreground transition hover:text-foreground hover:border-foreground/40"
    >
      <span className={locale === "zh" ? "text-foreground" : ""}>中</span>
      <span className="mx-1.5 text-faint">/</span>
      <span className={locale === "en" ? "text-foreground" : ""}>EN</span>
    </button>
  );
}
