# Como contribuir

## Fluxo de trabalho (Git Flow simplificado)

- **main** — código em produção; só entra via merge de `develop` ou hotfix.
- **develop** — integração; branches de feature fazem merge aqui.
- **feature/nome** — novas funcionalidades.
- **fix/nome** ou **bugfix/nome** — correções de bugs.
- **hotfix/nome** — correções urgentes a partir de `main`.

## Padrão de branches

- `feature/descricao-curta` — ex: `feature/galeria-lightbox`
- `fix/descricao-curta` — ex: `fix/altura-iframe-mobile`
- `hotfix/descricao-curta` — ex: `hotfix/url-whatsapp`

## Padrão de commits (Conventional Commits)

Use mensagens no formato:

```
<tipo>(<escopo opcional>): <descrição curta>

[corpo opcional]
```

**Tipos:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

**Exemplos:**
- `feat(hero): adiciona transição entre slides`
- `fix(video): corrige poster no mobile`
- `docs: atualiza README com instruções de deploy`
- `chore: atualiza dependências`

## Passos para contribuir

1. Crie uma branch a partir de `develop`:  
   `git checkout develop && git pull && git checkout -b feature/minha-feature`
2. Faça as alterações e commits seguindo o padrão acima.
3. Garanta que o build passa: `npm run build`
4. Envie a branch: `git push -u origin feature/minha-feature`
5. Abra um Pull Request para `develop` no GitHub.
6. Após revisão e merge, a branch pode ser removida.

## Issues e Pull Requests

- Use os templates de Issue (Bug / Feature) ao abrir uma issue.
- Use o template de Pull Request e preencha o checklist antes de solicitar revisão.
