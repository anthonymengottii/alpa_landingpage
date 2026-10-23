import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";

const steps = [
  {
    title: "Conversa com o nosso time",
    description:
      "Entendemos o seu modelo de negócio, o volume esperado e as necessidades da operação.",
  },
  {
    title: "Configuramos a sua marca",
    description:
      "Aplicamos domínio, identidade visual, taxas e adquirentes na sua plataforma.",
  },
  {
    title: "Integre e comece a operar",
    description:
      "Conecte seus clientes pela API e pela documentação e receba os primeiros pagamentos.",
  },
];

export function WhiteLabelSteps() {
  return (
    <Section className="pb-20 md:pb-40 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12">
      <Reveal x={-24} y={0} className="flex flex-col gap-4 text-center lg:text-start">
        <span className="font-bold text-primary">Como funciona</span>
        <h2 className="font-bold text-[32px] md:text-[40px] leading-tight">
          Do primeiro contato ao primeiro pagamento
        </h2>
        <p className="text-base max-w-md mx-auto lg:mx-0">
          Um processo direto, acompanhado pelo time da Alpa em cada etapa.
        </p>
      </Reveal>

      <ol className="relative flex flex-col gap-6">
        <span
          aria-hidden="true"
          className="absolute left-6 top-6 bottom-6 w-px bg-primary/40"
        />
        {steps.map(({ title, description }, index) => (
          <Reveal key={title} x={24} y={0} delay={index * 0.1}>
            <li className="relative flex items-start gap-6 list-none">
              <span className="relative z-10 flex shrink-0 items-center justify-center size-12 rounded-2xl bg-primary font-bold text-lg">
                {index + 1}
              </span>
              <div className="flex flex-col gap-2 rounded-[32px] bg-card p-6 flex-1">
                <h3 className="text-base font-bold">{title}</h3>
                <p className="text-base">{description}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
