import Image from "next/image";
import { Button } from "@/components/button";
import { PanelCard } from "@/components/panel-card";
import { SectionHeader } from "@/components/section-header";

export default function JamesPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">
        <div className="space-y-4">
          <SectionHeader index="01" title="JAMES" />
          <h1 className="text-4xl font-semibold tracking-tight">Operator / Systems Builder</h1>
          <p className="max-w-2xl text-secondary">
            I design and ship systems that support real-world operations, from field capture and
            approvals to finance-ready outputs and reporting loops.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-border bg-panel">
          <Image
            src="/images/james-headshot-dark.png"
            alt="James Simoes portrait"
            width={800}
            height={1000}
            className="theme-dark-only h-full w-full object-cover object-top"
          />
          <Image
            src="/images/james-headshot-light.png"
            alt="James Simoes portrait"
            width={800}
            height={1000}
            className="theme-light-only h-full w-full object-cover object-top"
          />
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <PanelCard>
          <h2 className="text-xl font-semibold">What I focus on</h2>
          <p className="mt-2 text-secondary">
            Workflow architecture, data modeling, automation layers, and execution systems that keep
            teams aligned under pressure.
          </p>
        </PanelCard>
        <PanelCard>
          <h2 className="text-xl font-semibold">How I think</h2>
          <p className="mt-2 text-secondary">
            Clarify constraints first. Design for operational reality. Ship quickly with a bias
            toward durable structure over temporary hacks.
          </p>
        </PanelCard>
        <PanelCard>
          <h2 className="text-xl font-semibold">Selected work</h2>
          <p className="mt-2 text-secondary">
            Repeatable system patterns delivered across a mid-sized construction company, a
            multi-brand eCommerce retailer, and a field service business with 10+ employees.
          </p>
        </PanelCard>
        <PanelCard>
          <h2 className="text-xl font-semibold">Current focus</h2>
          <p className="mt-2 text-secondary">
            Partnering with a limited number of teams where system quality directly impacts growth
            and reliability.
          </p>
        </PanelCard>
      </div>

      <PanelCard>
        <SectionHeader index="02" title="PROOF" />
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">Outcomes</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-secondary">
              <li>Shorter cycle time from field input to payroll-ready output</li>
              <li>Fewer approval bottlenecks through explicit ownership states</li>
              <li>Higher reporting confidence from auditable workflow records</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">
              What teams say
            </h3>
            <div className="mt-2 space-y-3 text-secondary">
              <p>“Collaborative, decisive, and focused on outcomes over noise.”</p>
              <p>“Strong architecture judgment with practical delivery speed.”</p>
            </div>
          </div>
        </div>
      </PanelCard>

      <div className="space-y-3">
        <p className="max-w-2xl text-sm text-secondary">
          If you are building something real, I am happy to connect.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="mailto:james@pocostud.io" variant="secondary">
            Connect
          </Button>
          <Button href="/start">
            Discuss a system
          </Button>
        </div>
      </div>
    </div>
  );
}
