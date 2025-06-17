# Build stage
FROM node:20-alpine AS builder

# Argumento para o endereço da API
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN yarn install

RUN yarn add -D typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Copia o resto dos arquivos
COPY . .

# Build da aplicação
RUN yarn build

# Production stage
FROM node:20-alpine AS runner

# Argumento para o endereço da API
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

WORKDIR /app

# Variáveis de ambiente
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copia os arquivos necessários do stage de build
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expõe a porta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"] 