
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Makyn Construction",
    category: "Corporate Website",
    description:
      "A professional digital presence for a construction company, showcasing its services, projects and expertise.",
    image: "/images/projects/makyn-preview.jpg",
    size: "featured",
  },
  {
    number: "02",
    name: "Josro Bridge International",
    category: "Education & Consultancy",
    description:
      "A digital platform connecting people with education and international career opportunities.",
    image: "/images/projects/josro-preview.jpg",
    size: "small",
  },
  {
    number: "03",
    name: "Lapsa Digital Platforms",
    category: "Technology & Software",
    description:
      "Exploring practical digital products and technology solutions for modern businesses.",
    image: "/images/projects/lapsa-preview.jpg",
    size: "small",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-background py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-accent" />
              <span className="text-[10px] font-bold tracking-[2.3px] text-primary">
                SELECTED WORK
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ideas brought to <span className="text-primary">life.</span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            View all projects
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Project showcase */}
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Featured project */}
          <Link
            href="/projects"
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
              <Image
                src={projects[0].image}
                alt={projects[0].name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D35]/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <span className="text-[10px] font-bold tracking-[2px] text-[#F28C28]">
                  FEATURED PROJECT · {projects[0].number}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  {projects[0].name}
                </h3>

                <p className="mt-1 text-xs text-white/70">
                  {projects[0].category}
                </p>

                <div className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-all group-hover:border-[#F28C28] group-hover:bg-[#F28C28]">
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </div>
          </Link>

          {/* Supporting projects */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {projects.slice(1).map((project) => (
              <Link
                href="/projects"
                key={project.number}
                className="group grid grid-cols-[112px_1fr] gap-4 overflow-hidden rounded-2xl border border-border bg-surface p-3 transition-colors hover:border-primary/30 sm:grid-cols-[140px_1fr] lg:grid-cols-[160px_1fr]"
              >
                <div className="relative min-h-[125px] overflow-hidden rounded-xl bg-surface-muted">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 40vw, 180px"
                  />
                </div>

                <div className="flex min-w-0 flex-col justify-center py-1">
                  <span className="text-[9px] font-bold tracking-widest text-accent">
                    PROJECT {project.number}
                  </span>

                  <h3 className="mt-2 text-sm font-bold leading-5 text-foreground transition-colors group-hover:text-primary">
                    {project.name}
                  </h3>

                  <p className="mt-1 text-[10px] font-medium text-muted">
                    {project.category}
                  </p>

                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted">
                    {project.description}
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-primary">
                    Explore project
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
