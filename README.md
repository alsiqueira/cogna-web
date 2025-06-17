# Vitrine Cogna - Frontend

Este repositório contém o código-fonte do frontend da aplicação Vitrine Cogna, desenvolvida com Next.js. O objetivo é criar uma vitrine de produtos moderna e responsiva.

## Requisitos do Sistema

Certifique-se de ter os seguintes softwares instalados em seu ambiente de desenvolvimento:

- Node.js (versão 18 ou superior)
- Backend da aplicação rodando na porta `3001`

## Instalação e Execução

Siga os passos abaixo para configurar e executar o projeto localmente:

1.  **Clone o repositório** (se ainda não o fez):

    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd frontend
    ```

2.  **Instale as dependências** do projeto:

    ```bash
    npm install
    # ou se preferir Yarn
    yarn install
    ```

3.  **Inicie o servidor de desenvolvimento**:

    ```bash
    npm run dev
    # ou se preferir Yarn
    yarn dev
    ```

4.  Abra seu navegador e acesse [http://localhost:3000](http://localhost.com:3000) para visualizar a aplicação.

## Estrutura do Projeto

O projeto segue uma estrutura organizada para facilitar o desenvolvimento e a manutenção:

- `/src/app`: Contém as páginas principais da aplicação e a lógica de roteamento.
- `/src/components`: Armazena componentes React reutilizáveis em toda a aplicação.
- `/public`: Destinado a arquivos estáticos como imagens e ícones.

## Funcionalidades Principais

- **Listagem de Produtos**: Página inicial com exibição de produtos, renderizada via Server-Side Rendering (SSR) para melhor performance e SEO.
- **Detalhes do Produto**: Páginas individuais de produtos, geradas via Static Site Generation (SSG) para carregamento rápido.
- **Layout Responsivo**: Design adaptável a diferentes tamanhos de tela (desktops, tablets e celulares).
- **Otimização para SEO**: Configuração de meta tags para melhorar a visibilidade nos motores de busca.

## Tecnologias Utilizadas

As principais tecnologias e bibliotecas empregadas neste projeto incluem:

- [Next.js 14](https://nextjs.org/): Framework React para aplicações web de alto desempenho.
- [Tailwind CSS](https://tailwindcss.com/): Framework CSS utilitário para design rápido e responsivo.
- [ESLint](https://eslint.org/): Ferramenta para identificar e reportar padrões problemáticos encontrados no código JavaScript/TypeScript.

## Saiba Mais

Para aprofundar seus conhecimentos sobre Next.js, consulte os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - Aprenda sobre os recursos e a API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - Um tutorial interativo sobre Next.js.

Você também pode explorar o [repositório Next.js no GitHub](https://github.com/vercel/next.js) para feedback e contribuições.

## Implantação na Vercel

A maneira mais fácil de implantar sua aplicação Next.js é utilizando a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), criada pelos desenvolvedores do Next.js.

Consulte a [documentação de implantação do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.
