import { Metadata } from "next";
import { PurchaseTermsPage } from "./components/purchase-terms-page";

export const metadata: Metadata = {
  title: "Alpa | Termos de compras",
};

export default function Page() {
  return <PurchaseTermsPage />;
}
