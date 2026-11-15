import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";

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
    </>
  );
}