import { Metadata } from "next";
import { ProhibitedProductsPage } from "./components/prohibited-products-page";

export const metadata: Metadata = {
  title: "Alpa | Produtos proibidos",
};

export default function Page() {
  return <ProhibitedProductsPage />;
}
