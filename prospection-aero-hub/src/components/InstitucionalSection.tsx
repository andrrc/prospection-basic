import { Plane, Truck } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import totalLogo from "@/assets/totalenergies-logo.png";

const InstitucionalSection = () => {
  return (
    <section id="institucional" className="bg-blue-dark grid-texture py-12 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionLabel light>Por que a Prospection</SectionLabel>
        <h2 className="font-heading text-section-mobile lg:text-section text-white mt-3 mb-5">
          Autoridade no segmento aeronáutico
        </h2>
        <p className="text-white/70 font-body font-light text-[15px] sm:text-[16px] leading-[1.75] tracking-[0.01em] max-w-3xl mb-12">
          Uma empresa dedicada ao setor aeronáutico, oferecendo produtos e serviços dentro dos mais altos padrões de qualidade — com a tecnologia e chancela da TotalEnergies, presente em mais de 130 países.
        </p>

        <div className="flex flex-col gap-6">
          {/* LINHA 1 - Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Card 1 */}
            <div
              className="flex flex-col items-start"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderLeft: "3px solid #C8A84B",
                borderRadius: "4px",
                padding: "32px 28px",
              }}
            >
              <Plane size={24} color="#C8A84B" className="mb-4" />
              <h3 className="font-heading font-semibold text-white text-[18px] mb-3">
                Somos Especialistas
              </h3>
              <p
                className="font-body font-light text-[15px] m-0"
                style={{ color: "rgba(255,255,255,0.70)", lineHeight: "1.75" }}
              >
                Focados exclusivamente na indústria aeronáutica, fornecemos lubrificantes para todos os segmentos: aviação comercial, executiva, aerodesportiva, aeroagrícola, táxi aéreo, oficinas e setor público.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="flex flex-col items-start"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderLeft: "3px solid #C8A84B",
                borderRadius: "4px",
                padding: "32px 28px",
              }}
            >
              <Truck size={24} color="#C8A84B" className="mb-4" />
              <h3 className="font-heading font-semibold text-white text-[18px] mb-3">
                Entregamos para Todo o Brasil
              </h3>
              <p
                className="font-body font-light text-[15px] m-0"
                style={{ color: "rgba(255,255,255,0.70)", lineHeight: "1.75" }}
              >
                Nossa equipe de vendas está sempre pronta para atender. Estrutura logística ágil e moderna, atendendo todas as regiões do país com agilidade e segurança.
              </p>
            </div>
          </div>

          {/* LINHA 2 - TOTAL block */}
          <div
            className="flex flex-col md:flex-row items-start md:items-center w-full"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(200,168,75,0.25)",
              borderRadius: "4px",
              padding: "28px 32px",
              gap: "24px",
            }}
          >
            <div className="flex flex-col shrink-0 items-start">
              <span
                className="font-body font-medium uppercase mb-3"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  color: "rgba(200,168,75,0.70)",
                }}
              >
                Parceria Oficial
              </span>
              <div className="bg-white px-4 py-2 rounded flex items-center justify-center border border-white/20 shadow-sm relative -ml-1">
                <img src={totalLogo} alt="TotalEnergies" loading="lazy" className="h-[22px] w-auto object-contain" />
              </div>
            </div>

            <div className="hidden md:block w-[1px] h-[40px] shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}></div>
            <div className="md:hidden w-full h-[1px] shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.1)", margin: "8px 0 -8px 0" }}></div>

            <p
              className="font-body font-light m-0"
              style={{
                fontSize: "14px",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              Distribuidor autorizado da TotalEnergies — petrolífera presente em mais de 130 países, operando em toda a cadeia da indústria do petróleo, da prospecção à produção dos lubrificantes mais modernos do mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitucionalSection;
