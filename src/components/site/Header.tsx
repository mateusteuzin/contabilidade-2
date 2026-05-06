import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20Prime%20Contabilidade.";

export { WHATSAPP_URL };


const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#porque", label: "Diferenciais" },
  { href: "#processo", label: "Processo" },
  { href: "#planos", label: "Planos" },
  { href: "#depoimentos", label: "Clientes" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-premium flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-md gradient-gold shadow-gold">
            <span className="font-display text-lg font-bold text-navy-deep">P</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-tight text-white">
              Prime
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-gold/90">
              Contabilidade Estratégica
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full gradient-gold px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-gold transition-transform duration-300 hover:scale-[1.03] md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>

          <button
            onClick={() => setOpen((s) => !s)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="container-premium mt-3 rounded-xl border border-white/10 glass-dark p-4">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-white/85 transition-colors hover:bg-white/5 hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-gold px-5 py-2.5 text-sm font-semibold text-navy-deep"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export { WHATSAPP_URL };
