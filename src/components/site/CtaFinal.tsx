import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "./Header";
import { Reveal } from "./Reveal";
import whatsAppLogo from "@/assets/whatsapp-logo.svg";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 text-white sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 70% at 50% 50%, color-mix(in oklab, var(--color-gold) 20%, transparent), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, color-mix(in oklab, var(--color-gold) 60%, transparent), transparent)" }}
      />
      <div className="container-premium relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-semibold leading-[1.1] text-balance sm:text-4xl md:text-6xl">
            Pronto para transformar a contabilidade da sua empresa?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/70 sm:text-lg">
            Converse com um especialista da Prime e descubra como a contabilidade
            estratégica pode acelerar seus resultados.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full gradient-gold px-8 py-4 text-sm font-semibold text-navy-deep shadow-gold transition-transform duration-300 hover:scale-[1.03]"
            >
              <img src={whatsAppLogo} alt="WhatsApp" className="h-4 w-4" />
              Falar no WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
