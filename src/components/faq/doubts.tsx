import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const doubts = [
  {
    question: "O que é gateway de pagamento",
    answer:
      "O gateway de pagamento é um serviço oferecido a lojas virtuais, SaaS e empresas de grande porte, que recebe, autoriza e confere pagamentos de transações online de maneira rápida e segura, seja por PIX, boleto ou cartão de crédito e débito.",
  },
  {
    question: "Qual a frequência de saques e antecipações",
    answer:
      "A Alpa oferece saques e antecipações diários, permitindo que você tenha acesso rápido ao saldo das suas vendas. Para mais detalhes sobre prazos e condições, entre em contato com nosso time de suporte.",
  },
  {
    question: "O uso da Alpa é gratuito",
    answer:
      "Sim, um gateway de pagamento é um serviço que processa transações de cartão de crédito para empresas online e físicas.",
  },
  {
    question: "Para quais tipos de negócios a Alpa é indicada",
    answer:
      "A Alpa é ideal para negócios digitais de todos os tipos, incluindo e-commerces, dropshipping, infoprodutos e diversos outros modelos de negócios online. Para saber mais sobre como a Alpa pode atender especificamente o seu negócio, entre em contato com nosso time de vendas!",
  },
  {
    question: "Minha conta será bloqueada se eu vender info produto",
    answer:
      "Não, a Alpa aceita a venda de infoprodutos, desde que estejam em conformidade com nossas políticas.",
  },
  {
    question: "Como funciona a proteção contra fraudes",
    answer:
      "Na Alpa, unimos tecnologia avançada e análise humana para garantir máxima segurança nas suas transações. Nosso antifraude híbrido identifica automaticamente pedidos suspeitos e conta com uma equipe dedicada para revisar manualmente cada caso, evitando a perda de vendas legítimas e aumentando sua taxa de aprovação.",
  },
  {
    question: "Como posso começar a usar a Alpa",
    answer:
      "Você pode usar a Alpa para receber pagamentos de forma simples, segura e com atendimento que realmente resolve. A gente cuida da parte técnica e burocrática, pra você focar no que importa: vender.",
  },
];

export function Doubts() {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
      {doubts.map(({ question, answer }) => (
        <AccordionItem
          value={question}
          key={question}
          className="border border-border/30  !border-b rounded-[10px] cursor-pointer"
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
  );
}
