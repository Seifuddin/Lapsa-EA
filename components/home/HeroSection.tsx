
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-9 py-10 sm:gap-12 sm:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-[68px]">

          {/* LEFT: Content */}
          <div className="relative z-10 max-w-[650px]">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#F28C28]" />
              <span className="text-[10px] font-bold uppercase tracking-[2.3px] text-[#174EA6] sm:text-[11px]">
                Technology · Software · Digital Innovation
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-[42px] font-bold leading-[1.08] tracking-[-2px] text-[#101D35] sm:text-[52px] sm:tracking-[-2.8px] lg:text-[60px] lg:leading-[1.04]">
              Building technology.
              <span className="block text-[#174EA6]">
                Empowering businesses.
              </span>
              <span className="block">
                Shaping the future.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[520px] text-[14px] leading-7 text-[#64748B] sm:text-[15px] sm:leading-[1.9]">
              We create digital experiences, intelligent software and
              technology-driven solutions that help businesses grow,
              operate better and embrace new possibilities.
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex h-11 items-center gap-3 rounded-md bg-[#174EA6] px-5 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#123F88]"
              >
                Start a Project
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2 py-2 text-[13px] font-semibold text-[#101D35] transition-colors hover:text-[#174EA6]"
              >
                Explore Solutions
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Supporting details */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#E2E8F0] pt-5">
              <div className="flex items-center gap-2 text-[11px] font-medium text-[#64748B]">
                <Check size={14} className="text-[#F28C28]" />
                Purpose-built solutions
              </div>

              <div className="flex items-center gap-2 text-[11px] font-medium text-[#64748B]">
                <Check size={14} className="text-[#F28C28]" />
                Technology that delivers
              </div>
            </div>
          </div>

          {/* RIGHT: Photography */}
          <div className="relative lg:pl-2">
            <div className="relative aspect-[5/4] min-h-[260px] w-full overflow-hidden rounded-[5px] bg-[#DCE5F0] sm:aspect-[1.15/1] lg:aspect-[1.04/1]">
              <Image
                src="/images/hero/hero.jpg"
                alt="Modern technology workspace representing innovation and digital development"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
              />

              {/* Subtle image treatment */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D35]/45 via-transparent to-transparent" />

              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 sm:p-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[2px] text-white/75">
                    The Lapsa vision
                  </p>
                  <p className="mt-1 text-lg font-semibold tracking-tight text-white sm:text-xl">
                    Innovation in action.
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm">
                  <ArrowUpRight size={19} />
                </div>
              </div>
            </div>

            {/* Small brand accent */}
            <div className="absolute -bottom-2 -right-2 -z-10 h-24 w-24 border-b-[3px] border-r-[3px] border-[#F28C28] sm:-bottom-3 sm:-right-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
