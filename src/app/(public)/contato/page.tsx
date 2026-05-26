import { Metadata } from "next";
import { ContactPage } from "./components/contact-page";

export const metadata: Metadata = {
  title: "Contato | Alpa Pagamentos",
  description: "Entre em contato com a equipe de especialistas da Alpa. Tire suas dúvidas sobre nosso gateway de pagamento, taxas e soluções para seu negócio digital.",
};

export default function Page() {
  return <ContactPage />;
}
