import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-border-soft py-10">
      <div className="mx-auto max-w-[1100px] px-8 text-center text-sm text-faint">
        {t("copyright")}
      </div>
    </footer>
  );
}
