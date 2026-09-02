# VL Docs

SaaS multi-tenant de gestão documental para cartórios.

## R0 — Fundação

- `apps/web`: SPA Quasar + Vue 3.
- `apps/functions`: API Express executada em Firebase Functions 2nd gen.
- `packages/contracts`: contratos compartilhados entre frontend e backend.
- `infra`: configuração de Firebase Hosting, ambientes e CI.
- `docs`: decisões, operação e spikes técnicos.

## Princípios obrigatórios

1. Todo acesso autenticado resolve `tenantId` no servidor a partir do usuário; o cliente nunca escolhe o tenant efetivo.
2. Cada consulta e mutação de dados deve carregar o escopo do tenant.
3. Segredos ficam no Secret Manager; `.env` serve apenas para desenvolvimento local e nunca é versionado.
4. Upload de documentos será direto ao storage S3-compatible via URL temporária; a API não recebe o conteúdo do arquivo.
5. Auditoria, MFA de administradores, backup, quarentena, versionamento, lixeira e isolamento são baseline de todos os planos.

## Início rápido

```bash
corepack enable
pnpm install
pnpm dev:web
```

Consulte `docs/r0-foundation.md` para o checklist de provisionamento dos ambientes DEV/HML/PROD.
