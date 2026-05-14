import { Faq } from "@/components/faq";
import { Doubts } from "@/components/faq/doubts";
import { PageLayout } from "@/components/page-layout";
import { Section } from "@/components/section";

export function PageFaq() {
  return (
    <main className="w-full">
      <PageLayout title="FAQ">
        <Faq />
      </PageLayout>
    </main>
  );
}
