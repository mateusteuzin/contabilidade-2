import { Reveal } from "./Reveal";

const stats = [
  { value: "+120", label: "Empresas atendidas" },
  { value: "+8", label: "Anos de experiência" },
  { value: "100%", label: "Atendimento estratégico" },
  { value: "Mensal", label: "Suporte personalizado" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, color-mix(in oklab, var(--color-gold) 14%, transparent), transparent 70%)",
        }}
      />
      <div className="container-premium relative">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <div className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                <span className="bg-gradient-to-b from-white to-[oklch(0.85_0.1_85)] bg-clip-text text-transparent">
                  {s.value}
                </span>
              </div>
              <div className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
