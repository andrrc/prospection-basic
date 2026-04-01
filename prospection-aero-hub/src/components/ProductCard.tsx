import { Droplets } from "lucide-react";
import productImage from "@/assets/aero_xpd100-removebg-preview.png";

interface ProductSpec {
  Viscosidade: string;
  Aplicação: string;
  Volume: string;
  Norma: string;
}

interface ProductCardProps {
  name: string;
  tag: string;
  highlight?: boolean;
  specs: ProductSpec;
}

const ProductCard = ({ name, tag, highlight, specs }: ProductCardProps) => {
  const whatsappNumber = "5515996243489"; // Substitua pelo número real da empresa
  const message = `Olá, gostaria de solicitar uma cotação para o produto: *${name}* que vi no site.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className={`relative w-full flex flex-col bg-[#FFFFFF] rounded-[6px] transition-all duration-250 ease-out lg:hover:-translate-y-[4px] lg:hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden ${
        highlight ? "border-[2px] border-[#C8A84B]" : "border-[2px] border-transparent"
      }`}
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}
    >
      {/* ZONA SUPERIOR - IMAGEM */}
      <div className="relative w-full bg-[#EEF1F5] hover:bg-[#E2E8F0] transition-colors duration-200 flex flex-col items-center justify-center h-[160px] md:h-[140px] lg:h-[180px] shrink-0 p-4">
        {highlight && (
          <span 
            className="absolute top-[12px] right-[12px] bg-[#C8A84B] text-[#1A2535] font-body font-bold uppercase z-10"
            style={{ fontSize: '9px', letterSpacing: '0.1em', padding: '4px 10px', borderRadius: '2px' }}
          >
            Destaque
          </span>
        )}
        <img src={productImage} alt={name} className="h-full w-auto max-w-full object-contain mix-blend-multiply drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-105" />
      </div>

      {/* ZONA INFERIOR - INFORMAÇÕES */}
      <div className="flex flex-col p-[16px] lg:p-[20px] bg-[#FFFFFF] flex-1">
        <h3 className="font-heading font-bold text-[#1A2535] text-[16px] lg:text-[18px] mb-[2px] leading-tight">
          {name}
        </h3>
        <span 
          className="font-body font-medium uppercase text-[#0055B3] mb-[14px]"
          style={{ fontSize: '10px', letterSpacing: '0.1em' }}
        >
          {tag}
        </span>

        {/* Especificações Técnicas */}
        <div className="grid grid-cols-2 grid-rows-2 gap-[8px]">
          {Object.entries(specs).map(([label, value]) => (
            <div key={label} className="bg-[#F4F6F9] rounded-[4px] p-[6px_8px] lg:p-[8px_10px]">
              <span className="block font-body font-medium uppercase text-[#9CA3AF]" style={{ fontSize: '10px', letterSpacing: '0.08em' }}>{label}</span>
              <span className="block font-body font-medium text-[#1A2535] text-[12px] lg:text-[13px] mt-[2px]">{value}</span>
            </div>
          ))}
        </div>

        {/* Linha Divisória */}
        <div className="w-full h-[1px] bg-[#E5E7EB] my-[10px] lg:my-[14px] shrink-0"></div>

        {/* Botão */}
        <div className="mt-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#0055B3] text-white font-body font-medium uppercase text-center rounded-[3px] transition-colors duration-200 hover:bg-[#003D82] flex items-center justify-center min-h-[44px] py-[13px] lg:py-[11px] text-[12px] tracking-[0.08em]"
          >
            Solicitar Cotação
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;