import { groq } from 'next-sanity'

export const productsQuery = groq`*[_type == "product" && available != false] | order(featured desc, name asc) {
  _id,
  name,
  "slug": slug.current,
  tagline,
  description,
  price,
  "imageUrl": image.asset->url,
  "galleryUrls": gallery[].asset->url,
  stems,
  occasions,
  season,
  accentColor,
  featured,
  available,
  careTip
}`

export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  tagline,
  description,
  price,
  "imageUrl": image.asset->url,
  "galleryUrls": gallery[].asset->url,
  stems,
  occasions,
  season,
  accentColor,
  featured,
  available,
  careTip
}`

export const featuredProductsQuery = groq`*[_type == "product" && featured == true && available != false] | order(name asc) [0...6] {
  _id,
  name,
  "slug": slug.current,
  tagline,
  description,
  price,
  "imageUrl": image.asset->url,
  stems,
  occasions,
  season,
  accentColor,
  featured,
  available,
  careTip
}`

export const careNotesQuery = groq`*[_type == "careNote"] | order(order asc) {
  _id,
  order,
  title,
  body
}`

export const carePageQuery = groq`*[_type == "carePage"][0] {
  heroEyebrow,
  heroTitle,
  heroIntro,
  guideEyebrow,
  guideTitle,
  flowerEyebrow,
  flowerTitle,
  faqEyebrow,
  faqTitle,
  faqs[]{ question, answer }
}`

export const flowerTypesQuery = groq`*[_type == "flowerType"] | order(name asc) {
  _id,
  name,
  "slug": slug.current,
  "imageUrl": image.asset->url,
  meaning,
  description,
  season,
  careLevel,
  lifespan,
  careTip,
  tint
}`

export const flowerTypeBySlugQuery = groq`*[_type == "flowerType" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  "imageUrl": image.asset->url,
  meaning,
  description,
  season,
  careLevel,
  lifespan,
  careTip,
  tint
}`

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(_createdAt asc) {
  _id,
  quote,
  author,
  context,
  featured
}`

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  brandName,
  tagline,
  phone,
  zalo,
  email,
  address,
  instagram,
  facebook,
  hours,
  deliveryNote
}`

export const homePageQuery = groq`*[_type == "homePage"][0] {
  heroLine1,
  heroAccent,
  heroLine2,
  heroSupport,
  "heroImageUrl": heroImage.asset->url,
  shopEyebrow,
  shopTitle,
  storyEyebrow,
  storyTitle,
  storyBody,
  careEyebrow,
  careTitle,
  occasionsEyebrow,
  occasionsTitle,
  seasonsEyebrow,
  seasonsTitle,
  processEyebrow,
  processTitle,
  dictionaryEyebrow,
  dictionaryTitle,
  testimonialsEyebrow,
  testimonialsTitle
}`

export const studioPageQuery = groq`*[_type == "studioPage"][0] {
  eyebrow,
  title,
  intro,
  "imageUrl": image.asset->url,
  sections[]{ heading, body },
  timelineEyebrow,
  timelineTitle,
  timeline[]{ year, title, body },
  valuesEyebrow,
  valuesTitle,
  galleryEyebrow,
  galleryTitle,
  gallery[]{ caption, "imageUrl": image.asset->url },
  teamEyebrow,
  teamTitle,
  team[]{ name, role, note, "imageUrl": image.asset->url },
  visitTitle,
  visitIntro
}`
