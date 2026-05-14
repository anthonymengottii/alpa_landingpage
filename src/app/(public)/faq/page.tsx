import { Faq } from "@/components/faq";
import { Metadata } from "next";
import { PageFaq } from "./components/page-faq";

export const metadata: Metadata = {
  title: "Faq | Alpa",
};

export default function Page() {
  return <PageFaq />;
}
