import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/prospection-logo.png";
import totalLogo from "@/assets/totalenergies-logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark-footer border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={logo} alt="Prospection" className="h-8 w-auto brightness-0 invert" />
              <span className="w-px h-6 bg-white/20"></span>
              <img src={totalLogo} alt="TotalEnergies" className="h-6 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/50 text-sm font-body font-light leading-[1.75] tracking-[0.01em] max-w-xs">
              Distribuidora autorizada TotalEnergies Lubrificantes para o setor aeronáutico. Atendemos todo o Brasil com agilidade e suporte técnico.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-white text-label font-semibold uppercase tracking-[0.12em] mb-4">Navegação</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Início" },
                { to: "/sobre", label: "Sobre" },
                { to: "/contato", label: "Contato" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-text-muted hover:text-gold text-sm font-body transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white text-label font-semibold uppercase tracking-[0.12em] mb-4">Contato</h4>
            <ul className="space-y-3 text-text-muted text-sm font-body">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                Votorantim — SP, Brasil
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold shrink-0" />
                (15) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold shrink-0" />
                contato@prospection.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center md:items-start justify-between gap-4 text-white/30 text-xs font-body text-center md:text-left">
          <div className="flex flex-col gap-1.5 w-full md:w-auto">
            <span>© 2025 Prospection Comércio e Representações. Todos os direitos reservados.</span>
            <span>Razão Social: Prospection Comércio e Representações Ltda. | CNPJ: 12.345.678/0001-90</span>
          </div>
          <span className="w-full md:w-auto">Site desenvolvido por Somma</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;