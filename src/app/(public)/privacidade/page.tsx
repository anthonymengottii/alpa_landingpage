import { PageLayout } from "@/components/page-layout";
import { Metadata } from "next";
import { PrivacyAndPolicyPage } from "./components/privacy-policy-page";

export const metadata: Metadata = {
  title: "Política de Privacidade | Alpa Pagamentos",
  description: "Conheça a política de privacidade da Alpa. Saiba como coletamos, usamos e protegemos seus dados em nosso gateway de pagamentos online.",
};

export default function Page() {
  return (
    <PageLayout title="Política de privacidade">
      <PrivacyAndPolicyPage />
    </PageLayout>
  );
}
