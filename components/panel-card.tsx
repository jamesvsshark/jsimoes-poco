type PanelCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function PanelCard({ children, className = "" }: PanelCardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-panel p-6 transition-transform duration-200 hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </div>
  );
}
