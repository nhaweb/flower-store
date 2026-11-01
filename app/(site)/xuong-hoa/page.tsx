import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedContent from '@/components/AnimatedContent'
import FadeContent from '@/components/FadeContent'
import { StudioGallery } from '@/components/studio/studio-gallery'
import { StudioTeam } from '@/components/studio/studio-team'
import { StudioTimeline } from '@/components/studio/studio-timeline'
import { StudioValues } from '@/components/studio/studio-values'
import { StudioVisit } from '@/components/studio/studio-visit'
import { getSiteSettings, getStudioPage } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Xưởng hoa',
  description: 'Câu chuyện xưởng hoa PML Flower — làm hoa chậm, theo mùa tại Việt Nam.',
}

export default async function StudioStoryPage() {
  const [page, settings] = await Promise.all([getStudioPage(), getSiteSettings()])

  return (
    <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-28 sm:px-8 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{page.eyebrow}</p>
          <h1 className="max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] sm:text-7xl">
            {page.title}
          </h1>
          {page.intro && <p className="mt-6 max-w-lg text-lg leading-8">{page.intro}</p>}
          <Link
            href="/lien-he"
            className="mt-8 inline-flex border-b border-foreground pb-2 text-xs uppercase tracking-[0.16em]"
          >
            Liên hệ đặt hoa
          </Link>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#f3d6dd]">
          <Image
            src={page.imageUrl || '/banner/banner.jpg'}
            alt="Không gian xưởng hoa"
            fill
            sizes="(max-width:1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-20 lg:mt-28">
        <StudioTimeline timeline={page.timeline} eyebrow={page.timelineEyebrow} title={page.timelineTitle} />
        <StudioValues
          sections={page.sections}
          eyebrow={page.valuesEyebrow}
          title={page.valuesTitle}
        />
        <StudioGallery gallery={page.gallery} eyebrow={page.galleryEyebrow} title={page.galleryTitle} />
        <StudioTeam team={page.team} eyebrow={page.teamEyebrow} title={page.teamTitle} />
        <StudioVisit settings={settings} title={page.visitTitle} intro={page.visitIntro} />
      </div>

      <FadeContent effect="focus" blur={10} duration={1.05} threshold={0.2}>
        <section className="grid gap-8 rounded-card bg-secondary p-7 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-16">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Hoa đang vào mẻ
            </p>
            <h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.05em] sm:text-5xl">
              Xem hoa đang có.
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="max-w-[450px] text-lg leading-8">
              Bộ sưu tập đổi mỗi tuần theo hoa đẹp nhất chợ. Thích bó nào chọn trước bó đó, xưởng giữ chỗ cho bạn
              trong mẻ gần nhất.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/cua-hang"
                className="inline-flex h-12 items-center rounded-full bg-primary px-6 text-xs uppercase tracking-[0.15em] text-primary-foreground transition hover:bg-primary/90"
              >
                Xem hoa đang có
              </Link>
              <Link
                href="/lien-he"
                className="inline-flex h-12 items-center rounded-full border border-border bg-background/60 px-6 text-xs uppercase tracking-[0.15em] transition-colors hover:border-foreground/50 hover:bg-background"
              >
                Liên hệ xưởng
              </Link>
            </div>
          </div>
        </section>
      </FadeContent>
    </main>
  )
}
