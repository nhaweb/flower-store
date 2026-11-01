import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import AnimatedContent from '@/components/AnimatedContent'
import { Banner } from '@/components/banner'
import BlurText from '@/components/BlurText'
import { DictionaryPreview } from '@/components/home/dictionary-preview'
import { TestimonialMarquee } from '@/components/home/testimonial-marquee'
import FadeContent from '@/components/FadeContent'
import Magnet from '@/components/Magnet'
import { OccasionGrid } from '@/components/home/occasion-grid'
import { ProcessSteps } from '@/components/home/process-steps'
import { SeasonStrip } from '@/components/home/season-strip'
import { ProductCard } from '@/components/shop/product-card'
import {
  getCareNotes,
  getFlowerTypes,
  getFeaturedProducts,
  getHomePage,
  getProducts,
  getTestimonials,
} from '@/lib/content'
import { padStep } from '@/lib/format'

export default async function HomePage() {
  const [home, products, allProducts, careNotes, flowers, testimonials] = await Promise.all([
    getHomePage(),
    getFeaturedProducts(),
    getProducts(),
    getCareNotes(),
    getFlowerTypes(),
    getTestimonials(),
  ])

  return (
    <main>
      <Banner home={home} />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <section id="shop" className="py-20 lg:py-28">
          <AnimatedContent distance={48} duration={0.9} blur={6} threshold={0.15} className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{home.shopEyebrow}</p>
              <BlurText
                text={home.shopTitle}
                animateBy="words"
                effect="blur"
                delay={70}
                stepDuration={0.32}
                className="font-serif text-5xl tracking-[-0.06em] sm:text-6xl"
              />
            </div>
            <Link
              href="/cua-hang"
              className="hidden items-center gap-2 text-xs uppercase tracking-[0.15em] underline underline-offset-8 sm:flex"
            >
              Xem tất cả <ArrowUpRight size={14} />
            </Link>
          </AnimatedContent>

          <AnimatedContent
            distance={64}
            duration={0.85}
            blur={8}
            stagger={0.12}
            threshold={0.12}
            className="grid gap-5 md:grid-cols-3"
          >
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </AnimatedContent>
        </section>

        <OccasionGrid eyebrow={home.occasionsEyebrow} title={home.occasionsTitle} />

        <FadeContent effect="focus" blur={10} duration={1.05} threshold={0.2}>
          <section id="story" className="grid gap-8 rounded-card bg-secondary p-7 sm:p-12 lg:grid-cols-[0.8fr_1fr] lg:p-20">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{home.storyEyebrow}</p>
              <BlurText
                text={home.storyTitle}
                animateBy="words"
                effect="tilt"
                direction="bottom"
                delay={80}
                stepDuration={0.36}
                className="max-w-[500px] font-serif text-5xl leading-[0.95] tracking-[-0.06em] sm:text-7xl"
              />
            </div>
            <div className="flex max-w-[450px] flex-col justify-end">
              <p className="text-lg leading-8">{home.storyBody}</p>
              <Magnet padding={40} magnetStrength={3} maxOffset={10} wrapperClassName="mt-8 w-fit">
                <Link
                  href="/xuong-hoa"
                  className="flex w-fit items-center gap-2 border-b border-foreground pb-2 text-xs uppercase tracking-[0.16em]"
                >
                  Đọc câu chuyện <ArrowUpRight size={14} />
                </Link>
              </Magnet>
            </div>
          </section>
        </FadeContent>

        <DictionaryPreview flowers={flowers} eyebrow={home.dictionaryEyebrow} title={home.dictionaryTitle} />

        <section id="care" className="grid gap-8 py-20 sm:grid-cols-3 sm:py-28">
          <AnimatedContent distance={40} duration={0.8} blur={5} threshold={0.2}>
            <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{home.careEyebrow}</p>
            <BlurText
              text={home.careTitle}
              animateBy="words"
              effect="blur"
              delay={60}
              className="font-serif text-4xl tracking-[-0.05em]"
            />
          </AnimatedContent>

          <AnimatedContent
            distance={56}
            duration={0.85}
            blur={6}
            stagger={0.14}
            threshold={0.15}
            className="grid gap-4 sm:col-span-2 sm:grid-cols-3"
          >
            {careNotes.map((note) => (
              <div key={note._id} className="border-t border-border pt-5">
                <span className="font-serif text-3xl text-primary">{padStep(note.order)}</span>
                <p className="mt-4 font-serif text-xl tracking-[-0.03em]">{note.title}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{note.body}</p>
              </div>
            ))}
          </AnimatedContent>
        </section>

        <SeasonStrip products={allProducts} eyebrow={home.seasonsEyebrow} title={home.seasonsTitle} />

        <ProcessSteps eyebrow={home.processEyebrow} title={home.processTitle} />

        <TestimonialMarquee
          testimonials={testimonials}
          eyebrow={home.testimonialsEyebrow}
          title={home.testimonialsTitle}
        />
      </div>
    </main>
  )
}
