import { Metadata } from "next";
import { CookiesPage } from "./components/cookies-page";

export const metadata: Metadata = {
  title: "Alpa | Aviso de Cookies",
};

export default function Page() {
  return <CookiesPage />;
}
