"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

type NavItem = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  navItems: NavItem[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative flex items-center justify-between border-b border-border py-6">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        POCO
      </Link>

      <div className="hidden items-center gap-5 md:flex">
        <nav className="flex items-center gap-5 text-sm text-secondary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>

      <button
        type="button"
        className="inline-flex items-center rounded-md border border-border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em] text-secondary hover:text-foreground md:hidden"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu-panel"
        aria-label="Toggle navigation menu"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        Menu
      </button>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"
            onClick={() => setIsMenuOpen(false)}
          />
          <aside
            id="mobile-menu-panel"
            className="absolute right-0 top-0 flex h-full w-[82vw] max-w-sm flex-col border-l border-border bg-background p-6"
          >
            <div className="mb-8 flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">Navigation</p>
              <button
                type="button"
                className="rounded-md border border-border px-2 py-1 text-xs text-secondary hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu panel"
              >
                Close
              </button>
            </div>
            <nav className="flex flex-col gap-4 text-base text-secondary">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-md px-2 py-2 hover:bg-panel hover:text-foreground ${
                    pathname === item.href ? "text-foreground" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto border-t border-border pt-5">
              <ThemeToggle />
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
