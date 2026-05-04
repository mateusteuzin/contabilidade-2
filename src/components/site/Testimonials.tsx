import { Reveal, SectionEyebrow } from "./Reveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Almeida",
    role: "CEO • Almeida Indústria",
    text: "A Prime trouxe uma clareza que nunca tivemos. Hoje tomamos decisões com base em dados reais e dormimos tranquilos com a parte fiscal.",
  },
  {
    name: "Fernanda Castro",
    role: "Diretora • Castro Comércio",
    text: "Atendimento atencioso, técnico e próximo. O planejamento tributário deles representou uma economia significativa no nosso ano.",
  },
  {
    name: "Lucas Mendes",
    role: "Sócio • Mendes & Partners",
    text: "Profissionalismo de outro nível. Relatórios claros, prazos cumpridos e uma equipe que realmente entende do nosso negócio.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative gradient-section py-24 sm:py-32">
      <div className="container-premium">
        <Reveal className="text-center">
          <SectionEyebrow>Depoimentos</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold text-foreground text-balance sm:text-4xl md:text-5xl">
            Empresas que confiam na nossa estratégia
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-card-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant">
                <Quote className="h-8 w-8 text-gold/70" strokeWidth={1.5} />
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground/85">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full gradient-navy text-sm font-semibold text-white">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
