import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(168_85_247/0.25)] bg-[rgb(168_85_247/0.08)] px-3 py-1 text-xs font-medium uppercase tracking-[0.06em] text-[rgb(139_92_246)]">
      {children}
    </div>
  );
}

export function SectionHeading({
  before,
  highlight,
  after,
}: {
  before: string;
  highlight: string;
  after?: string;
}) {
  return (
    <h2 className="mt-4 max-w-[720px] text-[clamp(2rem,5vw,2.625rem)] font-semibold leading-[1.15] tracking-[-0.025em]">
      {before}
      <span className="text-brand-grad">{highlight}</span>
      {after}
    </h2>
  );
}

export function SectionLede({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 mb-12 max-w-[620px] text-[17px] text-muted-foreground">
      {children}
    </p>
  );
}
