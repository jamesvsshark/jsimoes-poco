import { Divider } from "@/components/divider";
import { PanelCard } from "@/components/panel-card";
import { SectionHeader } from "@/components/section-header";

export default function ConstructionOpsCaseStudyPage() {
  return (
    <article className="space-y-10">
      <SectionHeader index="01" title="CASE STUDY" />
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight">Mid-sized construction company (New England)</h1>
      <p className="max-w-3xl text-secondary">
        A field-first operations layer that replaced fragmented spreadsheets with a single system
        for time capture, approval logic, and payroll-ready output.
      </p>

      <Divider />

      <div className="grid gap-4 md:grid-cols-2">
        <PanelCard>
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="mt-2 text-secondary">
            Site teams and office staff operated across disconnected sheets and messages, creating
            payroll errors and delayed decision-making.
          </p>
        </PanelCard>
        <PanelCard>
          <h2 className="text-xl font-semibold">Goal</h2>
          <p className="mt-2 text-secondary">
            Build one reliable flow from field activity to approved payroll data without manual
            reconciliation.
          </p>
        </PanelCard>
      </div>

      <PanelCard>
        <h2 className="text-xl font-semibold">System</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-secondary">
          <li>Structured field workflows for jobs, crews, and status updates</li>
          <li>Time tracking with role-aware validation and lock points</li>
          <li>Approval states for supervisors and office operations</li>
          <li>Payroll pipeline outputs aligned to finance requirements</li>
        </ul>
      </PanelCard>

      <div className="grid gap-4 md:grid-cols-2">
        <PanelCard>
          <h2 className="text-xl font-semibold">Outcome</h2>
          <p className="mt-2 text-secondary">
            Reduced cycle time from field submission to payroll readiness and improved trust in
            operational numbers.
          </p>
        </PanelCard>
        <PanelCard>
          <h2 className="text-xl font-semibold">Takeaway</h2>
          <p className="mt-2 text-secondary">
            Performance came from system design, not feature count: clear states, ownership, and
            consistent data flow.
          </p>
        </PanelCard>
      </div>
    </article>
  );
}
