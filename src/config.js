// Todas as imagens e vídeos da pasta public/images/
const BASE = '/images'

// Logo oficial Bugu Delícias (Logo2024)
export const IMAGES = {
  logo: `${BASE}/Logo2024.png`,
  heroSlides: [
    `${BASE}/casamento1.jpeg`,
    `${BASE}/casamento2.jpeg`,
    `${BASE}/casamento3.jpeg`,
    `${BASE}/casamento4.jpeg`,
    `${BASE}/casamento5.jpeg`,
  ],
  videoPoster: `${BASE}/casamento6.jpeg`,
  videoSrc: `${BASE}/videoespaco1.mp4`,
  espaco: [
    `${BASE}/casamento7.jpeg`,
    `${BASE}/casamento8.jpeg`,
    `${BASE}/casamento9.jpeg`,
    `${BASE}/casamento10.jpeg`,
    `${BASE}/casamento11.jpeg`,
  ],
  porque: [
    `${BASE}/casamento12.jpeg`,
    `${BASE}/casamento13.jpeg`,
    `${BASE}/casamento14.jpeg`,
  ],
}

// Vídeos para a seção "Nossos eventos em vídeo"
export const VIDEOS = [
  { src: `${BASE}/videocasamento1.mp4`, title: 'Casamento 1' },
  { src: `${BASE}/videocasamento2.mp4`, title: 'Casamento 2' },
  { src: `${BASE}/videocasamento3.mp4`, title: 'Casamento 3' },
  { src: `${BASE}/videocasamento4.mp4`, title: 'Casamento 4' },
  { src: `${BASE}/videocasamento5.mp4`, title: 'Casamento 5' },
  { src: `${BASE}/videoespaco2.mp4`, title: 'Nosso espaço' },
]

export const LINKS = {
  whatsapp: 'https://wa.me/5561983190329',
  instagram: 'https://www.instagram.com/bugu_delicias/',
  facebook: 'https://www.facebook.com/BuguDeliciasCaseiras/?locale=pt_BR',
  google: 'https://share.google/QwElLIYdaxqvCIZiT',
}

export const CONTATO = {
  telefone: '61 9 8319-0329',
  endereco: 'St. J Norte QNJ 32 Lote 38',
  cidade: 'Taguatinga, Brasília - DF',
  cep: '72140-320',
}

// Tipos de evento disponíveis
export const TIPOS_EVENTO = [
  { id: 'mini-wedding', label: 'Mini Wedding', icon: 'fas fa-heart' },
  { id: 'cha-fralda', label: 'Chá de Fralda', icon: 'fas fa-baby-carriage' },
  { id: 'corporativo', label: 'Corporativo', icon: 'fas fa-business-time' },
  { id: 'confraternizacao', label: 'Aniversário\nConfraternização', icon: 'fas fa-users' },
]

// Categorias e itens para montagem do evento (com preços reais)
// Itens com preco: 0 serão exibidos como "A consultar"
export const CATEGORIAS_ITENS = [
  {
    id: 'reserva',
    nome: 'Reserva do Espaço',
    icon: 'fas fa-building',
    singleSelect: true,
    itens: [
      { id: 'reserva-mesa', nome: 'Reserva de Mesa', descricao: 'Até 20 lugares, com a casa em funcionamento (sem custo)', preco: 0, unidade: '' },
      { id: 'espaco-dia-30', nome: 'Espaço Exclusivo — Dias Úteis (até 30 pessoas)', descricao: 'Terça a sexta', preco: 150.00, unidade: 'por período', subOpcoes: [
        { id: 'manha', label: 'Manhã — entre 8h às 12h' },
        { id: 'tarde', label: 'Tarde — entre 14h30 às 19h' },
      ]},
      { id: 'espaco-dia-60', nome: 'Espaço Exclusivo — Dias Úteis (até 60 pessoas)', descricao: 'Terça a sexta', preco: 200.00, unidade: 'por período', subOpcoes: [
        { id: 'manha', label: 'Manhã — entre 8h às 12h' },
        { id: 'tarde', label: 'Tarde — entre 14h30 às 19h' },
      ]},
      { id: 'espaco-fds-30', nome: 'Espaço Exclusivo — Fim de Semana (até 30 pessoas)', descricao: 'Finais de semana e feriados, entre 8h às 12h', preco: 150.00, unidade: 'por hora', camposExtras: [
        { id: 'horas', tipo: 'select', label: 'Quantidade de horas', opcoes: ['1h', '2h', '3h', '4h'] },
        { id: 'horario-inicio', tipo: 'horario', label: 'Horário de início da reserva', placeholder: '08h00' },
      ]},
      { id: 'reserva-completa-dia', nome: 'Reserva Completa — Dias Úteis', descricao: 'Após às 19h30 até 22h, entre 80-90 pessoas. Decoração e cerimonial não inclusos', preco: 550.00, unidade: '' },
      { id: 'reserva-completa-fds', nome: 'Reserva Completa — Fim de Semana', descricao: 'Após às 13h, entre 80-90 pessoas, 5h de evento. Decoração e cerimonial não inclusos', preco: 2000.00, unidade: '' },
    ],
  },
  {
    id: 'bolos',
    nome: 'Bolos Caseiros',
    icon: 'fas fa-birthday-cake',
    itens: [
      { id: 'bolo-caseiro', nome: 'Bolo Caseiro', descricao: 'Banana, milho ou maçã', preco: 38.00, unidade: 'unidade' },
      { id: 'bolo-cobertura', nome: 'Bolo Caseiro com Cobertura', descricao: 'Bolo caseiro com cobertura especial', preco: 48.00, unidade: 'unidade' },
      { id: 'torta-invertida', nome: 'Torta Invertida', descricao: 'Banana, laranja ou abacaxi', preco: 48.00, unidade: 'unidade' },
      { id: 'pudim-grande', nome: 'Pudim Grande', descricao: 'Pudim caseiro tamanho grande', preco: 65.00, unidade: 'unidade' },
      { id: 'delicia-milho', nome: 'Delícia de Milho Grande', descricao: 'Sobremesa cremosa de milho', preco: 65.00, unidade: 'unidade' },
      { id: 'delicia-chocolate', nome: 'Delícia de Chocolate', descricao: 'Sobremesa cremosa de chocolate', preco: 65.00, unidade: 'unidade' },
    ],
  },
  {
    id: 'bolos-festa',
    nome: 'Bolos para Festa',
    icon: 'fas fa-cake-candles',
    itens: [
      { id: 'torta-branca-abacaxi', nome: 'Torta Massa Branca — Abacaxi', descricao: 'Massa branca com recheio de abacaxi', preco: 89.90, unidade: 'kg', pesoOpcoes: [2, 2.5, 3, 3.5, 4] },
      { id: 'torta-branca-damasco', nome: 'Torta Massa Branca — Damasco', descricao: 'Massa branca com recheio de damasco', preco: 89.90, unidade: 'kg', pesoOpcoes: [2, 2.5, 3, 3.5, 4] },
      { id: 'torta-branca-ameixa', nome: 'Torta Massa Branca — Ameixa', descricao: 'Massa branca com recheio de ameixa', preco: 89.90, unidade: 'kg', pesoOpcoes: [2, 2.5, 3, 3.5, 4] },
      { id: 'torta-branca-coco', nome: 'Torta Massa Branca — Coco', descricao: 'Massa branca com recheio de coco', preco: 89.90, unidade: 'kg', pesoOpcoes: [2, 2.5, 3, 3.5, 4] },
      { id: 'torta-chocolate-castanha-para', nome: 'Torta de Chocolate — Castanha do Pará', descricao: 'Massa de chocolate com recheio de castanha do Pará', preco: 89.90, unidade: 'kg', pesoOpcoes: [2, 2.5, 3, 3.5, 4] },
      { id: 'torta-chocolate-coco', nome: 'Torta de Chocolate — Coco', descricao: 'Massa de chocolate com recheio de coco', preco: 89.90, unidade: 'kg', pesoOpcoes: [2, 2.5, 3, 3.5, 4] },
      { id: 'torta-chocolate-castanha-caju', nome: 'Torta de Chocolate — Castanha de Caju', descricao: 'Massa de chocolate com recheio de castanha de caju', preco: 89.90, unidade: 'kg', pesoOpcoes: [2, 2.5, 3, 3.5, 4] },
    ],
  },
  {
    id: 'salgados',
    nome: 'Salgados',
    icon: 'fas fa-bread-slice',
    itens: [
      { id: 'quiche', nome: 'Quiche', descricao: 'Seleta de legumes, alho poró ou frango', preco: 79.80, unidade: 'kg' },
      { id: 'torta-caseira', nome: 'Torta Caseira', descricao: 'Frango ou presunto e queijo', preco: 73.99, unidade: 'kg' },
      { id: 'mini-empadas', nome: '50 Mini Empadas', descricao: 'Porção com 50 unidades', preco: 119.00, unidade: 'lote' },
      { id: 'mini-coxinhas', nome: '50 Mini Coxinhas', descricao: 'Porção com 50 unidades', preco: 61.90, unidade: 'lote' },
      { id: 'paes-queijo', nome: '50 Pães de Queijo', descricao: 'Porção com 50 unidades', preco: 74.50, unidade: 'lote' },
      { id: 'biscoitos-queijo', nome: '50 Biscoitos de Queijo', descricao: 'Porção com 50 unidades', preco: 74.50, unidade: 'lote' },
      { id: 'sanduiche-frango', nome: 'Sanduíche de Frango', descricao: 'Mini sanduíche de frango', preco: 6.85, unidade: 'unidade' },
      { id: 'sanduiche-presunto', nome: 'Sanduíche de Presunto', descricao: 'Mini sanduíche de presunto', preco: 6.85, unidade: 'unidade' },
    ],
  },
  {
    id: 'doces',
    nome: 'Doces',
    icon: 'fas fa-candy-cane',
    itens: [
      { id: 'iogurte-geleia', nome: 'Iogurte com Geleia Caseira', descricao: 'Iogurte artesanal com geleia', preco: 7.00, unidade: 'unidade' },
      { id: 'salada-frutas', nome: 'Salada de Frutas 1,5kg', descricao: 'Salada de frutas frescas', preco: 110.00, unidade: 'unidade' },
      { id: 'banoffe', nome: 'Banoffe', descricao: 'Torta de banana com doce de leite e chantilly', preco: 198.00, unidade: 'unidade' },
      { id: 'cheesecake', nome: 'Cheesecake', descricao: 'Cheesecake artesanal do Bugu', preco: 168.00, unidade: 'unidade' },
      { id: 'torta-alema', nome: 'Torta Alemã', descricao: 'Torta alemã caseira', preco: 119.00, unidade: 'unidade' },
    ],
  },
  {
    id: 'bebidas',
    nome: 'Bebidas',
    icon: 'fas fa-glass-cheers',
    itens: [
      { id: 'suco-1l', nome: 'Suco Natural (1 litro)', descricao: 'Suco de frutas natural', preco: 33.00, unidade: 'litro' },
      { id: 'cafe-1l', nome: 'Café (1 litro)', descricao: 'Café coado fresco', preco: 53.00, unidade: 'litro' },
      { id: 'leite-1l', nome: 'Leite (1 litro)', descricao: 'Leite integral', preco: 6.00, unidade: 'litro' },
      { id: 'refrigerante-2l', nome: 'Refrigerante (2 litros)', descricao: 'Refrigerante variado', preco: 19.00, unidade: 'unidade' },
      { id: 'chocolate-cremoso', nome: 'Chocolate Cremoso da Casa (1 litro)', descricao: 'Chocolate quente cremoso artesanal', preco: 120.99, unidade: 'litro' },
    ],
  },
  {
    id: 'outros',
    nome: 'Outros',
    icon: 'fas fa-plus-circle',
    itens: [
      { id: 'cuscuz', nome: 'Cuscuz Temperado', descricao: 'Calabresa e pimentões', preco: 73.99, unidade: 'kg' },
      { id: 'bacon', nome: 'Bacon', descricao: 'Bacon fatiado', preco: 73.99, unidade: 'kg' },
      { id: 'pates', nome: 'Patês', descricao: 'Alho poró, azeitona, frango ou tomate seco', preco: 73.99, unidade: 'kg' },
      { id: 'geleias', nome: 'Geleias', descricao: 'Frutas vermelhas ou morango', preco: 73.99, unidade: 'kg' },
      { id: 'terrine-gorgonzola', nome: 'Terrine de Gorgonzola', descricao: 'Gorgonzola e cream cheese', preco: 0, unidade: '' },
      { id: 'terrine-tomate', nome: 'Terrine de Tomate Seco', descricao: 'Tomate seco, ricota e cream cheese', preco: 0, unidade: '' },
    ],
  },
  {
    id: 'mesa-posta',
    nome: 'Mesa Posta',
    icon: 'fas fa-utensil-spoon',
    itens: [
      { id: 'sousplat-unitario', nome: 'Sousplat Unitário', descricao: 'Diversos modelos e acabamentos', preco: 5.99, unidade: 'unidade', qtdOpcoes: [50, 60, 70, 80, 90, 100] },
      { id: 'guardanapo-unitario', nome: 'Guardanapo Unitário', descricao: 'Ampla variedade de cores', preco: 5.49, unidade: 'unidade', qtdOpcoes: [50, 60, 70, 80, 90, 100] },
      { id: 'sousplat-cristal', nome: 'Sousplat Cristal de Vidro', descricao: 'Modelo premium em cristal (não participa do kit)', preco: 7.00, unidade: 'unidade', qtdOpcoes: [50, 60, 70, 80, 90, 100] },
      { id: 'kit-sousplat-guardanapo', nome: 'Kit Sousplat + Guardanapo', descricao: 'Kit promocional (mínimo 50 unidades)', preco: 6.99, unidade: 'unidade', qtdOpcoes: [50, 60, 70, 80, 90, 100] },
    ],
  },
  {
    id: 'combos',
    nome: 'Combos Prontos',
    icon: 'fas fa-box-open',
    singleSelect: true,
    itens: [
      { id: 'combo-coffeebreak', nome: 'Coffee-break Corporativo', descricao: 'Atende 30 pessoas: 1 bolo com cobertura, 1 bolo de banana, 50 pães de queijo, salada de frutas, sucos, café, leite e água', preco: 495.00, unidade: 'combo' },
      { id: 'combo-momentos', nome: 'Café Momentos & Sabores', descricao: 'Atende 50 pessoas: bolos, quiche, torta, cuscuz, iogurtes, pães de queijo, biscoitos, sanduíches, salada de frutas, sucos, café, leite e água', preco: 1550.00, unidade: 'combo' },
    ],
  },
  {
    id: 'decoracao',
    nome: 'Decoração',
    icon: 'fas fa-palette',
    itens: [
      { id: 'flores', nome: 'Arranjos Florais', descricao: 'Flores naturais para mesas e ambientes', preco: 0, unidade: '' },
      { id: 'iluminacao', nome: 'Iluminação Decorativa', descricao: 'Luzes, velas e fios de luz para ambientação', preco: 0, unidade: '' },
      { id: 'baloes', nome: 'Balões & Painéis', descricao: 'Decoração temática com balões e painéis personalizados', preco: 0, unidade: '' },
    ],
  },
  {
    id: 'servicos',
    nome: 'Serviços Extras',
    icon: 'fas fa-concierge-bell',
    itens: [
      { id: 'garcom', nome: 'Garçom / Atendente', descricao: 'Equipe de atendimento durante o evento', preco: 0, unidade: '' },
      { id: 'musica', nome: 'Música ao Vivo / DJ', descricao: 'Sonorização e animação musical', preco: 0, unidade: '' },
      { id: 'foto', nome: 'Fotógrafo', descricao: 'Registro profissional dos melhores momentos', preco: 0, unidade: '' },
      { id: 'convites', nome: 'Convites Personalizados', descricao: 'Design e impressão de convites exclusivos', preco: 0, unidade: '' },
    ],
  },
]
