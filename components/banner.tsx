'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import BlurText from '@/components/BlurText'
import FadeContent from '@/components/FadeContent'
import Magnet from '@/components/Magnet'
import type { HomePage } from '@/sanity/lib/types'

export function Banner({ home }: { home: HomePage }) {
  return (
    <section
      id="top"
      aria-label="Hero hoa theo mùa"
      className="relative isolate h-svh overflow-hidden bg-[#f3d6dd]"
    >
      <Image
        src={home.heroImageUrl || '/banner/banner.jpg'}
        alt="Bó hoa buộc tay với hoa hồng kem, lisianthus và bạch đàn"
        fill
        priority
        sizes="100vw"
        className="banner-zoom object-cover object-bottom"
      />

      <div aria-hidden className="banner-veil absolute inset-0 z-[1]" />

      <div className="banner-legible absolute inset-0 z-10 flex flex-col items-center justify-center px-6 pb-16 text-center sm:px-10 sm:pb-20 lg:px-14">
        <h1 className="sr-only">
          {home.heroLine1} {home.heroAccent} {home.heroLine2}
        </h1>
        <div className="mt-5 sm:mt-6" aria-hidden="true">
          <div className="flex flex-wrap items-baseline justify-center gap-x-[0.28em] font-serif text-[clamp(2.75rem,7vw,5rem)] leading-[0.95] tracking-[-0.05em]">
            <BlurText
              text={home.heroLine1}
              trigger="load"
              effect="focus"
              animateBy="words"
              delay={80}
              stepDuration={0.38}
              blur={12}
              className="justify-center"
            />
            <BlurText
              text={home.heroAccent}
              trigger="load"
              effect="focus"
              animateBy="letters"
              delay={55}
              stepDuration={0.32}
              blur={14}
              color="var(--primary)"
              className="justify-center italic"
            />
          </div>
          <BlurText
            text={home.heroLine2}
            trigger="load"
            effect="focus"
            animateBy="words"
            delay={100}
            stepDuration={0.38}
            blur={12}
            className="justify-center font-serif text-[clamp(2.75rem,7vw,5rem)] leading-[0.95] tracking-[-0.05em]"
          />
        </div>

        <FadeContent
          trigger="mount"
          effect="fade"
          blur={6}
          duration={0.7}
          delay={0.35}
          className="mx-auto mt-4 hidden max-w-[420px] sm:mt-5 sm:block"
        >
          <p className="text-sm leading-6 text-foreground/70">{home.heroSupport}</p>
        </FadeContent>

        <FadeContent trigger="mount" effect="fade" duration={0.65} delay={0.48} className="mt-6 [text-shadow:none]">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Magnet padding={48} magnetStrength={3.2} maxOffset={14} scale={1.03}>
              <Link
                href="/cua-hang"
                className="flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-xs uppercase tracking-[0.15em] text-primary-foreground transition hover:bg-primary/90 sm:h-12"
              >
                Xem bộ sưu tập <ArrowUpRight size={15} />
              </Link>
            </Magnet>
            <Magnet padding={48} magnetStrength={3.2} maxOffset={14} scale={1.03}>
              <Link
                href="/xuong-hoa"
                className="flex h-11 items-center rounded-full border border-foreground/15 bg-white/45 px-6 text-xs uppercase tracking-[0.15em] text-foreground backdrop-blur-sm transition hover:bg-white/70 sm:h-12"
              >
                Ghé xưởng hoa
              </Link>
            </Magnet>
          </div>
        </FadeContent>
      </div>

      <Magnet padding={40} magnetStrength={2.8} maxOffset={10} wrapperClassName="absolute bottom-5 right-5 z-10">
        <a
          href="#shop"
          aria-label="Cuộn xuống cửa hàng"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-white/60 text-foreground backdrop-blur transition hover:bg-white/85"
        >
          <ChevronDown size={18} className="animate-bounce motion-reduce:animate-none" />
        </a>
      </Magnet>
    </section>
  )
}
