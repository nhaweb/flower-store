'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Heart, Menu, ShoppingBag, Sparkles, X } from 'lucide-react'
import { Banner } from '@/components/banner'

const products = [
  { name: 'Peach Daydream', type: 'Ranunculus · Tulips · Sweet pea', price: '$68', color: 'bg-[#f6e0d7]', image: '/floral-still-life.png' },
  { name: 'Garden Muse', type: 'Cosmos · Lisianthus · Foliage', price: '$84', color: 'bg-[#e7eee4]', image: '/floral-still-life.png' },
  { name: 'Softly Wild', type: 'Dahlia · Scabiosa · Eucalyptus', price: '$92', color: 'bg-[#f0e5ec]', image: '/floral-still-life.png' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cart, setCart] = useState(0)
  const [liked, setLiked] = useState<number[]>([])
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Header nổi trên banner — trong suốt lúc đầu, có nền blur khi cuộn xuống */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? 'border-b border-border/70 bg-background/85 shadow-[0_1px_20px_rgb(0_0_0/0.04)] backdrop-blur-md' : ' bg-transparent'}`}>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 sm:py-5 lg:px-12">
          <a href="#top" className="font-serif text-[25px] italic tracking-[-0.06em]" aria-label="Petal & Stem home">petal & stem</a>
          <nav className="hidden items-center gap-9 text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:flex" aria-label="Main navigation">
            <a href="#shop" className="transition-colors hover:text-foreground">Shop flowers</a>
            <a href="#story" className="transition-colors hover:text-foreground">Our studio</a>
            <a href="#care" className="transition-colors hover:text-foreground">Flower care</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="relative flex h-10 items-center gap-2 rounded-full border border-border bg-background/40 px-4 text-[11px] uppercase tracking-[0.16em] backdrop-blur-sm" aria-label={`${cart} items in bag`}>
              <ShoppingBag size={14} strokeWidth={1.6} /> <span className="hidden sm:inline">Bag</span> <span className="text-muted-foreground">({cart})</span>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/40 backdrop-blur-sm md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X size={17} /> : <Menu size={17} />}</button>
          </div>
        </div>
        {menuOpen && <nav className="grid gap-3 border-t border-border/70 bg-background/95 px-5 pb-5 pt-4 text-sm backdrop-blur-md md:hidden"><a href="#shop" onClick={() => setMenuOpen(false)}>Shop flowers</a><a href="#story" onClick={() => setMenuOpen(false)}>Our studio</a><a href="#care" onClick={() => setMenuOpen(false)}>Flower care</a></nav>}
      </header>

      <Banner />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        <section id="shop" className="py-20 lg:py-28"><div className="mb-10 flex items-end justify-between"><div><p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">The current edit</p><h2 className="font-serif text-5xl tracking-[-0.06em] sm:text-6xl">Fresh from the garden</h2></div><a href="#shop" className="hidden items-center gap-2 text-xs uppercase tracking-[0.15em] underline underline-offset-8 sm:flex">View all <ArrowUpRight size={14} /></a></div><div className="grid gap-5 md:grid-cols-3">{products.map((product, index) => <article key={product.name} className="group"><div className={`relative aspect-[0.9] overflow-hidden rounded-2xl ${product.color}`}><img src={product.image} alt={`${product.name} seasonal bouquet`} className="h-full w-full object-cover mix-blend-multiply opacity-90 transition duration-700 group-hover:scale-105" /><button onClick={() => setLiked(liked.includes(index) ? liked.filter((item) => item !== index) : [...liked, index])} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur" aria-label={`Favorite ${product.name}`}><Heart size={16} fill={liked.includes(index) ? 'currentColor' : 'none'} className={liked.includes(index) ? 'text-primary' : ''} /></button><button onClick={() => setCart(cart + 1)} className="absolute bottom-4 left-4 right-4 translate-y-2 rounded-full bg-white/90 py-3 text-[10px] uppercase tracking-[0.18em] opacity-0 backdrop-blur transition group-hover:translate-y-0 group-hover:opacity-100">Add to bag +</button></div><div className="flex items-start justify-between pt-4"><div><h3 className="font-serif text-2xl tracking-[-0.04em]">{product.name}</h3><p className="mt-1 text-xs text-muted-foreground">{product.type}</p></div><span className="text-sm">{product.price}</span></div></article>)}</div></section>

        <section id="story" className="grid gap-8 rounded-[2rem] bg-secondary p-7 sm:p-12 lg:grid-cols-[0.8fr_1fr] lg:p-20"><div><p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Our point of view</p><h2 className="max-w-[500px] font-serif text-5xl leading-[0.95] tracking-[-0.06em] sm:text-7xl">Let flowers<br /><em className="text-primary">take up space.</em></h2></div><div className="flex max-w-[450px] flex-col justify-end"><p className="text-lg leading-8">We work with the seasons, not against them. Every stem is chosen for its movement, color and little imperfections—the things that make a room feel alive.</p><a href="#care" className="mt-8 flex w-fit items-center gap-2 border-b border-foreground pb-2 text-xs uppercase tracking-[0.16em]">Read our story <ArrowUpRight size={14} /></a></div></section>

        <section id="care" className="grid gap-8 py-20 sm:grid-cols-3 sm:py-28"><div><p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">A note from us</p><h2 className="font-serif text-4xl tracking-[-0.05em]">Keep them lovely.</h2></div><div className="sm:col-span-2 grid gap-4 sm:grid-cols-3"><div className="border-t border-border pt-4"><span className="font-serif text-3xl text-primary">01</span><p className="mt-4 text-sm leading-6 text-muted-foreground">Trim your stems at an angle before placing them in cool, clean water.</p></div><div className="border-t border-border pt-4"><span className="font-serif text-3xl text-primary">02</span><p className="mt-4 text-sm leading-6 text-muted-foreground">Give them a fresh drink every other day and keep them out of direct sun.</p></div><div className="border-t border-border pt-4"><span className="font-serif text-3xl text-primary">03</span><p className="mt-4 text-sm leading-6 text-muted-foreground">Let the stems loosen and lean. That’s when the magic starts.</p></div></div></section>

        <footer className="flex flex-col justify-between gap-8 border-t border-border py-8 text-xs text-muted-foreground sm:flex-row"><span className="font-serif text-xl italic text-foreground">petal & stem</span><div className="flex gap-6"><a href="#shop">Instagram</a><a href="#story">Contact</a><a href="#top">Back to top ↑</a></div><span>© 2026 Petal & Stem</span></footer>
      </div>
    </main>
  )
}
