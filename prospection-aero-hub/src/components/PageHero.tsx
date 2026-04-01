import SectionLabel from "./SectionLabel";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ label, title, subtitle }: PageHeroProps) => (
  <section className="bg-light-gray pt-28 pb-16 lg:pt-36 lg:pb-20">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <SectionLabel>{label}</SectionLabel>
      <h1 className="font-heading text-hero-mobile lg:text-hero text-text-primary mt-3">{title}</h1>
      {subtitle && (
        <p className="text-text-secondary font-body font-light text-base lg:text-lg max-w-2xl mx-auto mt-5 leading-[1.75] tracking-[0.01em]">{subtitle}</p>
      )}
    </div>
  </section>
);

export default PageHero;