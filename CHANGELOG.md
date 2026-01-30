# Changelog

Alterações notáveis do projeto são documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

## [Unreleased]

### Adicionado (feature/0002 - modernizando layout)

- Design tokens: `--radius-sm/md/lg/full`, `--shadow-sm/md/lg`, `--transition`, `--cinza-bg`, `--dourado-claro`
- Botões com bordas arredondadas, leve elevação no hover e `focus-visible` para acessibilidade
- Hero: overlay em gradiente, sombra no logo e no título, subtítulo com largura máxima
- Seção serviços: gradiente de fundo, cards com borda e fundo semitransparente, hover com elevação e ícone em escala
- Vídeo principal: bordas mais arredondadas, sombra maior no hover
- Galerias: bordas arredondadas, sombra no hover das imagens, scrollbar customizada (carrossel)
- Seção espaço: fundo `--cinza-bg` para contraste
- Footer: borda superior sutil, mais padding; links sociais com escala no hover
- Cards de vídeo: borda leve, hover com elevação
- Títulos de seção com `letter-spacing` consistente
- **Header fixo:** barra que aparece ao rolar a página (logo + CTA WhatsApp), com backdrop blur
- **Animação ao scroll:** seções entram com fade + slide (Intersection Observer); respeita `prefers-reduced-motion`
- Hook `useInView` e componente `SectionFade` para animações por seção

## [1.0.0] - 2025-01-29

### Adicionado

- Landing page Bugu Delícias em React (Vite)
- Seções: Hero (slideshow), Vídeo, Serviços, Espaço, Por que o Bugu, Vídeos, Footer
- Imagens e vídeos locais em `public/images/`
- Suporte a embed via iframe e `embed-config.json`
- Altura dinâmica do iframe via `postMessage`
- Documentação de embed em `embed-no-sistema-pai.html`
- Estrutura Git/GitHub: CI, templates de Issue e PR, CONTRIBUTING, CHANGELOG
