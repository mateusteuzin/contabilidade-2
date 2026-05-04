import { Fragment, useState } from "react";
import { Check, Minus, Crown, Sparkles, MessageCircle } from "lucide-react";
import { Reveal, SectionEyebrow } from "./Reveal";

type Audience = "servicos" | "comercio";

type Plan = {
  id: "essencial" | "estrategico" | "premium";
  name: string;
  badge?: { label: string; tone: "gold" | "navy" };
  description: string;
  price: { servicos: string; comercio: string };
  cta: string;
  features: string[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    id: "essencial",
    name: "Essencial",
    description:
      "Para empresas que precisam de uma contabilidade simples, organizada e segura.",
    price: { servicos: "197", comercio: "247" },
    cta: "Contratar agora",
    features: [
      "Contabilidade mensal",
      "Apuração de impostos",
      "Obrigações fiscais básicas",
      "Atendimento via WhatsApp",
      "Relatórios simples",
    ],
  },
  {
    id: "estrategico",
    name: "Estratégico",
    badge: { label: "Mais escolhido", tone: "gold" },
    description:
      "Para empresas que querem mais controle, economia tributária e suporte estratégico.",
    price: { servicos: "297", comercio: "367" },
    cta: "Quero esse plano",
    highlighted: true,
    features: [
      "Tudo do Plano Essencial",
      "Planejamento tributário",
      "Relatórios gerenciais",
      "Suporte prioritário",
      "Análise mensal de impostos",
      "Orientação para reduzir custos",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    badge: { label: "Atendimento completo", tone: "navy" },
    description:
      "Para empresas que precisam de acompanhamento próximo, consultoria e gestão contábil completa.",
    price: { servicos: "497", comercio: "597" },
    cta: "Falar com especialista",
    features: [
      "Tudo do Plano Estratégico",
      "Consultoria contábil personalizada",
      "Departamento pessoal",
      "Reunião mensal online",
      "Gestão fiscal completa",
      "Diagnóstico financeiro",
      "Acompanhamento estratégico",
    ],
  },
];

type Row = { label: string; values: [boolean, boolean, boolean] };
type Group = { category: string; rows: Row[] };

const comparison: Group[] = [
  {
    category: "Contabilidade",
    rows: [
      { label: "Contabilidade mensal", values: [true, true, true] },
      { label: "Apuração de impostos", values: [true, true, true] },
      { label: "Obrigações fiscais", values: [true, true, true] },
      { label: "Relatórios mensais", values: [true, true, true] },
    ],
  },
  {
    category: "Estratégia",
    rows: [
      { label: "Planejamento tributário", values: [false, true, true] },
      { label: "Análise para pagar menos impostos", values: [false, true, true] },
      { label: "Relatórios gerenciais", values: [false, true, true] },
      { label: "Reunião estratégica", values: [false, false, true] },
    ],
  },
  {
    category: "Atendimento",
    rows: [
      { label: "WhatsApp", values: [true, true, true] },
      { label: "Suporte prioritário", values: [false, true, true] },
      { label: "Atendimento com especialista", values: [false, false, true] },
      { label: "Reunião mensal", values: [false, false, true] },
    ],
  },
];

const buildWhats = (planName: string) =>
  `https://wa.me/5511999999999?text=${encodeURIComponent(
    `Olá, quero saber mais sobre o Plano ${planName} para minha empresa.`,
  )}`;

export function Pricing() {
  const [tab, setTab] = useState<Audience>("servicos");

  return (
    <section id="planos" className="relative py-24 sm:py-32 gradient-section">
      <div className="container-premium">
        <Reveal className="text-center">
          <SectionEyebrow>Planos</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold text-foreground text-balance sm:text-4xl md:text-5xl">
            Escolha o plano ideal para sua empresa
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Soluções contábeis pensadas para cada fase do seu negócio, com clareza,
            estratégia e suporte profissional.
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal className="mt-12 flex justify-center">
          <div className="inline-flex rounded-full border border-border bg-card p-1.5 shadow-card-soft">
            {(
              [
                { id: "servicos", label: "Empresas de serviços" },
                { id: "comercio", label: "Empresas de comércio" },
              ] as { id: Audience; label: string }[]
            ).map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-all sm:px-7 ${
                  tab === t.id
                    ? "bg-primary text-primary-foreground shadow-card-soft"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Plans */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((p, i) => {
            const isHi = !!p.highlighted;
            return (
              <Reveal key={p.id} delay={i * 90} className={isHi ? "lg:-my-4" : ""}>
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-500 sm:p-9 ${
                    isHi
                      ? "border-gold/60 bg-primary text-primary-foreground shadow-elegant"
                      : "border-border bg-card shadow-card-soft hover:-translate-y-1 hover:shadow-elegant"
                  }`}
                >
                  {/* Decorative gradient */}
                  {isHi && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-60"
                      style={{
                        background:
                          "radial-gradient(120% 60% at 50% 0%, color-mix(in oklab, var(--color-gold) 18%, transparent), transparent 60%)",
                      }}
                    />
                  )}

                  {/* Badge */}
                  {p.badge && (
                    <div className="relative mb-5 flex">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                          p.badge.tone === "gold"
                            ? "gradient-gold text-navy-deep shadow-gold"
                            : "bg-white/10 text-gold ring-1 ring-gold/40"
                        }`}
                      >
                        {p.badge.tone === "gold" ? (
                          <Crown className="h-3 w-3" />
                        ) : (
                          <Sparkles className="h-3 w-3" />
                        )}
                        {p.badge.label}
                      </span>
                    </div>
                  )}

                  <div className="relative">
                    <h3
                      className={`font-display text-2xl font-semibold ${
                        isHi ? "text-white" : "text-foreground"
                      }`}
                    >
                      Plano {p.name}
                    </h3>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        isHi ? "text-white/75" : "text-muted-foreground"
                      }`}
                    >
                      {p.description}
                    </p>
                  </div>

                  <div className="relative mt-7">
                    <div
                      className={`text-xs uppercase tracking-[0.2em] ${
                        isHi ? "text-gold" : "text-muted-foreground"
                      }`}
                    >
                      A partir de
                    </div>
                    <div className="mt-2 flex items-baseline gap-1.5">
                      <span
                        className={`font-display text-2xl font-semibold ${
                          isHi ? "text-white/80" : "text-foreground/70"
                        }`}
                      >
                        R$
                      </span>
                      <span
                        className={`font-display text-6xl font-bold leading-none tracking-tight ${
                          isHi ? "text-white" : "text-foreground"
                        }`}
                      >
                        {p.price[tab]}
                      </span>
                      <span
                        className={`text-sm ${
                          isHi ? "text-white/65" : "text-muted-foreground"
                        }`}
                      >
                        /mês
                      </span>
                    </div>
                  </div>

                  <a
                    href={buildWhats(p.name)}
                    target="_blank"
                    rel="noreferrer"
                    className={`relative mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] ${
                      isHi
                        ? "gradient-gold text-navy-deep shadow-gold"
                        : "bg-primary text-primary-foreground hover:shadow-elegant"
                    }`}
                  >
                    <MessageCircle className="h-4 w-4" />
                    {p.cta}
                  </a>

                  <div
                    className={`relative my-7 h-px w-full ${
                      isHi ? "bg-white/10" : "bg-border"
                    }`}
                  />

                  <ul className="relative flex flex-col gap-3.5">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-3 text-sm ${
                          isHi ? "text-white/85" : "text-foreground/85"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                            isHi
                              ? "bg-gold/15 text-gold"
                              : "bg-emerald-50 text-emerald-600"
                          }`}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Comparison table */}
        <Reveal className="mt-24">
          <div className="text-center">
            <SectionEyebrow>Comparativo</SectionEyebrow>
            <h3 className="mt-6 font-display text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl">
              Compare os recursos de cada plano
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Veja em detalhes o que está incluso para escolher com confiança.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-card-soft">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-6 py-5 text-sm font-semibold uppercase tracking-[0.16em]">
                      Recursos
                    </th>
                    {plans.map((p) => (
                      <th
                        key={p.id}
                        className={`px-6 py-5 text-center text-sm font-semibold uppercase tracking-[0.16em] ${
                          p.highlighted ? "text-gold" : ""
                        }`}
                      >
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((group) => (
                    <Fragment key={group.category}>
                      <tr className="bg-secondary/60">
                        <td
                          colSpan={4}
                          className="px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold"
                        >
                          {group.category}
                        </td>
                      </tr>
                      {group.rows.map((r) => (
                        <tr
                          key={r.label}
                          className="border-t border-border transition-colors hover:bg-secondary/40"
                        >
                          <td className="px-6 py-4 text-sm text-foreground/90">
                            {r.label}
                          </td>
                          {r.values.map((v, idx) => (
                            <td
                              key={idx}
                              className={`px-6 py-4 text-center ${
                                plans[idx].highlighted ? "bg-secondary/30" : ""
                              }`}
                            >
                              <span className="inline-flex items-center justify-center">
                                {v ? (
                                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                                    <Check className="h-4 w-4" strokeWidth={3} />
                                  </span>
                                ) : (
                                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground/60">
                                    <Minus className="h-4 w-4" />
                                  </span>
                                )}
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              Não sabe qual plano escolher? Fale com nossos especialistas.
            </p>
            <a
              href={buildWhats("ideal para minha empresa")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-gold transition-transform duration-300 hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
