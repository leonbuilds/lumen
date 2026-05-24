import { useTranslations } from "next-intl";
import writingData from "@root/content/writing.json";
import { SectionLabel, SectionHeading, SectionLede } from "./section-header";

type WritingItem = {
  date: string;
  title: string;
  url: string;
  source: "wechat" | "xhs";
};

export function Writing() {
  const t = useTranslations("writing");
  const items = (writingData as WritingItem[]).slice(0, 6);

  return (
    <section id="writing" className="px-8 py-24">
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel>{t("label")}</SectionLabel>
        <SectionHeading
          before={t("headingA")}
          highlight={t("headingHighlight")}
          after={t("headingB")}
        />
        <SectionLede>{t("lede")}</SectionLede>

        {items.length === 0 ? (
          <p className="text-muted-foreground">{t("empty")}</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="block rounded-[14px] border border-border bg-card p-6 shadow-[0_1px_3px_rgb(15_17_23/0.03)] transition hover:-translate-y-0.5 hover:border-[rgb(168_85_247/0.4)] hover:shadow-[0_10px_28px_-14px_rgb(168_85_247/0.22)]"
              >
                <div className="mb-3 flex items-center justify-between text-xs text-faint">
                  <span className="font-mono">{formatDate(item.date)}</span>
                  <span className="rounded-full border border-[rgb(168_85_247/0.18)] bg-[rgb(168_85_247/0.08)] px-2.5 py-0.5 text-[11px] tracking-[0.05em] text-[rgb(139_92_246)]">
                    {item.source === "wechat" ? t("sourceWechat") : t("sourceXhs")}
                  </span>
                </div>
                <h3 className="text-base font-medium leading-[1.45]">{item.title}</h3>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return `${String(d.getMonth() + 1).padStart(2, "0")} / ${String(d.getDate()).padStart(2, "0")}`;
}
