import AnimatedContent from '@/components/AnimatedContent'
import BlurText from '@/components/BlurText'
import type { Testimonial } from '@/sanity/lib/types'

const TINTS = ['#f6d6dd', '#e7eee4', '#f3ead6', '#d8cfe8', '#eef2f0', '#f6e0d7']

export function TestimonialMarquee({
  testimonials,
  eyebrow,
  title,
}: {
  testimonials: Testimonial[]
  eyebrow?: string
  title?: string
}) {
  const items = testimonials.slice(0, 8)
  if (items.length === 0) return null

  const heading = eyebrow || 'Khách kể lại'
  const display = title || 'Người nhận hoa kể lại.'

  const renderSet = (hidden?: boolean) => (
    <div className="flex shrink-0 gap-4 pr-4" aria-hidden={hidden || undefined}>
      {items.map((testimonial, index) => (
        <figure
          key={testimonial._id}
          className="flex w-[300px] shrink-0 flex-col rounded-card border border-border/80 p-6 sm:w-[380px]"
        >
          <blockquote className="flex-1 font-serif text-lg leading-8 tracking-[-0.02em]">
            “{testimonial.quote}”
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-2.5">
            <span
              className="size-3 shrink-0 rounded-full"
              style={{ backgroundColor: TINTS[index % TINTS.length] }}
              aria-hidden
            />
            <span className="text-sm">{testimonial.author}</span>
            {testimonial.context && (
              <span className="text-xs text-muted-foreground">· {testimonial.context}</span>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  )

  return (
    <section id="cam-nhan" className="pb-24 lg:pb-32">
      <AnimatedContent distance={48} duration={0.9} blur={6} threshold={0.15} className="mb-10">
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

      <div className="marquee">
        <div className="marquee-track py-1">
          {renderSet()}
          {renderSet(true)}
        </div>
      </div>
    </section>
  )
}
