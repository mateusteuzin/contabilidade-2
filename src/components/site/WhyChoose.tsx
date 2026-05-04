import { Reveal, SectionEyebrow } from "./Reveal";
import { Check } from "lucide-react";

const items = [
  {
    title: "Atendimento claro e humanizado",
    desc: "Você fala com pessoas que entendem o seu negócio — sem termos confusos.",
  },
  {
    title: "Estratégia para reduzir riscos",
    desc: "Antecipamos problemas fiscais antes que virem prejuízo.",
  },
  {
    title: "Organização fiscal completa",
    desc: "Tudo em conformidade com a legislação, do início ao fim.",
  },
  {
    title: "Relatórios simples de entender",
    desc: "Indicadores diretos ao ponto para você tomar decisões com confiança.",
  },
  {
    title: "Suporte para tomada de decisão",
    desc: "Você não fica sozinho: estamos ao seu lado nos momentos importantes.",
  },
];

export function WhyChoose() {
  return (
    <section id="porque" className="relative bg-navy-deep py-24 text-white sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, color-mix(in oklab, var(--color-gold) 18%, transparent), transparent 70%)",
        }}
      />
      <div className="container-premium relative">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="gold-divider" />
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
                Por que escolher
              </span>
            </div>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl md:text-5xl">
              Diferenciais que sua empresa{" "}
              <span className="bg-gradient-to-r from-[oklch(0.92_0.09_85)] to-[oklch(0.78_0.13_82)] bg-clip-text text-transparent">
                vai sentir na prática
              </span>
            </h2>
            <p className="mt-6 max-w-lg text-white/70">
              Combinamos experiência técnica e visão estratégica para entregar uma
              contabilidade à altura das melhores empresas do mercado.
            </p>
          </Reveal>

          <ul className="space-y-4">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 80}>
                <li className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-gold/30 hover:bg-white/[0.05]">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full gradient-gold shadow-gold">
                    <Check className="h-4 w-4 text-navy-deep" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                    <p className="mt-1 text-sm text-white/65">{it.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
