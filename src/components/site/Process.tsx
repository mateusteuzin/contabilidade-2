import { Reveal, SectionEyebrow } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Diagnóstico da empresa",
    desc: "Entendemos seu cenário atual, riscos e oportunidades em uma análise inicial completa.",
  },
  {
    n: "02",
    title: "Organização fiscal e contábil",
    desc: "Colocamos tudo em ordem: documentos, obrigações, processos e relatórios.",
  },
  {
    n: "03",
    title: "Planejamento estratégico",
    desc: "Definimos o melhor enquadramento e desenhamos um plano para reduzir tributos com segurança.",
  },
  {
    n: "04",
    title: "Acompanhamento mensal",
    desc: "Suporte contínuo, relatórios claros e proximidade real durante todo o ano.",
  },
];

export function Process() {
  return (
    <section id="processo" className="relative py-24 sm:py-32">
      <div className="container-premium">
        <Reveal className="text-center">
          <SectionEyebrow>Como trabalhamos</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold text-foreground text-balance sm:text-4xl md:text-5xl">
            Um processo claro, do começo ao acompanhamento
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant">
                <div className="font-display text-5xl font-bold text-transparent" style={{ WebkitTextStroke: "1px color-mix(in oklab, var(--color-gold) 80%, transparent)" }}>
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 gradient-gold transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
