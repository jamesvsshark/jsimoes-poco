import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const insightsDir = path.join(process.cwd(), "content", "insights");

export type InsightMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export function getAllInsights(): InsightMeta[] {
  const files = fs.readdirSync(insightsDir).filter((file) => file.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(insightsDir, file), "utf8");
      const { data } = matter(raw);

      return {
        slug,
        title: String(data.title ?? slug),
        description: String(data.description ?? ""),
        date: String(data.date ?? ""),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getInsightBySlug(slug: string) {
  const raw = fs.readFileSync(path.join(insightsDir, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ""),
      date: String(data.date ?? ""),
    },
    content,
  };
}
