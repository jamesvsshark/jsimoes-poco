"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeHeadshotProps = {
  darkSrc: string;
  lightSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function ThemeHeadshot({
  darkSrc,
  lightSrc,
  alt,
  width,
  height,
  className = "",
}: ThemeHeadshotProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "dark";
    return document.documentElement.dataset.theme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setTheme(root.dataset.theme === "light" ? "light" : "dark");
    });
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <Image
      src={theme === "light" ? lightSrc : darkSrc}
      alt={alt}
      width={width}
      height={height}
      priority
      loading="eager"
      fetchPriority="high"
      sizes="(min-width: 768px) 320px, 80vw"
      className={className}
    />
  );
}
