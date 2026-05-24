import { useTranslations } from "next-intl";
import { SectionLabel, SectionHeading, SectionLede } from "./section-header";

export function About() {
  const t = useTranslations("about");

  const roles = [
    { idx: t("role01Idx"), title: t("role01Title"), desc: t("role01Desc") },
    { idx: t("role02Idx"), title: t("role02Title"), desc: t("role02Desc") },
    { idx: t("role03Idx"), title: t("role03Title"), desc: t("role03Desc") },
  ];

  const timeline = [
    { year: t("tl1Year"), org: t("tl1Org"), role: t("tl1Role"), desc: t("tl1Desc") },
    { year: t("tl2Year"), org: t("tl2Org"), role: t("tl2Role"), desc: t("tl2Desc") },
    { year: t("tl3Year"), org: t("tl3Org"), role: t("tl3Role"), desc: t("tl3Desc") },
  ];

  return (
    <section id="about" className="px-8 py-24">
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel>{t("label")}</SectionLabel>
        <SectionHeading
          before={t("headingA")}
          highlight={t("headingHighlight")}
          after={t("headingB")}
        />
        <SectionLede>{t("lede")}</SectionLede>

        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {roles.map(({ idx, title, desc }) => (
            <article
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[0_1px_3px_rgb(15_17_23/0.04),0_8px_24px_-16px_rgb(15_17_23/0.1)]"
            >
              <span aria-hidden className="brand-grad absolute inset-x-0 top-0 h-px opacity-80" />
              <div className="mb-3.5 text-[11px] font-mono text-faint">{idx}</div>
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="text-sm leading-[1.6] text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>

        <div className="border-t border-border-soft pt-8">
          {timeline.map(({ year, org, role, desc }) => (
            <div
              key={year}
              className="grid grid-cols-[140px_1fr] items-center gap-6 border-b border-border-soft py-4 last:border-0"
            >
              <div className="font-mono text-[13px] text-faint">{year}</div>
              <div>
                <span className="text-[15px]">
                  <span className="text-brand-grad font-semibold">{org}</span>
                  <span className="text-muted-foreground"> · {role}</span>
                </span>
                <div className="mt-0.5 text-[13px] text-muted-foreground">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
