# ADR 0001 — Baseline da Fundação

## Decisão

O backend é a autoridade para autenticação, tenant e autorização. O `tenantId` efetivo vem das claims do Firebase Auth e cada acesso ao MongoDB deve aplicar esse escopo. O frontend não pode selecionar um tenant por payload ou parâmetro para ampliar acesso.

## Consequências

- Requests sem token, com token inválido/revogado ou sem tenant são rejeitados.
- Dados de cada ambiente são separados por projeto Firebase, banco MongoDB e bucket.
- O custo inicial fica controlado com Functions 2nd gen limitadas e MongoDB Flex em DEV/HML, sujeito à validação do spike.
- Fluxos longos serão jobs assíncronos; uploads não passam pela API.
