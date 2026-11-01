'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { Heart } from 'lucide-react'
import Magnet from '@/components/Magnet'
import SpotlightCard from '@/components/SpotlightCard'
import { useWishlist } from '@/components/providers/wishlist-provider'
import { formatVnd } from '@/lib/format'
import type { Product } from '@/sanity/lib/types'

export function ProductCard({ product }: { product: Product }) {
  const { has, toggle } = useWishlist()
  const liked = has(product._id)
  const href = `/hoa/${product.slug}`

  return (
    <SpotlightCard
      theme="light"
      spotlightColor="#c45c5c"
      intensity={0.22}
      spotlightSize={280}
      softness={0.85}
      borderGlow={0.45}
      ambient
      className="group !rounded-none !p-0 !shadow-none"
      style={
        {
          '--spotlight-card-surface': 'transparent',
          '--spotlight-card-shadow': 'none',
          '--spotlight-card-border': 'transparent',
        } as CSSProperties
      }
    >
      <article>
        <div
          className="relative aspect-[0.9] overflow-hidden rounded-card"
          style={{ backgroundColor: product.accentColor || '#f6e0d7' }}
        >
          <Link href={href} className="absolute inset-0 block rounded-card">
            <Image
              src={product.imageUrl || '/floral-still-life.png'}
              alt={`Bó hoa ${product.name}`}
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="object-cover opacity-90 mix-blend-multiply transition duration-700 group-hover:scale-105"
            />
          </Link>
          <Magnet padding={28} magnetStrength={2.6} maxOffset={8} exclusive={false} wrapperClassName="absolute right-5 top-4 z-10">
            <button
              type="button"
              onClick={() =>
                toggle({
                  id: product._id,
                  slug: product.slug,
                  name: product.name,
                  price: product.price,
                  imageUrl: product.imageUrl,
                  tagline: product.tagline,
                })
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/80 shadow-[0_2px_12px_rgb(0_0_0/0.10)] backdrop-blur transition hover:border-black/10 hover:bg-white hover:shadow-[0_4px_16px_rgb(0_0_0/0.14)] active:scale-90"
              aria-label={liked ? `Bỏ ${product.name} khỏi danh sách` : `Thêm ${product.name} vào danh sách`}
              aria-pressed={liked}
            >
              <Heart size={16} fill={liked ? 'currentColor' : 'none'} className={liked ? 'text-primary' : ''} />
            </button>
          </Magnet>
          <Link
            href={href}
            className="absolute bottom-4 left-5 right-5 z-10 translate-y-2 rounded-full bg-white/90 py-3 text-center text-[10px] uppercase tracking-[0.18em] opacity-0 backdrop-blur transition group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
          >
            Xem chi tiết
          </Link>
        </div>
        <div className="flex items-start justify-between gap-3 px-5 pt-4">
          <div>
            <Link href={href}>
              <h3 className="font-serif text-2xl tracking-[-0.04em]">{product.name}</h3>
            </Link>
            {product.tagline && <p className="mt-1 text-xs text-muted-foreground">{product.tagline}</p>}
          </div>
          <span className="shrink-0 tabular-nums text-sm">{formatVnd(product.price)}</span>
        </div>
      </article>
    </SpotlightCard>
  )
}
