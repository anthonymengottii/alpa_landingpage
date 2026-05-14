import { PageLayout } from "@/components/page-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus } from "lucide-react";
import { Paragraph } from "../../../../components/paragraph";

export function TermOfUsePage() {
  return (
    <PageLayout title="Termos de uso">
      <Accordion
        type="multiple"
        className="w-full flex flex-col items-center justify-center gap-4"
      >
        <AccordionItem
          value="preamble"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger className="items-center hover:no-underline cursor-pointer text-sm md:text-base font-medium ">
            Preâmbulo das partes:
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              São partes deste instrumento: Na qualidade de CONTRATADA: <br />
              ALPA, sediada em SALA 1110 ST 2 – Bela Vista – São Paulo/SP – CEP
              01311-927, representada como ALPA LTDA no seu contrato social.{" "}
              <br />
              Na qualidade de CONTRATANTE: Empresa que afirmar que leu e assinou
              estes termos de uso. <br /> PRAZO DO CONTRATO: Enquanto durar a
              mensalidade ou contratação de qualquer produto da ALPA.
            </Paragraph>
            <Paragraph>
              CLÁUSULAS E CONDIÇÕES <br /> Têm entre si, justo e contratado,
              firmar o presente Contrato que reger-se-á de acordo com as
              seguintes cláusulas e condições:
            </Paragraph>
            <Paragraph>
              DO OBJETO DESTE CONTRATO
              <br /> O objeto deste Contrato é estipular as regras da relação
              comercial DA CONTRATADA com o CONTRATANTE, que utilizará os
              serviços de processamento e gerenciamento de pagamentos online da
              CONTRATADA.
            </Paragraph>
            <Paragraph>
              3.1. A inclusão do cliente à ALPA está condicionada à aceitação
              prévia do Cliente pela CONTRATADA, conforme critérios de interesse
              comercial, estando sujeita a verificação prévia de inexistência de
              irregularidade na identificação e/ou nos dados cadastrais do
              cliente, de seu representante legal e/ou procurador, bem como
              normas internas de KYC (Know Your Customer), cabendo ao cliente
              encaminhar toda a documentação e informações exigidas pela ALPA,
              no prazo máximo de 15 (quinze) dias, a contar da solicitação.
            </Paragraph>
            <Paragraph>
              3.2. Ao clicar na opção “LI e ACEITO os termos do contrato”, o
              CONTRATANTE declara ter lido, compreendido e aceito, sem reservas,
              todas as cláusulas e condições do presente Contrato, a Política de
              Segurança, Privacidade e Direitos Autorais da ALPA.
            </Paragraph>
            <Paragraph>
              3.2.1. O USUÁRIO declara estar ciente e concorda expressamente,
              que é seu dever ler e se informar sobre eventuais alterações deste
              Termo de Uso.
            </Paragraph>
            <Paragraph>
              EMPRESA <br /> 4.1. O programa ALPA consiste num sistema capaz de
              intermediar o processamento eletrônico de transações com
              utilização dos meios de pagamentos especificados na cláusula 2.5,
              abaixo, bem como a estrutura de sistema de pagamentos, no modelo
              de “Banking as a Service”, de forma totalmente segura e baseado em
              protocolo HTTPS, permitindo a configuração de múltiplos clientes
              compartilhando a mesma infraestrutura de processamento, com total
              isolamento e tendo como principais características:
              <br /> Interface de administração web para configuração;
              <br />
              Configuração de diferentes meios de pagamentos;
              <br /> Extrato on-line atualizado diariamente para acompanhamento
              diário do número de transações realizadas por meio de pagamentos;
              <br /> Possibilidade de utilização de plataformas on-line;
              <br /> Acesso ao relatório de todas as transações efetuadas no
              período, com identificação daquelas já aprovadas e já pagas.
            </Paragraph>
            <Paragraph>
              4.2. A cessão da licença(s) de uso do software denominado “ALPA”,
              de titularidade da CONTRATADA, será temporária e não exclusiva.
            </Paragraph>
            <Paragraph>
              4.3. A licença ora CONTRATADA não inclui as negociações e
              providências necessárias para a utilização dos meios de pagamentos
              disponibilizados pelas operadoras de cartões de créditos e
              instituições integrantes do arranjo de pagamento (adquirentes ou
              subadquirentes), tampouco garante a sua aceitação pelas mesmas.
            </Paragraph>
            <Paragraph>
              4.4. A UTILIZAÇÃO DA LICENÇA DO SOFTWARE PELA CONTRATANTE NÃO
              IMPLICA EM QUALQUER FORMA DE PARTICIPAÇÃO, ASSOCIAÇÃO OU SOCIEDADE
              NAS OPERAÇÕES QUE VENHAM A GERAR OS PAGAMENTOS, E QUE SERÃO
              EFETUADOS ELETRONICAMENTE POR MEIO DOS SERVIÇOS PRESTADOS PELA
              CONTRATADA. AS MENCIONADAS TRANSAÇÕES OCORRERÃO DE FORMA
              AUTOMÁTICA, MEDIANTE ACEITAÇÃO DOS CLIENTES FINAIS DA CONTRATANTE,
              SEM EFETIVA PARTICIPAÇÃO OU DOMÍNIO DA CONTRATADA.
            </Paragraph>
            <div>
              <Paragraph>
                4.5. O software “ALPA” é capaz de processar transações
                eletrônicas de pagamento, desde que possibilitados pelas
                adquirentes ou subadquirentes contratadas pelo Cliente, através
                dos seguintes meios:
                <br />
              </Paragraph>
              <ul className="list-disc list-inside text-sm text-foreground-invert/60">
                <li className="list-item">Via bancária;</li>
                <li>Boleto bancário;</li>
                <li>Cartão de Crédito;</li>
                <li>Pix;</li>
              </ul>
            </div>
            <Paragraph>
              4.5.1. Em caso de introdução de alteração nos sistemas
              informatizados dos meios de pagamento acima mencionados que os
              tornem incompatíveis com o programa objeto do presente contrato,
              por iniciativa das instituições financeiras e/ou operadoras de
              cartão de crédito, os sistemas de pagamento que sofrerem
              alterações deixarão de ser acessíveis, sem qualquer
              responsabilidade da CONTRATADA e sem alteração das condições ora
              contratadas, incluindo o preço ajustado.
            </Paragraph>
            <Paragraph>
              4.5.2. A CONTRATANTE concorda que está contratando uma solução de
              pagamento para processamento das transações financeiras com seus
              clientes digitais. A CONTRATANTE também pode contratar, mediante
              contratação específica, antecipações automáticas de seus
              recebíveis, que podem variar entre 0% e 100% dos valores total da
              venda mensal, de acordo com sua a agenda de recebíveis, e a
              depender da disponibilidade da CONTRATADA e/ou das instituições
              financeiras integrantes do arranjo de pagamento que o CONTRATANTE
              mantiver relação.
            </Paragraph>
            <Paragraph>
              4.5.3. O ESTABELECIMENTO RECONHECE E SE DECLARA DE ACORDO QUE, POR
              MEIO DO PIX CHECKOUT, A ALPA ATUARÁ COMO AGENTE DE COLETA DOS
              PAGAMENTOS EFETUADOS PELOS CLIENTES. A ALPA SERÁ O USUÁRIO FINAL
              RECEBEDOR DOS VALORES TRANSACIONADOS VIA PIX, OBRIGANDO-SE A
              REALIZAR O REPASSE DAS QUANTIAS DEVIDAS AO ESTABELECIMENTO,
              DEDUZIDAS AS TARIFAS E ENCARGOS APLICÁVEIS, Fluxo de pagamento. O
              fluxo de pagamento para realização de transações via pix e
              recebimento do repasse pelo Estabelecimentos ocorre da seguinte
              maneira: após a habilitação do pix checkout, o cliente poderá
              solicitar opção de pagamento via Pix na Plataforma do Parceiro;
              por meio da integração com os sistemas ALPA, o Parceiro solicitará
              a ALPA geração de ação do pagamento via Pix, fornecendo os dados
              necessários conforme solicitados pela ALPA.
            </Paragraph>
            <Paragraph>
              4.6. O programa “ALPA” permanecerá instalado no data center da
              CONTRATADA e o CONTRATANTE terá acesso ao mesmo via internet,
              sendo-lhe disponibilizadas as licenças nos termos contratados.
            </Paragraph>
            <Paragraph>
              4.7. O CONTRATANTE não terá direito a eventuais novas
              funcionalidades acrescidas ao programa “ALPA”, hipótese em que,
              caso pretenda novos serviços oferecidos pela CONTRATADA, deverá
              efetuar nova contratação. O CONTRATANTE somente terá direito ao
              aperfeiçoamento das funcionalidades já existentes no programa cuja
              licença é contratada neste ato.
            </Paragraph>
            <Paragraph>
              4.8. O CONTRATANTE declara possuir ciência de que a ALPA oferece
              uma estrutura de subadquirência White Label Product, que não
              integrará o Sistema de Pagamentos Brasileiro (SPB), desde que, nos
              termos da Resolução BACEN nº 150 de 06 de outubro de 2012, e o
              conjunto de participantes apresente, de forma consolidada e
              acumulada nos últimos 12 (doze) meses, volumes inferiores a:{" "}
              <br />
              R$ 20.000.000.000,00 (vinte bilhões de reais) do valor total das
              transações; e 100.000.000 (cem milhões) de transações. <br />{" "}
              2.8.1. Caso ocorra a evolução dos limites indicados, o CONTRATANTE
              deverá integrar ao Sistema de Pagamentos Brasileiro (SPB),
              submetendo-se ao controle do sistema CIP e respectivas
              autorizações pelo Banco Central do Brasil.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="registerUser"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger
            index="05"
            className="items-center hover:no-underline cursor-pointer"
          >
            <h2 className="text-sm md:text-base font-medium ">
              Do registro do usuário
            </h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              5.1 Para se cadastrar, o Usuário deverá informar: Nome completo
              dos sócios, razão social, e-mail, login e Código de Acesso
              (Senha). Após o cadastro inicial, o Usuário deverá validar sua
              conta, informando CPF ou CNPJ, número de telefone, endereço e o(s)
              produto(s) que irá comercializar. A fim de comprovar a veracidade
              dos dados informados, o Usuário deverá anexar documentos como RG,
              CPF, Contrato Social, comprovante de endereço, ou outros que a
              CONTRATADA solicitar. Caso tais documentos não sejam anexados, o
              cadastro do Usuário não será concluído.
            </Paragraph>
            <Paragraph>
              5.2. Os dados das Contas Bancárias de sua titularidade, para as
              quais os valores depositados em sua Conta Virtual serão
              transferidos, não sendo permitido o cadastro e/ou o repasse de
              valores devidos aos usuários para conta bancária de terceiros.
            </Paragraph>
            <Paragraph>
              5.3. Recomenda-se ao Usuário o cadastramento no site Reclame Aqui
              (https://reclameaqui.com.br/cadastro-suaempresa), a fim de
              responder eventuais solicitações do Usuário/Comprador.
            </Paragraph>
            <Paragraph>
              5.4. Após o cadastro do Usuário, a CONTRATADA se reserva ao
              direito de, a qualquer tempo, avaliar o tipo de negócio ou
              atividade desenvolvida por ele, a fim de verificar a
              compatibilidade de sua atividade com a Política da Empresa. A
              partir dessa análise, a CONTRATADA poderá, a seu critério, aprovar
              ou reprovar a venda do produto ou serviço através da Plataforma.
            </Paragraph>
            <Paragraph>
              5.5. Após a aprovação da Conta Virtual do Usuário, ela estará apta
              a receber pagamentos. Contudo, as transferências para a(s)
              Conta(s) Bancária(s) do Usuário somente serão realizadas após a
              confirmação dos dados por ele informados. A CONTRATADA informará
              ao Usuário, pelo e-mail cadastrado por ele, sobre a aprovação ou
              reprovação de sua Conta Virtual.
            </Paragraph>
            <Paragraph>
              5.6. A CONTRATADA reserva-se no direito de utilizar todos os meios
              válidos e possíveis para confirmar os dados fornecidos pelo
              Usuário, inclusive solicitar informações e documentos adicionais,
              além dos citados nestes Termos de Uso, bem como consultar bancos
              de dados mantidos por terceiros, como SPC e SERASA.
            </Paragraph>
            <Paragraph>
              5.7. Por meio de sua Conta Virtual e Dashboard da Plataforma, o
              Usuário terá acesso a todas as transações realizadas.
            </Paragraph>
            <Paragraph>
              5.8. O Usuário autoriza expressamente que as informações
              fornecidas sejam mantidas pela CONTRATADA, bem como autoriza que
              tais informações sejam fornecidas para (I) autoridades públicas
              competentes que as solicitarem formalmente nos termos da
              legislação brasileira; (II) parceiros estratégicos, comerciais ou
              técnicos das Empresas para a prestação dos Serviços; e (III)
              partes envolvidas em uma mesma negociação, como, por exemplo, para
              um Cliente envolvido em uma negociação ou pagamento de fatura em
              questão.
            </Paragraph>
            <Paragraph>
              5.9. As receitas provenientes das vendas do Usuário serão
              depositadas na sua Conta Virtual e, após solicitação, transferidas
              para a Conta Bancária por ele indicada, descontadas as Tarifas
              aplicáveis.
            </Paragraph>
            <Paragraph>
              5.10. O Código de Acesso permitirá ao Usuário acessar sua Conta
              Virtual, conferir seu saldo, acompanhar sua rotina de vendas, e
              solicitar a transferência dos valores creditados (saque) para a
              Conta Bancária associada à Conta Virtual.
            </Paragraph>
            <Paragraph>
              5.11. O Código de Acesso poderá ser modificado mediante
              solicitação do Usuário para a CONTRATADA, ou, também, poderá ser
              modificado pelo próprio Usuário.
            </Paragraph>
            <Paragraph>
              5.12. O Código de Acesso não poderá ser divulgado pelo Usuário a
              terceiros, sendo, exclusivamente, de sua responsabilidade, o uso,
              a segurança e o conhecimento do Código de Acesso.
            </Paragraph>
            <Paragraph>
              5.13. O Usuário é o único responsável pelas atividades realizadas
              em sua conta, sendo a CONTRATADA isenta de qualquer
              responsabilidade por perdas e/ou danos causados por terceiros,
              decorrentes do descumprimento desta cláusula.
            </Paragraph>
            <Paragraph>
              5.14. O Usuário expressamente aceita e reconhece que, qualquer
              pessoa que se identificar com o correto Código de Acesso será
              reconhecida pela plataforma como o Usuário da Conta Virtual, e
              qualquer operação ou transação feita com o mencionado Código de
              Acesso será tida como válida.
            </Paragraph>
            <Paragraph>
              5.15. Caso a CONTRATADA encontre dados incorretos, inverídicos ou
              fraudulentos, ela se reserva no direito de bloquear a Conta
              Virtual do Usuário, suspendê-la temporariamente para verificar as
              informações, ou cancelá-la, caso não sejam sanadas as
              irregularidades, sem direito de indenização ou reparação ao
              Usuário, e sem prejuízo das sanções civis e penais cabíveis.
            </Paragraph>
            <Paragraph>
              5.16. Ocorrendo a morte do Usuário (pessoa física titular da Conta
              Virtual), seus sucessores deverão, imediatamente, comunicar a
              CONTRATADA e enviar a certidão de óbito do Usuário. Caso o Usuário
              seja pessoa física, os saques serão bloqueados até determinação
              judicial específica para levantamento.
            </Paragraph>
            <Paragraph>
              5.17. Caso ocorra a morte do Usuário responsável pela Conta de
              pessoa jurídica, o(s) sócio(s) remanescente(s) deverá comunicar a
              CONTRATADA e enviar a certidão de óbito do Usuário, bem como o
              contrato social atualizado. Caso o sócio remanescente possua
              poderes para administrar a sociedade e, tenha conhecimento do
              Código de Acesso utilizado para login, ele poderá movimentar a
              Conta Virtual. Caso contrário, a Conta Virtual continuará
              recebendo pagamentos, mas os saques serão bloqueados, sendo
              necessária a regularização da Sociedade para o efetivo
              desbloqueio.
            </Paragraph>
            <Paragraph>
              5.18. O Usuário declara, sob as penas das leis civis e penais
              brasileiras, que as informações, dados e documentos por ele
              informados são verdadeiros.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="term"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger
            index="06"
            className="items-center hover:no-underline cursor-pointer"
          >
            <h2 className="text-sm md:text-base font-medium ">Do prazo</h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              6.1. O presente Contrato é celebrado pelo prazo indicado no
              Preâmbulo, iniciando-se a partir da ativação do serviço junto à
              CONTRATANTE.
            </Paragraph>
            <Paragraph>
              6.2. Findo o prazo inicial de vigência e não havendo manifestação
              contrária por escrito de nenhuma das Partes antes deste prazo e
              nos termos deste Contrato, o presente fica automática e
              sucessivamente renovado por iguais e sucessivos períodos, com o
              pagamento da primeira semana subsequente ao vencimento do último
              pagamento, até que qualquer uma das Partes notifique a outra, por
              escrito, manifestando sua opção de término, nos termos da Cláusula
              11.2 abaixo.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="price"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger
            index="07"
            className="items-center hover:no-underline cursor-pointer"
          >
            <h2 className="text-sm md:text-base font-medium ">Do Preço</h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              7.1. Pelos serviços, a CONTRATANTE pagará à CONTRATADA os valores
              descritos na Tabela de Valores e Tarifas descritas na página
              inicial do site da CONTRATADA e na parte de ASSINATURA em
              CONFIGURAÇÕES.
            </Paragraph>
            <Paragraph>
              7.1.1. O CONTRATANTE declara-se ciente e de acordo com os valores
              descritos na tabela da assinatura e na cláusula 2.5.2.
            </Paragraph>
            <Paragraph>
              7.1.2. A Tabela de Valores e Tarifas, posteriormente à
              contratação, estará disponível na área de ASSINATURA em
              CONFIGURAÇÕES, para consulta de eventuais alterações nos valores
              praticados pela CONTRATADA, e de acordo com os prazos previstos
              nestes TERMOS DE USO.
            </Paragraph>
            <Paragraph>
              7.2. Os valores de tarifas e remunerações estipulados neste
              instrumento podem ou não incluir, dentre outros, tarifas de
              operadoras de cartão, bancos, emolumentos ou tributos sobre os
              serviços da própria CONTRATANTE.
            </Paragraph>
            <Paragraph>
              7.3. Os pagamentos referentes às transações semanais, serão
              efetuados por SPLIT DE PAGAMENTOS de forma automática sobre o
              valor transacionado de cada venda, quando esta é processada.
            </Paragraph>
            <Paragraph>
              7.4. Em caso de atraso no pagamento pelo CONTRATANTE, de qualquer
              quantia em decorrência do presente Contrato, será aplicada multa
              de 2% (dois por cento) sobre o valor total do débito e juros de
              mora de 1% (um por cento) ao mês, calculado pro rata tempore,
              contados a partir da data do vencimento da fatura, bem como
              atualização do débito pelo IGP-M publicado pela Fundação Getúlio
              Vargas, ou por outro índice oficial que venha a substituí-lo
              (“IGP-M/FGV”).
            </Paragraph>
            <Paragraph>
              7.5. O atraso no pagamento pelo CONTRATANTE também acarretará a
              suspensão do serviço após 7 (sete) dias de inadimplência.
            </Paragraph>
            <Paragraph>
              7.6. Em caso de aumento de alíquota dos tributos incidentes sobre
              a(s) licença(s) concedida(s) ou da imposição de novos tributos
              relativos a elas, o valor respectivo será acrescido e repassado de
              imediato ao preço ora contratado, o que imediatamente concorda
              esta CONTRATANTE.
            </Paragraph>
            <Paragraph>
              7.7. Em caso de renovação e continuidade da concessão de licenças,
              o preço contratado será reajustado, a cada ano a contar da data
              inicial do presente Contrato, com base na variação do IGP-M/FGV.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="chargebackPolicies"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger
            className="items-center hover:no-underline cursor-pointer"
            index="08"
          >
            <h2 className="text-sm md:text-base font-medium ">
              Das políticas de chargeback
            </h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              8.1. Os eventos de Chargeback do período serão contabilizados no
              valor total transacionado e descontados automaticamente do valor a
              receber na Conta do CONTRATANTE.
            </Paragraph>
            <Paragraph>
              8.2. Se o CONTRATANTE não dispuser de saldo suficiente em sua
              Conta, a CONTRATADA está autorizada a reter valores de qualquer
              outro ingresso futuro de dinheiro em sua Conta, até que o valor
              devido em razão do cancelamento, reversão ou Chargeback seja
              compensado.
            </Paragraph>
            <Paragraph>
              8.3 Para evitar Chargebacks, é aconselhável que o Usuário mantenha
              boas práticas comerciais, como fornecer informações claras e
              objetivas sobre seus produtos, conservar os comprovantes das
              transações realizadas e manter políticas claras de cancelamento e
              restituição.
            </Paragraph>
            <Paragraph>
              8.3.1. Além das medidas acima descritas, o Usuário (Vendedor e
              Afiliado) deve: (I) Guardar o documento que comprove a entrega do
              produto e/ou a prestação do serviço (Rastreio, dentre outros);
              (II) Caso o produto esteja em trânsito, informar o Código de
              Rastreamento de envio do produto (emitido pelos Correios ou por
              transportadora); (III) Registrar todos os contatos entre o
              comprador e seu suporte, a fim de comprovar a tentativa de
              resolução de eventuais intercorrências que possam resultar
              desacordo comercial (tais como: impossibilidade de enviar o
              produto por falta de estoque; tentativa de renegociar o prazo de
              entrega; impossibilidade de prestar o serviço por motivos de força
              maior ou caso fortuito, dentre outros).
            </Paragraph>
            <Paragraph>
              8.3.2. São considerados como comprovantes válidos: (i) Código de
              rastreamento, aviso de recebimento (A.R.), ou outro documento
              emitido pelos Correios ou Empresa transportadora contendo assinado
              pelo Usuário/Comprador; (ii) Documento com referência ao número do
              pedido, nota fiscal de entrega no endereço cadastrado pelo usuário
              na CONTRATADA que contenha a assinatura, data, nome completo,
              documento legível do recebedor; (iii) Cópia com a imagem da oferta
              do produto ou serviço contendo claramente as regras, prazos de
              validade e dados que comprovem a utilização pelo Usuário/Comprador
              (dados que identifiquem o usuário); (iv) Log de acesso, imagem e
              dados que comprovem a utilização pelo Usuário/comprador (dados que
              identifiquem o usuário);
            </Paragraph>
            <Paragraph>
              8.3.3. A CONTRATANTE deverá, quando solicitado pela CONTRATADA,
              fornecer documentação referente à transação objeto do Chargeback,
              cancelamento ou reversão no prazo máximo de 36 (trinta e seis)
              horas contados do envio da solicitação pela CONTRATADA.
            </Paragraph>
            <Paragraph>
              8.3.4. Caso a venda contestada seja referente a prestação de seus
              serviços pela CONTRATANTE, esta deverá comprovar o efetivo
              cumprimento de suas obrigações perante o seu Usuário/consumidor
              final.
            </Paragraph>
            <Paragraph>
              8.3.5. Para contestar o Chargeback, cancelamento ou reversão, a
              CONTRATANTE deverá reunir provas que endossem e confirmem seu
              relato. O fornecimento de tais documentos não implicará que o
              dinheiro da CONTRATANTE seja novamente creditado em sua Conta.
            </Paragraph>
            <Paragraph>
              8.4. São causas de Chargebacks: (I) o direito de arrependimento do
              Comprador ou sua insatisfação com a compra; (II) não recebimento
              pelo Comprador dos itens da compra, nas condições estabelecidas
              para a entrega; (III) dúvidas do Comprador sobre a validade da
              compra; (IV) débitos duplicados do Comprador sobre uma única
              compra; (V) compra de terceiro não autorizado com a utilização do
              cartão de crédito do Comprador; e (VI) a falha ou inexecução da
              prestação de serviços, caso não seja comprovado seu efetivo
              cumprimento pela CONTRATANTE.
            </Paragraph>
            <Paragraph>
              8.5 A CONTRATADA não é responsável por eventuais contestações,
              chargebacks ou bloqueios de compra/pagamento de qualquer natureza
              por parte do COMPRADOR (assim considerado do destinatário final
              dos produtos e/ou serviços da CONTRATANTE).
            </Paragraph>
            <Paragraph>
              8.5.1 No caso de contestação de pagamento por problemas
              relacionados a prazos de entrega, condições do produto e/ou
              serviços prestados pelo Usuário/Vendedor/Afiliado, não serão
              aceitas justificativas quando: (i) Produtos e/ou serviços não
              estiverem de acordo com as especificações da oferta. Exemplo: o
              Comprador declara que a qualidade do produto recebido não está de
              acordo com as informações contidas no site do vendedor; (ii) As
              Políticas ou Termos e Condições do site do VENDEDOR não estiverem
              claros; (iii) O Usuário/Comprador comprovar que efetuou a
              solicitação do cancelamento da compra no prazo de até 7 (sete)
              dias a contar de sua assinatura (data da compra) ou do ato de
              recebimento do produto ou serviço, como garante o art. 49 do
              Código de Defesa do Consumidor e o Usuário/Vendedor/Afiliado não
              cancelar a transação; (iv) O Usuário/Vendedor/Afiliado entregar
              produtos ou prestar serviços com vícios de qualidade que os tornem
              impróprios ou inadequados ao consumo a que se destinam; (v) O
              Usuário/Comprador comprovar através de código de rastreamento que
              devolveu o produto ao VENDEDOR; (vi) O VENDEDOR recusar o
              recebimento do produto devolvido; (vii) O VENDEDOR comercializar
              produtos/serviços diferentes da categoria informada em sua conta
              CONTRATADA; (vii) Realizar o envio do produto ou a prestação de
              serviço somente em data igual ou posterior a data do recebimento
              da contestação; (viii) Eventuais outras condutas praticadas pela
              CONTRATANTE que infrinjam leis ou normas brasileiras.
            </Paragraph>
            <Paragraph>
              8.7. A CONTRATADA não se responsabiliza pelo estorno decorrente da
              constatação de compras fraudulentas, identificadas pela equipe de
              avaliação de risco, ainda que os produtos já tenham sido enviados
              pelo Usuário/Vendedor;
            </Paragraph>
            <Paragraph>
              8.8. Caso não seja aceita a justificativa encaminhada pela
              CONTRATANTE, a CONTRATADA poderá suspender e/ou revogar a
              aprovação de quaisquer transações comerciais, suspendendo,
              revertendo e/ou cancelando a realização dos respectivos pagamentos
              ou movimentações, bem como cobrar e/ou reter, se necessário, as
              respectivas quantias da CONTRATANTE, conforme previsto nestes
              Termos de Uso, firmado entre as partes no momento da contratação.
            </Paragraph>
            <Paragraph>
              8.9. Caso identifique níveis excessivos de Chargeback de seus
              usuários, a CONTRATADA poderá, dentre outras medidas: (i) bloquear
              total ou parcialmente os valores existentes na conta da
              CONTRATANTE, como garantia para cobrir potenciais danos,
              incluindo, mas não se limitando a eventuais multas aplicadas pelas
              bandeiras e credenciadoras de cartão; e (ii) suspender ou
              inabilitar permanentemente a CONTRATANTE.
            </Paragraph>
            <Paragraph>
              8.9.1. Os valores eventualmente bloqueados em decorrência do
              excesso de Chargebacks poderão ser usados a título de compensação
              pela CONTRATADA para o ressarcimento de eventuais custos, despesas
              ou danos que lhe foram causados.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="implementationDeadline"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger
            index="09"
            className="items-center hover:no-underline cursor-pointer"
          >
            <h2 className="text-sm md:text-base font-medium ">
              Prazo de implantação
            </h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              9.1. O prazo de implantação dependerá única e exclusivamente do
              cumprimento das etapas, prazos e condições estipuladas pelas
              instituições financeiras para a CONTRATANTE.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="ObligationsOfContractor"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger
            index="10"
            className="items-center hover:no-underline cursor-pointer"
          >
            <h2 className="text-sm md:text-base font-medium ">
              Das obrigações da contratada
            </h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              9.1. Prestar suporte técnico consistente unicamente em informações
              e orientações sobre a utilização da “ALPA”, pelo telefone
              disponível no site da CONTRATADA: https://www.usealpa.com e por
              WhatsApp, em horário comercial, das 8h00 às 18h00, de
              segunda-feira a sexta-feira, excluídos os feriados. O CONTRATANTE
              deverá verificar nossa disponibilidade em pontos facultativos.
            </Paragraph>
            <Paragraph>
              9.1.1. A CONTRATADA não prestará suporte técnico referente à
              adaptação do software à programação e/ou site utilizados pela
              CONTRATANTE.
            </Paragraph>
            <Paragraph>
              9.2. Informar ao CONTRATANTE, com 3 (três) dias de antecedência,
              sobre eventuais interrupções necessárias para os ajustes técnicos
              ou manutenção que demandem mais de 6 (seis) horas de duração e que
              possam causar prejuízo à operacionalidade da licença fornecida,
              salvo em caso de urgência.
            </Paragraph>
            <Paragraph>
              9.2.1. Nos casos de urgência, assim entendidos aqueles que
              coloquem em risco o regular funcionamento do servidor onde está o
              software “ALPA” e aqueles determinados por motivo de segurança
              decorrentes de vulnerabilidades detectadas, as interrupções
              ocorrerão sem prévio-aviso e não deverão superar a duração de 2
              (duas) horas cada.
            </Paragraph>
            <Paragraph>
              9.2.2. As manutenções e interrupções a serem informadas são única
              e exclusivamente aquelas que interfiram com a operacionalidade da
              “ALPA”, ficando dispensadas informações prévias sobre
              interrupções, por motivos técnicos, de licenças adicionais que não
              impliquem em prejuízo para a operacionalidade da utilização das
              licenças da CONTRATADA.
            </Paragraph>
            <Paragraph>
              9.3. A interrupção que interfira ou que cause prejuízo à
              operacionalidade da licença e seja necessária para a manutenção do
              sistema será realizada, num período não superior a 6 (seis) horas,
              preferencialmente, entre as 00h00 e as 6h00hs.
            </Paragraph>
            <Paragraph>
              9.4. As interrupções para a manutenção no fornecimento das
              licenças adicionais que não impliquem em prejuízo para a
              operacionalidade do servidor, perdurarão pelo tempo necessário à
              supressão das irregularidades detectadas, não devendo superar o
              prazo de 60 (sessenta) dias corridos.
            </Paragraph>
            <Paragraph>
              9.5. Manter o sistema disponível para a utilização por, pelo
              menos, 97% (noventa e sete por cento) do tempo a cada mês.
            </Paragraph>
            <Paragraph>
              9.6. Disponibilizar, por meio do site https://www.usealpa.com, as
              instruções que possibilitem que o programa de pagamento e licenças
              sejam utilizados corretamente pela CONTRATANTE.
            </Paragraph>
            <Paragraph>
              9.7. Garantir o sigilo dos dados trafegados através da ALPA,
              dentro dos padrões de mercado para operações comerciais deste
              tipo. Sem prejuízo ao disposto acima, a CONTRATADA poderá divulgar
              todos e quaisquer dados trafegados através da ALPA caso tal
              divulgação se dê nos termos da Cláusula 13, abaixo.
            </Paragraph>
            <Paragraph>
              9.8. A CONTRATADA se responsabiliza, única e exclusivamente, pela
              integração tecnológica entre a tecnologia de pagamento da ALPA e
              as operadoras financeiras. Quaisquer tipos de danos não
              provenientes de questões tecnológicas desenvolvidas pela
              CONTRATADA, não serão de responsabilidade da CONTRATADA. Portanto,
              a CONTRATADA não será responsável por transações com cartões
              furtados ou roubados e/ou transações de Chargeback e ataques
              cibernéticos ocorridos na plataforma, entre outros.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="contractor"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger
            className="items-center hover:no-underline cursor-pointer"
            index="11"
          >
            <h2 className="text-sm md:text-base font-medium ">
              Das obrigações da contratante
            </h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              10.1. Pagar pontualmente as cobranças, acréscimos referentes às
              licenças concedidas e/ou serviços opcionais correlatos.
            </Paragraph>
            <Paragraph>
              10.2. Providenciar, por sua conta e risco, a seu exclusivo
              critério e custeio a contratação da utilização dos meios de
              pagamento junto às operadoras de cartões de crédito e instituições
              financeiras, responsabilizando-se pelo atendimento das exigências
              das respectivas instituições, assumindo, expressamente, o risco
              pela recusa de contratação por parte das operadoras de cartões de
              crédito e/ou instituições financeiras.
            </Paragraph>
            <Paragraph>
              10.3. Para assegurar a segurança nas transmissões de dados, a
              CONTRATANTE deverá usar o componente de criptografia fornecida
              pela CONTRATADA, caso contrário, a CONTRATADA estará isenta de
              qualquer responsabilidade com relação à segurança de dados
              enviados ou recebidos pela CONTRATANTE.
            </Paragraph>
            <Paragraph>
              10.4. Fica desde já estabelecido que na hipótese da cláusula 8.8.,
              a CONTRATANTE deverá comunicar imediatamente a CONTRATADA, para
              que esta envide seus melhores esforços a fim de auxiliar na
              solução do respectivo problema.
            </Paragraph>
            <Paragraph>
              10.5. Responder com exclusividade e integralmente pelas atividades
              que gerarão os recebimentos a serem processados eletronicamente
              com a utilização da Plataforma em tudo o que diga respeito, à
              exemplo: qualidade e origem dos produtos e serviços
              comercializados; fiel cumprimento dos contratos originadores dos
              recebimentos, e por qualquer outro fato ou evento que seja
              relevante para a origem desses recebimentos, isentando a
              CONTRATADA de qualquer responsabilidade.
            </Paragraph>
            <Paragraph>
              10.6. Manter sistemas operantes e atualizados que consigam fazer a
              interface com a ALPA, durante toda a vigência deste Contrato.
            </Paragraph>
            <Paragraph>
              10.7. Manter em confidencialidade os termos constantes neste
              Contrato, bem como os processos utilizados pela CONTRATADA em seu
              software.
            </Paragraph>
            <Paragraph>
              10.8. Informar à CONTRATADA qualquer alteração dos dados
              mencionados no preâmbulo do presente contrato, incluindo troca de
              e-mail, sob pena de, em não o fazendo, considerarem-se válidos
              todos os avisos e notificações enviados para os endereços
              inicialmente informados e constantes do presente contrato.
            </Paragraph>
            <Paragraph>
              10.9. Responder pela veracidade das informações prestadas por
              ocasião da presente contratação, inclusive no que diz respeito à
              titularidade do site que utilizará a licença e de seu domínio, bem
              como responder pela veracidade e exatidão das informações
              cadastrais prestadas no item 1.2 do preâmbulo do presente contrato
              com base nas quais serão definidas as regras de relacionamento
              entre as partes CONTRATANTES, inclusive no que diz respeito à
              substituição de senha de administração e de acesso ao site, sob
              pena de, em caso de dúvida ou contestação dessas informações,
              IMEDIATA SUSPENSÃO DO DIREITO DE UTILIZAÇÃO DAS LICENÇAS ORA
              CONTRATADAS INDEPENDENTEMENTE DE AVISO OU NOTIFICAÇÃO até a
              supressão das falhas de informação que permitam aferir
              documentalmente os pontos duvidosos ou questionados.
            </Paragraph>
            <Paragraph>
              10.10. Indenizar, de forma plena, regressivamente, a CONTRATADA em
              caso de condenação judicial e/ou administrativa, em função do
              presente contrato.
            </Paragraph>
            <Paragraph>
              9.11. Responder, com exclusividade, pelos atos praticados por seus
              prepostos, administradores e/ou por toda e qualquer pessoa que
              venha a ter acesso ao código de acesso à ALPA, declarando-se
              ciente de que a responsabilidade pelos atos praticados será,
              sempre, única e exclusiva da CONTRATANTE.
            </Paragraph>
            <Paragraph>
              10.12. Responsabilizar-se por todos os Usuários de seu arranjo de
              pagamento, que serão hierarquicamente submetidos à sua conta
              Master, inclusive colhendo a anuência de todos os participantes
              aos Termos de Uso da CONTRATADA.
            </Paragraph>
            <Paragraph>
              10.13. Não aceitar, receber, solicitar e/ou contratar
              funcionários/colaboradores/empregados (seja ele de qualquer nível
              hierárquico e/ou função) da CONTRATADA, de forma direta ou
              indireta, para consultoria e/ou prestação de serviço referente a
              setup, gestão, programação, otimização, curso ou quaisquer outros
              serviços prestados pela CONTRATADA, seja de contas gerenciadas ou
              não, pela CONTRATADA em favor da CONTRATANTE, para serviços fora
              do ambiente/escritório da CONTRATADA, sem o conhecimento e
              aprovação formal (por escrito) da CONTRATADA.
            </Paragraph>
            <Paragraph>
              10.13.1. É vedado à CONTRATANTE contratar, de forma direta ou
              indireta, ou ofertar proposta de emprego para colaboradores da
              CONTRATADA, seja para trabalhar direta ou indiretamente para a
              CONTRATANTE e/ou qualquer outra empresa e/ou pessoa ligada direta
              ou indiretamente à CONTRATANTE. Essa cláusula é válida durante
              todo período do contrato, mais um período de 12 meses após o
              término do contrato ou por todo o tempo que o
              funcionário/colaborador/empregado da CONTRATADA permaneça
              contratado.
            </Paragraph>
            <Paragraph>
              10.14. É vedado à CONTRATANTE utilizar a plataforma ALPA para
              qualquer atividade que possa ser considerada ou interpretada como
              adiantamento de dinheiro, autofinanciamento, lavagem de dinheiro,
              empréstimo ou outras formas semelhantes definidas em lei, outras
              atividades ilegais ou consideradas proibidas de acordo com os
              Termos e Condições. Na ocorrência de qualquer uma destas
              hipóteses, a CONTRATADA poderá suspender temporária ou
              definitivamente o serviço e a Conta da CONTRATANTE.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="minimumServiceLevels"
          className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
        >
          <AccordionTrigger
            index="12"
            className="items-center hover:no-underline cursor-pointer"
          >
            <h2 className="text-sm md:text-base font-medium ">
              Níveis mínimos de serviço
            </h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8">
            <Paragraph>
              11.1. Os níveis mínimos de serviço, ou Service Level Agreement
              (“SLA”), indicam o desempenho técnico proposto pela CONTRATADA, no
              âmbito do Contrato entendido como disponibilização das licenças
              (ALPA) e atendimento aos chamados demandados pela CONTRATANTE,
              sendo certo que tal acordo não representa diminuição de
              responsabilidade da CONTRATADA, mas sim indicador de excelência
              técnica, uma vez que em informática não existe garantia integral
              (i.e. garantia de 100% (cem por cento), em relação aos níveis de
              serviço.
            </Paragraph>
            <Paragraph>
              11.2. A CONTRATADA, desde que observadas as obrigações a cargo da
              CONTRATANTE previstas no Contrato e desde que não haja qualquer
              outro fator que limite ou impossibilite a plena e integral
              prestação dos serviços objeto do Contrato, tem condição técnica e
              operacional de oferecer o SLA estabelecido na tabela abaixo, em
              cada mês civil referente aos serviços de atendimento ao
              CONTRATANTE: <br />
              SLA de 1º atendimento <br />
              Aplicável no item preâmbulo <br />
              Atendimento Técnico <br />
              Segunda à sexta-feira, excetuados feriados <br />
              8h às 18h – Horário de Brasília (UTC-3) <br />2 dias úteis para
              solicitações feitas por: <br />
              (i) abertura de chamado <br />
              (ii) contato telefônico <br />
            </Paragraph>
            <Paragraph>
              11.3. A CONTRATADA, desde que observadas as obrigações a cargo do
              CONTRATANTE previstas no Contrato e desde que não haja qualquer
              outro fator que limite ou impossibilite a plena e integral
              prestação dos serviços objeto do Contrato, tem condição técnica de
              oferecer e se propõe a manter o SLA estabelecido na tabela abaixo
              do tempo, em cada mês civil, referente à licença básica (gateway
              de pagamento) oferecida, e, unicamente, no tocante às
              funcionalidades instaladas nos servidores da CONTRATADA: <br />
              Aplicável no item preâmbulo
              <br />  97,00% do tempo
            </Paragraph>
            <Paragraph>
              11.4. Entende-se por garantia de desempenho para efeitos do
              presente Contrato a acessibilidade pela CONTRATANTE aos programas
              licenciados (ALPA) e disponibilizados nos servidores da
              CONTRATADA, motivo pelo qual não serão computados, para efeito de
              apuração do SLA: <br />
              Falhas, vícios, interrupções e impedimentos causados pela
              CONTRATANTE e/ou quaisquer de seus representantes, no âmbito da
              utilização ou pedidos dos serviços objeto do Contrato; <br />
              Falha nos serviços de telecomunicações dos quais a CONTRATANTE se
              valerá para utilizar os programas ora licenciados. Falhas de
              configuração, de responsabilidade da CONTRATANTE, ou sobrecarga do
              servidor causada por configuração ou utilização inapropriada.{" "}
              <br />
              As interrupções necessárias para ajustes técnicos ou manutenção
              que serão informadas com antecedência de 24 (vinte e quatro) horas
              e se realizarão, preferencialmente, em horários noturnos, de baixo
              movimento.
              <br />
              As intervenções emergenciais decorrentes da necessidade de
              preservar a segurança do servidor, equipamentos, produtos e
              informações destinadas a evitar ou fazer cessar a atuação de
              “hackers” ou destinadas a implementar correções de segurança
              (patches). <br />
              Suspensão da disponibilização das licenças por determinação de
              autoridades governamentais competentes, ou por descumprimento de
              cláusulas do presente contrato. <br /> Falhas ocasionadas por
              incompatibilidade entre os programas ora licenciados e eventuais
              outros programas ou equipamentos utilizados pela CONTRATANTE.{" "}
              <br />
              Interrupções ou suspensões dos serviços objeto do Contrato que
              individualmente perdurem por menos de 24 (vinte e quatro) horas.
              <br />
              Suspensões ou interrupções oriundas de atos, fatos ou omissões de
              responsabilidade de terceiros e que estejam fora do controle da
              CONTRATADA.
              <br />
              Suspensões ou interrupções oriundas de eventos de casos fortuitos
              ou força maior.
              <br />
              Suspensões ou interrupções oriundas de demandas extraordinárias ou
              incomuns dos serviços objeto do presente Contrato, que
              eventualmente não sejam suportadas pela estrutura da CONTRATADA.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </PageLayout>
  );
}
