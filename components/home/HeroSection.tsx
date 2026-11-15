
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-background text-foreground">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-7 py-8 sm:grid-cols-2 sm:gap-9 sm:py-10 lg:gap-12 lg:py-12">

          {/* Content */}
          <div className="max-w-[610px]">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-7 bg-accent" />
              <span className="text-[9px] font-bold uppercase tracking-[2px] text-primary sm:text-[10px]">
                Technology · Software · Digital Innovation
              </span>
            </div>

            <h1 className="text-[36px] font-bold leading-[1.08] tracking-[-1.8px] sm:text-[39px] lg:text-[48px] lg:tracking-[-2.3px]">
              Building technology.
              <span className="block text-primary">
                Empowering businesses.
              </span>
              <span className="block">Shaping the future.</span>
            </h1>

            <p className="mt-4 max-w-[490px] text-[13px] leading-6 text-muted sm:text-sm sm:leading-7">
              We create digital experiences, intelligent software and
              technology-driven solutions that help businesses grow,
              operate better and embrace new possibilities.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex h-10 items-center gap-2.5 rounded-md bg-primary px-5 text-xs font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Start a Project
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-xs font-semibold text-foreground transition-colors hover:text-primary"
              >
                Explore Solutions
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4">
              <span className="flex items-center gap-1.5 text-[10px] font-medium text-muted">
                <Check size={12} className="text-accent" />
                Purpose-built solutions
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-medium text-muted">
                <Check size={12} className="text-accent" />
                Technology that delivers
              </span>
            </div>
          </div>

          {/* Photography */}
          <div className="relative">
            <div className="relative aspect-[1.2/1] w-full overflow-hidden rounded-xl bg-surface-muted">
              <Image
                src="/images/hero/hero.jpg"
                alt="Modern technology and digital innovation workspace"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D35]/35 to-transparent" />
            </div>

            <div className="absolute -bottom-2 -right-2 -z-10 h-20 w-20 rounded-br-xl border-b-2 border-r-2 border-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
