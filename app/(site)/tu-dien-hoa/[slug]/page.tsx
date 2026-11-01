import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import AnimatedContent from '@/components/AnimatedContent'
import { ProductCard } from '@/components/shop/product-card'
import { getFlowerTypeBySlug, getFlowerTypes, getProducts } from '@/lib/content'
import { SEASON_LABELS } from '@/sanity/lib/types'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const flowers = await getFlowerTypes()
  return flowers.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const flower = await getFlowerTypeBySlug(slug)
  if (!flower) return { title: 'Không tìm thấy loài hoa' }
  return { title: `${flower.name} — Từ điển hoa`, description: flower.meaning }
}

export default async function FlowerTypePage({ params }: Props) {
  const { slug } = await params
  const [flower, products] = await Promise.all([getFlowerTypeBySlug(slug), getProducts()])
  if (!flower) notFound()

  // Bó chứa loài này: khớp tên loài trong danh sách thành phần của từng bó
  const related = products
    .filter((product) => product.stems?.some((stem) => stem.includes(flower.name)))
    .slice(0, 3)

  const infoRows = [
    { label: 'Sống được', value: flower.lifespan },
    { label: 'Mức chăm', value: flower.careLevel },
    { label: 'Mùa đẹp', value: SEASON_LABELS[flower.season] },
  ]

  return (
    <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-28 sm:px-8 lg:px-12">
      <Link
        href="/tu-dien-hoa"
        className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={14} /> Tất cả loài hoa
      </Link>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div
          className="relative aspect-[4/5] overflow-hidden"
          style={{ backgroundColor: flower.tint || '#f3d6dd' }}
        >
          {flower.imageUrl ? (
            <Image
              src={flower.imageUrl}
              alt={`Loài hoa ${flower.name}`}
              fill
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center p-8 text-center font-serif text-5xl tracking-[-0.04em] text-foreground/70">
              {flower.name}
            </span>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Từ điển hoa · {SEASON_LABELS[flower.season]}
          </p>
          <h1 className="font-serif text-5xl tracking-[-0.06em] sm:text-6xl">{flower.name}</h1>
          <p className="mt-6 font-serif text-2xl leading-snug tracking-[-0.03em]">{flower.meaning}</p>
          {flower.description && (
            <p className="mt-4 max-w-lg text-base leading-7 text-foreground/80">{flower.description}</p>
          )}

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {infoRows.map((row) => (
              <div key={row.label}>
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{row.label}</p>
                <p className="mt-2 font-serif text-xl tracking-[-0.02em] tabular-nums">{row.value}</p>
              </div>
            ))}
          </div>

          {flower.careTip && (
            <div className="mt-8 rounded-card bg-secondary p-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Cách chăm</p>
              <p className="mt-3 text-sm leading-7">{flower.careTip}</p>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/cua-hang"
              className="inline-flex h-12 items-center rounded-full bg-primary px-6 text-xs uppercase tracking-[0.15em] text-primary-foreground transition hover:bg-primary/90"
            >
              Xem bó đang có
            </Link>
            <Link
              href="/cham-soc"
              className="inline-flex h-12 items-center rounded-full border border-border bg-background/60 px-6 text-xs uppercase tracking-[0.15em] transition-colors hover:border-foreground/50 hover:bg-background"
            >
              Hướng dẫn chăm hoa
            </Link>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20 lg:mt-28">
          <AnimatedContent distance={40} duration={0.8} blur={5} threshold={0.2} className="mb-10">
            <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Có trong các bó
            </p>
            <h2 className="font-serif text-4xl tracking-[-0.05em]">
              Bó nào có {flower.name.toLowerCase()}?
            </h2>
          </AnimatedContent>
          <AnimatedContent
            distance={64}
            duration={0.85}
            blur={8}
            stagger={0.12}
            threshold={0.12}
            className="grid gap-5 md:grid-cols-3"
          >
            {related.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </AnimatedContent>
        </section>
      )}
    </main>
  )
}
