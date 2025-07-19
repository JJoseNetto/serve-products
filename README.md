# Serve Products

Projeto backend desenvolvido com [NestJS](https://nestjs.com/), utilizando [Drizzle ORM](https://orm.drizzle.team/) e banco de dados PostgreSQL.

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [PostgreSQL](https://www.postgresql.org/)
- [Zod](https://zod.dev/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- Docker (opcional, recomendado para ambiente de desenvolvimento)

## 📦 Instalação

### Pré-requisitos

- Node.js >= 18.x
- NPM >= 9.x (ou Yarn)
- PostgreSQL >= 13
- Docker e Docker Compose (opcional)

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/serve-products.git
cd serve-products
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Instale as dependências

- Copie o arquivo .env.example e configure de acordo com seu ambiente:

```bash
cp .env.example .env
```

- Edite o .env com seus dados:

```bash
DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco
PORT=3333
```

### 4. (Opcional) Suba o ambiente com Docker

```bash
docker-compose up -d
```

### 5. Execute as migrations

```bash
npx drizzle-kit push
```

### 6. Inicie a aplicação

```bash
npm run start:dev
```

## 📂 Estrutura do Projeto

```bash
serve-products/
│
├── src/                  # Código-fonte principal
│   ├── products/         # Módulo de produtos
│   └── app.module.ts     # Módulo principal da aplicação
│
├── .env.example          # Exemplo de variáveis de ambiente
├── drizzle.config.ts     # Configuração do Drizzle ORM
├── docker-compose.yml    # Ambiente de desenvolvimento com PostgreSQL
├── package.json          # Dependências e scripts
├── tsconfig.json         # Configuração do TypeScript
```

## 🧪 Scripts Disponíveis

```bash
npm run start          # Inicia a aplicação
npm run start:dev      # Inicia em modo desenvolvimento com hot reload
npm run build          # Compila o projeto
npm run lint           # Analisa o código com ESLint
```

## 🛠️ Principais Bibliotecas

### Produção

  - @nestjs/core

  - drizzle-orm

  - postgres

  - zod

  - dotenv

  - rxjs

### Desenvolvimento

    - @nestjs/cli

    - @nestjs/testing

    - @swc/core (compilação rápida)

    - eslint e prettier (padronização de código)

    - Tipagens: @types/node, @types/express, etc.

## 🐳 Docker

- O projeto inclui um docker-compose.yml com PostgreSQL configurado:

```bash
docker-compose up -d
```

## 📮 API de Produtos
- Arquivo products.http incluso para testes manuais via REST Client.