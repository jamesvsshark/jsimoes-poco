import { SectionHeader } from "@/components/section-header";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
const redirectBase = process.env.NEXT_PUBLIC_SITE_URL ?? "";
const redirectUrl = redirectBase ? `${redirectBase}/thank-you` : "/thank-you";
const isWeb3FormsConfigured = accessKey.length > 0;

export default function StartPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <SectionHeader index="01" title="START PROJECT" />
      <h1 className="text-4xl font-semibold tracking-tight">Project Intake</h1>
      <p className="text-secondary">
        Share your operational constraint clearly. If there is strong fit and real implementation
        urgency, I will respond with next steps.
      </p>
      <div className="rounded-lg border border-border bg-panel p-4 text-sm text-secondary">
        Best fit: teams with meaningful workflow complexity, ownership to implement, and budget to
        execute properly.
      </div>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="space-y-4 rounded-xl border border-border bg-panel p-6"
      >
        <input type="hidden" name="access_key" value={accessKey} />
        <input type="hidden" name="subject" value="POCO Intake Submission" />
        <input type="hidden" name="from_name" value="POCO Site Intake" />
        <input type="hidden" name="redirect" value={redirectUrl} />
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        <Field label="Name" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Company" name="company" type="text" required />

        <label className="block text-sm text-secondary">
          Problem
          <textarea
            name="problem"
            rows={5}
            required
            className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
            placeholder="What is breaking today, where does it break, and what impact is it causing?"
          />
        </label>

        <label className="block text-sm text-secondary">
          Budget range
          <select
            name="budget"
            required
            className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
          >
            <option value="">Select one</option>
            <option value="under-20k">Under $20k</option>
            <option value="20k-40k">$20k - $40k</option>
            <option value="40k-80k">$40k - $80k</option>
            <option value="80k+">$80k+</option>
          </select>
        </label>

        <button
          type="submit"
          disabled={!isWeb3FormsConfigured}
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-foreground hover:bg-violet-500"
        >
          {isWeb3FormsConfigured ? "Submit Intake" : "Intake form unavailable"}
        </button>

        {!isWeb3FormsConfigured ? (
          <p className="text-xs text-muted">
            Missing `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`. Set it in local environment and GitHub
            repository secrets to enable submissions.
          </p>
        ) : null}
      </form>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  required?: boolean;
};

function Field({ label, name, type, required = false }: FieldProps) {
  return (
    <label className="block text-sm text-secondary">
      {label}
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
      />
    </label>
  );
}
