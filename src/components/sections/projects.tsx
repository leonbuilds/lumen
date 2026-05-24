import { getTranslations } from "next-intl/server";
import { Star } from "lucide-react";
import projectsData from "@root/content/projects.json";
import { getRepoStats } from "@/lib/github";
import { SectionLabel, SectionHeading, SectionLede } from "./section-header";

type Project = {
  slug: string;
  name: string;
  visibility: "public" | "private";
  descKey: string;
  tags: string[];
  repo: string;
  url?: string;
  gradient: string;
};

export async function Projects() {
  const t = await getTranslations("projects");
  const projects = projectsData as Project[];

  const stats = await Promise.all(
    projects.map(async (p) =>
      p.visibility === "public" ? (await getRepoStats(p.repo)).stars : null,
    ),
  );

  return (
    <section id="projects" className="px-8 py-24">
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel>{t("label")}</SectionLabel>
        <SectionHeading
          before={t("headingA")}
          highlight={t("headingHighlight")}
          after={t("headingB")}
        />
        <SectionLede>{t("lede")}</SectionLede>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => {
            const stars = stats[i];
            const isPublic = p.visibility === "public";
            const Wrapper = ({ children }: { children: React.ReactNode }) =>
              isPublic && p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-[18px] border border-border bg-card shadow-[0_1px_3px_rgb(15_17_23/0.04)] transition hover:-translate-y-0.5 hover:border-[rgb(168_85_247/0.4)] hover:shadow-[0_12px_32px_-16px_rgb(168_85_247/0.25)]"
                >
                  {children}
                </a>
              ) : (
                <div className="group overflow-hidden rounded-[18px] border border-border bg-card shadow-[0_1px_3px_rgb(15_17_23/0.04)]">
                  {children}
                </div>
              );

            return (
              <Wrapper key={p.slug}>
                <div
                  className={`relative aspect-[16/9] bg-gradient-to-br ${p.gradient} flex items-center justify-center font-mono text-[13px] text-white/85`}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgb(255_255_255/0.18),transparent_60%)]"
                  />
                  <span className="relative">{p.name} · preview</span>
                </div>
                <div className="p-6">
                  <div className="mb-2.5 flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] uppercase tracking-[0.06em] ${
                        isPublic
                          ? "border-border bg-surface-sub text-faint"
                          : "border-[rgb(194_120_10/0.25)] bg-[rgb(245_158_11/0.06)] text-[rgb(194_120_10)]"
                      }`}
                    >
                      {isPublic ? t("visPublic") : t("visPrivate")}
                    </span>
                  </div>
                  <p className="mb-4 text-sm leading-[1.6] text-muted-foreground">
                    {t(p.descKey)}
                  </p>
                  <div className="mb-3.5 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-soft bg-surface-sub px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-[13px]">
                    {isPublic ? (
                      <span className="text-[rgb(59_130_246)] font-medium transition group-hover:text-[rgb(168_85_247)]">
                        {t("viewOnGithub")}
                      </span>
                    ) : (
                      <span className="text-faint">{t("privateRepo")}</span>
                    )}
                    {stars !== null && stars !== undefined && (
                      <span className="inline-flex items-center gap-1 text-faint">
                        <Star size={12} /> {stars}
                      </span>
                    )}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
