import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ThemeToggle } from "./theme-toggle";
import { LangToggle } from "./lang-toggle";

export function Nav() {
  const t = useTranslations("nav");

  const links = [
    { href: "#about", key: "about" as const },
    { href: "#projects", key: "projects" as const },
    { href: "#writing", key: "writing" as const },
    { href: "#contact", key: "contact" as const },
  ];

  return (
    <nav className="sticky top-0 z-30 border-b border-border-soft bg-background/70 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center gap-3 text-base font-semibold">
          <span
            aria-hidden
            className="brand-grad h-[22px] w-[22px] rounded-full shadow-[0_4px_16px_rgba(168,85,247,0.35)]"
          />
          <span>lumen</span>
        </Link>

        <div className="hidden gap-7 text-sm md:flex">
          {links.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              className="text-muted-foreground transition hover:text-foreground"
            >
              {t(key)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <LangToggle />
          <ThemeToggle />
          <Link
            href="#contact"
            className="brand-grad ml-2 hidden rounded-full px-4 py-2 text-sm font-medium text-white transition hover:opacity-92 sm:inline-flex"
          >
            {t("contactCta")}
          </Link>
        </div>
      </div>
    </nav>
  );
}
