import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";

const ContatoSection = () => {
  return (
    <section id="contato" className="bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <div className="text-center mb-12">
          <SectionLabel>Fale Conosco</SectionLabel>
          <h2 className="font-heading text-section-mobile lg:text-section text-text-primary mt-3 mb-5">
            Solicite sua cotação
          </h2>
          <p className="text-text-secondary font-body font-light text-base leading-[1.75] tracking-[0.01em] max-w-lg mx-auto">
            Preencha o formulário e nossa equipe entrará em contato em até 24h úteis.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContatoSection;
