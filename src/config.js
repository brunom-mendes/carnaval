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
  { id: 'confraternizacao', label: 'Confraternização', icon: 'fas fa-users' },
]

// Categorias e itens para montagem do evento
export const CATEGORIAS_ITENS = [
  {
    id: 'buffet',
    nome: 'Buffet',
    icon: 'fas fa-utensils',
    itens: [
      { id: 'cafe-colonial', nome: 'Café Colonial Completo', descricao: 'Pães artesanais, bolos, frios, frutas e bebidas quentes' },
      { id: 'brunch', nome: 'Brunch Especial', descricao: 'Opção sofisticada com pratos quentes e frios' },
      { id: 'finger-food', nome: 'Finger Foods', descricao: 'Mini porções elegantes para servir em pé' },
      { id: 'almoco-jantar', nome: 'Almoço / Jantar', descricao: 'Refeição completa com entrada, prato principal e acompanhamentos' },
    ],
  },
  {
    id: 'doces',
    nome: 'Doces & Bolos',
    icon: 'fas fa-birthday-cake',
    itens: [
      { id: 'bolo-decorado', nome: 'Bolo Decorado', descricao: 'Bolo artístico personalizado para o seu evento' },
      { id: 'mesa-doces', nome: 'Mesa de Doces', descricao: 'Brigadeiros, beijinhos, cajuzinhos e mais' },
      { id: 'tortas', nome: 'Tortas Artesanais', descricao: 'Tortas caseiras nos sabores do Bugu' },
      { id: 'sobremesas', nome: 'Sobremesas Individuais', descricao: 'Pudins, mousses e pavês em porções' },
    ],
  },
  {
    id: 'bebidas',
    nome: 'Bebidas',
    icon: 'fas fa-glass-cheers',
    itens: [
      { id: 'bar-sucos', nome: 'Bar de Sucos Naturais', descricao: 'Sucos frescos e águas saborizadas' },
      { id: 'cafe-especial', nome: 'Café Especial', descricao: 'Estação de cafés, chás e chocolates quentes' },
      { id: 'drinks', nome: 'Drinks & Coquetéis', descricao: 'Bebidas alcoólicas e não alcoólicas preparadas na hora' },
      { id: 'espumante', nome: 'Espumante & Brinde', descricao: 'Taças de espumante para momentos especiais' },
    ],
  },
  {
    id: 'decoracao',
    nome: 'Decoração',
    icon: 'fas fa-palette',
    itens: [
      { id: 'flores', nome: 'Arranjos Florais', descricao: 'Flores naturais para mesas e ambientes' },
      { id: 'iluminacao', nome: 'Iluminação Decorativa', descricao: 'Luzes, velas e fios de luz para ambientação' },
      { id: 'mesa-posta', nome: 'Mesa Posta Completa', descricao: 'Louças, talheres e guardanapos especiais' },
      { id: 'baloes', nome: 'Balões & Painéis', descricao: 'Decoração temática com balões e painéis personalizados' },
    ],
  },
  {
    id: 'servicos',
    nome: 'Serviços Extras',
    icon: 'fas fa-concierge-bell',
    itens: [
      { id: 'garcom', nome: 'Garçom / Atendente', descricao: 'Equipe de atendimento durante o evento' },
      { id: 'musica', nome: 'Música ao Vivo / DJ', descricao: 'Sonorização e animação musical' },
      { id: 'foto', nome: 'Fotógrafo', descricao: 'Registro profissional dos melhores momentos' },
      { id: 'convites', nome: 'Convites Personalizados', descricao: 'Design e impressão de convites exclusivos' },
    ],
  },
]
