import { ShieldCheck, Truck, Award } from "lucide-react";
import heroBanner from "@/assets/hero-banner.webp";

const HeroSection = () => {
  return (
    <section
      id="inicio"
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
            <a
              href="#contato"
              className="font-body font-medium uppercase text-white text-[13px] tracking-[0.08em] bg-[#0055B3] px-6 py-0 min-h-[52px] md:min-h-0 md:px-8 md:py-4 rounded-[3px] transition-all duration-200 hover:brightness-110 flex justify-center items-center w-full md:w-auto text-center"
            >
              Solicitar Cotação Agora
            </a>
            <a
              href="#produtos"
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
  );
};

export default HeroSection;
