
import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface WebsiteLayoutProps {
  children: ReactNode;
}

export default function WebsiteLayout({
  children,
}: WebsiteLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
