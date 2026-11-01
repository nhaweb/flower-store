import AnimatedContent from '@/components/AnimatedContent'
import BlurText from '@/components/BlurText'
import { padStep } from '@/lib/format'
import type { StudioPage } from '@/sanity/lib/types'

export function StudioValues({
  sections,
  eyebrow,
  title,
}: {
  sections?: StudioPage['sections']
  eyebrow?: string
  title?: string
}) {
  const items = (sections ?? []).filter((section) => section.heading)
  if (items.length === 0) return null

  const heading = eyebrow || 'Nguyên tắc'
  const display = title || 'Bốn điều xưởng luôn giữ.'

  return (
    <section id="nguyen-tac" className="pb-20 lg:pb-28">
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
        stagger={0.12}
        threshold={0.15}
        className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {items.map((section, index) => (
          <div key={section.heading} className="border-t border-border pt-5">
            <span className="font-serif text-3xl text-primary">{padStep(index + 1)}</span>
            <h3 className="mt-4 font-serif text-xl tracking-[-0.03em]">{section.heading}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{section.body}</p>
          </div>
        ))}
      </AnimatedContent>
    </section>
  )
}
