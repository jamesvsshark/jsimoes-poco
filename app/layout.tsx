import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://jamesvsshark.github.io/jsimoes-poco";
const shareImageUrl = `${resolvedSiteUrl}/og/poco-share.svg`;

export const metadata: Metadata = {
  metadataBase: new URL(resolvedSiteUrl),
  title: {
    default: "POCO | Systems That Run Business Operations",
    template: "%s | POCO",
  },
  description:
    "POCO designs and ships operational systems that remove workflow drag and improve decision velocity.",
  applicationName: "POCO",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: resolvedSiteUrl,
    siteName: "POCO",
    title: "POCO | Systems That Run Business Operations",
    description:
      "POCO designs and ships operational systems that remove workflow drag and improve decision velocity.",
    images: [
      {
        url: shareImageUrl,
        width: 1200,
        height: 630,
        alt: "POCO systems consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "POCO | Systems That Run Business Operations",
    description:
      "POCO designs and ships operational systems that remove workflow drag and improve decision velocity.",
    images: [shareImageUrl],
  },
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
          <SiteHeader navItems={navItems} />
          <main className="flex-1 py-12">{children}</main>
          <footer className="border-t border-border py-8 text-sm text-muted">
            Built for selective systems engagements.
          </footer>
        </div>
      </body>
    </html>
  );
}
