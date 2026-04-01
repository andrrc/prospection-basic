import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/prospection-logo.png";
import totalLogo from "@/assets/totalenergies-logo.png";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-blue-main shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <img src={logo} alt="Prospection - Distribuidor Total Aeronáutico" className="h-6 sm:h-8 lg:h-10 w-auto object-contain max-w-[140px] sm:max-w-none" />
          <span className="w-px h-5 sm:h-6 lg:h-8 bg-border shrink-0"></span>
          <img src={totalLogo} alt="TotalEnergies" className="h-4 sm:h-6 lg:h-8 w-auto object-contain max-w-[100px] sm:max-w-none" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body font-medium text-sm uppercase tracking-[0.05em] transition-colors duration-200 ${
                pathname === link.to ? "text-blue-main" : "text-text-primary hover:text-blue-main"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contato"
            className="ml-4 bg-blue-main text-white font-body font-medium uppercase text-btn px-5 py-2.5 rounded transition-all duration-200 hover:bg-blue-dark tracking-[0.08em]"
          >
            Solicitar Cotação
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-text-primary"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 font-body font-medium uppercase tracking-[0.05em] text-sm ${
                pathname === link.to ? "text-blue-main" : "text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <Link
              to="/contato"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-blue-main text-white font-body font-medium uppercase text-btn px-5 py-2.5 rounded tracking-[0.08em] hover:bg-blue-dark"
            >
              Solicitar Cotação
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;