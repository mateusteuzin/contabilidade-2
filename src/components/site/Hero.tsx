import heroImg from "@/assets/hero-office.jpg";
import { ArrowRight, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { WHATSAPP_URL } from "./Header";
import whatsAppLogo from "@/assets/whatsapp-logo.svg";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Sala de reunião executiva moderna ao entardecer"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero-overlay)" }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 30%, color-mix(in oklab, var(--color-gold) 12%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="container-premium relative flex min-h-[100svh] flex-col justify-center pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="anim-fade-up flex items-center gap-3">
            <span className="gold-divider" />
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              Prime Contabilidade Estratégica
            </span>
          </div>

          <h1 className="anim-fade-up delay-100 mt-6 font-display text-4xl font-semibold leading-[1.05] text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Contabilidade clara,{" "}
            <span className="bg-gradient-to-r from-[oklch(0.92_0.09_85)] to-[oklch(0.78_0.13_82)] bg-clip-text text-transparent">
              estratégica
            </span>{" "}
            e sem complicação
          </h1>

          <p className="anim-fade-up delay-200 mt-6 max-w-2xl text-lg text-white/75 sm:text-xl">
            Mais controle financeiro e decisões seguras no dia a dia para empresas
            que buscam organização, previsibilidade e crescimento sustentável.
          </p>

          <div className="anim-fade-up delay-300 mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-4 text-sm font-semibold text-navy-deep shadow-gold transition-transform duration-300 hover:scale-[1.03]"
            >
              <img src={whatsAppLogo} alt="WhatsApp" className="h-4 w-4" />
              Falar com especialista
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Ver serviços
            </a>
          </div>

          <div className="anim-fade-up delay-400 mt-14 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { icon: Users, label: "Atendimento para empresas" },
              { icon: TrendingUp, label: "Planejamento tributário" },
              { icon: ShieldCheck, label: "Suporte estratégico" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur"
              >
                <item.icon className="h-4 w-4 text-gold" />
                <span className="text-xs font-medium text-white/85">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
