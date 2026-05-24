import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <header className="relative overflow-hidden px-8 pt-30 pb-25">
      <div
        aria-hidden
        className="aurora pointer-events-none absolute -top-25 left-[-10%] right-[-10%] h-[560px] -z-10 animate-[aurora-drift_18s_ease-in-out_infinite_alternate]"
      />
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 -z-10" />

      <div className="relative mx-auto max-w-[880px] text-center">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-muted-foreground shadow-[0_1px_2px_rgb(15_17_23/0.03)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_currentColor]" />
          {t("available")}
        </div>

        <h1 className="text-[clamp(2.5rem,7vw,4rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
          {t("titleA")} <br className="hidden sm:inline" />
          <span className="text-brand-grad">
            {t("titleHighlight")} {t("titleB")}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[640px] text-lg leading-[1.55] text-muted-foreground whitespace-pre-line">
          {t("lede")}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3.5">
          <Link
            href="#contact"
            className="brand-grad rounded-full px-7 py-3.5 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgb(168_85_247/0.45)] transition hover:-translate-y-px hover:shadow-[0_12px_32px_-8px_rgb(168_85_247/0.6)]"
          >
            {t("ctaPrimary")}
          </Link>
          <Link
            href="#projects"
            className="rounded-full border border-border bg-surface px-6 py-3.5 text-sm text-foreground transition hover:border-foreground/40 hover:bg-surface-sub"
          >
            {t("ctaSecondary")}
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-12">
          {[
            { n: t("statYears"), l: t("statYearsLabel") },
            { n: t("statProducts"), l: t("statProductsLabel") },
            { n: t("statCohorts"), l: t("statCohortsLabel") },
          ].map(({ n, l }) => (
            <div key={l} className="text-center">
              <div className="text-brand-grad text-3xl font-semibold tabular-nums">{n}</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.06em] text-faint">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
