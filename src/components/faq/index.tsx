import { ArrowUpRight, Plus } from "lucide-react";
import { CtaButton } from "../cta-button";
import { Section } from "../section";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import { Doubts } from "./doubts";

import Person1 from "@/assets/person.png";
import Person2 from "@/assets/person2.png";
import Person3 from "@/assets/person3.png";
import { cn } from "@/lib/utils";

const persons = [Person1, Person2, Person3];

export function Faq() {
  return (
    <Section className="flex flex-col lg:flex-row gap-8 items-center lg:items-start mb-20 md:mb-32">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center lg:items-start justify-center gap-4">
          <span className="text-primary font-semibold uppercase">FAQ</span>
          <h1 className="text-[32px] font-semibold text-center">
            Dúvidas frequentes
          </h1>
          <p className="text-center lg:text-start ">
            Separamos as principais dúvidas de nossos clientes e
            disponibilizamos aqui para te ajudar.
          </p>
        </div>

        <Card className="border-0 p-10 max-w-lg">
          <CardContent className="flex flex-col gap-4 p-0">
            <div className="flex items-center">
              {persons.map((person, index) => (
                <Avatar
                  className={cn("relative size-10 -ml-3 translate-x-2")}
                  key={person.src}
                >
                  <AvatarImage 
                    src={person.src} 
                    alt={`Membro ${index + 1} do time de especialistas da Alpa`} 
                  />
                  <AvatarFallback>TA</AvatarFallback>
                </Avatar>
              ))}
              <div className=" flex items-center justify-center size-10 rounded-full bg-foreground z-10 -ml-2">
                <Plus className="stroke-primary" />
              </div>
            </div>

            <h1 className="font-semibold text-base">Time de especialistas</h1>
            <p className="text-base max-w-[480px]">
              Nós podemos te ajudar. Sabemos que essa é uma decisão que poderá
              impactar seu negócio de uma forma
            </p>

            <CtaButton
              variant="espresso"
              href="https://wa.me/+5511978673936"
              target="_blank"
            >
              <span className="text-sm font-bold group-hover:text-foreground">
                Fale com nosso time
              </span>
              <ArrowUpRight className="stroke-primary group-hover:stroke-icon" />
            </CtaButton>
          </CardContent>
        </Card>
      </div>

      <Doubts />
    </Section>
  );
}
