import AnimatedContent from '@/components/AnimatedContent'
import BlurText from '@/components/BlurText'
import { padStep } from '@/lib/format'
import type { CareNote } from '@/sanity/lib/types'

export function CareGuide({
  notes,
  eyebrow,
  title,
}: {
  notes: CareNote[]
  eyebrow?: string
  title?: string
}) {
  const heading = eyebrow || 'Hướng dẫn từng bước'
  const display = title || 'Năm bước giữ hoa tươi.'

  return (
    <section id="huong-dan" className="grid items-start gap-10 pb-20 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16 lg:pb-28">
      <AnimatedContent distance={40} duration={0.8} blur={5} threshold={0.2}>
        <div className="lg:sticky lg:top-28">
          <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{heading}</p>
          <BlurText
            text={display}
            animateBy="words"
            effect="blur"
            delay={70}
            stepDuration={0.32}
            className="font-serif text-4xl tracking-[-0.05em] sm:text-5xl"
          />
          <p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">
            Mỗi bó rời xưởng đều được cắt tươi ngay sáng hôm đó. Bạn chỉ cần thay nước đều và để chỗ mát.
          </p>
        </div>
      </AnimatedContent>

      <AnimatedContent
        distance={56}
        duration={0.85}
        blur={6}
        stagger={0.1}
        threshold={0.12}
        className="border-b border-border"
      >
        {notes.map((note) => (
          <div
            key={note._id}
            className="grid gap-x-8 gap-y-3 border-t border-border py-8 sm:grid-cols-[64px_200px_1fr] lg:grid-cols-[96px_240px_1fr]"
          >
            <span className="font-serif text-4xl leading-none text-primary">{padStep(note.order)}</span>
            <h3 className="font-serif text-2xl leading-snug tracking-[-0.03em]">{note.title}</h3>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:self-center">{note.body}</p>
          </div>
        ))}
      </AnimatedContent>
    </section>
  )
}
