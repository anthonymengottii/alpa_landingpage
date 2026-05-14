import { Metadata } from "next";
import { TermOfUsePage } from "./components/term-of-use-page";

export const metadata: Metadata = {
  title: "Alpa | Termos de uso",
};

export default function Page() {
  return <TermOfUsePage />;
}
