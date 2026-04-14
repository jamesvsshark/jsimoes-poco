import { Button } from "@/components/button";
import { PanelCard } from "@/components/panel-card";
import { SectionHeader } from "@/components/section-header";

export default function ThankYouPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <SectionHeader index="01" title="THANK YOU" />
      <h1 className="text-4xl font-semibold tracking-tight">Submission received.</h1>
      <PanelCard>
        <p className="text-secondary">
          I review each request personally. Expect a response within 24-48 hours when there is
          strong fit, clear operational need, and implementation readiness.
        </p>
      </PanelCard>
      <p className="text-sm text-muted">
        POCO takes on a limited number of engagements to maintain system quality, decision speed,
        and execution depth.
      </p>
      <Button href="/case-studies" variant="secondary">
        Review case studies
      </Button>
    </div>
  );
}
