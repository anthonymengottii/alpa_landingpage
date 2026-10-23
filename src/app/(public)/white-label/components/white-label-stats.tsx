import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";

const stats = [
  { value: "100%", label: "com a sua identidade" },
  { value: "3", label: "meios de pagamento" },
  { value: "Multi", label: "adquirência" },
  { value: "API", label: "e webhooks prontos" },
];

export function WhiteLabelStats() {
  return (
    <Section className="pb-20 md:pb-40">
      <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-[40px] bg-border/30">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1 bg-card px-6 py-10 text-center"
          >
            <span className="text-3xl md:text-[40px] font-bold text-primary">
              {value}
            </span>
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
