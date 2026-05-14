import { Metadata } from "next";
import { ContactPage } from "./components/contact-page";

export const metadata: Metadata = {
  title: "Alpa | Contato",
};

export default function Page() {
  return <ContactPage />;
}
