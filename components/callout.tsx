type CalloutProps = {
  children: React.ReactNode;
};

export function Callout({ children }: CalloutProps) {
  return (
    <aside className="my-6 rounded-lg border border-border bg-panel p-4 text-sm text-secondary">
      {children}
    </aside>
  );
}
