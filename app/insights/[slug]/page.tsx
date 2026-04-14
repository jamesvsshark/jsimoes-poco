import { notFound } from "next/navigation";
import { getAllInsights, getInsightBySlug } from "@/lib/insights";
import { renderInsight } from "@/lib/mdx";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllInsights().map(({ slug }) => ({ slug }));
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const allInsights = getAllInsights();

  if (!allInsights.some((item) => item.slug == slug)) {
    notFound();
  }

  const insight = getInsightBySlug(slug);
  const content = await renderInsight(insight.content);

  return (
    <article className="mx-auto max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">{insight.meta.date}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">{insight.meta.title}</h1>
      <p className="mt-3 text-secondary">{insight.meta.description}</p>
      <div className="prose mt-10">{content}</div>
    </article>
  );
}
