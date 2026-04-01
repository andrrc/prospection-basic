import { Target, Eye, Gem } from "lucide-react";

const cards = [
  {
    icon: <Target color="#0055B3" size={24} />,
    title: "Missão",
    text: "Foco na indústria da aviação, contribuindo com a segurança através da distribuição de produtos de alta qualidade.",
  },
  {
    icon: <Eye color="#0055B3" size={24} />,
    title: "Visão",
    text: "Ser uma empresa com reconhecimento no setor aeronáutico.",
  },
  {
    icon: <Gem color="#0055B3" size={24} />,
    title: "Valores",
    text: "Comprometimento mútuo com parceiros e clientes. Excelência de negócios com sustentabilidade.",
  },
];

const MissaoVisaoValoresSection = () => {
  return (
    <section id="sobre" className="bg-[#F4F6F9] py-[80px]">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Label */}
        <span
          className="block font-body font-medium uppercase text-[#0055B3] mb-4"
          style={{ fontSize: "11px", letterSpacing: "0.12em" }}
        >
          Nossa Empresa
        </span>

        {/* Título */}
        <h2
          className="font-heading text-[#1A2535] mb-4 leading-tight"
          style={{ fontWeight: 700, fontSize: "36px" }}
        >
          Tradição e confiança no setor aeronáutico
        </h2>

        {/* Subtítulo */}
        <p
          className="font-body text-[#4B5563] max-w-2xl mb-12"
          style={{ fontWeight: 300, fontSize: "17px", lineHeight: "1.75" }}
        >
          Distribuidora autorizada TotalEnergies, dedicada ao setor aeronáutico
          com produtos e serviços dentro dos mais altos padrões de qualidade.
        </p>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col bg-white rounded-[4px]"
              style={{
                border: "1px solid #E5E7EB",
                borderTop: "3px solid #0055B3",
                padding: "24px",
              }}
            >
              <div className="mb-4 shrink-0">{card.icon}</div>
              <h3
                className="font-heading text-[#1A2535] mb-3"
                style={{ fontWeight: 600, fontSize: "18px" }}
              >
                {card.title}
              </h3>
              <p
                className="font-body text-[#4B5563] m-0"
                style={{ fontWeight: 400, fontSize: "14px", lineHeight: "1.75" }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MissaoVisaoValoresSection;
