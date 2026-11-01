import AnimatedContent from '@/components/AnimatedContent'
import BlurText from '@/components/BlurText'
import { padStep } from '@/lib/format'

const STEPS = [
  {
    title: 'Chọn bó yêu thích',
    body: 'Lướt hết bộ sưu tập, bó nào vừa mắt thì thêm vào danh sách.',
  },
  {
    title: 'Gửi danh sách',
    body: 'Gửi qua website hoặc nhắn Zalo, kèm ngày muốn nhận hoa.',
  },
  {
    title: 'Xưởng xác nhận',
    body: 'Trong ngày, xưởng nhắn lại chốt còn hoa, giá và cách trả tiền.',
  },
  {
    title: 'Buộc tay và giao',
    body: 'Buộc ngay sáng sớm bằng hoa mua trong ngày, giao khu vực nội thành TP.HCM.',
  },
]

export function ProcessSteps({
  eyebrow,
  title,
}: {
  eyebrow?: string
  title?: string
}) {
  const heading = eyebrow || 'Cách đặt hoa'
  const display = title || 'Chọn xong, phần còn lại xưởng lo.'

  return (
    <section id="quy-trinh" className="pb-24 lg:pb-32">
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
        stagger={0.12}
        threshold={0.15}
        className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {STEPS.map((step, index) => (
          <div key={step.title} className="border-t border-border pt-5">
            <span className="font-serif text-3xl text-primary">{padStep(index + 1)}</span>
            <p className="mt-4 font-serif text-xl tracking-[-0.03em]">{step.title}</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.body}</p>
          </div>
        ))}
      </AnimatedContent>
    </section>
  )
}
