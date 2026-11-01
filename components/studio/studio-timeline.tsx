import AnimatedContent from '@/components/AnimatedContent'
import BlurText from '@/components/BlurText'
import type { StudioPage } from '@/sanity/lib/types'

export function StudioTimeline({
  timeline,
  eyebrow,
  title,
}: {
  timeline?: StudioPage['timeline']
  eyebrow?: string
  title?: string
}) {
  const items = (timeline ?? []).filter((item) => item.year)
  if (items.length === 0) return null

  const heading = eyebrow || 'Hành trình'
  const display = title || 'Từ một bàn nhỏ.'

  return (
    <section id="hanh-trinh" className="pb-20 lg:pb-28">
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

      <AnimatedContent
        distance={56}
        duration={0.85}
        blur={6}
        stagger={0.1}
        threshold={0.12}
        className="border-b border-border"
      >
        {items.map((item) => (
          <div
            key={`${item.year}-${item.title ?? ''}`}
            className="grid gap-x-8 gap-y-2 border-t border-border py-8 sm:grid-cols-[100px_220px_1fr]"
          >
            <span className="font-serif text-3xl leading-none text-primary">{item.year}</span>
            <h3 className="font-serif text-xl tracking-[-0.03em] sm:text-2xl">{item.title}</h3>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:self-center">{item.body}</p>
          </div>
        ))}
      </AnimatedContent>
    </section>
  )
}
