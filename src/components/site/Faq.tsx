import { useState } from "react";
import { Reveal, SectionEyebrow } from "./Reveal";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Posso trocar de contador?",
    a: "Sim. A migração é simples e cuidamos de toda a transição com o seu contador atual, sem prejuízo às operações da sua empresa.",
  },
  {
    q: "Vocês atendem empresas do Simples Nacional?",
    a: "Sim. Atendemos empresas do Simples Nacional, Lucro Presumido e Lucro Real, sempre com o enquadramento mais vantajoso.",
  },
  {
    q: "Fazem abertura de empresa?",
    a: "Sim. Cuidamos de todo o processo de constituição: viabilidade, contrato social, CNPJ, inscrições e alvará.",
  },
  {
    q: "O atendimento é online?",
    a: "Sim. Atendemos empresas em todo o Brasil de forma 100% digital, com suporte humanizado por WhatsApp, e-mail e reuniões online.",
  },
  {
    q: "Ajudam a pagar menos impostos dentro da lei?",
    a: "Sim. Realizamos planejamento tributário estratégico e dentro da legalidade, identificando o melhor regime e oportunidades para reduzir a carga.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-premium">
        <Reveal className="text-center">
          <SectionEyebrow>Perguntas frequentes</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold text-foreground text-balance sm:text-4xl md:text-5xl">
            Tudo que você precisa saber
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-card shadow-card-soft transition-all duration-300 ${
                    isOpen ? "border-gold/40" : "border-border"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-foreground sm:text-lg">
                      {f.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-gold bg-gold text-navy-deep"
                          : "border-border text-foreground"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
