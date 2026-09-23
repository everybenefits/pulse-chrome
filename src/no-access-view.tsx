"use client";

/** Presentational no-access screen — apps supply copy + destination URL. */
export function NoAccessView({
  title,
  body,
  ctaLabel,
  href,
}: {
  title: string;
  body: string;
  ctaLabel: string;
  href: string;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--mesh-base)] p-6">
      <div className="studio-panel max-w-md p-8 text-center">
        <h1 className="font-display text-2xl text-ink">{title}</h1>
        <p className="mt-3 text-sm text-muted">{body}</p>
        <a
          href={href}
          className="mt-6 inline-flex h-10 items-center rounded-xl bg-brand px-4 text-sm font-semibold text-on-brand"
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
