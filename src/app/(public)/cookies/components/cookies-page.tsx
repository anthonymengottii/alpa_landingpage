import { PageLayout } from "@/components/page-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus } from "lucide-react";
import { Paragraph } from "../../../../components/paragraph";

export function CookiesPage() {
  return (
    <PageLayout title="Aviso de Cookies">
      <div className="max-w-[874px] w-full  mx-auto">
        <p className="mb-4">
          Produtos que não podem ser comercializados ao utilizar os serviços da
          ALPA
        </p>
      </div>
      <Accordion
        type="multiple"
        className="w-full flex flex-col items-center justify-center gap-4"
      >
        <AccordionItem
          value="cookies"
          className=" px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger
            className="items-center hover:no-underline cursor-pointer"
            index="01"
          >
            <h2 className="text-sm md:text-base font-medium">
              O que são Cookies
            </h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              São pequenos arquivos que ficam armazenados nos navegadores após o
              usuário acessar um site. Através deles é possível identificar o
              dispositivo de acesso utilizado. Os cookies possibilitam o
              reconhecimento do dispositivo e tornam possível diversas
              atividades durante a navegação pelo site, melhorando a experiência
              do usuário.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="whyCookies"
          className=" px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger
            className="items-center hover:no-underline cursor-pointer"
            index="02"
          >
            <h2 className="text-sm md:text-base font-medium">
              Por qual motivo a Alpa utiliza Cookies?
            </h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              Utilizamos cookies para diversas funções, dentre as quais,
              possibilitar e facilitar a utilização das nossas Plataformas pelos
              usuários, diminuir a ocorrência de falhas durante o acesso às
              nossas Plataformas, possibilitar uma navegação personalizada pelos
              usuários, segmentar a publicidade que exibimos e analisar de forma
              estatística as preferências dos usuários.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="proceed"
          className=" px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger
            className="items-center hover:no-underline cursor-pointer"
            index="03"
          >
            <h2 className="text-sm md:text-base font-medium">
              Quando os Cookies são coletados e utilizados pela Alpa?
            </h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              A coleta e utilização de cookies ocorrerá durante a navegação em
              nossas Plataformas, conforme suas preferências.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="contact"
          className=" px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger
            index="04"
            className="items-center hover:no-underline cursor-pointer"
          >
            <h2 className="text-sm md:text-base font-medium">
              Quais Cookies são coletados e utilizados pela Alpa?
            </h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              Classificamos, de acordo com o uso, os cookies em: essenciais,
              desempenho, funcionalidade e publicidade. Vejamos as
              características de cada um desses tipos de cookies:
            </Paragraph>

            <div>
              <span className="text-foreground-invert/70 font-bold">
                Essenciais
              </span>
              <Paragraph>
                Classificamos, de acordo com o uso, os cookies em: essenciais,
                desempenho, funcionalidade e publicidade. Vejamos as
                características de cada um desses tipos de cookies:
              </Paragraph>
            </div>
            <div>
              <span className="text-foreground-invert/70 font-bold">
                Desempenho
              </span>
              <Paragraph>
                Esse tipo de cookie permite que a ALPA compreenda como o usuário
                interage com as nossas Plataformas. São realizadas coletas de
                dados de performance, tais como número de visitas, áreas
                acessadas, duração de acessos e mensagens de erro. <br />
                Os cookies de performance são coletados e tratados de forma
                anônima e caso o usuário os desative, nossas Plataformas poderão
                ficar indisponíveis a este usuário.
              </Paragraph>
            </div>
            <div>
              <span className="text-foreground-invert/70 font-bold">
                Desempenho
              </span>
              <Paragraph>
                Esse tipo de cookie permite que a ALPA compreenda como o usuário
                interage com as nossas Plataformas. São realizadas coletas de
                dados de performance, tais como número de visitas, áreas
                acessadas, duração de acessos e mensagens de erro. <br />
                Os cookies de performance são coletados e tratados de forma
                anônima e caso o usuário os desative, nossas Plataformas poderão
                ficar indisponíveis a este usuário.
              </Paragraph>
            </div>
            <div>
              <span className="text-foreground-invert/70 font-bold">
                Publicidade
              </span>
              <Paragraph>
                Esses cookies possuem a capacidade de direcionar o conteúdo de
                marketing de nossas Plataformas de acordo com o perfil de acesso
                de cada usuário, por meio da coleta de alguns dados pessoais dos
                usuários.
              </Paragraph>
            </div>

            <Paragraph>
              Caso o usuário desative os cookies, não será possível proporcionar
              conteúdos com base nos seus interesses.
              <br />
              Os tipos de cookies vistos acima, podem ainda ser classificados
              quanto à duração de armazenamento e quanto a quem os administra:{" "}
              <br />
              Os cookies não-persistentes são utilizados apenas enquanto o
              usuário navega em nosso site. Os navegadores os apagam logo após
              você fechar o nosso site. Já os cookies persistentes permanecem no
              navegador por maior período, sendo mantidos mesmo após o término
              da navegação em nosso site. <br />
              Utilizamos em nossos sites tanto cookies persistentes quanto
              não-persistentes.
              <br />
              Possuímos cookies próprios, emitidos pela ALPA e cookies de
              terceiros, que são administrados por empresas parceiras, ambos os
              tipos estão indicados na lista de cookies. <br />
              Utilizamos cookies próprios e de terceiros em todos os nossos
              sites, conforme suas preferências. Veja todos os cookies que
              utilizamos, acessando o nosso Portal de Preferências de Cookies,
              no rodapé do nosso site
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="notWantCookies"
          className=" px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger
            className="items-center hover:no-underline cursor-pointer"
            index="05"
          >
            <h2 className="text-sm md:text-base font-medium">
              Não quero permitir a coleta de Cookies, o que posso fazer?
            </h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              O usuário das Plataformas poderá desativar alguns dos cookies,
              através do Painel de Preferências de Cookies ou pode realizar a
              configuração do seu navegador, podendo: <br />
              a) ativar o modo de navegação sigilosa, disponível na maior parte
              dos navegadores, o qual permite que nenhum cookie permaneça no
              dispositivo do usuário após fechar a janela do navegador; ou{" "}
              <br />
              b) configurar o bloqueio de cookies, nos limites e conforme
              instruções do navegador do usuário. Os navegadores também permitem
              que o usuário exclua os cookies que já estejam armazenados em seu
              computador. Ressaltamos que, caso o usuário opte por não permitir
              a utilização de cookies, nossas Plataformas poderão não funcionar
              corretamente, e as suas funcionalidades também poderão tornar-se
              parcial ou totalmente indisponíveis.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </PageLayout>
  );
}
