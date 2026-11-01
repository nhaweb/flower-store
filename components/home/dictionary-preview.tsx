import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import AnimatedContent from '@/components/AnimatedContent'
import BlurText from '@/components/BlurText'
import { FlowerCard } from '@/components/flower-card'
import type { FlowerType } from '@/sanity/lib/types'

export function DictionaryPreview({
  flowers,
  eyebrow,
  title,
}: {
  flowers: FlowerType[]
  eyebrow?: string
  title?: string
}) {
  const items = flowers.slice(0, 6)
  if (items.length === 0) return null

  const heading = eyebrow || 'Từ điển hoa'
  const display = title || 'Vài loài xưởng thương nhất.'

  return (
    <section id="tu-dien" className="py-20 lg:py-28">
      <AnimatedContent distance={48} duration={0.9} blur={6} threshold={0.15} className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{heading}</p>
          <BlurText
            text={display}
            animateBy="words"
            effect="blur"
            delay={70}
            stepDuration={0.32}
            className="font-serif text-5xl tracking-[-0.06em] sm:text-6xl"
          />
        </div>
        <Link
          href="/tu-dien-hoa"
          className="hidden items-center gap-2 text-xs uppercase tracking-[0.15em] underline underline-offset-8 sm:flex"
        >
          Xem tất cả loài hoa <ArrowUpRight size={14} />
        </Link>
      </AnimatedContent>

      <AnimatedContent
        distance={64}
        duration={0.85}
        blur={8}
        stagger={0.1}
        threshold={0.12}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((flower) => (
          <FlowerCard key={flower._id} flower={flower} />
        ))}
      </AnimatedContent>
    </section>
  )
}
