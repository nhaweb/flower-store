'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Heart, Menu, X } from 'lucide-react'
import Magnet from '@/components/Magnet'
import { useWishlist } from '@/components/providers/wishlist-provider'

const links = [
  { href: '/cua-hang', label: 'Cửa hàng' },
  { href: '/xuong-hoa', label: 'Xưởng hoa' },
  { href: '/cham-soc', label: 'Chăm sóc' },
  { href: '/lien-he', label: 'Liên hệ' },
]

export function SiteHeader({ brandName }: { brandName: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { count } = useWishlist()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-border/70 bg-background/85 shadow-[0_1px_20px_rgb(0_0_0/0.04)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 sm:py-5 lg:px-12">
        <Link href="/" className="font-serif text-[25px] italic tracking-[-0.06em]" aria-label={`${brandName} trang chủ`}>
          {brandName.toLowerCase()}
        </Link>
        <nav className="hidden items-center gap-9 text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:flex" aria-label="Điều hướng chính">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Magnet padding={36} magnetStrength={3} maxOffset={8} exclusive={false}>
            <Link
              href="/danh-sach"
              className="relative flex h-10 items-center gap-2 rounded-full border border-border bg-background/40 px-4 text-[11px] uppercase tracking-[0.16em] backdrop-blur-sm transition-colors hover:border-foreground/50 hover:bg-background/70"
              aria-label={`${count} bó trong danh sách đặt hoa`}
            >
              <Heart size={14} strokeWidth={1.6} />
              <span className="hidden sm:inline">Danh sách</span>
              <span className="text-muted-foreground">({count})</span>
            </Link>
          </Magnet>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/40 backdrop-blur-sm md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Mở menu"
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="grid gap-1 border-t border-border/70 bg-background/95 px-5 pb-5 pt-4 text-sm backdrop-blur-md md:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="py-2">
              {link.label}
            </Link>
          ))}
          <Link href="/danh-sach" onClick={() => setMenuOpen(false)} className="py-2">
            Danh sách đặt hoa
          </Link>
        </nav>
      )}
    </header>
  )
}
