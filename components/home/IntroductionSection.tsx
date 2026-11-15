import {
  ArrowUpRight,
  Code2,
  Lightbulb,
  Workflow,
} from "lucide-react";

const highlights = [
  {
    number: "01",
    icon: Code2,
    title: "Digital Development",
    description: "Building useful digital products and platforms.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Business Solutions",
    description: "Making business processes work smarter.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Forward Thinking",
    description: "Turning new ideas into practical solutions.",
  },
];

export default function IntroductionSection() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Section heading */}
        <div className="mb-14 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-accent" />
          <p className="text-[11px] font-bold tracking-[2.5px] text-primary">
            WHO WE ARE
          </p>
        </div>

        {/* Main introduction */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">

          {/* Left statement */}
          <div>
            <h2 className="max-w-[720px] text-[36px] font-bold leading-[1.13] tracking-[-1.5px] text-foreground sm:text-5xl sm:tracking-[-2px] lg:text-[58px]">
              Technology should move your business{" "}
              <span className="text-primary">forward.</span>
            </h2>
          </div>

          {/* Right description */}
          <div className="max-w-[510px] lg:pb-2">
            <p className="text-[15px] leading-8 text-muted sm:text-base">
              At Lapsa East Africa, we believe technology is more than just
              tools and software. It is an opportunity to solve problems,
              unlock potential and create better ways of doing things.
            </p>

            <p className="mt-4 text-[15px] leading-8 text-muted sm:text-base">
              We bring together creativity, technical expertise and
              innovation to develop digital solutions that help businesses
              and organizations move confidently into the future.
            </p>

            <a
              href="/about"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-bold text-primary transition-colors hover:text-accent"
            >
              Discover Lapsa
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </div>
        </div>

        {/* Capability highlights */}
        <div className="mt-16 grid border-t border-border sm:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group border-b border-border py-7 sm:border-b-0 sm:px-6 sm:py-8 sm:first:pl-0 sm:last:pr-0 sm:not-first:border-l"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon size={19} />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-muted/60">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-6 text-base font-bold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-[260px] text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}