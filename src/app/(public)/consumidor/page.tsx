import { Metadata } from "next";
import { ConsumerPage } from "./components/consumer-page";

export const metadata: Metadata = {
  title: "Alpa | Espaço do consumidor",
};

export default function Page() {
  return <ConsumerPage />;
}
