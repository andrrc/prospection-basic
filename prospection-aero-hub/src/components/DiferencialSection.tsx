import { Target, Recycle, Wrench } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import oilLiquidDrop from "@/assets/oil_liquid_drop.png";
import totalLogo from "@/assets/totalenergies-logo.png";

const benefits = [
  { icon: <Target className="text-blue-main" size={24} />, title: "Aplicação precisa sem contaminação", desc: "O bico direcional impede contato do óleo com agentes externos durante a transferência." },
  { icon: <Recycle className="text-blue-main" size={24} />, title: "Redução de desperdício", desc: "Controle total do fluxo reduz perdas na manutenção e diminui o custo por aplicação." },
  { icon: <Wrench className="text-blue-main" size={24} />, title: "Manuseio ágil em campo", desc: "Compatível com hangares e pistas, facilita a aplicação em posições difíceis de acesso." },
];

const DiferencialSection = () => {
  return (
    <div id="diferencial" className="relative overflow-hidden bg-white border-y border-[#E5E7EB]">
      {/* Fundo Fake Contínuo: Gotas de Óleo caindo ancoradas na direita */}
      <img
        src={oilLiquidDrop}
        alt="Óleo Transparente Decorativo"
        loading="lazy"
        className="absolute inset-y-0 right-0 z-0 h-full w-[100%] md:w-[60%] lg:w-[45%] object-contain object-right opacity-[0.14] mix-blend-multiply pointer-events-none select-none"
      />

      {/* PARTE 1: TRANSIÇÃO */}
      <section className="relative z-10 w-full pt-[40px] pb-[10px] lg:pt-[70px] lg:pb-[20px]">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 lg:mb-3">
            <span className="font-body font-medium uppercase text-[11px] tracking-[0.12em] text-[#0055B3]">
              Tecnologia
            </span>
            <img src={totalLogo} alt="TotalEnergies" loading="lazy" className="h-[14px] w-auto object-contain" />
          </div>
          <h2 className="font-heading font-bold text-[24px] md:text-[26px] lg:text-[34px] text-[#1A2535] leading-[1.3] lg:leading-[1.2] m-0 max-w-[500px]">
            O lubrificante certo para cada operação.
          </h2>
        </div>
      </section>

      {/* PARTE 2: DIFERENCIAL DO BICO */}
      <section className="relative z-10 py-10 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionLabel>Diferencial</SectionLabel>
          <h2 className="font-heading text-section-mobile lg:text-section text-text-primary mt-3 mb-5">
            O bico que muda a manutenção
          </h2>
          <p className="text-text-secondary font-body font-light text-base leading-[1.75] tracking-[0.01em] max-w-2xl mb-12">
            Tecnologia exclusiva que garante precisão e economia na aplicação de lubrificantes aeronáuticos.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* YouTube Embed */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-border bg-black group">
              <iframe
                className="absolute top-0 left-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/LhE7pixNSSo?si=KQj_Ofw_sOXGxXK4"
                title="Vídeo demonstrativo — Bico técnico TotalEnergies"
                loading="lazy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded bg-blue-light flex items-center justify-center shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-card-title text-text-primary mb-1">{b.title}</h3>
                    <p className="text-text-secondary text-sm font-body font-light leading-[1.75] tracking-[0.01em]">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiferencialSection;
