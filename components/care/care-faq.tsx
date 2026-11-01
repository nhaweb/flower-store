import { Plus } from 'lucide-react'
import AnimatedContent from '@/components/AnimatedContent'
import BlurText from '@/components/BlurText'
import type { CareFaq } from '@/sanity/lib/types'

export function CareFaq({
  faqs,
  eyebrow,
  title,
}: {
  faqs?: CareFaq[]
  eyebrow?: string
  title?: string
}) {
  const items = (faqs ?? []).filter((faq) => faq.question && faq.answer)
  if (items.length === 0) return null

  const heading = eyebrow || 'Câu hỏi thường gặp'
  const display = title || 'Trước khi nhắn xưởng.'

  return (
    <section id="faq" className="pb-20 lg:pb-28">
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

      <AnimatedContent distance={48} duration={0.85} blur={6} threshold={0.12} className="border-b border-border">
        {items.map((faq) => (
          <details key={faq.question} className="group border-t border-border">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
              <span className="font-serif text-xl tracking-[-0.03em] sm:text-2xl">{faq.question}</span>
              <Plus
                size={18}
                className="shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-45"
              />
            </summary>
            <p className="max-w-2xl pb-6 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
          </details>
        ))}
      </AnimatedContent>
    </section>
  )
}
