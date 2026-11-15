
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe2,
  Layers3,
  Sparkles,
} from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Software & Systems",
    description: "Purpose-built digital solutions",
  },
  {
    icon: Globe2,
    title: "Web & Digital Platforms",
    description: "Connected online experiences",
  },
  {
    icon: Layers3,
    title: "Business Technology",
    description: "Technology that works smarter",
  },
];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      {/* Subtle background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl"
      />

      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:px-12 lg:py-24">
        {/* Left content */}
        <div className="max-w-[650px]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-[10px] font-bold tracking-[2px] text-muted sm:text-[11px]">
              TECHNOLOGY · SOFTWARE · DIGITAL INNOVATION
            </span>
          </div>

          <h1 className="text-[42px] font-bold leading-[1.08] tracking-[-2px] text-foreground sm:text-5xl sm:tracking-[-2.5px] lg:text-[62px] lg:leading-[1.06]">
            Building technology.
            <span className="mt-1 block text-primary">
              Empowering businesses.
            </span>
            <span className="mt-1 block">
              Shaping the{" "}
              <span className="relative inline-block">
                future
                <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-accent/80" />
              </span>
              .
            </span>
          </h1>

          <p className="mt-7 max-w-[540px] text-[15px] leading-7 text-muted sm:text-base sm:leading-8">
            We create digital experiences, intelligent software and
            technology-driven solutions that help businesses grow,
            operate better and embrace new possibilities.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-[#174EA6] px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#123F88]"
            >
              Start a Project
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="/services"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Explore Solutions
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-border pt-6">
            <div className="flex items-center gap-2">
              <Sparkles size={15} className="text-accent" />
              <span className="text-xs font-medium text-muted">
                Innovation-led thinking
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Globe2 size={15} className="text-primary" />
              <span className="text-xs font-medium text-muted">
                Built for business growth
              </span>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto w-full max-w-[590px] lg:ml-auto">
          <div className="relative aspect-[1.04/1] overflow-hidden rounded-[28px] border border-border bg-surface p-4 shadow-[0_24px_80px_-35px_rgba(16,29,53,0.25)] sm:p-6">
            {/* Decorative grid */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
                maskImage:
                  "linear-gradient(to bottom right, black, transparent 90%)",
              }}
            />

            <div className="relative flex h-full flex-col justify-between">
              {/* Visual header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[2.5px] text-muted">
                    THE DIGITAL ECOSYSTEM
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    Ideas into impact.
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                  <Sparkles size={19} />
                </div>
              </div>

              {/* Central visual */}
              <div className="relative mx-auto flex w-full max-w-[390px] flex-1 items-center justify-center py-8">
                <div className="absolute h-[260px] w-[260px] rounded-full border border-primary/15 sm:h-[310px] sm:w-[310px]" />
                <div className="absolute h-[205px] w-[205px] rounded-full border border-dashed border-accent/40 sm:h-[250px] sm:w-[250px]" />

                <div className="relative z-10 flex h-[142px] w-[142px] flex-col items-center justify-center rounded-[30px] border border-primary/20 bg-background shadow-[0_20px_60px_-20px_rgba(23,78,166,0.3)] sm:h-[165px] sm:w-[165px]">
                  <span className="text-[34px] font-extrabold tracking-[-2px] text-foreground sm:text-[40px]">
                    Lapsa<span className="text-accent">.</span>
                  </span>
                  <span className="mt-1 text-[9px] font-bold tracking-[2.5px] text-muted">
                    DIGITAL INNOVATION
                  </span>
                  <div className="mt-4 h-1 w-10 rounded-full bg-accent" />
                </div>

                {/* Orbit markers */}
                <div className="absolute left-[4%] top-[22%] flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background text-primary shadow-lg sm:left-[8%] sm:h-14 sm:w-14">
                  <Code2 size={23} />
                </div>

                <div className="absolute right-[4%] top-[20%] flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background text-accent shadow-lg sm:right-[8%] sm:h-14 sm:w-14">
                  <Globe2 size={23} />
                </div>

                <div className="absolute bottom-[12%] left-[13%] flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background text-accent shadow-lg sm:left-[18%] sm:h-14 sm:w-14">
                  <Layers3 size={23} />
                </div>

                <div className="absolute bottom-[10%] right-[13%] flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background text-primary shadow-lg sm:right-[18%] sm:h-14 sm:w-14">
                  <Sparkles size={22} />
                </div>

                {/* Connection dots */}
                <span className="absolute left-[27%] top-[20%] h-2 w-2 rounded-full bg-accent" />
                <span className="absolute right-[27%] top-[21%] h-2 w-2 rounded-full bg-primary" />
                <span className="absolute bottom-[19%] left-[35%] h-2 w-2 rounded-full bg-primary" />
                <span className="absolute bottom-[18%] right-[35%] h-2 w-2 rounded-full bg-accent" />
              </div>

              {/* Capability labels */}
              <div className="grid grid-cols-3 gap-2 border-t border-border pt-4 sm:gap-3 sm:pt-5">
                {capabilities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="min-w-0">
                      <Icon size={17} className="mb-2 text-primary" />
                      <p className="text-[10px] font-bold leading-4 text-foreground sm:text-xs">
                        {item.title}
                      </p>
                      <p className="mt-1 hidden text-[10px] leading-4 text-muted sm:block">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Floating accent */}
          <div className="absolute -right-2 top-[24%] -z-10 h-20 w-20 rounded-full bg-accent/15 blur-2xl sm:-right-5" />
          <div className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 rounded-full bg-primary/15 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
