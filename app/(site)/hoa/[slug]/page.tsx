import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { AddToListButton } from '@/components/shop/add-to-list-button'
import { ProductCard } from '@/components/shop/product-card'
import FadeContent from '@/components/FadeContent'
import { getProductBySlug, getProducts, getRelatedProducts } from '@/lib/content'
import { formatVnd } from '@/lib/format'
import { OCCASION_LABELS, SEASON_LABELS } from '@/sanity/lib/types'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) return { title: 'Không tìm thấy' }
  return {
    title: product.name,
    description: product.description || product.tagline,
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) notFound()
  const related = await getRelatedProducts(product)

  return (
    <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-28 sm:px-8 lg:px-12">
      <Link
        href="/cua-hang"
        className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={14} /> Quay lại cửa hàng
      </Link>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div
          className="relative aspect-[0.9] overflow-hidden rounded-card"
          style={{ backgroundColor: product.accentColor || '#f6e0d7' }}
        >
          <Image
            src={product.imageUrl || '/floral-still-life.png'}
            alt={`Bó hoa ${product.name}`}
            fill
            priority
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover opacity-90 mix-blend-multiply"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {product.season ? SEASON_LABELS[product.season] : 'Theo mùa'}
          </p>
          <h1 className="font-serif text-5xl tracking-[-0.06em] sm:text-6xl">{product.name}</h1>
          {product.tagline && <p className="mt-4 text-sm text-muted-foreground">{product.tagline}</p>}
          <p className="mt-6 font-serif text-3xl tabular-nums tracking-[-0.04em]">{formatVnd(product.price)}</p>
          {product.description && (
            <p className="mt-6 max-w-lg text-base leading-7 text-foreground/80">{product.description}</p>
          )}

          {product.stems && product.stems.length > 0 && (
            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Thành phần</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {product.stems.map((stem) => (
                  <li key={stem} className="rounded-full border border-border px-3 py-1.5 text-xs">
                    {stem}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.occasions && product.occasions.length > 0 && (
            <div className="mt-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Phù hợp</p>
              <p className="mt-2 text-sm">
                {product.occasions.map((o) => OCCASION_LABELS[o]).join(' · ')}
              </p>
            </div>
          )}

          {product.careTip && (
            <p className="mt-6 border-t border-border pt-6 text-sm leading-6 text-muted-foreground">
              {product.careTip}
            </p>
          )}

          <div className="mt-10 flex flex-wrap gap-3">
            <AddToListButton product={product} />
            <Link
              href="/danh-sach"
              className="inline-flex h-12 items-center rounded-full bg-primary px-6 text-xs uppercase tracking-[0.15em] text-primary-foreground transition hover:bg-primary/90"
            >
              Xem danh sách đặt
            </Link>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <FadeContent duration={0.8} threshold={0.2}>
          <section className="mt-24 border-t border-border pt-16 lg:mt-32">
            <div className="mb-10">
              <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Gợi ý từ xưởng</p>
              <h2 className="font-serif text-4xl tracking-[-0.05em] sm:text-5xl">Có thể bạn cũng thích.</h2>
              {product.stems && product.stems.length > 0 && (
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Những bó khác của xưởng cùng chất liệu —{' '}
                  {product.stems.slice(0, 3).join(', ').toLowerCase()} — hoặc cùng mùa hoa.
                </p>
              )}
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item._id} product={item} />
              ))}
            </div>
          </section>
        </FadeContent>
      )}
    </main>
  )
}
