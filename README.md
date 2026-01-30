# Bugu Delícias - Landing Page

Landing page do Bugu Delícias (espaço para eventos em Taguatinga, Brasília) em React com Vite.

## Estrutura do repositório

```
.
├── .github/
│   ├── workflows/
│   │   └── ci.yml              # CI: build em push/PR (main, develop)
│   ├── ISSUE_TEMPLATE/         # Templates de issue (bug, feature)
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── config.yml
├── public/
│   ├── images/                 # Imagens e vídeos da página
│   └── favicon.svg
├── src/
│   ├── components/             # Componentes React
│   ├── config.js               # URLs, links, contato
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .editorconfig
├── .gitattributes
├── .gitignore
├── CHANGELOG.md
├── CONTRIBUTING.md             # Fluxo Git, padrão de commits e branches
├── embed-config.json           # Config para embed em outro sistema
├── embed-no-sistema-pai.html  # Instruções e código de iframe
├── LICENSE
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Comandos

| Comando        | Descrição                          |
|----------------|------------------------------------|
| `npm install`  | Instalar dependências              |
| `npm run dev`  | Servidor de desenvolvimento        |
| `npm run build`| Build de produção (`dist/`)        |
| `npm run preview` | Visualizar o build               |

## Fluxo Git

- **main** — produção.
- **develop** — integração; features fazem merge aqui.
- Branches de trabalho: `feature/nome`, `fix/nome`, `hotfix/nome`.
- Commits no padrão [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `docs:`, etc.

Detalhes em [CONTRIBUTING.md](CONTRIBUTING.md).

## Embed em outro sistema

- Use **embed-config.json** para o outro sistema carregar URL e opções do iframe.
- Use **embed-no-sistema-pai.html** para ver exemplos de iframe e altura dinâmica.

## Tecnologias

- React 18
- Vite 5
- CSS (variáveis, responsivo)
- Font Awesome, Google Fonts (Oswald, Montserrat)
