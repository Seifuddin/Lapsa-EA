
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  BriefcaseBusiness,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
  Factory,
} from "lucide-react";

const industries = [
  {
    number: "01",
    icon: GraduationCap,
    name: "Education",
    description: "School systems and digital learning platforms.",
  },
  {
    number: "02",
    icon: HeartPulse,
    name: "Healthcare",
    description: "Healthcare management and digital experiences.",
  },
  {
    number: "03",
    icon: Building2,
    name: "Construction & Real Estate",
    description: "Project, property and business management tools.",
  },
  {
    number: "04",
    icon: ShoppingBag,
    name: "Retail & Commerce",
    description: "Inventory, sales and customer solutions.",
  },
  {
    number: "05",
    icon: BriefcaseBusiness,
    name: "Professional Services",
    description: "Digital platforms for modern service businesses.",
  },
  {
    number: "06",
    icon: Landmark,
    name: "Organizations",
    description: "Information and operational management systems.",
  },
  {
    number: "07",
    icon: Truck,
    name: "Transport & Logistics",
    description: "Tools for coordination and operational efficiency.",
  },
  {
    number: "08",
    icon: Factory,
    name: "Manufacturing",
    description: "Technology for production and business operations.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-background py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="mb-9 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-accent" />
              <span className="text-[10px] font-bold tracking-[2.3px] text-primary">
                WHO WE SERVE
              </span>
            </div>

            <h2 className="max-w-[650px] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[42px]">
              Technology for every{" "}
              <span className="text-primary">industry.</span>
            </h2>
          </div>

          <p className="max-w-[410px] text-sm leading-7 text-muted">
            Every industry has unique challenges. We develop digital
            solutions that adapt to the people, processes and ambitions
            behind each one.
          </p>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <Link
                href="/contact"
                key={industry.number}
                className="group relative flex min-h-[126px] items-start gap-3 border-b border-r border-border p-4 transition-colors hover:bg-surface-muted sm:min-h-[140px] sm:p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-[9px] font-bold tracking-wider text-accent">
                      {industry.number}
                    </span>
                    <ArrowUpRight
                      size={13}
                      className="text-muted opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </div>

                  <h3 className="text-sm font-bold leading-5 text-foreground group-hover:text-primary">
                    {industry.name}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-muted">
                    {industry.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            Don't see your industry? We can build around your needs.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-primary transition-colors hover:text-accent"
          >
            Discuss your requirements
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
