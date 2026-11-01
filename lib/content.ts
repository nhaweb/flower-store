import { sanityClient, hasSanityConfig } from '@/sanity/lib/client'
import {
  fallbackCare,
  fallbackCarePage,
  fallbackFlowers,
  fallbackHome,
  fallbackProducts,
  fallbackSettings,
  fallbackStudio,
  fallbackTestimonials,
} from '@/sanity/lib/fallback'
import {
  careNotesQuery,
  carePageQuery,
  featuredProductsQuery,
  flowerTypeBySlugQuery,
  flowerTypesQuery,
  homePageQuery,
  productBySlugQuery,
  productsQuery,
  siteSettingsQuery,
  studioPageQuery,
  testimonialsQuery,
} from '@/sanity/lib/queries'
import type {
  CareNote,
  CarePage,
  FlowerType,
  HomePage,
  Product,
  SiteSettings,
  StudioPage,
  Testimonial,
} from '@/sanity/lib/types'

async function fetchOrFallback<T>(query: string, params: Record<string, unknown>, fallback: T): Promise<T> {
  if (!hasSanityConfig || !sanityClient) return fallback
  try {
    const data = await sanityClient.fetch<T | null>(query, params)
    if (data == null) return fallback
    if (Array.isArray(data) && data.length === 0) return fallback
    return data
  } catch {
    return fallback
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await fetchOrFallback(siteSettingsQuery, {}, fallbackSettings)
  return { ...fallbackSettings, ...data }
}

export async function getHomePage(): Promise<HomePage> {
  const data = await fetchOrFallback(homePageQuery, {}, fallbackHome)
  return { ...fallbackHome, ...data }
}

export async function getProducts(): Promise<Product[]> {
  return fetchOrFallback(productsQuery, {}, fallbackProducts)
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const featured = fallbackProducts.filter((p) => p.featured)
  return fetchOrFallback(featuredProductsQuery, {}, featured)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!hasSanityConfig || !sanityClient) {
    return fallbackProducts.find((p) => p.slug === slug) ?? null
  }
  try {
    const data = await sanityClient.fetch<Product | null>(productBySlugQuery, { slug })
    if (data) return data
    return fallbackProducts.find((p) => p.slug === slug) ?? null
  } catch {
    return fallbackProducts.find((p) => p.slug === slug) ?? null
  }
}

/**
 * Gợi ý bó hoa "cùng loại" với bó đang xem:
 * ưu tiên bó có chung thành phần hoa (stems), sau đó cùng mùa.
 */
export async function getRelatedProducts(current: Product, limit = 3): Promise<Product[]> {
  const products = await getProducts()
  const others = products.filter((p) => p.slug !== current.slug && p.available !== false)
  const stems = new Set((current.stems ?? []).map((s) => s.toLowerCase()))
  const season = current.season
  const score = (p: Product) => {
    let points = 0
    for (const stem of p.stems ?? []) {
      if (stems.has(stem.toLowerCase())) points += 2
    }
    if (season && p.season === season) points += 1
    return points
  }
  return others.sort((a, b) => score(b) - score(a)).slice(0, limit)
}

export async function getCareNotes(): Promise<CareNote[]> {
  return fetchOrFallback(careNotesQuery, {}, fallbackCare)
}

export async function getCarePage(): Promise<CarePage> {
  const data = await fetchOrFallback<Partial<CarePage> | null>(carePageQuery, {}, null)
  const merged: CarePage = { ...fallbackCarePage, ...data }
  return {
    ...merged,
    // Nếu CMS chưa có FAQ (hoặc đang rỗng) thì dùng bộ fallback
    faqs: merged.faqs && merged.faqs.length > 0 ? merged.faqs : fallbackCarePage.faqs,
  }
}

export async function getStudioPage(): Promise<StudioPage> {
  const data = await fetchOrFallback<Partial<StudioPage> | null>(studioPageQuery, {}, null)
  const merged: StudioPage = { ...fallbackStudio, ...data }
  return {
    ...merged,
    // Nếu CMS chưa có dữ liệu cho section mới (hoặc đang rỗng) thì dùng bộ fallback
    sections: merged.sections?.length ? merged.sections : fallbackStudio.sections,
    timeline: merged.timeline?.length ? merged.timeline : fallbackStudio.timeline,
    gallery: merged.gallery?.length ? merged.gallery : fallbackStudio.gallery,
    team: merged.team?.length ? merged.team : fallbackStudio.team,
  }
}

export async function getFlowerTypes(): Promise<FlowerType[]> {
  return fetchOrFallback(flowerTypesQuery, {}, fallbackFlowers)
}

export async function getFlowerTypeBySlug(slug: string): Promise<FlowerType | null> {
  if (!hasSanityConfig || !sanityClient) {
    return fallbackFlowers.find((f) => f.slug === slug) ?? null
  }
  try {
    const data = await sanityClient.fetch<FlowerType | null>(flowerTypeBySlugQuery, { slug })
    if (data) return data
    return fallbackFlowers.find((f) => f.slug === slug) ?? null
  } catch {
    return fallbackFlowers.find((f) => f.slug === slug) ?? null
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return fetchOrFallback(testimonialsQuery, {}, fallbackTestimonials)
}
