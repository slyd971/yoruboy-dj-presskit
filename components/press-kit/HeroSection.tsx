import Link from "next/link";
import { Disc3, Play } from "lucide-react";
import type { PressKitConfig } from "@/data/config";
import type { TemplateVariantId } from "@/data/templates";

type HeroSectionProps = {
  heroVariants: PressKitConfig["heroVariants"];
  variant: TemplateVariantId;
};

export function HeroSection({ heroVariants, variant }: HeroSectionProps) {
  const hero = heroVariants[variant];
  const hasHeroImage = Boolean(hero.image.src);
  const hasEyebrow = Boolean(hero.eyebrow.trim());

  const heroFallback = (
    <div className="relative flex h-[48svh] w-full items-end overflow-hidden rounded-[1.2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_100%)] md:h-[76svh] md:rounded-[1.4rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgb(var(--pk-accent-rgb)/0.35),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.08),transparent_18%),linear-gradient(180deg,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.52)_100%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--pk-accent-soft)] md:text-xs md:tracking-[0.3em]">
          {hero.image.badge}
        </div>
        <div className="mt-3 max-w-xs text-2xl font-black uppercase leading-tight text-white md:max-w-md md:text-4xl">
          {hero.image.caption}
        </div>
      </div>
    </div>
  );

  if (hero.layout === "interactive") {
    return (
      <section
        id="home"
        className="relative scroll-mt-24 overflow-hidden pt-16 md:pt-20"
      >
        <div className="absolute inset-0">
          {hasHeroImage ? (
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <div className="h-full w-full bg-[linear-gradient(180deg,#120805_0%,#050505_100%)]" />
          )}
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(var(--pk-accent-rgb)/0.22),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_24%),radial-gradient(circle_at_50%_100%,rgb(var(--pk-accent-rgb)/0.12),transparent_32%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--pk-bg)] via-black/35 to-black/20" />
        </div>

        <div className="relative mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-center px-4 py-10 md:min-h-[82svh] md:px-6 md:py-12 lg:min-h-[78svh] lg:justify-start lg:pt-16 lg:pb-8">
          <div className="w-full max-w-3xl">
            {hasEyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/75 backdrop-blur-md md:px-4 md:py-2 md:text-[11px] md:tracking-[0.28em]">
                <Disc3 className="h-3 w-3 text-[var(--pk-accent)] md:h-3.5 md:w-3.5" />
                {hero.eyebrow}
              </div>
            )}

            <h1 className="mt-5 text-[2.8rem] font-black uppercase leading-[0.88] tracking-tight text-white sm:text-6xl md:mt-7 md:text-7xl xl:text-[7.2rem]">
              {hero.title}
              <span className="block text-[var(--pk-accent)]">{hero.accent}</span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-6 text-white/78 md:mt-10 md:text-xl md:leading-8">
              {hero.description}
            </p>
          </div>

          <div className="mt-6 grid gap-5 lg:mt-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            {hero.mediaCard && (
              <a
                href={hero.mediaCard.href}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 text-left backdrop-blur-sm transition duration-300 hover:border-[rgb(var(--pk-accent-rgb)/0.4)] hover:shadow-[0_0_30px_rgb(var(--pk-accent-rgb)/0.14)] md:rounded-[2rem]"
              >
                <img
                  src={hero.mediaCard.imageSrc}
                  alt={hero.mediaCard.imageAlt}
                  className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-[1.03] md:h-[300px] lg:h-[300px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-[var(--pk-accent)] text-white shadow-2xl shadow-black/40 transition duration-300 group-hover:scale-105 group-hover:bg-[var(--pk-accent-strong)] md:h-20 md:w-20">
                    <Play className="ml-0.5 h-6 w-6 fill-current md:h-7 md:w-7" />
                  </div>
                </div>

                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur-sm md:left-5 md:top-5 md:text-[10px]">
                  {hero.mediaCard.label}
                </div>

                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 md:inset-x-5 md:bottom-5">
                  <div>
                    <div className="text-lg font-black uppercase leading-tight text-white md:text-2xl">
                      {hero.mediaCard.title}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/60 md:text-xs md:tracking-[0.24em]">
                      {hero.mediaCard.subtitle}
                    </div>
                  </div>
                </div>
              </a>
            )}

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.2rem] border border-white/10 bg-black/35 p-3.5 backdrop-blur-md md:rounded-[1.6rem] md:p-5"
                >
                  <div className="max-w-[10ch] text-xl font-black uppercase leading-[0.95] text-[var(--pk-accent)] md:text-[1.4rem] md:leading-[0.92] xl:text-[1.55rem]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[10px] uppercase leading-[1.3] tracking-[0.14em] text-white/55 md:mt-3 md:min-h-[2.4rem] md:text-[12px] md:leading-[1.2] md:tracking-[0.16em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (hero.layout === "showcase") {
    return (
      <section
        id="home"
        className="relative scroll-mt-24 overflow-hidden pt-16 md:pt-20"
      >
        <div className="absolute inset-0">
          {hasHeroImage ? (
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <div className="h-full w-full bg-[linear-gradient(180deg,#120805_0%,#050505_100%)]" />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(var(--pk-accent-rgb)/0.22),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_50%_100%,rgb(var(--pk-accent-rgb)/0.12),transparent_32%)]" />
          <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:34px_34px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--pk-bg)] via-black/30 to-black/20" />
        </div>

        <div className="relative mx-auto flex min-h-[90svh] max-w-7xl flex-col justify-center px-4 py-10 md:min-h-[84svh] md:px-6 md:py-12 lg:min-h-[82svh] lg:justify-start lg:pt-20 lg:pb-10">
          <div className="w-full max-w-3xl">
            {hasEyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/75 backdrop-blur-md md:px-4 md:py-2 md:text-[11px] md:tracking-[0.28em]">
                <Disc3 className="h-3 w-3 text-[var(--pk-accent)] md:h-3.5 md:w-3.5" />
                {hero.eyebrow}
              </div>
            )}

            <h1 className="mt-5 text-[2.9rem] font-black uppercase leading-[0.88] tracking-tight text-white sm:text-6xl md:mt-7 md:text-7xl xl:text-[7.4rem]">
              {hero.title}
              <span className="block text-[var(--pk-accent)]">{hero.accent}</span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-6 text-white/78 md:mt-10 md:text-xl md:leading-8">
              {hero.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5 md:mt-9 md:gap-3">
              {hero.ctas.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  className={
                    cta.variant === "primary"
                      ? "rounded-full bg-[var(--pk-accent)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--pk-accent-strong)] md:px-7 md:py-3 md:text-sm md:tracking-[0.22em]"
                      : "rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/30 hover:bg-white/10 md:px-7 md:py-3 md:text-sm md:tracking-[0.22em]"
                  }
                >
                  {cta.label}
                </a>
              ))}
            </div>

            {hero.footerNote && (
              <div className="mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/50 md:mt-12 md:text-[11px] md:tracking-[0.28em]">
                <span className="h-px w-10 bg-white/20 md:w-14" />
                {hero.footerNote}
              </div>
            )}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:grid-cols-4 md:gap-4">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.2rem] border border-white/10 bg-black/35 p-3.5 backdrop-blur-md md:rounded-[1.6rem] md:p-5"
              >
                <div className="max-w-[10ch] text-xl font-black uppercase leading-[0.95] text-[var(--pk-accent)] md:text-[1.65rem] md:leading-[0.9] xl:text-[1.85rem]">
                  {stat.value}
                </div>
                <div className="mt-2 text-[10px] uppercase leading-[1.3] tracking-[0.14em] text-white/55 md:mt-3 md:min-h-[2.4rem] md:text-[12px] md:leading-[1.2] md:tracking-[0.16em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden pt-22 md:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(181,31,36,0.20),transparent_26%),radial-gradient(circle_at_80%_6%,rgba(217,37,42,0.10),transparent_20%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.04),transparent_28%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0305]/20 via-transparent to-[#050505]" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-8 px-4 pb-8 md:grid-cols-[1.02fr_0.98fr] md:gap-10 md:px-6 md:pb-14">
        <div className="relative order-1 md:order-2">
          <div className="absolute -left-8 top-12 h-32 w-32 rounded-full bg-[rgb(var(--pk-accent-rgb)/0.25)] blur-3xl" />
          <div className="absolute -right-6 bottom-8 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 p-2.5 shadow-2xl shadow-black/40 backdrop-blur-sm md:rounded-[2rem] md:p-3">
            {hasHeroImage ? (
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                className="h-[48svh] w-full rounded-[1.2rem] object-cover object-center md:h-[76svh] md:rounded-[1.4rem]"
              />
            ) : (
              heroFallback
            )}

            <div className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-t from-black/60 via-black/15 to-transparent md:rounded-[2rem]" />

            <div className="absolute inset-x-4 bottom-4 rounded-[1.1rem] border border-white/10 bg-black/45 p-4 backdrop-blur-md md:inset-x-8 md:bottom-8 md:rounded-[1.5rem] md:p-5">
              <div className="text-[9px] uppercase tracking-[0.22em] text-[var(--pk-accent-soft)] md:text-[11px] md:tracking-[0.28em]">
                {hero.image.badge}
              </div>
              <div className="mt-2 text-lg font-black uppercase leading-tight md:text-3xl">
                {hero.image.caption}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 order-2 md:order-1">
          {hasEyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-sm md:mb-5 md:px-4 md:py-2 md:text-[11px] md:tracking-[0.28em]">
              <Disc3 className="h-3 w-3 text-[var(--pk-accent)] md:h-3.5 md:w-3.5" />
              {hero.eyebrow}
            </div>
          )}

          <h1 className="max-w-4xl text-[2.45rem] font-black uppercase leading-[0.92] tracking-tight sm:text-5xl md:text-7xl xl:text-[7rem]">
            {hero.title}
            <span className="block text-[var(--pk-accent)]">{hero.accent}</span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-6 text-white/72 md:mt-10 md:text-lg md:leading-7">
            {hero.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5 md:mt-8 md:gap-3">
            {hero.ctas.map((cta) =>
              cta.href.startsWith("/") ? (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className={
                    cta.variant === "primary"
                      ? "rounded-full bg-[var(--pk-accent)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--pk-accent-strong)] md:px-7 md:py-3 md:text-sm md:tracking-[0.22em]"
                      : "rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/30 hover:bg-white/10 md:px-7 md:py-3 md:text-sm md:tracking-[0.22em]"
                  }
                >
                  {cta.label}
                </Link>
              ) : (
                <a
                  key={cta.href}
                  href={cta.href}
                  className={
                    cta.variant === "primary"
                      ? "rounded-full bg-[var(--pk-accent)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--pk-accent-strong)] md:px-7 md:py-3 md:text-sm md:tracking-[0.22em]"
                      : "rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/30 hover:bg-white/10 md:px-7 md:py-3 md:text-sm md:tracking-[0.22em]"
                  }
                >
                  {cta.label}
                </a>
              )
            )}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-2 md:gap-4 xl:grid-cols-4">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.2rem] border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm md:rounded-[1.8rem] md:p-5"
              >
                <div className="max-w-[9ch] text-xl font-black uppercase leading-[0.95] text-[var(--pk-accent)] md:text-[1.5rem] md:leading-[0.92] xl:text-[1.7rem]">
                  {stat.value}
                </div>
                <div className="mt-2 text-[10px] uppercase leading-[1.3] tracking-[0.14em] text-white/50 md:mt-3 md:min-h-[2.1rem] md:text-[12px] md:leading-[1.15] md:tracking-[0.16em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
