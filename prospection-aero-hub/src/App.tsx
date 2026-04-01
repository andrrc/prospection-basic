import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DiferencialSection from "@/components/DiferencialSection";
import ProdutosSection from "@/components/ProdutosSection";
import MissaoVisaoValoresSection from "@/components/MissaoVisaoValoresSection";
import InstitucionalSection from "@/components/InstitucionalSection";
import ContatoSection from "@/components/ContatoSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const App = () => (
  <TooltipProvider>
    <Navbar />
    <main>
      <HeroSection />
      <DiferencialSection />
      <ProdutosSection />
      <MissaoVisaoValoresSection />
      <InstitucionalSection />
      <ContatoSection />
    </main>
    <Footer />
    <WhatsAppButton />
  </TooltipProvider>
);

export default App;
