import Image from 'next/image'
import AnimatedContent from '@/components/AnimatedContent'
import BlurText from '@/components/BlurText'
import type { StudioPage } from '@/sanity/lib/types'

export function StudioGallery({
  gallery,
  eyebrow,
  title,
}: {
  gallery?: StudioPage['gallery']
  eyebrow?: string
  title?: string
}) {
  const items = gallery ?? []
  if (items.length === 0) return null

  const heading = eyebrow || 'Thư viện xưởng'
  const display = title || 'Một ngày ở xưởng.'

  return (
    <section id="thu-vien" className="pb-20 lg:pb-28">
      <AnimatedContent distance={40} duration={0.8} blur={5} threshold={0.2} className="mb-10">
        <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{heading}</p>
        <BlurText
          text={display}
          animateBy="words"
          effect="blur"
          delay={70}
          stepDuration={0.32}
          className="font-serif text-4xl tracking-[-0.05em] sm:text-5xl"
        />
      </AnimatedContent>

      <AnimatedContent distance={56} duration={0.9} blur={6} threshold={0.1} className="columns-2 gap-4 sm:columns-3">
        {items.map((item, index) =>
          item.imageUrl ? (
            <figure key={`${item.caption ?? index}`} className="mb-4 break-inside-avoid">
              <div className="relative aspect-[3/4] overflow-hidden rounded-card bg-muted">
                <Image
                  src={item.imageUrl}
                  alt={item.caption || 'Không gian xưởng hoa'}
                  fill
                  sizes="(max-width:640px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              {item.caption && (
                <figcaption className="mt-2 text-xs text-muted-foreground">{item.caption}</figcaption>
              )}
            </figure>
          ) : (
            <div
              key={`${item.caption ?? index}`}
              className="mb-4 flex aspect-[4/5] break-inside-avoid items-center justify-center rounded-card p-6 text-center"
              style={{ backgroundColor: item.tint || '#f3d6dd' }}
            >
              <p className="font-serif text-xl leading-snug tracking-[-0.03em] text-foreground/70">
                {item.caption}
              </p>
            </div>
          ),
        )}
      </AnimatedContent>
    </section>
  )
}
