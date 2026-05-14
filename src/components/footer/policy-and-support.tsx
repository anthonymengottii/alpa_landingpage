import Link from "next/link";

const policy = [
  {
    label: "Política de privacidade",
    link: "/privacidade",
  },
  {
    label: "Termos de uso",
    link: "/termos-de-uso",
  },
  {
    label: "Produtos proibidos",
    link: "/produtos-proibidos",
  },
  {
    label: "Avisos de cookies",
    link: "/cookies",
  },
];

const support = [
  {
    label: "FAQ",
    link: "/faq",
  },
  {
    label: "Termos de compras",
    link: "/termos-de-compras",
  },
  {
    label: "Espaço do consumidor",
    link: "/consumidor",
  },
  {
    label: "Contato",
    link: "/contato",
  },
];

export function PolicyAndSupport() {
  return (
    <div className="flex flex-col md:flex-row gap-12">
      <div className="flex flex-col items-center md:items-start gap-7">
        <span className="text-primary text-base font-semibold">
          Políticas da Alpa
        </span>
        <ul className="flex flex-col items-center md:items-start gap-8">
          {policy.map(({ label, link }) => (
            <li
              key={label}
              className="text-base text-foreground/60 hover:underline"
            >
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center md:items-start gap-7">
        <span className="text-primary text-base font-semibold">Support</span>
        <ul className="flex flex-col items-center md:items-start gap-8">
          {support.map(({ label, link }) => (
            <li
              key={label}
              className="text-base text-foreground/60 hover:underline"
            >
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
