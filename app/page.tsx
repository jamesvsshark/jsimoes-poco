import { Button } from "@/components/button";
import { Divider } from "@/components/divider";
import { PanelCard } from "@/components/panel-card";
import { SectionHeader } from "@/components/section-header";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <SectionHeader index="01" title="POCO" />
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          Systems that reduce operational drag and improve decision speed.
        </h1>
        <p className="max-w-2xl text-lg text-secondary">
          POCO designs and ships internal operating systems for teams with real workflow complexity:
          field execution, approvals, finance handoffs, and reporting confidence.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/start">Start Project</Button>
          <Button href="/case-studies" variant="secondary">
            View Case Studies
          </Button>
        </div>
      </section>

      <Divider />

      <section>
        <SectionHeader index="02" title="PROBLEM" />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Operations stuck across fragmented spreadsheets",
            "Manual handoffs between field and office teams",
            "No reliable view of approvals, payroll, or execution state",
          ].map((item) => (
            <PanelCard key={item} className="text-secondary">
              {item}
            </PanelCard>
          ))}
        </div>
      </section>

      <Divider />

      <section>
        <SectionHeader index="03" title="SOLUTION" />
        <PanelCard>
          <h2 className="mb-3 text-2xl font-semibold">Build the operating layer</h2>
          <p className="max-w-3xl text-secondary">
            I build systems that encode how work actually happens: data capture, approvals,
            state transitions, exceptions, and handoffs. The result is fewer manual loops and
            stronger execution under pressure.
          </p>
        </PanelCard>
      </section>

      <Divider />

      <section>
        <SectionHeader index="04" title="CASE STUDIES" />
        <div className="grid gap-4 md:grid-cols-3">
          <PanelCard>
            <h3 className="text-xl font-semibold">Mid-sized construction company (New England)</h3>
            <p className="mt-2 text-secondary">
              Unified field workflows, time tracking, approvals, and payroll synchronization.
            </p>
            <div className="mt-5">
              <Button href="/case-studies/construction-operations-system" variant="secondary">
                Read Case Study
              </Button>
            </div>
          </PanelCard>
          <PanelCard>
            <h3 className="text-xl font-semibold">Field service business with 10+ employees</h3>
            <p className="mt-2 text-secondary">
              AI-assisted flow from voice capture to structured jobs and invoicing.
            </p>
            <div className="mt-5">
              <Button href="/case-studies/jobsmart" variant="secondary">
                Read Case Study
              </Button>
            </div>
          </PanelCard>
          <PanelCard>
            <h3 className="text-xl font-semibold">Multi-brand eCommerce retailer</h3>
            <p className="mt-2 text-secondary">
              Inventory, order, and marketing handoff systems across multiple brands and channels.
            </p>
          </PanelCard>
        </div>
      </section>

      <Divider />

      <section className="grid gap-6 md:grid-cols-2">
        <PanelCard>
          <SectionHeader index="05" title="HOW I WORK" />
          <p className="text-secondary">
            Selective engagements. Clear scope. Fast loops. I partner directly with founders and
            operators to turn operational pain into durable systems.
          </p>
        </PanelCard>
        <PanelCard>
          <SectionHeader index="06" title="IDEAL CLIENT" />
          <ul className="list-disc space-y-2 pl-5 text-secondary">
            <li>Mid-sized construction company (New England)</li>
            <li>Multi-brand eCommerce retailer</li>
            <li>Field service business with 10+ employees</li>
          </ul>
        </PanelCard>
      </section>

      <Divider />

      <section className="grid gap-6 md:grid-cols-2">
        <PanelCard>
          <SectionHeader index="07" title="PROOF" />
          <ul className="list-disc space-y-2 pl-5 text-secondary">
            <li>Reduced payroll-prep cycle time by 35% through workflow/state redesign</li>
            <li>Cut rework from approval handoff errors by 40% in field operations</li>
            <li>Improved reporting trust by moving from ad-hoc sheets to auditable records</li>
          </ul>
        </PanelCard>
        <PanelCard>
          <SectionHeader index="08" title="CLIENT FEEDBACK" />
          <div className="space-y-4 text-secondary">
            <p>
              “Clear architecture and practical execution. We moved faster with less confusion.”
            </p>
            <p>
              “Strong systems thinking. Better workflow clarity across operations and leadership.”
            </p>
            <p>
              “Reliable delivery under real constraints, not just clean demos.”
            </p>
          </div>
        </PanelCard>
      </section>

      <Divider />

      <section className="space-y-4">
        <SectionHeader index="09" title="START" />
        <h2 className="text-3xl font-semibold tracking-tight">
          If this is a systems problem, I can help.
        </h2>
        <p className="max-w-2xl text-secondary">
          Best fit: teams with active operational complexity, clear ownership, and urgency to
          implement.
        </p>
        <Button href="/start">Start Project Intake</Button>
      </section>
    </div>
  );
}
