type SectionHeaderProps = {
  index: string;
  title: string;
};

export function SectionHeader({ index, title }: SectionHeaderProps) {
  return (
    <p className="mb-4 font-mono text-xs tracking-[0.14em] text-muted uppercase">
      {index} / {title}
    </p>
  );
}
