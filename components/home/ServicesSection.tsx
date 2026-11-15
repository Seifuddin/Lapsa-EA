
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe2,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Software & Systems",
    description:
      "Purpose-built software and digital systems designed to solve practical problems and improve how organizations operate.",
    tags: ["Custom Software", "Business Systems", "Digital Solutions"],
  },
  {
    number: "02",
    icon: Globe2,
    title: "Web & Digital Platforms",
    description:
      "Modern websites and digital platforms that strengthen your online presence, connect with customers and support growth.",
    tags: ["Web Development", "Web Applications", "Digital Experiences"],
  },
  {
    number: "03",
    icon: Workflow,
    title: "Business Technology",
    description:
      "Technology-driven solutions that simplify processes, improve efficiency and help businesses work smarter.",
    tags: ["Process Improvement", "Digital Transformation", "Automation"],
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-accent" />
              <span className="text-[11px] font-bold tracking-[2.5px] text-primary">
                WHAT WE DO
              </span>
            </div>

            <h2 className="max-w-[680px] text-[36px] font-bold leading-[1.13] tracking-[-1.5px] text-foreground sm:text-5xl lg:text-[56px]">
              Technology solutions for a{" "}
              <span className="text-primary">changing world.</span>
            </h2>
          </div>

          <div className="max-w-[460px] lg:pb-2">
            <p className="text-[15px] leading-8 text-muted sm:text-base">
              We combine technical expertise and forward-thinking ideas to
              create solutions that help businesses adapt, innovate and
              achieve more.
            </p>

            <Link
              href="/services"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent"
            >
              Explore our services
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Services list */}
        <div className="border-t border-border">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                href="/services"
                key={service.number}
                className="group grid gap-5 border-b border-border py-7 transition-colors hover:bg-surface-muted/60 sm:grid-cols-[70px_1fr_1.2fr_42px] sm:items-center sm:gap-7 sm:py-9 lg:grid-cols-[90px_0.85fr_1.2fr_42px]"
              >
                {/* Number and icon */}
                <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-3">
                  <span className="text-xs font-bold tracking-widest text-muted/60">
                    {service.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon size={20} />
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-[22px]">
                    {service.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="max-w-[490px] text-sm leading-7 text-muted">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-white sm:flex">
                  <ArrowUpRight size={18} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl bg-[#101D35] px-6 py-6 sm:flex-row sm:items-center sm:px-8">
          <div>
            <p className="text-sm font-semibold text-white">
              Have a technology challenge to solve?
            </p>
            <p className="mt-1 text-xs leading-5 text-white/60">
              Let's explore what we can build together.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center gap-2 self-start rounded-lg bg-[#F28C28] px-5 text-sm font-bold text-white transition-colors hover:bg-[#DB7515] sm:self-auto"
          >
            Talk to our team
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
