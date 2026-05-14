import { PageLayout } from "@/components/page-layout";
import Image from "next/image";
import { ContactForm } from "./contact-form";

import Banner from "@/assets/contact-banner.png";
import { ContactCards } from "./contact-cards";

export function ContactPage() {
  return (
    <PageLayout title="Contato">
      <div className="grid grid-cols-1 grid-rows-[auto_auto_auto] lg:grid-cols-[1fr_505px] lg:grid-rows-[179px_auto] gap-y-10 gap-x-32 pt-28 ">
        <figure className="col-start-1 row-start-2 lg:row-start-1 lg:row-end-2 ">
          <Image 
            src={Banner} 
            alt="Ilustração de contato - Alpa" 
            className="mx-auto" 
          />
        </figure>
        <div className="space-y-2 lg:col-start-2 row-start-1 ">
          <h2 className="text-2xl font-semibold text-primary text-center lg:text-start">
            Nós podemos te ajudar. Fale conosco através do formulário abaixo ou
            envie um e-mail para nosso time.
          </h2>
          <p className="text-base text-center lg:text-start">
            Antes de enviar, verifique se os dados estão corretos, dessa forma
            você vai ter certeza que receberá nosso contato.
          </p>
        </div>
        <ContactForm />
      </div>

      <ContactCards />
    </PageLayout>
  );
}
