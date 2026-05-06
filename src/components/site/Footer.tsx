import { Mail, MapPin } from "lucide-react";
import whatsAppLogo from "@/assets/whatsapp-logo.svg";
import { WHATSAPP_URL } from "./Header";


export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container-premium py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md gradient-gold">
                <span className="font-display text-lg font-bold text-navy-deep">P</span>
              </span>
              <div className="leading-tight">
                <div className="font-display text-base font-semibold text-white">Prime</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-gold">
                  Contabilidade Estratégica
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Contabilidade clara, estratégica e sem complicação para empresas que querem
              crescer com segurança e previsibilidade.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Links rápidos
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["#servicos", "Serviços"],
                ["#porque", "Diferenciais"],
                ["#processo", "Processo"],
                ["#depoimentos", "Depoimentos"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-white/70 transition-colors hover:text-gold">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Contato
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-white/70 transition-colors hover:text-gold"
                >
                  <img
                    src={whatsAppLogo}
                    alt="Logo WhatsApp"
                    className="mt-0.5 h-4 w-4"
                  />
                  WhatsApp

                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@primecontabilidade.com.br"
                  className="flex items-start gap-3 text-white/70 transition-colors hover:text-gold"
                >
                  <Mail className="mt-0.5 h-4 w-4 text-gold" />
                  contato@primecontabilidade.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                Atendimento online em todo o Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Prime Contabilidade Estratégica. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
