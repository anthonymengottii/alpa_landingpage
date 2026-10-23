import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

export const whiteLabelDoubts = [
  {
    question: "O que é uma plataforma white label",
    answer:
      "É uma plataforma de pagamentos pronta que você lança com a sua própria marca: nome, logo, cores, domínio e taxas. Seus clientes enxergam a sua empresa, enquanto a Alpa cuida da tecnologia por trás.",
  },
  {
    question: "Posso usar meu próprio domínio",
    answer:
      "Sim. O painel e o checkout público podem rodar em subdomínios do seu domínio, como o checkout da sua marca, mantendo toda a experiência personalizada.",
  },
  {
    question: "Consigo definir minhas próprias taxas",
    answer:
      "Sim. Você configura as taxas de PIX, cartão de crédito e boleto, inclusive por cliente, e define a sua margem de operação.",
  },
  {
    question: "Quais meios de pagamento estão disponíveis",
    answer:
      "PIX, cartão de crédito e boleto bancário, com opção de roteamento entre múltiplas adquirentes para aumentar a aprovação.",
  },
  {
    question: "Como começo a minha operação white label",
    answer:
      "Fale com o nosso time pelo WhatsApp. Entendemos o seu modelo de negócio, configuramos a sua marca e liberamos a plataforma para você começar a operar.",
  },
];

export function WhiteLabelFaq() {
  return (
    <Section className="flex flex-col items-center gap-8 mb-20 md:mb-32 max-w-4xl">
      <Reveal className="flex flex-col items-center gap-4 text-center">
        <span className="text-primary font-semibold uppercase">FAQ</span>
        <h2 className="text-[32px] font-semibold">
          Dúvidas sobre o White Label
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="w-full">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-2"
        >
          {whiteLabelDoubts.map(({ question, answer }) => (
            <AccordionItem
              value={question}
              key={question}
              className="border border-border/30 !border-b rounded-[10px] cursor-pointer"
            >
              <AccordionTrigger
                className="text-base font-semibold p-6 items-center"
                icon={<Plus className="stroke-primary size-8" />}
              >
                {question}?
              </AccordionTrigger>
              <AccordionContent className="p-0 pt-2 px-6 pb-6 text-foreground-invert/60">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
