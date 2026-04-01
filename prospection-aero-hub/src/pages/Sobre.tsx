import { Target, Telescope, Gem, CheckCircle2 } from "lucide-react";
import totalLogo from "@/assets/totalenergies-logo.png";
import heroBanner from "@/assets/hero-banner.webp";

const missionCards = [
  {
    icon: <Target color="#0055B3" size={22} />,
    title: "Missão",
    text: "Fornecer lubrificantes aeronáuticos certificados com agilidade, confiabilidade e suporte técnico especializado para operadores de todo o Brasil.",
  },
  {
    icon: <Telescope color="#0055B3" size={22} />,
    title: "Visão",
    text: "Ser a principal referência em distribuição de lubrificantes aeronáuticos no interior de São Paulo e no mercado nacional.",
  },
  {
    icon: <Gem color="#0055B3" size={22} />,
    title: "Valores",
    text: "Segurança, integridade técnica, comprometimento com o cliente e parceria de longo prazo.",
  },
];

const Sobre = () => {
  return (
    <>
      {/* HERO DA PÁGINA SOBRE */}
      <section 
        className="relative w-full bg-cover bg-center flex flex-col justify-center items-center pt-[120px] pb-[60px] md:pt-[150px] md:pb-[80px]"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 z-0" style={{ backgroundColor: 'rgba(10, 30, 60, 0.75)' }} />
        
        <div className="relative z-10 flex flex-col items-center text-center w-full px-4 mt-6">
          <span 
            className="font-body font-medium uppercase text-[#C8A84B] mb-4"
            style={{ fontSize: '11px', letterSpacing: '0.12em' }}
          >
            Sobre a Empresa
          </span>
          <h1 className="font-heading font-bold text-white text-[30px] lg:text-[48px] max-w-[680px] mx-auto leading-tight m-0">
            Especialistas em lubrificação aeronáutica
          </h1>
          <p className="font-body font-light text-[17px] text-[rgba(255,255,255,0.75)] max-w-[500px] mx-auto mt-[16px]">
            Conheça a Prospection Comércio e Representações, distribuidora autorizada TotalEnergies para o setor aeronáutico.
          </p>

        </div>
      </section>

      {/* SEÇÃO NOSSA HISTÓRIA */}
      <section className="bg-[#FFFFFF] py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[56px] items-start">
            
            {/* COLUNA ESQUERDA */}
            <div className="flex flex-col">
              <span className="font-body font-medium uppercase text-[#0055B3] mb-3 lg:mb-4" style={{ fontSize: '11px', letterSpacing: '0.12em' }}>
                Nossa História
              </span>
              <h2 className="font-heading font-bold text-[#1A2535] text-[28px] lg:text-[32px] mb-[20px] leading-tight">
                Tradição e confiança no setor aeronáutico
              </h2>
              <div className="flex flex-col gap-4 font-body font-normal text-[15px] text-[#4B5563] leading-[1.75]">
                <p>
                  Sediada em Votorantim — SP, a Prospection Comércio e Representações atua como distribuidora autorizada da TotalEnergies Lubrificantes para o setor aeronáutico brasileiro. Nosso compromisso é levar lubrificantes certificados de alta performance a operadores de todo o país.
                </p>
                <p>
                  Com foco exclusivo na aviação, atendemos segmentos como aviação comercial, executiva, aerodesportiva, agroaérea, táxi aéreo e oficinas de manutenção. Oferecemos suporte técnico especializado, logística eficiente e a chancela de uma marca reconhecida globalmente.
                </p>
                <p>
                  A proximidade com nossos clientes e o profundo conhecimento do mercado aeronáutico nos posicionam como referência no interior paulista e em expansão nacional.
                </p>
              </div>

              {/* FAIXA DE NÚMEROS */}
              <div className="mt-[28px] bg-[#F4F6F9] rounded-[6px] p-[20px_24px] flex flex-col md:flex-row md:items-center justify-between gap-[20px] md:gap-0">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <span className="font-heading font-bold text-[#0055B3] text-[20px]">6</span>
                  <span className="font-body font-normal text-[#9CA3AF] text-[12px] block">Segmentos atendidos</span>
                </div>
                
                <div className="w-full h-[1px] md:w-[1px] md:h-[36px] bg-[#E5E7EB] self-center"></div>
                
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <span className="font-heading font-bold text-[#0055B3] text-[20px]">Todo o Brasil</span>
                  <span className="font-body font-normal text-[#9CA3AF] text-[12px] block">Cobertura logística</span>
                </div>
                
                <div className="w-full h-[1px] md:w-[1px] md:h-[36px] bg-[#E5E7EB] self-center"></div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <span className="font-heading font-bold text-[#0055B3] text-[20px]">TotalEnergies</span>
                  <span className="font-body font-normal text-[#9CA3AF] text-[12px] block">Parceria oficial</span>
                </div>
              </div>
            </div>

            {/* COLUNA DIREITA */}
            <div className="flex flex-col gap-[14px]">
              {missionCards.map((c, i) => (
                <div key={i} className="bg-[#FFFFFF] border border-[#E5E7EB] border-t-[3px] border-t-[#0055B3] rounded-[4px] p-[24px_20px] flex flex-col">
                  <div className="shrink-0">{c.icon}</div>
                  <h3 className="font-heading font-semibold text-[#1A2535] text-[16px] m-[10px_0_6px]">{c.title}</h3>
                  <p className="font-body font-normal text-[#4B5563] text-[14px] leading-[1.65] m-0">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO PARCERIA TOTALENERGIES */}
      <section className="bg-[#0B1F3A] p-[48px_24px] lg:p-[80px_60px]">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[56px] items-center">
            
            {/* COLUNA ESQUERDA */}
            <div className="flex flex-col order-1 lg:order-none">
              <span className="font-body font-medium uppercase text-[#C8A84B] mb-[12px]" style={{ fontSize: '11px', letterSpacing: '0.12em' }}>
                Parceria Oficial
              </span>
              <h2 className="font-heading font-bold text-white text-[28px] lg:text-[32px] mb-[16px] leading-tight">
                Chancela da marca líder global
              </h2>
              <div className="flex flex-col gap-4 font-body font-light text-[15px] text-[rgba(255,255,255,0.70)] leading-[1.75]">
                <p>
                  A TotalEnergies é uma das maiores empresas de energia do mundo e referência em lubrificantes de alta performance. Como distribuidores autorizados, garantimos a procedência, qualidade e certificação de cada produto comercializado.
                </p>
                <p>
                  Essa parceria nos permite oferecer suporte técnico direto, acesso à linha completa de lubrificantes aeronáuticos e condições exclusivas para operadores em todo o Brasil.
                </p>
              </div>

              <div className="flex flex-col gap-[10px] mt-[24px]">
                <div className="flex items-start gap-[10px]">
                  <CheckCircle2 color="#C8A84B" size={16} className="shrink-0 mt-[4px]" />
                  <span className="font-body font-normal text-[14px] text-[rgba(255,255,255,0.80)]">Procedência e certificação garantidas em cada produto</span>
                </div>
                <div className="flex items-start gap-[10px]">
                  <CheckCircle2 color="#C8A84B" size={16} className="shrink-0 mt-[4px]" />
                  <span className="font-body font-normal text-[14px] text-[rgba(255,255,255,0.80)]">Acesso à linha completa de lubrificantes aeronáuticos</span>
                </div>
                <div className="flex items-start gap-[10px]">
                  <CheckCircle2 color="#C8A84B" size={16} className="shrink-0 mt-[4px]" />
                  <span className="font-body font-normal text-[14px] text-[rgba(255,255,255,0.80)]">Suporte técnico direto com respaldo TotalEnergies</span>
                </div>
              </div>
            </div>

            {/* COLUNA DIREITA */}
            <div className="flex flex-col order-2 lg:order-none w-full max-w-[500px] mx-auto lg:max-w-none">
              <div 
                className="flex flex-col items-center justify-center text-center p-[28px_20px] lg:p-[40px_36px] rounded-[6px]"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(200,168,75,0.30)' }}
              >
                <img src={totalLogo} alt="TotalEnergies" className="max-w-[180px] w-full h-[40px] md:h-[50px] object-contain mx-auto" />
                
                <div className="w-full h-[1px] bg-[rgba(255,255,255,0.10)] m-[20px_0]"></div>
                
                <span 
                  className="font-body font-medium uppercase text-[#C8A84B] flex justify-center text-center"
                  style={{ background: 'rgba(200,168,75,0.10)', border: '1px solid rgba(200,168,75,0.25)', padding: '10px 16px', borderRadius: '2px', fontSize: '11px', letterSpacing: '0.10em' }}
                >
                  Distribuidor Autorizado Lubrificantes Aeronáuticos
                </span>
                
                <span className="font-body font-light text-[13px] text-[rgba(255,255,255,0.50)] mt-[12px] block">
                  Presente em mais de 130 países
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;