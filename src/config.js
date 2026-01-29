// Todas as imagens e vídeos da pasta public/images/
const BASE = '/images'

// Logo: usa primeira imagem (casamento1) como destaque
export const IMAGES = {
  logo: `${BASE}/casamento1.jpeg`,
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
