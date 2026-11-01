import Image from 'next/image'
import AnimatedContent from '@/components/AnimatedContent'
import BlurText from '@/components/BlurText'
import type { StudioPage } from '@/sanity/lib/types'

export function StudioTeam({
  team,
  eyebrow,
  title,
}: {
  team?: StudioPage['team']
  eyebrow?: string
  title?: string
}) {
  const members = (team ?? []).filter((member) => member.name)
  if (members.length === 0) return null

  const heading = eyebrow || 'Người làm hoa'
  const display = title || 'Những người cầm kéo.'

  return (
    <section id="doi-ngu" className="pb-20 lg:pb-28">
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
        className="grid gap-4 sm:grid-cols-3"
      >
        {members.map((member) => (
          <div key={member.name} className="flex flex-col rounded-card border border-border/80 p-7">
            <div
              className="relative size-16 overflow-hidden rounded-full"
              style={{ backgroundColor: member.tint || '#f3d6dd' }}
              aria-hidden
            >
              {member.imageUrl ? (
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center font-serif text-2xl text-foreground/70">
                  {member.name.charAt(0)}
                </span>
              )}
            </div>
            <h3 className="mt-5 font-serif text-2xl tracking-[-0.03em]">{member.name}</h3>
            {member.role && (
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {member.role}
              </p>
            )}
            {member.note && (
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{member.note}</p>
            )}
          </div>
        ))}
      </AnimatedContent>
    </section>
  )
}
