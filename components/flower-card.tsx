import Image from 'next/image'
import Link from 'next/link'
import { SEASON_LABELS, type FlowerType } from '@/sanity/lib/types'

export function FlowerCard({ flower }: { flower: FlowerType }) {
  return (
    <Link
      href={`/tu-dien-hoa/${flower.slug}`}
      className="group flex flex-col overflow-hidden border border-border/80 transition-colors hover:border-foreground/30"
    >
      <div
        className="relative aspect-[4/5] overflow-hidden"
        style={{ backgroundColor: flower.tint || '#f3d6dd' }}
      >
        {flower.imageUrl ? (
          <Image
            src={flower.imageUrl}
            alt={`Loài hoa ${flower.name}`}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center p-6 text-center font-serif text-3xl tracking-[-0.03em] text-foreground/70">
            {flower.name}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-serif text-2xl tracking-[-0.03em]">{flower.name}</h3>
          <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            {SEASON_LABELS[flower.season]}
          </span>
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">{flower.meaning}</p>
      </div>
    </Link>
  )
}
