import Link from "next/link";
import { PanelCard } from "@/components/panel-card";
import { SectionHeader } from "@/components/section-header";
import { getAllInsights } from "@/lib/insights";

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <div className="space-y-8">
      <SectionHeader index="01" title="INSIGHTS" />
      <h1 className="text-4xl font-semibold tracking-tight">System design notes from live work</h1>
      <div className="space-y-4">
        {insights.map((insight) => (
          <PanelCard key={insight.slug}>
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">{insight.date}</p>
            <h2 className="mt-2 text-2xl font-semibold">
              <Link href={`/insights/${insight.slug}`} className="hover:text-accent">
                {insight.title}
              </Link>
            </h2>
            <p className="mt-2 text-secondary">{insight.description}</p>
          </PanelCard>
        ))}
      </div>
    </div>
  );
}
