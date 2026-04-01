interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

const SectionLabel = ({ children, light }: SectionLabelProps) => (
  <span
    className={`inline-block font-body font-medium text-label uppercase tracking-[0.12em] mb-3 ${
      light ? "text-gold/80" : "text-blue-main"
    }`}
  >
    {children}
  </span>
);

export default SectionLabel;