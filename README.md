# Bugu Delícias - Landing Page (React)

Landing page do Bugu Delícias recriada em React com Vite, a partir do conteúdo extraído do JSON Elementor.

## Estrutura

```
bugu-react/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Hero.jsx       # Hero com slideshow
│   │   ├── VideoSection.jsx
│   │   ├── Servicos.jsx   # Mini Wedding, Chá de Fralda, etc.
│   │   ├── Espaco.jsx     # Conheça o espaço + galeria
│   │   ├── Porque.jsx     # Por que escolher o Bugu
│   │   └── Footer.jsx
│   ├── config.js          # URLs, links, contato
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Comandos

- **Desenvolvimento:** `npm run dev` — abre em http://localhost:5173
- **Build:** `npm run build` — gera pasta `dist`
- **Preview:** `npm run preview` — visualiza o build

## Tecnologias

- React 18
- Vite 5
- CSS (variáveis, responsivo)
- Font Awesome (ícones)
- Google Fonts (Oswald, Montserrat)
