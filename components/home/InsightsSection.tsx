
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Newspaper } from "lucide-react";

const articles = [
  {
    number: "01",
    category: "DIGITAL TRANSFORMATION",
    title: "Why businesses need to embrace digital transformation",
    description:
      "How technology can improve business operations, customer experiences and long-term growth.",
    date: "Technology Insights",
    readTime: "5 min read",
  },
  {
    number: "02",
    category: "SOFTWARE & INNOVATION",
    title: "The role of custom software in solving business challenges",
    description:
      "Understanding how purpose-built systems can address specific operational needs.",
    date: "Software Insights",
    readTime: "4 min read",
  },
  {
    number: "03",
    category: "BUSINESS TECHNOLOGY",
    title: "Building a stronger digital presence for your business",
    description:
      "Why a well-designed digital presence matters in an increasingly connected world.",
    date: "Business Insights",
    readTime: "3 min read",
  },
];

export default function InsightsSection() {
  return (
    <section className="bg-surface py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-accent" />
              <span className="text-[10px] font-bold tracking-[2.3px] text-primary">
                INSIGHTS & PERSPECTIVES
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ideas worth <span className="text-primary">sharing.</span>
            </h2>
          </div>

          <Link
            href="/insights"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            Explore all insights
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Articles */}
        <div className="grid border-l border-t border-border md:grid-cols-3">
          {articles.map((article) => (
            <Link
              href="/insights"
              key={article.number}
              className="group flex flex-col border-b border-r border-border p-5 transition-colors hover:bg-background sm:p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Newspaper size={18} />
                </div>

                <span className="text-[10px] font-bold tracking-widest text-muted/50">
                  {article.number}
                </span>
              </div>

              <p className="mt-5 text-[9px] font-bold tracking-[1.5px] text-accent">
                {article.category}
              </p>

              <h3 className="mt-2 text-base font-bold leading-6 text-foreground transition-colors group-hover:text-primary">
                {article.title}
              </h3>

              <p className="mt-2 flex-1 text-xs leading-6 text-muted">
                {article.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="text-[10px] font-medium text-muted">
                  {article.date} · {article.readTime}
                </span>

                <ArrowUpRight
                  size={16}
                  className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
