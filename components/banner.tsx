import Image from 'next/image'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

const reveal = (delay: string) => ({ animationDelay: delay })

export function Banner() {
  return (
    <section
      id="top"
      aria-label="Seasonal flowers hero"
      className="relative isolate h-svh overflow-hidden bg-[#f3d6dd]"
    >
      {/* Ảnh hero — neo phía dưới (object-bottom) nên phần hoa luôn hiển thị trọn vẹn */}
      <Image
        src="/banner/banner.jpg"
        alt="Hand-tied bouquet of cream roses, lisianthus and eucalyptus against a soft pink wall"
        fill
        priority
        sizes="100vw"
        className="banner-zoom object-cover object-bottom"
      />

      {/* Lớp phủ sáng mềm ở giữa banner để chữ luôn nổi trên ảnh */}
      <div aria-hidden className="banner-veil absolute inset-0 z-[1]" />

      {/* Nội dung căn giữa màn hình, chữ có glow để nổi trên hình */}
      <div className="banner-legible absolute inset-0 z-10 flex flex-col items-center justify-center px-6 pb-16 text-center sm:px-10 sm:pb-20 lg:px-14">
        <h1
          className="banner-reveal mt-5 font-serif text-[clamp(2.75rem,7vw,5rem)] leading-[0.95] tracking-[-0.05em] sm:mt-6"
          style={reveal('0.18s')}
        >
          A little <em className="text-primary">wildness</em>
          <br />
          for your table.
        </h1>

        <p
          className="banner-reveal mx-auto mt-4 hidden max-w-[420px] text-sm leading-6 text-foreground/70 sm:mt-5 sm:block"
          style={reveal('0.34s')}
        >
          Seasonal flowers, thoughtfully gathered and hand-tied in small batches. Made to bring the outside in.
        </p>

        <div className="banner-reveal mt-6 flex flex-wrap items-center justify-center gap-3 [text-shadow:none]" style={reveal('0.5s')}>
          <a
            href="#shop"
            className="flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-xs uppercase tracking-[0.15em] text-primary-foreground transition hover:bg-primary/90 sm:h-12"
          >
            Shop the collection <ArrowUpRight size={15} />
          </a>
          <a
            href="#story"
            className="flex h-11 items-center rounded-full border border-foreground/15 bg-white/45 px-6 text-xs uppercase tracking-[0.15em] text-foreground backdrop-blur-sm transition hover:bg-white/70 sm:h-12"
          >
            Meet the studio
          </a>
        </div>
      </div>

      {/* Nút cuộn xuống */}
      <a
        href="#shop"
        aria-label="Scroll down to shop"
        className="absolute bottom-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-white/60 text-foreground backdrop-blur transition hover:bg-white/85"
      >
        <ChevronDown size={18} className="animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  )
}
