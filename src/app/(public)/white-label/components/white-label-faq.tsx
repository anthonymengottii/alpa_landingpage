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
      "É uma plataforma de pagamentos pronta que você lança com a sua própria marca: nome, logo, cores, banner de login, SEO e domínio. Seus clientes enxergam a sua empresa, enquanto a Alpa cuida da tecnologia por trás.",
  },
  {
    question: "Posso usar meu próprio domínio",
    answer:
      "Sim. O painel e o checkout público rodam em subdomínios separados do seu domínio, como app.suamarca.com e checkout.suamarca.com.",
  },
  {
    question: "Como funciona a personalização da marca",
    answer:
      "O administrador altera nome, logo, cor primária, banner de login e dados de SEO pelo painel. As mudanças são aplicadas em toda a interface sem necessidade de novo deploy.",
  },
  {
    question: "Consigo definir minhas próprias taxas",
    answer:
      "Sim. As taxas de PIX, cartão (inclusive por número de parcelas) e boleto são configuradas por empresa, assim como limites de transação e de saque diário.",
  },
  {
    question: "Quais meios de pagamento estão disponíveis",
    answer:
      "PIX, cartão de crédito e débito (parcelamento em até 12x) e boleto bancário. Você pode conectar múltiplas adquirentes e dividir os pagamentos entre a plataforma e os lojistas com split.",
  },
  {
    question: "Como funcionam os saques e a liberação dos valores",
    answer:
      "Os saques são feitos via PIX para uma chave do próprio usuário e exigem confirmação por código enviado por e-mail. Valores de cartão são liberados automaticamente: à vista após 30 dias, ou uma parcela a cada 30 dias no parcelado.",
  },
  {
    question: "Existe verificação dos lojistas (KYC)",
    answer:
      "Sim. O cadastro aceita pessoa física e jurídica, e os recursos de venda ficam bloqueados até a aprovação do KYC pelo seu time.",
  },
  {
    question: "Posso integrar com a minha loja ou sistema",
    answer:
      "Sim. Há API REST documentada, SDKs em JavaScript, PHP, Python e Java, webhooks de eventos de pagamento e integração nativa com Shopify.",
  },
  {
    question: "Existe aplicativo mobile",
    answer:
      "Há um app Android para acompanhar o dashboard e as transações, solicitar saques e enviar documentos de KYC.",
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
