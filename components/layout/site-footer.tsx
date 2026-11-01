import Link from 'next/link'
import FadeContent from '@/components/FadeContent'
import type { SiteSettings } from '@/sanity/lib/types'

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  return (
    <FadeContent duration={0.8} threshold={0.3}>
      <footer className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 border-t border-border px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:px-8 lg:px-12">
        <span className="font-serif text-xl italic text-foreground">{settings.brandName.toLowerCase()}</span>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {settings.instagram && (
            <a href={settings.instagram} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              Instagram
            </a>
          )}
          <Link href="/lien-he" className="transition-colors hover:text-foreground">Liên hệ</Link>
          <Link href="/cua-hang" className="transition-colors hover:text-foreground">Cửa hàng</Link>
        </div>
        <span>© {new Date().getFullYear()} {settings.brandName}</span>
      </footer>
    </FadeContent>
  )
}
