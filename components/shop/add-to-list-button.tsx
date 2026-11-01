'use client'

import { Heart } from 'lucide-react'
import { useWishlist } from '@/components/providers/wishlist-provider'
import type { Product } from '@/sanity/lib/types'

export function AddToListButton({ product }: { product: Product }) {
  const { has, toggle } = useWishlist()
  const liked = has(product._id)

  return (
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
      className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-background px-6 text-xs uppercase tracking-[0.15em] transition-colors hover:border-foreground/50 hover:bg-secondary/50"
    >
      <Heart size={15} fill={liked ? 'currentColor' : 'none'} className={liked ? 'text-primary' : ''} />
      {liked ? 'Đã trong danh sách' : 'Thêm vào danh sách đặt'}
    </button>
  )
}
