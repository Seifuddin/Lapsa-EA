
import {
  ShieldCheck,
  Lightbulb,
  Target,
  Handshake,
} from "lucide-react";

const advantages = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Innovation Driven",
    description:
      "We explore better ways to solve problems through thoughtful technology.",
  },
  {
    number: "02",
    icon: Target,
    title: "Purpose Built",
    description:
      "Our solutions are designed around real needs, not unnecessary complexity.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Quality Focused",
    description:
      "We value reliable, maintainable and carefully developed solutions.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Client Partnership",
    description:
      "We work collaboratively and keep your objectives at the centre.",
  },
];

export default function WhyLapsaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101D35] py-14 sm:py-16">
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 -z-10 h-80 w-80 rounded-full bg-[#174EA6]/25 blur-3xl"
      />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#F28C28]" />
              <span className="text-[10px] font-bold tracking-[2.3px] text-[#F28C28]">
                THE LAPSA DIFFERENCE
              </span>
            </div>

            <h2 className="max-w-[600px] text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Technology with a{" "}
              <span className="text-[#F28C28]">clear purpose.</span>
            </h2>
          </div>

          <p className="max-w-[390px] text-sm leading-7 text-white/60">
            We believe great technology should be useful, dependable and
            built around the people who use it.
          </p>
        </div>

        {/* Advantages */}
        <div className="grid grid-cols-1 border-l border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group border-b border-r border-white/10 px-5 py-5 transition-colors hover:bg-white/[0.04] sm:py-6 lg:px-5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[#F28C28] transition-colors group-hover:border-[#F28C28]/40 group-hover:bg-[#F28C28]/10">
                    <Icon size={19} />
                  </div>

                  <span className="text-[10px] font-bold tracking-widest text-white/30">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/55">
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
