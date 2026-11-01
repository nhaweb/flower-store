import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import AnimatedContent from '@/components/AnimatedContent'
import BlurText from '@/components/BlurText'
import { OCCASION_LABELS, type Occasion } from '@/sanity/lib/types'

const OCCASION_NOTES: Record<Occasion, string> = {
  'sinh-nhat': 'Sắc tươi, ngọt nhẹ. Mừng thêm một tuổi mới thật rực rỡ.',
  'tinh-yeu': 'Đậm, rõ ràng. Dành cho những lời yêu nói ra luôn.',
  'ky-niem': 'Trầm ấm, sâu lắng. Cho những ngày muốn nhớ mãi.',
  'cam-on': 'Nhẹ nhàng thay lời cảm ơn chưa nói ra.',
  'trang-tri': 'Chọn theo góc nhà, trưng được nhiều ngày.',
  'theo-mua': 'Hoa đang mùa là thứ đẹp nhất chợ tuần này.',
}

const OCCASION_ORDER: Occasion[] = [
  'sinh-nhat',
  'tinh-yeu',
  'ky-niem',
  'cam-on',
  'trang-tri',
  'theo-mua',
]

export function OccasionGrid({
  eyebrow,
  title,
}: {
  eyebrow?: string
  title?: string
}) {
  const heading = eyebrow || 'Chọn theo dịp'
  const display = title || 'Hoa nói thay bạn.'

  return (
    <section id="dip" className="py-20 lg:py-28">
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
        stagger={0.08}
        threshold={0.12}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {OCCASION_ORDER.map((occasion) => (
          <Link
            key={occasion}
            href={`/cua-hang?dip=${occasion}`}
            className="group flex flex-col rounded-card border border-border/80 p-7 transition-colors hover:border-foreground/30 hover:bg-muted/40"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-2xl tracking-[-0.03em]">{OCCASION_LABELS[occasion]}</h3>
              <ArrowUpRight size={16} className="mt-1.5 shrink-0 text-muted-foreground" />
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{OCCASION_NOTES[occasion]}</p>
          </Link>
        ))}
      </AnimatedContent>
    </section>
  )
}
