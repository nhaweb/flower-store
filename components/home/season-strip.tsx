import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import AnimatedContent from '@/components/AnimatedContent'
import BlurText from '@/components/BlurText'
import { SEASON_LABELS, type Product, type Season } from '@/sanity/lib/types'

const SEASONS: { key: Exclude<Season, 'ca-nam'>; note: string; tint: string }[] = [
  {
    key: 'xuan',
    note: 'Màu non tơ, pastel. Mùa của tulip, mao lương và đậu ngọt.',
    tint: '#c9dbbd',
  },
  {
    key: 'ha',
    note: 'Rực nắng, phóng khoáng. Mùa của hướng dương, cúc vũ nữ và cosmos.',
    tint: '#e8c98f',
  },
  {
    key: 'thu',
    note: 'Sắc đất trầm ấm. Mùa của thược dược và những bông hồng đậm.',
    tint: '#d3a6b4',
  },
  {
    key: 'dong',
    note: 'Trắng bạc, thanh lịch. Mùa của cẩm tú cầu, lisianthus và baby breath.',
    tint: '#aebfb9',
  },
]

export function SeasonStrip({
  products,
  eyebrow,
  title,
}: {
  products: Product[]
  eyebrow?: string
  title?: string
}) {
  const heading = eyebrow || 'Theo mùa'
  const display = title || 'Mùa nào hoa nấy.'

  return (
    <section id="mua" className="pb-20 lg:pb-28">
      <AnimatedContent distance={40} duration={0.8} blur={5} threshold={0.2} className="mb-10">
        <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{heading}</p>
        <BlurText
          text={display}
          animateBy="words"
          effect="blur"
          delay={70}
          stepDuration={0.32}
          className="font-serif text-5xl tracking-[-0.06em] sm:text-6xl"
        />
      </AnimatedContent>

      <AnimatedContent
        distance={56}
        duration={0.85}
        blur={6}
        stagger={0.1}
        threshold={0.12}
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {SEASONS.map(({ key, note, tint }) => {
          const picks = products.filter((product) => product.season === key).slice(0, 3)
          return (
            <div
              key={key}
              className="flex flex-col rounded-card border border-border/80 p-7 transition-colors hover:border-foreground/30"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="size-3 shrink-0 rounded-full"
                  style={{ backgroundColor: tint }}
                  aria-hidden
                />
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {SEASON_LABELS[key]}
                </span>
              </div>
              <Link
                href={`/cua-hang?mua=${key}`}
                className="group mt-4 flex items-center gap-1.5 font-serif text-2xl tracking-[-0.03em]"
              >
                Hoa mùa {SEASON_LABELS[key].toLowerCase()}
                <ArrowUpRight size={15} className="text-muted-foreground" />
              </Link>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{note}</p>
              {picks.length > 0 && (
                <ul className="mt-auto grid gap-1.5 pt-6">
                  {picks.map((product) => (
                    <li key={product._id}>
                      <Link
                        href={`/hoa/${product.slug}`}
                        className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </AnimatedContent>
    </section>
  )
}
