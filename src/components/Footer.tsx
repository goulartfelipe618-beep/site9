import { Link } from "react-router-dom";
import { Anchor } from "lucide-react";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Anchor size={20} className="text-accent" />
        </div>
        <p className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Outfit' }}>Riviera Transfer</p>
        <p className="text-sm text-primary-foreground/50 mt-1">Premium de Verão</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left max-w-3xl mx-auto">
        <div>
          <p className="text-xs uppercase tracking-wider text-primary-foreground/30 mb-4 font-semibold">Navegação</p>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Transfer" },
              { to: "/grupos", label: "Grupos" },
              { to: "/sobre", label: "Sobre" },
              { to: "/contato", label: "Contato" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-primary-foreground/30 mb-4 font-semibold">Contato</p>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/50">
            <span>contato@rivieratransfer.com.br</span>
            <span>(11) 99999-9999</span>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-primary-foreground/30 mb-4 font-semibold">Verão</p>
          <p className="text-sm text-primary-foreground/50 leading-relaxed">
            Cada trajeto é uma extensão<br />da sua experiência de verão. ☀️
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="h-[1px] bg-primary-foreground/10 mb-8 max-w-md mx-auto" />
        <p className="text-[10px] text-primary-foreground/25 tracking-widest uppercase">
          © {new Date().getFullYear()} Riviera Transfer
        </p>
      </div>
    </div>
  </footer>
);
