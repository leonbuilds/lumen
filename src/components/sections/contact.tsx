import { useTranslations } from "next-intl";
import { SectionHeading } from "./section-header";

const EMAIL = "liangliang1259@gmail.com";
const GITHUB = "https://github.com/leonbuilds";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="px-8 pt-24 pb-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="relative overflow-hidden rounded-[24px] border border-[rgb(168_85_247/0.25)] p-12 sm:p-16 text-center shadow-[0_1px_3px_rgb(15_17_23/0.04)] bg-[linear-gradient(135deg,rgb(168_85_247/0.10)_0%,rgb(59_130_246/0.08)_50%,rgb(236_72_153/0.10)_100%)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgb(168_85_247/0.18),transparent_60%)]"
          />
          <div className="relative">
            <SectionHeading
              before={t("headingA")}
              highlight={t("headingHighlight")}
              after={t("headingB")}
            />
            <p className="mx-auto mb-8 mt-4 max-w-[480px] text-[17px] text-muted-foreground">
              {t("lede")}
            </p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <a
                href={`mailto:${EMAIL}`}
                className="brand-grad inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white shadow-[0_8px_22px_-8px_rgb(168_85_247/0.5)] transition hover:-translate-y-px"
              >
                ✉ {EMAIL}
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm text-foreground shadow-[0_1px_2px_rgb(15_17_23/0.03)] transition hover:-translate-y-px hover:border-foreground/40"
              >
                ⌘ github.com/leonbuilds
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
