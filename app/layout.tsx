import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "POCO | Systems That Run Business Operations",
  description:
    "POCO designs and ships operational systems that remove workflow drag and improve decision velocity.",
};

const navItems = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/james", label: "About" },
  { href: "/start", label: "Start" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable}`} suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">{`
          (() => {
            const stored = localStorage.getItem("theme");
            const theme = stored === "light" || stored === "dark" ? stored : "dark";
            document.documentElement.dataset.theme = theme;
          })();
        `}</Script>
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 md:px-10">
          <header className="flex items-center justify-between border-b border-border py-6">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              POCO
            </Link>
            <div className="flex items-center gap-5">
              <nav className="flex items-center gap-5 text-sm text-secondary">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="hover:text-foreground">
                    {item.label}
                  </Link>
                ))}
              </nav>
              <ThemeToggle />
            </div>
          </header>
          <main className="flex-1 py-12">{children}</main>
          <footer className="border-t border-border py-8 text-sm text-muted">
            Built for selective systems engagements.
          </footer>
        </div>
      </body>
    </html>
  );
}
