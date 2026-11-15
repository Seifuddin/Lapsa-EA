
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Globe2,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Lapsa", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const solutions = [
  "Software & Systems",
  "Web & Digital Platforms",
  "Business Technology",
  "Digital Transformation",
  "Custom Digital Solutions",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B1628] text-white">
      {/* Subtle brand atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 h-[420px] w-[420px] rounded-full bg-[#174EA6]/20 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 h-[350px] w-[350px] rounded-full bg-[#F28C28]/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Main footer content */}
        <div className="grid gap-12 border-b border-white/10 py-14 sm:py-16 lg:grid-cols-[1.35fr_0.7fr_0.85fr] lg:gap-16 lg:py-20">

          {/* Brand column */}
          <div className="max-w-md">
            <Link
              href="/"
              aria-label="Lapsa East Africa home"
              className="inline-flex items-center"
            >
              <span className="text-[2.15rem] font-extrabold tracking-[-0.075em] text-white">
                Lapsa<span className="text-[#F28C28]">.</span>
              </span>
              <span className="ml-3 border-l border-white/20 pl-3 text-[10px] font-bold uppercase leading-[1.5] tracking-[0.2em] text-white/60">
                East
                <br />
                Africa
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              We build technology, develop software and create digital
              solutions that help businesses move forward. Turning ideas
              into meaningful innovation.
            </p>

            <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F28C28]">
              <span className="h-px w-7 bg-[#F28C28]" />
              Technology. Software. Digital Innovation.
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Explore
            </h3>

            <ul className="mt-6 space-y-3.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions and CTA */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              What We Do
            </h3>

            <ul className="mt-6 space-y-3.5">
              {solutions.map((solution) => (
                <li
                  key={solution}
                  className="text-sm text-white/55"
                >
                  {solution}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="group mt-8 inline-flex h-11 items-center gap-3 rounded-lg bg-[#F28C28] px-5 text-sm font-bold text-[#101D35] transition-all hover:-translate-y-0.5 hover:bg-[#FFA447]"
            >
              Let's Work Together
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">
  © 2026 Lapsa East Africa. All rights reserved.
</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="inline-flex items-center gap-2 text-xs text-white/45">
              <Globe2 size={14} className="text-[#F28C28]" />
              Building beyond boundaries.
            </span>

            <Link
              href="/contact"
              className="text-xs text-white/45 transition-colors hover:text-white"
            >
              Get in touch <span className="text-[#F28C28]">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
