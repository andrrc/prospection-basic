import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import heroBanner from "@/assets/hero-banner.webp";

const Contato = () => {
  return (
    <>
      {/* HERO DA PÁGINA CONTATO */}
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
            Contato
          </span>
          <h1 className="font-heading font-bold text-white text-[30px] lg:text-[48px] max-w-[680px] mx-auto leading-tight m-0">
            Fale com nossa equipe comercial
          </h1>
          <p className="font-body font-light text-[17px] text-[rgba(255,255,255,0.75)] max-w-[500px] mx-auto mt-[16px]">
            Atendemos todo o Brasil. Resposta em até 24h úteis.
          </p>
        </div>
      </section>

      <section className="bg-background py-12 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-section-mobile lg:text-[2rem] text-text-primary mb-6">Informações de contato</h2>
              <ul className="space-y-5 text-sm font-body">
                <li className="flex items-start gap-3">
                  <MapPin className="text-blue-main mt-0.5 shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-text-primary">Localização</p>
                    <p className="text-text-secondary font-light tracking-[0.01em]">Votorantim — SP, Brasil</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="text-blue-main mt-0.5 shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-text-primary">Telefone</p>
                    <p className="text-text-secondary font-light tracking-[0.01em]">(15) 99999-9999</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="text-blue-main mt-0.5 shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-text-primary">E-mail</p>
                    <p className="text-text-secondary font-light tracking-[0.01em]">contato@prospection.com.br</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="text-blue-main mt-0.5 shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-text-primary">Horário</p>
                    <p className="text-text-secondary font-light tracking-[0.01em]">Segunda a Sexta, 8h às 18h</p>
                  </div>
                </li>
              </ul>

              <a
                href="https://wa.me/5515996243489"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 text-white text-btn font-body font-medium uppercase tracking-[0.08em] px-6 py-3 rounded transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="shrink-0" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                Chamar no WhatsApp
              </a>
            </div>

            <div>
              <h2 className="font-heading text-section-mobile lg:text-[2rem] text-text-primary mb-6">Envie sua mensagem</h2>
              <ContactForm submitLabel="Enviar Mensagem" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;