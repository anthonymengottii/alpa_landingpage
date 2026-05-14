import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus } from "lucide-react";
import { Paragraph } from "../../../../components/paragraph";

export function PrivacyAndPolicyPage() {
  return (
    <Accordion
      type="multiple"
      className="w-full flex flex-col items-center justify-center gap-4"
    >
      <AccordionItem
        value="introducao"
        className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
      >
        <AccordionTrigger
          index="01"
          className="items-center hover:no-underline cursor-pointer"
        >
          <h2 className="text-sm md:text-base font-medium">Introdução</h2>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-8">
          <Paragraph>
            Esta Política de Privacidade (“Política”) se aplica a todos os
            serviços prestados pela ALPA TECNOLOGIA EM PAGAMENTOS LTDA, pessoa
            jurídica de direito privado, inscrita no CNPJ sob o nº
            35.359.088/0001-17, com sede na SALA 1110 ST 2 – Bela Vista – São
            Paulo/SP – CEP 01311-927 (“ALPA”).
          </Paragraph>
          <Paragraph>
            A ALPA se compromete a proteger a privacidade dos seus usuários e a
            garantir a segurança e o exercício dos direitos dos titulares de
            dados, nos termos da Lei nº 13.709/2018 (Lei Geral de Proteção de
            Dados - LGPD). Este documento tem como objetivo explicar, de forma
            clara e transparente, como realizamos a coleta, o tratamento e o
            armazenamento de dados pessoais necessários para a prestação dos
            nossos serviços.
          </Paragraph>
          <Paragraph>
            Ao utilizar os nossos serviços, você declara estar ciente e de
            acordo com os termos desta Política, autorizando expressamente o
            tratamento dos seus dados pessoais pela ALPA
          </Paragraph>
          <Paragraph>
            Se você não concordar com os termos aqui descritos, deverá se abster
            de utilizar nossos serviços. No caso de usuários Pessoa Jurídica,
            algumas disposições desta Política podem não ser aplicáveis,
            conforme previsto na legislação vigente.
          </Paragraph>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="conceptOne"
        className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
      >
        <AccordionTrigger
          index="02"
          className="items-center hover:no-underline cursor-pointer"
        >
          <h2 className="text-sm md:text-base font-medium">Conceito</h2>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-8">
          <Paragraph>
            Sem prejuízo de outras definições constantes nesta Política, as
            palavras e expressões abaixo indicadas, sempre que utilizadas pela
            primeira letra maiúscula, terão as seguintes definições: <br />
            “LGPD”: Lei Geral de Proteção de Dados, a legislação brasileira no
            13.709/2018, que regula o tratamento, proteção e privacidade de
            Dados Pessoais. Este documento estabelece diretrizes importantes e
            obrigatórias para a coleta, processamento e armazenamento de dados
            pessoais.
          </Paragraph>
          <Paragraph>
            “Titular de dados pessoais”: toda pessoa natural a quem se referem
            os dados que são objeto de tratamento. “Dados Pessoais”: informações
            pessoais que podem ser associadas a uma pessoa física identificada
            ou identificável. São exemplos de dados pessoais: nome completo,
            endereço, número de telefone, e-mail, dados bancários, data de
            nascimento, filiação e número de documentos oficiais (por exemplo,
            Carteira de Identidade – RG, passaporte, CPF/MF, dentre outros).
            <br />
            “ANPD”: Autoridade Nacional de Proteção de Dados, órgão da
            administração pública federal responsável por zelar, implementar e
            fiscalizar o cumprimento da LGPD;
          </Paragraph>
          <Paragraph>
            “Tratamento”: toda operação realizada com dados pessoais, como as
            que se referem a coleta, produção, recepção, classificação,
            utilização, acesso, reprodução, transmissão, distribuição,
            processamento, arquivamento, armazenamento, eliminação, avaliação ou
            controle da informação, modificação, comunicação, transferência,
            difusão ou extração.
          </Paragraph>
          <Paragraph>
            “Encarregado de dados”: pessoa indicada pelo controlador e operador
            para atuar como canal de comunicação entre o controlador, os
            Titulares dos dados e a Autoridade Nacional de Proteção de Dados
            (ANPD);
          </Paragraph>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="personData"
        className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
      >
        <AccordionTrigger
          index="03"
          className="items-center hover:no-underline cursor-pointer"
        >
          <h2 className="text-sm md:text-base font-medium">
            Dados pessoais tratados pela Alpa e suas finalidades
          </h2>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-8">
          <Paragraph>
            A ALPA valoriza a sua confiança e se compromete a tratar os dados
            pessoais coletados observando os preceitos legais, a boa-fé e os
            princípios estritos da finalidade, adequação, necessidade, livre
            acesso, qualidade dos dados, transparência, segurança, prevenção,
            não discriminação, e responsabilização e prestação de contas. A
            coleta de Dados Pessoais pode variar conforme o tipo de interação do
            Usuário com o site. Esses dados pessoais podem ser coletados
            diretamente do Usuário ou coletados automaticamente. A coleta dos
            dados pessoais pode ser realizada através dos seguintes meios:{" "}
            <br /> Dados de credenciamento ao sistema: nome completo, firma ou
            denominação social; número do CPF/MF, número de telefone; endereço
            de residência ou sede, filiação, endereço de e-mail; Execução do
            serviço prestado pela ALPA: identificação de conta bancária de
            titularidade do usuário, contendo nome e número da instituição
            bancária, número de agência, número da conta corrente ou conta
            poupança; Recrutamento e seleção de candidatos: nome, foto, e-mail,
            dados para contato e informações referentes à carreira; Atendimento
            de suporte: Nome, e-mail, CPF e demais informações relacionadas à
            dúvida ou demanda direcionada à ALPA; <br />
            Direcionamento de marketing digital: Nome, e-mail e telefone; <br />
            Registro de acesso à plataforma: Conjunto de informações referentes
            à data e hora de uso da Plataforma a partir de um determinado
            endereço IP, incluindo os cookies de acesso; <br /> Além das
            finalidades citadas acima, a ALPA pode coletar dados pessoais para:
            <br />
            Desenvolver e melhorar os produtos e serviços; <br /> Cumprir
            obrigações legais e regulatórias; <br />
            Prevenir fraudes e garantir a segurança dos clientes; <br />{" "}
            Fornecer produtos e serviços solicitados no Site; <br /> A ALPA
            também pode obter Informações Pessoais a partir de bancos de dados
            privados, com base no seu legítimo interesse e para cumprir
            obrigações regulatórias e contratuais. O website e serviços de
            internet da organização podem utilizar informações do dispositivo,
            dados de uso técnico e localização geográfica do usuário.
          </Paragraph>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="dataSharing"
        className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
      >
        <AccordionTrigger
          className="items-center hover:no-underline cursor-pointer"
          index="04"
        >
          <h2 className="text-sm md:text-base font-medium">
            Compartilhamento de dados
          </h2>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-8">
          <Paragraph>
            Os dados pessoais do titular podem ser compartilhados com parceiros
            e fornecedores para garantir as medidas contratadas; com autoridades
            competentes, quando requisitado, para apuração de condutas ilícitas;
            para proteção dos interesses da ALPA em qualquer tipo de conflito,
            incluindo ações judiciais; em operações societárias que envolvam a
            ALPA, como por exemplo, fusão, cisão, aquisição ou incorporação de
            empresas.
          </Paragraph>
          <Paragraph>
            Ao compartilhar os dados, todas as medidas técnicas e
            organizacionais adequadas serão adotadas, visando à privacidade,
            confidencialidade e integridade das informações. Da mesma forma,
            sempre será exigido dos envolvidos nessa forma de tratamento, o
            cumprimento das mesmas diretrizes de segurança e proteção de Dados
            Pessoais exigidas pela legislação.
          </Paragraph>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="guidelines"
        className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
      >
        <AccordionTrigger
          index="05"
          className="items-center hover:no-underline cursor-pointer"
        >
          <h2 className="text-sm md:text-base font-medium">
            Diretrizes de armazenamento e exclusão de dados pessoais
          </h2>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-8">
          <Paragraph>
            A LGPD busca empoderar e dar mais autonomia ao titular dos dados
            pessoais e, para isso, em seu artigo 18, determina um rol de
            direitos a serem exercidos pelo titular dos dados. São esses
            direitos: <br /> Confirmação da existência de tratamento de dados
            pessoais;
            <br /> Acesso aos dados pessoais;
            <br /> Correção de dados pessoais incompletos, inexatos ou
            desatualizados;
            <br /> Anonimização, bloqueio ou eliminação de dados desnecessários,
            excessivos ou tratados em desconformidade com a LGPD;
            <br /> Eliminação dos dados pessoais tratados com o consentimento;
            <br /> Saber informações das empresas com as quais a ALPA
            compartilhou e/ou recebeu seus dados pessoais;
            <br /> Solicitar informações de quais terceiros compartilharam e/ou
            receberam seus dados pessoais;
            <br /> O Titular tem o direito de consentir ou não com determinados
            tratamentos de dados, mas isso pode impedir que certos processos
            pertinentes e de interesse sejam executados;
            <br /> Revogação do consentimento;
            <br /> Solicitar revisão de decisões automatizadas;
            <br />
            Portabilidade a outros prestadores de serviços e direito de petição
            perante à Autoridade Nacional de Proteção de Dados (ANPD);
            <br /> O titular de dados tem o direito de entrar em contato e/ou
            peticionar à Autoridade Nacional de Proteção de Dados(ANPD) para
            apresentar uma reclamação contra as práticas de proteção de dados e
            privacidade da ALPA. Caso você deseje exercer qualquer um desses
            direitos, entre em contato conosco por meio do canal
            privacidade@usealpa.com Ademais, cabe ao titular dos dados pessoais
            que se encarregue de:  Inserir informações verdadeiras no site ALPA.
            Manter a confidencialidade de sua conta e senha;
            <br /> Cumprir todas as determinações e procedimentos previstos
            nesta Política;
            <br />
          </Paragraph>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="security"
        className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
      >
        <AccordionTrigger
          index="06"
          className="items-center hover:no-underline cursor-pointer"
        >
          <h2 className="text-sm md:text-base font-medium">
            Medidas de segurança
          </h2>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-8">
          <Paragraph>
            As Informações Pessoais coletadas pela ALPA são armazenadas em
            servidores seguros, fazendo uso de mecanismos criptográficos, com a
            utilização de medidas de segurança de informação constantemente
            atualizadas. As informações serão mantidas confidenciais e serão
            adotadas todas as medidas possíveis contra perda, roubo, uso
            indevido, alteração e acesso não autorizado.
            <br /> A ALPA emprega padrões de segurança avançados, incluindo
            firewalls, antivírus e outros softwares que auxiliam na proteção de
            hackers e o não vazamento das informações pessoais armazenadas.{" "}
            <br />
            Apesar de a ALPA se dedicar a proteger a Plataforma, o titular é
            responsável por proteger e manter a privacidade de seu cadastro e
            informações pessoais. A ALPA não se responsabiliza por dados
            pessoais que o usuário compartilhar com terceiros ou que terceiros
            tenham conhecimento por falta de zelo/cuidado do titular. <br /> Em
            caso de suspeita ou confirmação de violação da Plataforma ou de
            perda de dados pessoais do usuário, a ALPA envidará seus melhores
            esforços e tomará medidas imediatas para eliminar ou reduzir os
            riscos de danos ao USUÁRIO, bem como informará aos envolvidos
            potencialmente afetados e às autoridades competentes de tal fato, os
            possíveis riscos e as medidas necessárias para evitar tais danos.{" "}
            <br /> 8 – ALTERAÇÕES DA POLÍTICA <br /> A ALPA reserva o direito de
            fazer correções, alterações ou aditamentos nesta Política de
            Privacidade a qualquer momento e, desta forma, garante que sempre
            disponibilizará a versão mais atual da Política no seu website, com
            a correspondente data de elaboração do novo documento. <br /> 9 –
            CONTATO <br />
            Qualquer dúvida em relação a esta Política de Privacidade ou
            solicitação referente aos direitos dos USUÁRIOS poderá ser enviada à
            Encarregada pelo tratamento de dados da ALPA, através do canal:
            privacidade@alpa.com <br /> ALPA LTDA.
          </Paragraph>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="concept2"
        className="px-8 py-6 rounded-[10px] max-w-[874px] w-full"
      >
        <AccordionTrigger
          index="07"
          className="items-center hover:no-underline cursor-pointer"
        >
          <h2 className="text-sm md:text-base font-medium">Conceito</h2>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-8">
          <Paragraph>
            Sem prejuízo de outras definições constantes nesta Política, as
            palavras e expressões abaixo indicadas, sempre que utilizadas pela
            primeira letra maiúscula, terão as seguintes definições: “LGPD”: Lei
            Geral de Proteção de Dados, a legislação brasileira no 13.709/2018,
            que regula o tratamento, proteção e privacidade de Dados Pessoais.
            Este documento estabelece diretrizes importantes e obrigatórias para
            a coleta, processamento e armazenamento de dados pessoais
          </Paragraph>
          <Paragraph>
            “Titular de dados pessoais”: toda pessoa natural a quem se referem
            os dados que são objeto de tratamento. “Dados Pessoais”: informações
            pessoais que podem ser associadas a uma pessoa física identificada
            ou identificável. São exemplos de dados pessoais: nome completo,
            endereço, número de telefone, e-mail, dados bancários, data de
            nascimento, filiação e número de documentos oficiais (por exemplo,
            Carteira de Identidade – RG, passaporte, CPF/MF, dentre outros).
            “ANPD”: Autoridade Nacional de Proteção de Dados, órgão da
            administração pública federal responsável por zelar, implementar e
            fiscalizar o cumprimento da LGPD;
          </Paragraph>
          <Paragraph>
            “Tratamento”: toda operação realizada com dados pessoais, como as
            que se referem a coleta, produção, recepção, classificação,
            utilização, acesso, reprodução, transmissão, distribuição,
            processamento, arquivamento, armazenamento, eliminação, avaliação ou
            controle da informação, modificação, comunicação, transferência,
            difusão ou extração. “Encarregado de dados”: pessoa indicada pelo
            controlador e operador para atuar como canal de comunicação entre o
            controlador, os Titulares dos dados e a Autoridade Nacional de
            Proteção de Dados (ANPD);
          </Paragraph>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
