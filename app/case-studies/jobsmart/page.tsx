import { Divider } from "@/components/divider";
import { PanelCard } from "@/components/panel-card";
import { SectionHeader } from "@/components/section-header";

export default function FieldServiceCaseStudyPage() {
  return (
    <article className="space-y-10">
      <SectionHeader index="02" title="CASE STUDY" />
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight">Field service business with 10+ employees</h1>
      <p className="max-w-3xl text-secondary">
        A forward-looking workflow system that turned unstructured field input into structured jobs,
        execution tracking, and invoice-ready outputs.
      </p>

      <Divider />

      <div className="grid gap-4 md:grid-cols-2">
        <PanelCard>
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="mt-2 text-secondary">
            Job intake depended on scattered calls and notes, causing inconsistent execution data
            and billing delays.
          </p>
        </PanelCard>
        <PanelCard>
          <h2 className="text-xl font-semibold">Goal</h2>
          <p className="mt-2 text-secondary">
            Capture intent quickly, structure it immediately, and keep operational context usable
            through completion and invoicing.
          </p>
        </PanelCard>
      </div>

      <PanelCard>
        <h2 className="text-xl font-semibold">System</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-secondary">
          <li>Voice input pipeline transformed into structured operational records</li>
          <li>AI-assisted workflow classification and task sequencing</li>
          <li>Execution-state tracking with visible constraints and dependencies</li>
          <li>Invoice generation fed by validated completion and scope metadata</li>
        </ul>
      </PanelCard>

      <div className="grid gap-4 md:grid-cols-2">
        <PanelCard>
          <h2 className="text-xl font-semibold">Outcome</h2>
          <p className="mt-2 text-secondary">
            Teams reduced admin overhead while improving the consistency of operational and billing
            data.
          </p>
        </PanelCard>
        <PanelCard>
          <h2 className="text-xl font-semibold">Takeaway</h2>
          <p className="mt-2 text-secondary">
            AI only matters when embedded in a robust system model with strong downstream structure.
          </p>
        </PanelCard>
      </div>
    </article>
  );
}
