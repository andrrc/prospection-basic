import SectionLabel from "@/components/SectionLabel";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    name: "A100",
    tag: "Óleo de Amaciamento",
    highlight: true,
    specs: {
      Viscosidade: "SAE 50 Mineral",
      Aplicação: "Amaciamento de motores",
      Volume: "1L / 4L",
      Norma: "MIL-L-6082",
    },
  },
  {
    name: "Aero D100",
    tag: "Óleo Mineral Aviation",
    specs: {
      Viscosidade: "SAE 40 Mineral",
      Aplicação: "Aviação comercial e aerodesportiva",
      Volume: "1L / 4L",
      Norma: "MIL-L-6082",
    },
  },
  {
    name: "Aero XPD 100",
    tag: "Fórmula XPD",
    specs: {
      Viscosidade: "SAE 40 com aditivos XPD",
      Aplicação: "Operações de alta exigência",
      Volume: "1L / 4L",
      Norma: "MIL-L-22851",
    },
  },
  {
    name: "Aero DM 15W50",
    tag: "Multigrau Semi-Sintético",
    specs: {
      Viscosidade: "15W50 Semi-Sintético",
      Aplicação: "Aviação executiva e comercial",
      Volume: "1L / 4L",
      Norma: "MIL-L-22851",
    },
  },
  {
    name: "Aero D120",
    tag: "Alta Viscosidade",
    specs: {
      Viscosidade: "SAE 60 Mineral",
      Aplicação: "Motores radiais",
      Volume: "1L / 4L",
      Norma: "MIL-L-6082",
    },
  },
  {
    name: "Aero Hydraulic",
    tag: "Fluido Hidráulico",
    specs: {
      Viscosidade: "ISO VG 15",
      Aplicação: "Sistemas hidráulicos de aeronaves",
      Volume: "1L / 5L",
      Norma: "MIL-H-5606",
    },
  },
];

const ProdutosSection = () => {
  return (
    <section id="produtos" className="bg-[#F4F6F9] py-12 md:py-24">
      <div className="container mx-auto px-[16px] md:px-[24px] lg:px-[40px]">
        <SectionLabel>Catálogo</SectionLabel>
        <h2 className="font-heading text-section-mobile lg:text-section text-text-primary mt-3 mb-5">
          Linha completa de produtos
        </h2>
        <p className="text-text-secondary font-body font-light text-base leading-[1.75] tracking-[0.01em] max-w-2xl mb-12">
          Lubrificantes certificados para cada necessidade da aviação brasileira.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[20px]">
          {products.map((p) => (
            <ProductCard
              key={p.name}
              name={p.name}
              tag={p.tag}
              specs={p.specs}
              highlight={p.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProdutosSection;
