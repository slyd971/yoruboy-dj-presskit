import { Globe2, MapPin } from "lucide-react";
import type { PressKitConfig } from "@/data/config";

type ClubsSectionProps = {
  clubs: PressKitConfig["clubs"];
};

const iconMap = {
  globe: Globe2,
  "map-pin": MapPin,
};

export function ClubsSection({ clubs }: ClubsSectionProps) {
  return (
    <section
      id="clubs"
      className="scroll-mt-24 bg-[#0a0a0a] px-4 py-10 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-4xl md:mb-14">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:text-xs md:tracking-[0.35em]">
            {clubs.eyebrow}
          </div>
          <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
            {clubs.title}
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/62 md:mt-5 md:text-lg md:leading-8">
            {clubs.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          {clubs.regions.map((region) => {
            const Icon = iconMap[region.icon];

            return (
              <div key={region.title}>
                <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold md:mb-6 md:text-3xl">
                  <Icon className="h-5 w-5 text-[var(--pk-accent)] md:h-6 md:w-6" />
                  {region.title}
                </h3>

                <div className="grid grid-cols-2 gap-3 text-sm text-gray-300 md:gap-4 md:text-base">
                  {region.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-white/10 p-2.5 md:p-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
