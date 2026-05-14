import { PageLayout } from "@/components/page-layout";
import { Metadata } from "next";
import { PrivacyAndPolicyPage } from "./components/privacy-policy-page";

export const metadata: Metadata = {
  title: "Alpa | Política de privacidade",
};

export default function Page() {
  return (
    <PageLayout title="Política de privacidade">
      <PrivacyAndPolicyPage />
    </PageLayout>
  );
}
