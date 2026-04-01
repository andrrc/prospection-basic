import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/prospection-logo.png";
import totalLogo from "@/assets/totalenergies-logo.png";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#produtos", label: "Produtos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-blue-main shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <a href="#inicio" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <img
            src={logo}
            alt="Prospection - Distribuidor Total Aeronáutico"
            className="h-6 sm:h-8 lg:h-10 w-auto object-contain max-w-[140px] sm:max-w-none"
          />
          <span className="w-px h-5 sm:h-6 lg:h-8 bg-border shrink-0"></span>
          <img
            src={totalLogo}
            alt="TotalEnergies"
            className="h-4 sm:h-6 lg:h-8 w-auto object-contain max-w-[100px] sm:max-w-none"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-body font-medium text-sm uppercase tracking-[0.05em] transition-colors duration-200 ${
                  isActive ? "text-blue-main" : "text-text-primary hover:text-blue-main"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contato"
            className="ml-4 bg-blue-main text-white font-body font-medium uppercase text-btn px-5 py-2.5 rounded transition-all duration-200 hover:bg-blue-dark tracking-[0.08em]"
          >
            Solicitar Cotação
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-text-primary"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border pb-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-3 font-body font-medium uppercase tracking-[0.05em] text-sm ${
                  isActive ? "text-blue-main" : "text-text-primary"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="px-6 pt-2">
            <a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-blue-main text-white font-body font-medium uppercase text-btn px-5 py-2.5 rounded tracking-[0.08em] hover:bg-blue-dark"
            >
              Solicitar Cotação
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;