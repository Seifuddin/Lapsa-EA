
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="h-10 w-[116px] rounded-lg border border-border bg-surface"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="relative flex h-10 items-center gap-2 rounded-lg border border-border bg-surface px-3 transition-colors">
      {theme === "dark" ? (
        <Moon size={16} className="text-primary" />
      ) : theme === "light" ? (
        <Sun size={16} className="text-primary" />
      ) : (
        <Monitor size={16} className="text-primary" />
      )}

      <select
        value={theme ?? "system"}
        onChange={(event) => setTheme(event.target.value)}
        aria-label="Choose color theme"
        className="h-full cursor-pointer appearance-none bg-transparent pr-4 text-sm font-medium text-foreground outline-none"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  );
}
