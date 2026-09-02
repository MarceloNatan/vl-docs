# Desenvolvimento local

## Pré-requisitos

- Node.js 20 LTS.
- pnpm.
- Firebase CLI (`firebase --version`).

## Configuração

1. Copie `.env.example` para `.env` na raiz.
2. Mantenha `VITE_USE_FIREBASE_EMULATORS=true` durante o desenvolvimento local.
3. Não use credenciais reais, URIs reais do MongoDB ou buckets de produção no `.env` local.

## Emuladores

Na raiz do projeto:

```powershell
firebase emulators:start
```

Painéis locais:

- Hosting: http://127.0.0.1:5000
- Firebase Emulator UI: http://127.0.0.1:4000
- Auth: http://127.0.0.1:9099
- Functions: http://127.0.0.1:5001

Em outro terminal:

```powershell
pnpm dev:web
```

O app estará disponível em http://127.0.0.1:9001 e usa o Auth Emulator quando `VITE_USE_FIREBASE_EMULATORS=true`. A conexão com MongoDB continua protegida por configuração de backend; o frontend nunca recebe `MONGODB_URI` ou credenciais S3.
