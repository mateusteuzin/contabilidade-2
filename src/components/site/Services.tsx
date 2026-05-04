import { Reveal, SectionEyebrow } from "./Reveal";
import {
  Building2,
  Calculator,
  FileBarChart,
  Receipt,
  Users,
  ShieldCheck,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Abertura de empresa",
    desc: "Constituição rápida e estratégica, com escolha do enquadramento ideal para o seu negócio.",
  },
  {
    icon: Calculator,
    title: "Contabilidade mensal",
    desc: "Escrituração precisa, balancetes e relatórios prontos para decisões mensais.",
  },
  {
    icon: FileBarChart,
    title: "Planejamento tributário",
    desc: "Análise para reduzir a carga de impostos com total segurança jurídica.",
  },
  {
    icon: Receipt,
    title: "Gestão fiscal",
    desc: "Apuração de tributos, obrigações acessórias e controle fiscal completo.",
  },
  {
    icon: Users,
    title: "Departamento pessoal",
    desc: "Folha de pagamento, admissões, férias, rescisões e eSocial sem dor de cabeça.",
  },
  {
    icon: ShieldCheck,
    title: "Regularização de empresas",
    desc: "Resolvemos pendências fiscais, contábeis e cadastrais com eficiência.",
  },
  {
    icon: Briefcase,
    title: "Consultoria contábil",
    desc: "Acompanhamento estratégico para apoiar suas decisões financeiras e societárias.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 sm:py-32">
      <div className="container-premium">
        <Reveal className="text-center">
          <SectionEyebrow>Serviços</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold text-foreground text-balance sm:text-4xl md:text-5xl">
            Soluções contábeis completas para empresas exigentes
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Cada serviço é entregue com o rigor e a clareza que sua empresa merece.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-elegant">
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(closest-side, color-mix(in oklab, var(--color-gold) 22%, transparent), transparent)",
                  }}
                />
                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-card-soft">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h3 className="relative mt-6 font-display text-xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
