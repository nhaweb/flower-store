import AnimatedContent from '@/components/AnimatedContent'
import BlurText from '@/components/BlurText'
import { flowerCareGuide } from '@/lib/flower-care'

export function FlowerTips({
  eyebrow,
  title,
}: {
  eyebrow?: string
  title?: string
}) {
  const heading = eyebrow || 'Mẹo theo loài'
  const display = title || 'Mỗi loài một tính.'

  return (
    <section id="meo-loai" className="pb-20 lg:pb-28">
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
        stagger={0.08}
        threshold={0.12}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {flowerCareGuide.map((flower) => (
          <div
            key={flower.name}
            className="flex flex-col rounded-card border border-border/80 p-7 transition-colors hover:border-foreground/30"
          >
            <div className="flex items-center gap-2.5">
              <span
                className="size-3 shrink-0 rounded-full"
                style={{ backgroundColor: flower.tint }}
                aria-hidden
              />
              <h3 className="font-serif text-2xl tracking-[-0.03em]">{flower.name}</h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{flower.tip}</p>
          </div>
        ))}
      </AnimatedContent>

      <AnimatedContent distance={48} duration={0.85} blur={6} threshold={0.12} className="mt-16">
        <p className="mb-6 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Bảng tuổi thọ tham khảo
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                <th scope="col" className="py-4 pr-6 font-normal">
                  Loài hoa
                </th>
                <th scope="col" className="py-4 pr-6 font-normal">
                  Sống được
                </th>
                <th scope="col" className="py-4 pr-6 font-normal">
                  Mức chăm
                </th>
                <th scope="col" className="py-4 font-normal">
                  Mùa đẹp
                </th>
              </tr>
            </thead>
            <tbody>
              {flowerCareGuide.map((flower) => (
                <tr key={flower.name} className="border-b border-border/60">
                  <th scope="row" className="py-4 pr-6 font-serif text-lg font-normal tracking-[-0.02em]">
                    {flower.name}
                  </th>
                  <td className="py-4 pr-6 text-sm tabular-nums text-muted-foreground">{flower.lifespan}</td>
                  <td className="py-4 pr-6 text-sm text-muted-foreground">{flower.level}</td>
                  <td className="py-4 text-sm text-muted-foreground">{flower.season}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs leading-6 text-muted-foreground">
          * Tuổi thọ tính khi trưng trong nhà mát và thay nước hai ngày một lần.
        </p>
      </AnimatedContent>
    </section>
  )
}
