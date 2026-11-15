
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  GraduationCap,
  LayoutDashboard,
  MonitorSmartphone,
} from "lucide-react";

const solutions = [
  {
    number: "01",
    icon: GraduationCap,
    title: "School Management Systems",
    description: "Digital tools for managing school operations and information.",
  },
  {
    number: "02",
    icon: Boxes,
    title: "Business Management Systems",
    description: "Connected systems for everyday business operations.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Custom Digital Platforms",
    description: "Purpose-built platforms designed around specific needs.",
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-surface py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Compact section heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-accent" />
              <span className="text-[10px] font-bold tracking-[2.3px] text-primary">
                WHAT WE BUILD
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ideas into <span className="text-primary">solutions.</span>
            </h2>
          </div>

          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
          >
            Explore our solutions
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Main showcase */}
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Featured panel */}
          <div className="relative isolate overflow-hidden rounded-2xl bg-[#101D35] p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full bg-[#174EA6]/40 blur-3xl"
            />

            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-white/70">
                DIGITAL PRODUCTS
              </span>
              <MonitorSmartphone size={19} className="text-[#F28C28]" />
            </div>

            <div className="mt-9 max-w-[440px]">
              <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                Technology built around the way you work.
              </h3>

              <p className="mt-3 max-w-[390px] text-sm leading-6 text-white/65">
                From business applications to custom management platforms,
                we turn operational challenges into practical digital tools.
              </p>
            </div>

            {/* Dashboard-inspired visual */}
            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.06] p-3 sm:p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#F28C28]" />
                  <span className="text-[10px] font-semibold tracking-wider text-white/75">
                    DIGITAL WORKSPACE
                  </span>
                </div>
                <span className="text-[9px] text-white/40">LAPSA SYSTEMS</span>
              </div>

              <div className="grid grid-cols-[42px_1fr] gap-2">
                <div className="flex flex-col items-center gap-3 rounded-lg bg-white/[0.05] py-3 text-white/40">
                  <LayoutDashboard size={15} />
                  <Boxes size={15} />
                  <BarChart3 size={15} />
                </div>

                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="h-12 rounded-lg border border-white/10 bg-white/[0.05] p-2"
                      >
                        <div className="h-1 w-6 rounded bg-white/25" />
                        <div className="mt-2 h-2 w-9 rounded bg-[#F28C28]/70" />
                      </div>
                    ))}
                  </div>
                  <div className="flex h-12 items-end gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-3 pb-2">
                    {[35, 65, 45, 85, 55, 95, 70, 100, 60].map(
                      (height, index) => (
                        <span
                          key={index}
                          className="flex-1 rounded-t-sm bg-[#4F83CC]/80"
                          style={{ height: `${height}%` }}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#F28C28]"
            >
              Discuss a custom solution
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Solution list */}
          <div className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-background px-5 sm:px-7">
            <div className="flex items-center justify-between py-4">
              <p className="text-[10px] font-bold tracking-[2px] text-muted">
                SOLUTIONS WE CAN DEVELOP
              </p>
              <span className="text-xs font-semibold text-primary">03</span>
            </div>

            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <Link
                  href="/contact"
                  key={solution.number}
                  className="group flex items-center gap-4 py-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-[9px] font-bold text-accent">
                        {solution.number}
                      </span>
                      <h3 className="text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="text-xs leading-5 text-muted">
                      {solution.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  />
                </Link>
              );
            })}

            <div className="flex items-center justify-between gap-3 py-4">
              <p className="text-xs text-muted">
                Have a different idea in mind?
              </p>
              <Link
                href="/contact"
                className="shrink-0 text-xs font-bold text-primary hover:text-accent"
              >
                Let's talk →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
