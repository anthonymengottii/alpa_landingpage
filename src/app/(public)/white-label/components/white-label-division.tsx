import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { Check } from "lucide-react";

const columns = [
  {
    title: "Você cuida do seu negócio",
    tone: "bg-card",
    items: [
      "Relacionamento com seus clientes",
      "Definição de taxas e margem",
      "Divulgação da sua marca",
    ],
  },
  {
    title: "A Alpa cuida da tecnologia",
    tone: "bg-primary",
    items: [
      "Infraestrutura e processamento",
      "Antifraude e segurança",
      "Integrações com adquirentes",
    ],
  },
];

export function WhiteLabelDivision() {
  return (
    <Section className="pb-20 md:pb-40">
      <Reveal className="flex flex-col items-center gap-4 mb-12 text-center">
        <span className="font-bold text-primary">Divisão de papéis</span>
        <h2 className="font-bold text-[32px] md:text-[40px] max-w-[600px] leading-tight">
          Você foca em vender. A gente cuida do resto.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {columns.map(({ title, tone, items }, index) => (
          <Reveal key={title} delay={index * 0.1}>
            <div
              className={`h-full rounded-[40px] p-10 flex flex-col gap-6 ${tone}`}
            >
              <h3 className="text-2xl font-bold">{title}</h3>
              <ul className="flex flex-col gap-4">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base">
                    <span className="flex shrink-0 items-center justify-center size-7 rounded-full bg-foreground">
                      <Check className="size-4 stroke-3 stroke-foreground-invert" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
