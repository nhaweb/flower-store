export type Occasion =
  | 'sinh-nhat'
  | 'ky-niem'
  | 'cam-on'
  | 'tinh-yeu'
  | 'trang-tri'
  | 'theo-mua'

export type Season = 'xuan' | 'ha' | 'thu' | 'dong' | 'ca-nam'

export type Product = {
  _id: string
  name: string
  slug: string
  tagline?: string
  description?: string
  price: number
  imageUrl?: string
  galleryUrls?: string[]
  stems?: string[]
  occasions?: Occasion[]
  season?: Season
  accentColor?: string
  featured?: boolean
  available?: boolean
  careTip?: string
}

export type CareNote = {
  _id: string
  order: number
  title: string
  body: string
}

export type CareFaq = {
  question: string
  answer: string
}

export type CarePage = {
  heroEyebrow: string
  heroTitle: string
  heroIntro?: string
  guideEyebrow?: string
  guideTitle?: string
  flowerEyebrow?: string
  flowerTitle?: string
  faqEyebrow?: string
  faqTitle?: string
  faqs?: CareFaq[]
}

export type FlowerType = {
  _id: string
  name: string
  slug: string
  imageUrl?: string
  meaning: string
  description?: string
  season: Season
  careLevel: 'Dễ' | 'Vừa' | 'Khó'
  lifespan: string
  careTip: string
  tint?: string
}

export type Testimonial = {
  _id: string
  quote: string
  author: string
  context?: string
  featured?: boolean
}

export type SiteSettings = {
  brandName: string
  tagline?: string
  phone?: string
  zalo?: string
  email?: string
  address?: string
  instagram?: string
  facebook?: string
  hours?: string
  deliveryNote?: string
}

export type HomePage = {
  heroLine1: string
  heroAccent: string
  heroLine2: string
  heroSupport: string
  heroImageUrl?: string
  shopEyebrow: string
  shopTitle: string
  storyEyebrow: string
  storyTitle: string
  storyBody: string
  careEyebrow: string
  careTitle: string
  occasionsEyebrow?: string
  occasionsTitle?: string
  seasonsEyebrow?: string
  seasonsTitle?: string
  processEyebrow?: string
  processTitle?: string
  dictionaryEyebrow?: string
  dictionaryTitle?: string
  testimonialsEyebrow?: string
  testimonialsTitle?: string
}

export type StudioPage = {
  eyebrow: string
  title: string
  intro?: string
  imageUrl?: string
  sections?: { heading?: string; body?: string }[]
  timelineEyebrow?: string
  timelineTitle?: string
  timeline?: { year: string; title?: string; body?: string }[]
  valuesEyebrow?: string
  valuesTitle?: string
  galleryEyebrow?: string
  galleryTitle?: string
  gallery?: { caption?: string; imageUrl?: string; tint?: string }[]
  teamEyebrow?: string
  teamTitle?: string
  team?: { name: string; role?: string; note?: string; imageUrl?: string; tint?: string }[]
  visitTitle?: string
  visitIntro?: string
}

export const OCCASION_LABELS: Record<Occasion, string> = {
  'sinh-nhat': 'Sinh nhật',
  'ky-niem': 'Kỷ niệm',
  'cam-on': 'Cảm ơn',
  'tinh-yeu': 'Tình yêu',
  'trang-tri': 'Trang trí nhà',
  'theo-mua': 'Theo mùa',
}

export const SEASON_LABELS: Record<Season, string> = {
  xuan: 'Xuân',
  ha: 'Hạ',
  thu: 'Thu',
  dong: 'Đông',
  'ca-nam': 'Cả năm',
}
