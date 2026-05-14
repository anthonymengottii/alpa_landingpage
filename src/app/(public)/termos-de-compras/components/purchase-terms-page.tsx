import { PageLayout } from "@/components/page-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus } from "lucide-react";
import Link from "next/link";
import { Paragraph } from "../../../../components/paragraph";

export function PurchaseTermsPage() {
  return (
    <PageLayout title="Termos de compras">
      <Accordion
        type="multiple"
        className="w-full flex flex-col items-center justify-center gap-4"
      >
        <AccordionItem
          value="preamble"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger className="items-center hover:no-underline cursor-pointer text-sm md:text-base font-medium">
            Preâmbulo das partes:
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              ALPA, pessoa jurídica de direito privado, inscrita no CNPJ sob o
              nº 35.359.088/0001-17, com sede na SALA 1110 ST 2 – Bela Vista –
              São Paulo/SP – CEP 01311-927, Brasil, única e exclusiva
              proprietária do domínio: www.usealpa.com, doravante denominada
              (“ALPA”), e (“VOCÊ”), pessoa física ou jurídica, que leu,
              entendeu, está de acordo, e deu o aceite eletrônico, doravante
              denominado (”Usuário/Produtor””, “Usuário/Afiliado” ou
              simplesmente “Usuário”), firmam o presente Contrato de Licença de
              Uso não exclusiva da ALPA (“Termos de Uso”), do qual são parte
              integrante os Termos de Compra e a Políticas de Segurança,
              Privacidade, e de Direitos Autorais da ALPA, com acesso por meio
              do link{" "}
              <Link href="/termos-de-uso">
                https://usealpa.com/termos-de-uso/
              </Link>
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="activity"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger className="items-center hover:no-underline cursor-pointer text-sm md:text-base font-medium">
            Da atividade empresarial da Alpa
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              A ALPA é uma plataforma de processamento e gerenciamento de
              pagamento online, via cartão de crédito ou boleto bancário. Logo,
              é uma prestadora de serviços, não fazendo parte da cadeia de
              fornecedores do Produto. De acordo com a legislação brasileira
              vigente, a ALPA não exerce atividade exclusiva de instituição
              financeira, de prestadora de serviços financeiros ou de
              administradora de cartões de crédito.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="object"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger className="items-center hover:no-underline cursor-pointer text-sm md:text-base font-medium">
            Do objeto
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              Ao realizar a compra deste produto, a ALPA será responsável pela
              gestão do pagamento feito pelo USUÁRIO. A ALPAirá receber e
              transmitir as informações do USUÁRIO, de modo digital, sigiloso e
              seguro.
            </Paragraph>
            <Paragraph>
              Os créditos provenientes desta compra e venda serão depositados na
              Conta Virtual do VENDEDOR (Produtor e/ou Afiliado), conforme
              previsto nos “TERMOS DE USO” da ALPA do qual o presente Contrato é
              parte integrante.
            </Paragraph>
            <Paragraph>
              Nos presentes Termos, a terminologia VENDEDOR refere-se ao
              PRODUTOR do Produto adquirido, não compreendendo o USUÁRIO
              AFILIADO.
            </Paragraph>
            <Paragraph>
              Para o COMPRADOR, o serviço da ALPA é gratuito. Contudo, poderá
              haver cobrança de taxas, nas compras parceladas, de acordo com o
              tipo de produto adquirido, podendo ocorrer, também, variações nas
              condições de pagamento. A ALPA reserva-se o direito de alterar os
              presentes Termos, a qualquer tempo, sem consulta prévia, e ao seu
              exclusivo critério.
            </Paragraph>
            <Paragraph>
              Qualquer alteração ou modificação destes termos entrará em vigor,
              imediatamente, após a publicação em nossa página. O presente
              Contrato integra e deve ser interpretado, em conjunto com os
              “TERMOS DE USO” e a “POLÍTICA DE PRIVACIDADE”, aos quais o USUÁRIO
              declara conhecer e concordar com suas cláusulas e condições
            </Paragraph>
            <Paragraph>
              Qualquer alteração ou modificação destes termos entrará em vigor,
              imediatamente, após a publicação em nossa página. O presente
              Contrato integra e deve ser interpretado, em conjunto com os
              “TERMOS DE USO” e a “POLÍTICA DE PRIVACIDADE”, aos quais o USUÁRIO
              declara conhecer e concordar com suas cláusulas e condições
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="userData"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger className="items-center hover:no-underline cursor-pointer text-sm md:text-base font-medium">
            Dos dados do usuário
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <div>
              <Paragraph>
                Ao clicar em comprar na página de venda do produto, o USUÁRIO
                será encaminhado para a página de checkout da ALPA na qual
                deverá preencher corretamente:
              </Paragraph>
              <ul className="list-disc list-inside text-sm text-foreground-invert/60">
                <li>a) seu nome completo;</li>
                <li>b) número do CPF;</li>
                <li>
                  c) endereço de entrega (somente na compra de produtos
                  físicos);
                </li>
                <li>d) endereço de e-mail válido;</li>
                <li>e) número do telefone;</li>
                <li>f) dados do seu cartão de crédito.</li>
              </ul>
              <Paragraph>
                Sempre que realizar uma transação pela ALPA, o USUÁRIO deverá
                informar tais dados. As informações prestadas pelo COMPRADOR, no
                momento da compra, são definidas pelo VENDEDOR do Produto,
                podendo variar de acordo com o tipo de Produto e/ou Serviço
                adquirido.
                <br />A ALPA, não armazena o código de segurança do cartão de
                crédito de seus USUÁRIOS. A veracidade e exatidão de suas
                informações pessoais é de responsabilidade exclusiva do USUÁRIO,
                que poderá responder civil e criminalmente, por eventuais danos
                causados.
                <br />A ALPA não se responsabiliza por eventuais transações
                realizadas por terceiros, em nome do USUÁRIO, caso esse terceiro
                tenha acesso a tais dados. <br />O preenchimento errado de suas
                informações pessoais por parte do USUÁRIO, tais como nome
                completo, endereço, e-mail, telefone, – poderá resultar no
                atraso e/ou na não entrega do produto pelo VENDEDOR.
                <br />O USUÁRIO autoriza, expressamente, que a ALPA mantenha
                seus dados cadastrais em seu BANCO DE DADOS, e, que tais
                informações sejam fornecidas: <br />
                a) às autoridades públicas competentes que as solicitem
                formalmente, de acordo com a Legislação brasileira, em especial
                a LEI No 12.965, DE 23 DE ABRIL DE 2014 – (MARCO CIVIL DA
                INTERNET); <br /> b) aos seus parceiros estratégicos, comerciais
                ou técnicos, com a finalidade de disponibilizar melhores
                conteúdos e/ou serviços ao USUÁRIO O USUÁRIO declara que
                autoriza, expressamente, que a ALPA colete suas informações,
                para análise de tráfego com o objetivo de identificar grupos
                perfil de usuários e para fins publicitários.
              </Paragraph>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="delivery"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger className="items-center hover:no-underline cursor-pointer text-sm md:text-base font-medium">
            Da entrega do produto
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              O VENDEDOR é o único e exclusivo responsável pela entrega de
              produtos físicos. <br /> O COMPRADOR declara estar ciente de que a
              ALPA não é responsável pelo conteúdo do produto, bem como pela sua
              entrega.
            </Paragraph>
            <Paragraph>
              Os produtos físicos serão enviados conforme anunciado pelo seu
              VENDEDOR. <br /> Caso o produto não seja entregue, por culpa do
              COMPRADOR (exemplo: informar endereço errado ou incompleto, não
              ter alguém no endereço para receber o produto), o VENDEDOR, a seu
              critério, poderá cobrar o novo frete. <br /> O consumidor declara
              estar ciente e concorda que, caso o endereço indicado para entrega
              do produto, seja considerado pelos Correios como: “ÁREA COM
              DISTRIBUIÇÃO SUJEITA A PRAZO DIFERENCIADO/RESTRIÇÃO DE ENTREGA
              DOMICILIAR TEMPORÁRIA”, ele deverá retirar o produto na agência
              dos Correios para a qual o produto foi enviado.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="cancellation"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger className="items-center hover:no-underline cursor-pointer text-sm md:text-base font-medium">
            Da revelação entre os usuários, cancelamento ou reembolso da compra
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              A ALPA não é responsável pelo Canal de Suporte do Produto. As
              reclamações feitas perante o Suporte da ALPA, referentes a vícios
              e/ou defeitos do Produto serão encaminhadas ao seu responsável.{" "}
              <br /> O Usuário/Produtor deverá responder, em até 02 (dois) dias
              úteis, as solicitações feitas ao seu suporte. Caso não haja
              resposta, a ALPA poderá cancelar a transação e realizar o
              reembolso ou estorno da compra ao Usuário/Consumidor, independente
              do produto já ter sido enviado ou entregue. <br /> Caso o
              Consumidor apresente uma solicitação contra o Usuário/ Produtor
              e/ou Usuário/Afiliado no site “Reclame Aqui”, referente à produtos
              físicos, este terá o prazo de 2 (dois) dias úteis, para apresentar
              sua resposta ao Consumidor, bem como deverá informá-la à ALPA se
              no prazo estipulado, o Usuário/Produtor e/ou Usuário/Afiliado não
              apresentar sua resposta ao Consumidor, a ALPA irá cancelar
              imediatamente a transação, efetuando o reembolso ou estorno da
              compra, independente do produto já ter sido enviado ou entregue.
              No caso de produtos físicos, o cancelamento, decorrente do
              exercício do direito de arrependimento (artigo 49 do Código de
              Defesa do Consumidor), dependerá da comprovação de devolução do
              produto, intacto e em sua embalagem original, ao Usuário/Produtor.{" "}
              <br />
              Somente após a confirmação de devolução do Produto, a PALPA fará o
              cancelamento, estorno e/ou reembolso da compra. A ALPA irá
              auxiliar o COMPRADOR resolver qualquer problema originado da
              venda, como solicitações de informações, cancelamentos, estornos,
              reembolsos e CHARGEBACK. <br /> As transações realizadas por meio
              de cartão de crédito, serão estornadas junto a operadora do cartão
              de crédito do COMPRADOR. Por sua vez, as transações realizadas por
              meio de boleto bancário, serão reembolsadas por meio de
              transferência (TED ou DOC), para a conta indicada pelo COMPRADOR.
              O prazo máximo para estorno e/ou reembolso será de 07 (sete) dias
              úteis. O procedimento de lançamento do estorno, na fatura de
              cartão de crédito, varia de acordo com a operadora do cartão.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="accessBlocking"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger className="items-center hover:no-underline cursor-pointer text-sm md:text-base font-medium">
            Bloqueio de acesso e negativa de compra
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              O COMPRADOR concorda que a ALPA poderá, a seu exclusivo critério,
              realizar o bloqueio preventivo de seu acesso a ALPA, sempre que
              tomar conhecimento de qualquer indício de ato ou conduta que possa
              caracterizar uma prática ilegal, violação aos Termos de Uso e
              Política de Privacidade da ALPA ou que represente infração à
              direitos de USUÁRIOS ou terceiros. O bloqueio preventivo será
              mantido, em regra, até que: <br /> a) constate-se que o ato ou
              conduta suspeita não caracterizou prática ilegal, com base em
              critérios e avaliação exclusiva da ALPA; <br />
              b) por ordem judicial ou determinação de autoridades
              administrativas. Caso reste confirmado a natureza ilegal da
              conduta, o bloqueio preventivo será convertido em definitivo, sem
              gerar o direito, ao COMPRADOR, de estorno dos valores
              pagos.Ademais o bloqueio preventivo também poderá ser realizado
              caso a compra esteja sendo iniciada por um COMPRADOR que: <br />
              c) já realizou mais de um pedido de reembolso pela ALPA; <br />
              d) tenham seu nome ou identidade vinculada a listas públicas ou
              privadas destinadas a identificar pessoas envolvidas em atividades
              ilícitas/irregulares; <br />
              e) caso a ALPA verifique que o COMPRADOR adotou comportamentos e
              ações atípicos e suspeitos que podem colocar em risco direitos de
              USUÁRIOS ou terceiros.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="generalConditions"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger className="items-center hover:no-underline cursor-pointer text-sm md:text-base font-medium">
            Das condições gerais
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              A ALPA a fim resguardar seus USUÁRIOS, em caso de suspeita de
              fraude, poderá entrar em contato com o COMPRADOR, para confirmar
              seus dados. Caso os dados não sejam confirmados, a compra não será
              aprovada.
            </Paragraph>
            <Paragraph>
              A ALPA não emite Nota Fiscal para o COMPRADOR. Tal obrigação é
              exclusiva do VENDEDOR, conforme disposto nos “TERMOS DE USO” da
              ALPA.
            </Paragraph>
            <Paragraph>
              A ALPA não se responsabiliza quanto aos riscos, nocividade,
              periculosidade, defeitos, vícios de qualidade, vícios de
              quantidade, insuficiência, inadequação de informações, publicidade
              enganosa e/ou abusiva, do produto e/ou serviço adquirido.
            </Paragraph>
            <Paragraph>
              A ALPA não se responsabiliza por falhas de sistema, causados por
              eventos de força maior ou caso fortuito, que atrasem ou impeça a
              realização de transações em sua plataforma.
            </Paragraph>
            <Paragraph>
              A ALPA não se responsabiliza pelo conteúdo da página de vendas do
              VENDEDOR.
            </Paragraph>
            <Paragraph>
              A ALPA não se responsabiliza pelas obrigações tributárias
              decorrentes desta transação, cuja obrigação tributária seja
              exclusiva do VENDEDOR. Estes Termos vigerão por prazo
              indeterminado.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </PageLayout>
  );
}
