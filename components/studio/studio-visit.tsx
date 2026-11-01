import AnimatedContent from '@/components/AnimatedContent'
import BlurText from '@/components/BlurText'
import type { SiteSettings, StudioPage } from '@/sanity/lib/types'

export function StudioVisit({
  settings,
  title,
  intro,
}: {
  settings: SiteSettings
  title?: StudioPage['visitTitle']
  intro?: StudioPage['visitIntro']
}) {
  const display = title || 'Ghé xưởng uống một ly trà.'
  const mapQuery = encodeURIComponent(settings.address || 'Quận 1, Hồ Chí Minh')
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`

  const infoRows = [
    { label: 'Địa chỉ', value: settings.address },
    { label: 'Giờ mở cửa', value: settings.hours },
    { label: 'Điện thoại', value: settings.phone },
    { label: 'Giao hàng', value: settings.deliveryNote },
  ].filter((row) => row.value)

  return (
    <section id="ghe-tham" className="pb-20 lg:pb-28">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <AnimatedContent distance={40} duration={0.8} blur={5} threshold={0.2}>
          <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Ghé thăm xưởng</p>
          <BlurText
            text={display}
            animateBy="words"
            effect="blur"
            delay={70}
            stepDuration={0.32}
            className="font-serif text-4xl tracking-[-0.05em] sm:text-5xl"
          />
          {intro && <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">{intro}</p>}

          <div className="mt-8 border-b border-border">
            {infoRows.map((row) => (
              <div
                key={row.label}
                className="grid gap-x-6 gap-y-1 border-t border-border py-4 sm:grid-cols-[130px_1fr]"
              >
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:pt-0.5">
                  {row.label}
                </span>
                <span className="text-sm leading-7">{row.value}</span>
              </div>
            ))}
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex border-b border-foreground pb-2 text-xs uppercase tracking-[0.16em]"
          >
            Mở chỉ đường
          </a>
        </AnimatedContent>

        <AnimatedContent distance={56} duration={0.9} blur={6} threshold={0.12}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-border bg-muted">
            <iframe
              src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
              title="Bản đồ tới xưởng hoa"
              loading="lazy"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </AnimatedContent>
      </div>
    </section>
  )
}
