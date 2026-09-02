# R0 — Fundação

## Ambientes

Criar três projetos Firebase independentes: `vl-docs-dev`, `vl-docs-hml` e `vl-docs-prod`. Cada ambiente possui Auth, Hosting, Functions, MongoDB Atlas e bucket S3-compatible próprios. Dados reais nunca entram em DEV/HML.

## Secrets

Cadastrar `MONGODB_URI`, credenciais S3/IDrive e demais valores sensíveis no Google Secret Manager por projeto. A aplicação deve receber apenas referências/configuração no deploy; não commitar valores reais.

## Spikes iniciais

- **MongoDB:** medir custo, conexões, latência e backups com Atlas Flex em DEV/HML; decidir Flex versus M10+ antes do go-live.
- **Backup de documentos:** validar IDrive e2 S3-compatible, versionamento, lifecycle, restauração pontual e uma cópia independente do ambiente primário.
- **Upload:** provar URL temporária, checksum, quarentena e confirmação transacional sem trafegar o arquivo pela Function.

## Checklist de aceite

- [ ] Firebase Auth com MFA exigido para Administrador.
- [ ] API rejeita token ausente, inválido ou revogado.
- [ ] `tenantId` vem do contexto autenticado e está presente em todas as queries.
- [ ] `x-correlation-id` é propagado ou gerado e aparece nos logs.
- [ ] Limites de instância e alertas de orçamento configurados.
- [ ] CI executa typecheck e build.
- [ ] Teste automatizado de isolamento entre dois tenants.
- [ ] Teste documentado de restauração antes do piloto.
