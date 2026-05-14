# 🚀 Alpa - Landing Page

Landing page moderna e responsiva desenvolvida para a **Alpa**, um gateway de pagamentos de alta conversão com foco em segurança, saque rápido e alta taxa de aprovação.

## 📋 Sobre o Projeto

A Alpa é uma plataforma de processamento de pagamentos online que oferece soluções completas para empresas de todos os tamanhos, incluindo checkout personalizável, múltiplos métodos de pagamento (PIX, Cartão de Crédito, Boleto), sistema antifraude eficiente e suporte 24/7.

Esta landing page foi desenvolvida para apresentar os serviços da empresa, destacar os benefícios e converter visitantes em clientes através de uma experiência visual atraente e otimizada.

## ✨ Funcionalidades

- **Hero Section** com mensagem de conversão impactante e CTA principal
- **Seção de Parceiros** exibindo bandeiras e instituições parceiras
- **Seção de Benefícios** apresentando as principais vantagens da plataforma
- **Seção de Recursos** destacando os recursos disponíveis
- **Seção de Taxas e Termos** mostrando informações sobre taxas e condições
- **Seção "Por que os usuários amam a Alpa"** com cards de benefícios detalhados
- **Seção de Solicitação de Taxas** para negociação personalizada
- **Seção "Comece Agora"** com CTA para criação de conta
- **FAQ Section** respondendo dúvidas frequentes
- **Footer** completo com links e informações legais

## 🛠️ Tecnologias Utilizadas

- **[Next.js 15.2.4](https://nextjs.org/)** - Framework React para produção
- **[React 19.0](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca de animações
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis e sem estilo
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de schemas TypeScript-first
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Gerenciamento de estado leve
- **[Lucide React](https://lucide.dev/)** - Ícones modernos e consistentes
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carrossel acessível

## 📁 Estrutura do Projeto

```
landing-page-master/
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── (landing-page)/
│   │   │   │   ├── page.tsx          # Página principal (Homepage)
│   │   │   │   └── components/      # Componentes da landing page
│   │   │   │       ├── hero/
│   │   │   │       ├── partners/
│   │   │   │       ├── benefits/
│   │   │   │       ├── resources/
│   │   │   │       ├── fee-and-terms/
│   │   │   │       ├── why-users-love-alpa/
│   │   │   │       ├── request-fees/
│   │   │   │       └── get-started/
│   │   │   ├── consumidor/          # Página do consumidor
│   │   │   ├── contato/             # Página de contato
│   │   │   ├── faq/                 # FAQ
│   │   │   ├── cookies/             # Política de cookies
│   │   │   ├── privacidade/        # Políticas de privacidade
│   │   │   ├── termos-de-uso/      # Termos de uso
│   │   │   ├── termos-de-compras/  # Termos de compra
│   │   │   ├── produtos-proibidos/  # Lista de produtos proibidos
│   │   │   └── layout.tsx           # Layout das rotas públicas
│   │   ├── components/              # Componentes reutilizáveis
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   ├── faq/
│   │   │   ├── contact/
│   │   │   └── ui/                  # Componentes base (shadcn/ui)
│   │   ├── assets/                  # Imagens, SVGs e recursos visuais
│   │   ├── hooks/                   # React hooks customizados
│   │   ├── lib/                     # Utilitários
│   │   ├── store/                   # Estado global (Zustand)
│   │   ├── types/                   # Declarações de tipos TypeScript
│   │   ├── styles/                  # Estilos globais
│   │   └── layout.tsx                # Layout raiz da aplicação
├── public/                           # Arquivos estáticos
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm, yarn, pnpm ou bun

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/alpa-landing-page.git
cd alpa-landing-page
```

2. Instale as dependências:

```bash
npm install --legacy-peer-deps

# ou

yarn install

# ou

pnpm install
```

> ⚠️ **Nota**: Use `--legacy-peer-deps` com npm caso encontre conflitos de dependências.

3. Configure as variáveis de ambiente:

Crie um arquivo `.env.local` na raiz do projeto:

```env
BASE_URL=https://seu-dominio.com
```

4. Execute o servidor de desenvolvimento:

```bash
npm run dev

# ou

yarn dev

# ou

pnpm dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador para ver a aplicação.

### Build para Produção

```bash
npm run build
npm start
```

## 🎨 Design e Responsividade

A landing page foi desenvolvida com foco em:

- **Design Moderno**: Interface limpa e profissional com paleta de cores consistente
- **Totalmente Responsiva**: Adaptação perfeita para mobile, tablet e desktop (mobile-first)
- **Performance Otimizada**: Uso de Next.js Image para otimização automática de imagens
- **Animações Suaves**: Efeitos com Framer Motion para melhor experiência do usuário
- **Acessibilidade**: Componentes acessíveis seguindo padrões WCAG 2.1

## 📱 Seções da Landing Page

1. **Header**: Navegação principal com logo e menu responsivo
2. **Hero**: Seção principal com título impactante e CTA para criação de conta
3. **Parceiros**: Logos de bandeiras e instituições parceiras
4. **Benefícios**: Grid com os principais benefícios oferecidos
5. **Recursos**: Apresentação dos recursos disponíveis na plataforma
6. **Taxas e Termos**: Informações sobre taxas e condições de uso
7. **Por que os usuários amam a Alpa**: Cards detalhados com os diferenciais
8. **Solicitação de Taxas**: Formulário para negociação de taxas personalizadas
9. **Comece Agora**: Seção de CTA final para criação de conta
10. **FAQ**: Perguntas frequentes com accordion interativo
11. **Footer**: Links legais, informações de contato e redes sociais

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 📄 Páginas Adicionais

- `/consumidor` - Espaço do consumidor
- `/contato` - Página de contato
- `/faq` - Dúvidas frequentes
- `/termos-de-uso` - Termos de uso do serviço
- `/privacidade` - Políticas de privacidade
- `/termos-de-compras` - Termos de compra
- `/produtos-proibidos` - Lista de produtos proibidos
- `/cookies` - Política de cookies

## 🌐 Variáveis de Ambiente

| Variável | Descrição | Obrigatória |
|----------|-----------|-------------|
| `BASE_URL` | URL base do site (ex: `https://usealpa.com`) | ✅ Sim |

## 🚀 Deploy

O projeto está otimizado para deploy na [Vercel](https://vercel.com/), mas pode ser deployado em qualquer plataforma que suporte Next.js:

- **Vercel** (recomendado): Conecte seu repositório GitHub e faça deploy automático
- **Netlify**: Configure build command `npm run build` e publish directory `.next`
- **AWS Amplify**: Suporte nativo para Next.js
- **Railway**: Deploy simples com integração Git
- **Render**: Deploy automático a partir do repositório

## 📝 Licença

Este projeto é privado e proprietário da Alpa.

## 👥 Contribuindo

Este é um projeto privado. Para sugestões ou problemas, entre em contato através da página de contato.

## 📞 Contato

**Alpa** - Gateway de pagamentos

- 🌐 **Website**: [usealpa.com](https://usealpa.com)
- 📱 **App**: [app.usealpa.com](https://app.usealpa.com)
- 📧 **Email**: contato@usealpa.com
- 📱 **WhatsApp**: [Fale conosco](https://wa.me/+5511978673936)
- 📍 **Endereço**: Avenida Brigadeiro Faria Lima 1485, Conj. 91, CEP 01.452.002

### Redes Sociais

- 📷 [Instagram](https://www.instagram.com/usealpa_)
- 💼 [LinkedIn](https://linkedin.com/company/alpa)

## 🎨 Créditos

### Repositório Inicial

Este projeto foi desenvolvido com base nos repositórios iniciais:
- 🔗 [Alpa-Anthony/landing-page](https://github.com/Alpa-Anthony/landing-page) (repositório privado - criado inicialmente e posteriormente transferido para a conta da empresa)
- 🔗 [anthonymengottii/alpa_landingpage](https://github.com/anthonymengottii/alpa_landingpage.git)

### Desenvolvimento

Agradecimentos especiais ao desenvolvedor que foi contratado como freelancer para fornecer suporte no desenvolvimento e implementação deste sistema:

- 👨‍💻 **[Josué Silva (@Josue-Js)](https://github.com/Josue-Js)** - Suporte no desenvolvimento e implementação do sistema (freelancer)

### Design e Identidade Visual

O design e identidade visual desta landing page foram desenvolvidos pela **[Dinamite Criativa](https://dinamitecriativa.com.br/)**, um estúdio internacional de design com ampla experiência em projetos para empresas de diferentes setores e mercados.

---

*Projeto desenvolvido para a Alpa - Gateway de pagamentos CNPJ 35.359.088/0001-17*
