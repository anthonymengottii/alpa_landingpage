import Sustainable from "@/assets/sustainable.png";
import Transaction from "@/assets/transaction.png";
import Withdraw from "@/assets/withdraw.png";
import { Section } from "@/components/section";
import { SolutionCard } from "./solution-card";

export const cards = [
  {
    image: Withdraw,
    data: {
      label: "Liquidez Instantânea",
      title: "Saque imediato sempre que você precisa.",
      description:
        "Após a aprovação, seu dinheiro é transferido automaticamente. Você pode sacar quando precisar, tudo com segurança e agilidade que nossa plataforma oferece.",
      callToAction: "Entenda o funcionamento",
    },
  },
  {
    image: Transaction,
    data: {
      label: "Parceria de confiança",
      title: "Transações com total segurança e alta aprovação.",
      description:
        "Suas transações são respaldadas pelas melhores adquirentes do mercado, garantindo taxas de aprovação excepcionais. Aqui, sua segurança vem em primeiro lugar!",
      callToAction: "Comece agora mesmo",
    },
  },
  {
    image: Sustainable,
    data: {
      label: "Escale com segurança",
      title: "Facilidade de pagamento para o crescimento sustentável.",
      description:
        "Seja qual for o fluxo de vendas, nossa plataforma garante transações rápidas e confiáveis, proporcionando a flexibilidade necessária para escalar suas operações sem preocupações.",
      callToAction: "Abra sua conta",
    },
  },
];

export function Benefits() {
  return (
    <Section id="beneficios">
      <div className="flex flex-col gap-20 md:gap-60">
        {cards.map((card, index) => (
          <SolutionCard
            card={card}
            key={card.data.title}
            direction={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </Section>
  );
}
