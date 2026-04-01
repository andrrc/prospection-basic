import { Link } from "react-router-dom";
import { Play, ShieldCheck, Truck, Award, Target, Recycle, Wrench, BadgeCheck, Plane, Check } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import ProductCard from "@/components/ProductCard";
import ContactForm from "@/components/ContactForm";
import heroBanner from "@/assets/hero-banner.webp";
import oilImage from "@/assets/oil_image.webp";
import oilLiquidDrop from "@/assets/oil_liquid_drop.png";
import totalLogo from "@/assets/totalenergies-logo.png";

const products = [
  { 
    name: "A100", 
    tag: "Óleo de Amaciamento", 
    highlight: true,
    specs: {
      Viscosidade: "SAE 50 Mineral",
      Aplicação: "Amaciamento de motores",
      Volume: "1L / 4L",
      Norma: "MIL-L-6082"
    } 
  },
  { 
    name: "Aero D100", 
    tag: "Óleo Mineral Aviation", 
    specs: {
      Viscosidade: "SAE 40 Mineral",
      Aplicação: "Aviação comercial e aerodesportiva",
      Volume: "1L / 4L",
      Norma: "MIL-L-6082"
    } 
  },
  { 
    name: "Aero XPD 100", 
    tag: "Fórmula XPD", 
    specs: {
      Viscosidade: "SAE 40 com aditivos XPD",
      Aplicação: "Operações de alta exigência",
      Volume: "1L / 4L",
      Norma: "MIL-L-22851"
    } 
  },
  { 
    name: "Aero DM 15W50", 
    tag: "Multigrau Semi-Sintético", 
    specs: {
      Viscosidade: "15W50 Semi-Sintético",
      Aplicação: "Aviação executiva e comercial",
      Volume: "1L / 4L",
      Norma: "MIL-L-22851"
    } 
  },
  { 
    name: "Aero D120", 
    tag: "Alta Viscosidade", 
    specs: {
      Viscosidade: "SAE 60 Mineral",
      Aplicação: "Motores radiais",
      Volume: "1L / 4L",
      Norma: "MIL-L-6082"
    } 
  },
  { 
    name: "Aero Hydraulic", 
    tag: "Fluido Hidráulico", 
    specs: {
      Viscosidade: "ISO VG 15",
      Aplicação: "Sistemas hidráulicos de aeronaves",
      Volume: "1L / 5L",
      Norma: "MIL-H-5606"
    } 
  },
];

const benefits = [
  { icon: <Target className="text-blue-main" size={24} />, title: "Aplicação precisa sem contaminação", desc: "O bico direcional impede contato do óleo com agentes externos durante a transferência." },
  { icon: <Recycle className="text-blue-main" size={24} />, title: "Redução de desperdício", desc: "Controle total do fluxo reduz perdas na manutenção e diminui o custo por aplicação." },
  { icon: <Wrench className="text-blue-main" size={24} />, title: "Manuseio ágil em campo", desc: "Compatível com hangares e pistas, facilita a aplicação em posições difíceis de acesso." },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section
        className="relative bg-cover bg-top md:bg-center flex flex-col justify-end"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 md:bg-none md:bg-black/55" />

        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center pt-[180px] pb-[60px] sm:pt-[200px] sm:pb-[80px] md:pt-[220px] md:pb-8 lg:pt-[260px] lg:pb-[20px]">
          <div className="max-w-[800px] mx-auto px-4">


            {/* Title */}
            <h1 className="font-heading font-bold text-white text-[24px] leading-[1.25] tracking-[-0.01em] w-full px-[20px] mx-auto text-center md:text-[32px] md:leading-[1.2] md:max-w-[520px] md:tracking-[-0.02em] md:px-0 lg:text-[42px] lg:leading-[1.15] lg:max-w-[640px]">
              Lubrificantes aeronáuticos de{" "}
              <span className="text-[#0055B3] font-bold not-italic">alta performance</span> para sua operação
            </h1>

            {/* Subtitle */}
            <p className="font-body font-light text-[15px] leading-[1.65] text-center w-full px-[24px] mx-auto mt-5 text-white/80 md:text-base md:leading-[1.75] md:max-w-[520px] md:px-0 md:mt-6 lg:text-[17px]">
              Distribuidor autorizado TotalEnergies para o setor aeronáutico em todo o Brasil.
            </p>

            {/* CTAs */}
            <div className="flex flex-col w-full max-w-[300px] mx-auto gap-[10px] mt-8 justify-center md:flex-row md:max-w-none md:gap-3 md:mt-10">
              <Link
                to="/contato"
                className="font-body font-medium uppercase text-white text-[13px] tracking-[0.08em] bg-[#0055B3] px-6 py-0 min-h-[52px] md:min-h-0 md:px-8 md:py-4 rounded-[3px] transition-all duration-200 hover:brightness-110 flex justify-center items-center w-full md:w-auto text-center"
              >
                Solicitar Cotação Agora
              </Link>
              <a
                href="#catalogo"
                className="font-body font-medium uppercase text-white text-[13px] tracking-[0.08em] bg-[rgba(255,255,255,0.12)] border-[1.5px] border-[rgba(255,255,255,0.85)] px-6 py-0 min-h-[52px] md:min-h-0 md:px-8 md:py-4 rounded-[3px] transition-all duration-200 hover:bg-white/[0.08] hover:border-white flex justify-center items-center w-full md:w-auto text-center"
              >
                Ver Produtos
              </a>
            </div>

            {/* WhatsApp Link Mobile */}
            <a 
              href="https://wa.me/5515996243489" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex md:hidden items-center justify-center gap-[8px] mt-[16px] font-body font-medium text-[13px] text-[rgba(255,255,255,0.80)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#25D366" className="shrink-0" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg>
              Falar pelo WhatsApp
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 md:backdrop-blur-sm bg-[rgba(0,0,0,0.50)] md:bg-black/45 border-t border-white/10 mt-4 md:mt-0 py-[8px] md:py-0">
          <div className="container mx-auto flex flex-col md:grid md:grid-cols-3 md:gap-6 px-0 md:px-10 md:py-5">
            {[
              { icon: <ShieldCheck color="#0055B3" size={16} strokeWidth={2.5} />, label: "6+ Linhas de produto" },
              { icon: <Truck color="#0055B3" size={16} strokeWidth={2.5} />, label: "Entrega em todo o Brasil" },
              { icon: <Award color="#0055B3" size={16} strokeWidth={2.5} />, label: "TotalEnergies — Marca certificada globalmente" },
            ].map((s, i, arr) => (
              <div key={i} className="flex flex-col w-full">
                <div className="flex items-center gap-[10px] p-[12px_20px] md:p-0 font-body text-[13px] text-white font-normal justify-center md:justify-start">
                  <div className="shrink-0">{s.icon}</div>
                  <span>{s.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="w-[80%] mx-auto h-[1px] bg-[rgba(255,255,255,0.10)] md:hidden"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO UNIFICADO: TECNOLOGIA E DIFERENCIAL */}
      <div className="relative overflow-hidden bg-white border-y border-[#E5E7EB]">
        {/* Fundo Fake Contínuo: Gotas de Óleo caindo ancoradas na direita (com qualidade otimizada) */}
        <img 
          src={oilLiquidDrop}
          alt="Óleo Transparente Decorativo"
          className="absolute inset-y-0 right-0 z-0 h-full w-[100%] md:w-[60%] lg:w-[45%] object-contain object-right opacity-[0.14] mix-blend-multiply pointer-events-none select-none"
        />

        {/* PARTE 1: TRANSIÇÃO */}
        <section className="relative z-10 w-full pt-[40px] pb-[10px] lg:pt-[70px] lg:pb-[20px]">
          <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 lg:mb-3">
              <span className="font-body font-medium uppercase text-[11px] tracking-[0.12em] text-[#0055B3]">
                Tecnologia
              </span>
              <img src={totalLogo} alt="TotalEnergies" className="h-[14px] w-auto object-contain" />
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

      {/* CATÁLOGO */}
      <section id="catalogo" className="bg-[#F4F6F9] py-12 md:py-24">
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
              <ProductCard key={p.name} name={p.name} tag={p.tag} specs={p.specs} highlight={p.highlight} />
            ))}
          </div>
        </div>
      </section>

      {/* MINI INSTITUCIONAL */}
      <section className="bg-blue-dark grid-texture py-12 md:py-24">
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
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderLeft: '3px solid #C8A84B',
                  borderRadius: '4px',
                  padding: '32px 28px',
                }}
              >
                <Plane size={24} color="#C8A84B" className="mb-4" />
                <h3 className="font-heading font-semibold text-white text-[18px] mb-3">
                  Somos Especialistas
                </h3>
                <p 
                  className="font-body font-light text-[15px] m-0"
                  style={{ color: 'rgba(255,255,255,0.70)', lineHeight: '1.75' }}
                >
                  Focados exclusivamente na indústria aeronáutica, fornecemos lubrificantes para todos os segmentos: aviação comercial, executiva, aerodesportiva, aeroagrícola, táxi aéreo, oficinas e setor público.
                </p>
              </div>

              {/* Card 2 */}
              <div 
                className="flex flex-col items-start"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderLeft: '3px solid #C8A84B',
                  borderRadius: '4px',
                  padding: '32px 28px',
                }}
              >
                <Truck size={24} color="#C8A84B" className="mb-4" />
                <h3 className="font-heading font-semibold text-white text-[18px] mb-3">
                  Entregamos para Todo o Brasil
                </h3>
                <p 
                  className="font-body font-light text-[15px] m-0"
                  style={{ color: 'rgba(255,255,255,0.70)', lineHeight: '1.75' }}
                >
                  Nossa equipe de vendas está sempre pronta para atender. Estrutura logística ágil e moderna, atendendo todas as regiões do país com agilidade e segurança.
                </p>
              </div>
            </div>

            {/* LINHA 2 - TOTAL block */}
            <div 
              className="flex flex-col md:flex-row items-start md:items-center w-full"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(200,168,75,0.25)',
                borderRadius: '4px',
                padding: '28px 32px',
                gap: '24px'
              }}
            >
              <div className="flex flex-col shrink-0 items-start">
                <span 
                  className="font-body font-medium uppercase mb-3"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.12em',
                    color: 'rgba(200,168,75,0.70)'
                  }}
                >
                  Parceria Oficial
                </span>
                <div className="bg-white px-4 py-2 rounded flex items-center justify-center border border-white/20 shadow-sm relative -ml-1">
                  <img src={totalLogo} alt="TotalEnergies" className="h-[22px] w-auto object-contain" />
                </div>
              </div>

              <div className="hidden md:block w-[1px] h-[40px] shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}></div>

              <div className="md:hidden w-full h-[1px] shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.1)', margin: '8px 0 -8px 0' }}></div>

              <p 
                className="font-body font-light m-0"
                style={{
                  fontSize: '14px',
                  lineHeight: '1.7',
                  color: 'rgba(255,255,255,0.65)'
                }}
              >
                Distribuidor autorizado da TotalEnergies — petrolífera presente em mais de 130 países, operando em toda a cadeia da indústria do petróleo, da prospecção à produção dos lubrificantes mais modernos do mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="bg-background py-12 md:py-24">
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
    </>
  );
};

export default Index;