import type { Metadata } from 'next'
import Link from 'next/link'
import { CareFaq } from '@/components/care/care-faq'
import { CareGuide } from '@/components/care/care-guide'
import { FlowerTips } from '@/components/care/flower-tips'
import BlurText from '@/components/BlurText'
import FadeContent from '@/components/FadeContent'
import { getCareNotes, getCarePage, getSiteSettings } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Chăm sóc hoa',
  description:
    'Hướng dẫn giữ bó hoa tươi lâu từ PML Flower: năm bước cơ bản, mẹo theo từng loài hoa và bảng tuổi thọ tham khảo.',
}

export default async function CarePage() {
  const [page, notes, settings] = await Promise.all([getCarePage(), getCareNotes(), getSiteSettings()])

  return (
    <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-28 sm:px-8 lg:px-12">
      <div className="mb-16 max-w-2xl">
        <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{page.heroEyebrow}</p>
        <BlurText
          text={page.heroTitle}
          animateBy="words"
          effect="blur"
          delay={70}
          stepDuration={0.32}
          className="font-serif text-5xl tracking-[-0.06em] sm:text-7xl"
        />
        {page.heroIntro && (
          <p className="mt-5 text-sm leading-7 text-muted-foreground">{page.heroIntro}</p>
        )}
      </div>

      <CareGuide notes={notes} eyebrow={page.guideEyebrow} title={page.guideTitle} />

      <FlowerTips eyebrow={page.flowerEyebrow} title={page.flowerTitle} />

      <CareFaq faqs={page.faqs} eyebrow={page.faqEyebrow} title={page.faqTitle} />

      <FadeContent effect="focus" blur={10} duration={1.05} threshold={0.2}>
        <section className="grid gap-8 rounded-card bg-secondary p-7 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-16">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Vẫn đang phân vân?
            </p>
            <h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.05em] sm:text-5xl">
              Nhắn xưởng một dòng.
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="max-w-[450px] text-lg leading-8">
              Gửi ảnh góc nhà cần cắm hoặc dịp sắp đến. Xưởng gợi loài, chọn màu và chỉ luôn cách giữ hoa lâu nhất
              có thể.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/lien-he"
                className="inline-flex h-12 items-center rounded-full bg-primary px-6 text-xs uppercase tracking-[0.15em] text-primary-foreground transition hover:bg-primary/90"
              >
                Gửi yêu cầu
              </Link>
              {settings.zalo && (
                <a
                  href={settings.zalo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center rounded-full border border-border bg-background/60 px-6 text-xs uppercase tracking-[0.15em] transition-colors hover:border-foreground/50 hover:bg-background"
                >
                  Nhắn qua Zalo
                </a>
              )}
            </div>
          </div>
        </section>
      </FadeContent>
    </main>
  )
}
