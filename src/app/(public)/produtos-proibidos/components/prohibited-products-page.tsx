import { PageLayout } from "@/components/page-layout";
import { Paragraph } from "@/components/paragraph";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Minus } from "lucide-react";

export function ProhibitedProductsPage() {
  return (
    <PageLayout title="Produtos proibidos">
      <div className="max-w-[874px] w-full  mx-auto">
        <span className="text-primary font-bold ">
          Lista de produtos proibidos
        </span>
        <p className="mb-4">
          Produtos que não podem ser comercializados ao utilizar os serviços da
          ALPA
        </p>
        <p>
          Na ALPA, dedicamos esforços para proporcionar uma experiência segura e
          confiável a todos os nossos usuários. Para assegurar isso,
          estabelecemos políticas transparentes sobre produtos proibidos.
          Conheça a lista desses itens e compreenda as consequências caso sejam
          identificados em sua loja.
        </p>
      </div>

      <Accordion
        type="multiple"
        className="w-full flex flex-col items-center justify-center gap-4 mt-12"
      >
        <AccordionItem
          value="prohibitedProducts"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger className="items-center hover:no-underline cursor-pointer text-sm md:text-base font-medium ">
            Produtos proibidos
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <div>
              <ul className="list-disc list-inside text-sm text-muted-foreground/60">
                <li>
                  Qualquer produto com características de vaquinha ou doação de
                  dinheiro
                </li>
                <li>Dispositivos TV Box de qualquer marca</li>
                <li>Cursos de terceiros (drive com + de 100 cursos)</li>
                <li>Medicamentos de qualquer tipo</li>
                <li>Arma de CO2</li>
                <li>Aparelho de jantar</li>
                <li>Eletrodomésticos em geral</li>
                <li>Árvores de Natal</li>
                <li>Bicicletas</li>
                <li>Seguidores/Curtidas de redes sociais</li>
                <li>Conteúdo com nudez explícita</li>
                <li>Robôs da loteria, do Pix, rifas, sorteios, entre outros</li>
                <li>Produtos com valor superior a R$ 1 mil</li>
                <li>Venda online de cupons de ofertas</li>
                <li>Móveis</li>
                <li>Venda de ingressos</li>
                <li>
                  Itens não alinhados com nossos termos serão notificados para
                  remoção
                </li>
                <li>Veículos automotores (motos, carros, patinetes)</li>
                <li>Purificadores de água</li>
                <li>Produtos alimentícios em geral</li>
                <li>Kits de panela Red Silver</li>
                <li>Consórcios/Seguros</li>
                <li>Kits de vinho</li>
                <li>
                  Antenas de TV e dispositivos para decodificação de sinais
                </li>
                <li>Fraldas</li>
                <li>Produtos com promessas não cumpríveis</li>
                <li>Notebooks, peças, computadores, smartphones e tablets</li>
                <li>Apps espiões ou de clonagem de celular</li>
                <li>Andaimes</li>
                <li>Assinaturas de streaming e aplicativos</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="listOfHighlyProhibitedProducts"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger className="items-center hover:no-underline cursor-pointer text-sm md:text-base font-medium ">
            Lista de produtos altamente proibidos
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <div>
              <ul className="list-disc list-inside text-sm text-foreground-invert/60">
                <li>Lotes de produtos, lotes de leilão, lotes de correio</li>
                <li>
                  Produtos relacionados a programas do Governo Federal, como o
                  Voa Brasil
                </li>
                <li>
                  Produtos relacionados a acordos, limpar nome, acordo Serasa
                  (termos como: Acordo, Valores a Receber, Resgate de valores,
                  Resgate da Prosperidade, entre outros).
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </PageLayout>
  );
}
