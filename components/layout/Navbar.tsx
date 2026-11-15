
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import ThemeToggle from "@/components/ui/ThemeToggle";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* Brand */}
        <Link
          href="/"
          aria-label="Lapsa East Africa home"
          className="group flex shrink-0 flex-col leading-none"
        >
          <span className="text-[29px] font-extrabold tracking-[-1.8px] text-foreground">
            Lapsa<span className="text-accent">.</span>
          </span>

          <span className="mt-1 text-[9px] font-bold tracking-[2.8px] text-muted">
            EAST AFRICA
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 xl:gap-8 lg:flex"
        >
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-2 text-[13px] font-semibold transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}

                {isActive && (
                  <span className="absolute inset-x-0 -bottom-[3px] h-[2px] rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <Link
            href="/contact"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-[13px] font-semibold text-white transition-all hover:bg-primary-hover"
          >
            Let's Talk
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-surface-muted"
          >
            {mobileMenuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-border bg-background shadow-xl lg:hidden"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-5 sm:px-8">
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col"
            >
              {navigation.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(`${item.href}/`));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center justify-between border-b border-border py-3.5 text-sm font-semibold transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}

                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact"
              className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </Link>

            <p className="mt-5 text-center text-[10px] font-semibold tracking-[2px] text-muted">
              TECHNOLOGY · SOFTWARE · DIGITAL INNOVATION
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
