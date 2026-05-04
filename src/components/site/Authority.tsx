import { Reveal, SectionEyebrow } from "./Reveal";
import { ShieldCheck, TrendingUp, Lightbulb } from "lucide-react";

export function Authority() {
  return (
    <section className="relative gradient-section py-24 sm:py-32">
      <div className="container-premium">
        <Reveal className="text-center">
          <SectionEyebrow>Autoridade & Confiança</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold text-foreground text-balance sm:text-4xl md:text-5xl">
            Decisões mais inteligentes começam com{" "}
            <span className="text-primary">números organizados</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Trabalhamos lado a lado com empresários para transformar a contabilidade em
            uma ferramenta estratégica — com menos riscos, mais clareza e foco no que
            realmente faz o seu negócio crescer.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Mais segurança",
              text: "Conformidade fiscal e contábil com processos auditáveis e organizados.",
            },
            {
              icon: TrendingUp,
              title: "Mais controle",
              text: "Relatórios gerenciais claros para você acompanhar a saúde do negócio.",
            },
            {
              icon: Lightbulb,
              title: "Mais estratégia",
              text: "Planejamento tributário e orientação para decisões com confiança.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
