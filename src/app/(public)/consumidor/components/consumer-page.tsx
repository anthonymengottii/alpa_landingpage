import { PageLayout } from "@/components/page-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus } from "lucide-react";
import { Paragraph } from "../../../../components/paragraph";

export function ConsumerPage() {
  return (
    <PageLayout title="Espaço do consumidor">
      <Accordion
        type="multiple"
        className="w-full flex flex-col items-center justify-center gap-4"
      >
        <AccordionItem
          value="ticket"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger
            className="items-center hover:no-underline cursor-pointer"
            index="01"
          >
            <h2 className="text-sm md:text-base font-medium">
              Não conheço um boleto DDA da Alpa na minha conta bancária
            </h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              A Alpa atua como intermediador de pagamentos de algumas lojas
              virtuais. Portanto, disponibilizamos uma carteira de boletos aos
              nossos clientes para a realização de vendas em seus sites. Caso
              tenha gerado um boleto em algum deles, os dados da ALPA acabaram
              aparecendo no seu DDA (débito direto autorizado). Para identificar
              o gerador deste boleto, recomendamos os seguintes passos: 1 -
              Primeiro, verifique se você ou alguém da sua família ou amigos
              usou seu CPF para fazer alguma compra online, ou mesmo inscrição
              em algum site ou curso. 2 - No aplicativo ou internet banking do
              seu banco, você consegue visualizar o nome e CNPJ do lojista no
              campo sacador avalista. Confira os exemplos para os bancos Itaú e
              Bradesco. 3 - Verifique também seu e-mail, pois pode ter recebido
              alguma explicação sobre a cobrança emitida, diretamente do site. 4
              - Utilize nossa ferramenta de Reconhecimento de boletos e DDA.
              Após preencher alguns dados do boleto, você verá o site que emitiu
              o boleto para você. Importante! Caso não reconheça o boleto, e
              acredite se tratar de uma cobrança indevida, você pode não
              pagá-lo. O ALPA não gera nenhuma multa e nem protesta boletos.
              Essa cobrança sumirá do seu DDA em até 60 dias do vencimento.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="email"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger
            className="items-center hover:no-underline cursor-pointer"
            index="02"
          >
            <h2 className="text-sm md:text-base font-medium">
              Por que recebi um e-mail de cobrança da Alpa?
            </h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              Você recebe cobranças pelo nosso e-mail pois este é um serviço que
              oferecemos para nossos clientes. No caso, você realizou uma
              assinatura no site de algum dos nossos clientes, que tem
              configurado na conta dele um modelo de cobrança que habilita o
              envio de e-mails para seus clientes. Como somos apenas a
              intermediadora de pagamento, fazemos a cobrança, porém o serviço à
              que ela se refere é de responsabilidade do comércio online e
              pedimos que contate o mesmo para obter mais informações.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="proceed"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger
            className="items-center hover:no-underline cursor-pointer"
            index="03"
          >
            <h2 className="text-sm md:text-base font-medium">
              Paguei o boleto da Alpa e não confirmaram minha compra. Como
              proceder?
            </h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              Envie um e-mail para o lojista com o comprovante de pagamento, e
              ele poderá fazer a verificação do status da sua compra. Caso o
              boleto tenha sido pago para outro código de barras, ou com um
              valor inferior àquele da compra, o lojista entrará em contato
              conosco para buscarmos solucionar a ocorrência.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="contact"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger
            className="items-center hover:no-underline cursor-pointer"
            index="04"
          >
            <h2 className="text-sm md:text-base font-medium">
              Ainda não recebi meu produto, quem devo contatar?
            </h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              Você deve contatar a loja na qual realizou a compra. Qualquer
              assunto relacionado à entrega do produto ou serviço prestado devem
              ser conversados com a loja em questão, visto que fazemos apenas o
              processamento do pagamento, e não a gerência do processo de
              entrega ou prestação dos serviços. Caso tenha alguma dúvida em
              relação ao seu pagamento, pedimos que também contate o lojista,
              ele é a melhor pessoa para sanar suas dúvidas.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="invoice"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger
            className="items-center hover:no-underline cursor-pointer"
            index="05"
          >
            <h2 className="text-sm md:text-base font-medium">
              Por que apareceu Alpa na minha fatura do cartão?
            </h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              A Alpa é um intermediador de pagamentos, e você comprou em algum
              de nossos clientes. Normalmente é enviado na fatura o nome da
              loja, porém, em alguns casos, não conseguimos enviar o nome do
              lojista por uma limitação da bandeira - acaba aparecendo “Alpa” ao
              invés do nome da loja na qual realizou a compra. Por questões
              relacionadas à proteção de dados dos nossos clientes, não
              conseguimos enviar as informações da loja em que a compra foi
              realizada. Para qualquer dúvida e maiores informações, você pode
              buscar suporte junto à sua instituição bancária.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </PageLayout>
  );
}
