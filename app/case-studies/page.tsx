import { Button } from "@/components/button";
import { PanelCard } from "@/components/panel-card";
import { SectionHeader } from "@/components/section-header";

export default function CaseStudiesIndexPage() {
  return (
    <div className="space-y-8">
      <SectionHeader index="01" title="CASE STUDIES" />
      <h1 className="text-4xl font-semibold tracking-tight">Selected systems work</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <PanelCard>
          <h2 className="text-2xl font-semibold">Mid-sized construction company (New England)</h2>
          <p className="mt-2 text-secondary">
            Field-to-payroll operational system with approval states and tighter execution loops.
          </p>
          <div className="mt-5">
            <Button href="/case-studies/construction-operations-system" variant="secondary">
              View Case
            </Button>
          </div>
        </PanelCard>
        <PanelCard>
          <h2 className="text-2xl font-semibold">Field service business with 10+ employees</h2>
          <p className="mt-2 text-secondary">
            AI-powered workflow design from voice capture to structured jobs and invoice output.
          </p>
          <div className="mt-5">
            <Button href="/case-studies/jobsmart" variant="secondary">
              View Case
            </Button>
          </div>
        </PanelCard>
      </div>
    </div>
  );
}
