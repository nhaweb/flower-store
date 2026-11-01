'use client'

import { useMemo, useState } from 'react'
import { Flower2, Search, X } from 'lucide-react'
import { ProductCard } from '@/components/shop/product-card'
import {
  OCCASION_LABELS,
  SEASON_LABELS,
  type Occasion,
  type Product,
  type Season,
} from '@/sanity/lib/types'

const ALL = 'all'

const SEASON_FILTERS: Exclude<Season, 'ca-nam'>[] = ['xuan', 'ha', 'thu', 'dong']

type BaseFilter = { occasion: string | null; season: string | null; query: string }

function matchesBase(product: Product, { occasion, season, query }: BaseFilter) {
  const matchOccasion = !occasion || product.occasions?.includes(occasion as Occasion)
  // Hoa "cả năm" luôn phù hợp với mọi bộ lọc mùa
  const matchSeason = !season || product.season === season || product.season === 'ca-nam'
  const q = query.trim().toLowerCase()
  const matchQuery =
    !q ||
    product.name.toLowerCase().includes(q) ||
    product.tagline?.toLowerCase().includes(q) ||
    product.stems?.some((s) => s.toLowerCase().includes(q))
  return matchOccasion && matchSeason && matchQuery
}

export function ShopFilters({
  products,
  initialOccasion,
  initialSeason,
}: {
  products: Product[]
  initialOccasion?: string
  initialSeason?: string
}) {
  const [occasion, setOccasion] = useState<string>(
    initialOccasion && initialOccasion in OCCASION_LABELS ? initialOccasion : ALL,
  )
  const [season, setSeason] = useState<string>(
    initialSeason && initialSeason in SEASON_LABELS && initialSeason !== 'ca-nam'
      ? initialSeason
      : ALL,
  )
  const [query, setQuery] = useState('')

  // Dịp hiển thị theo thứ tự mặc định trong types, chỉ lấy dịp đang có sản phẩm
  const occasions = useMemo(() => {
    return (Object.keys(OCCASION_LABELS) as Occasion[]).filter((o) =>
      products.some((p) => p.occasions?.includes(o)),
    )
  }, [products])

  const base: BaseFilter = useMemo(
    () => ({
      occasion: occasion === ALL ? null : occasion,
      season: season === ALL ? null : season,
      query,
    }),
    [occasion, season, query],
  )

  const filtered = useMemo(() => products.filter((p) => matchesBase(p, base)), [products, base])

  // Đếm số bó sẽ có nếu chọn từng chip (tính theo các bộ lọc đang bật còn lại)
  const counts = useMemo(() => {
    const count = (patch: Partial<BaseFilter>) =>
      products.filter((p) => matchesBase(p, { ...base, ...patch })).length
    return {
      occasionAll: count({ occasion: null }),
      seasonAll: count({ season: null }),
      occasion: Object.fromEntries(
        (Object.keys(OCCASION_LABELS) as Occasion[]).map((o) => [o, count({ occasion: o })]),
      ) as Record<Occasion, number>,
      season: Object.fromEntries(SEASON_FILTERS.map((s) => [s, count({ season: s })])) as Record<
        string,
        number
      >,
    }
  }, [products, base])

  const isFiltered = base.occasion !== null || base.season !== null || base.query.trim() !== ''
  // Re-key grid theo bộ lọc chip (không re-key theo query để không nhấp nháy khi gõ)
  const gridKey = `${occasion}|${season}`

  const reset = () => {
    setOccasion(ALL)
    setSeason(ALL)
    setQuery('')
  }

  return (
    <div>
      <div className="rounded-card border border-border/70 bg-secondary/40 p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-sm">
            <Search
              size={15}
              strokeWidth={1.75}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Tìm bó hoa theo tên hoặc loại hoa"
              placeholder="Tìm tên bó, loại hoa…"
              className="h-11 w-full rounded-full border border-border bg-background pl-10 pr-10 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-foreground/30 focus:ring-2 focus:ring-ring/25"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Xóa từ tìm kiếm"
                className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                <X size={13} />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between gap-4 lg:justify-end">
            <p aria-live="polite" className="text-xs tabular-nums text-muted-foreground">
              <span className="font-medium text-foreground">{filtered.length}</span>
              <span> / {products.length} bó phù hợp</span>
            </p>
            {isFiltered && (
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground underline underline-offset-8 transition-colors hover:text-foreground"
              >
                <X size={12} strokeWidth={2} /> Xóa bộ lọc
              </button>
            )}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border/70 pt-5">
          <FilterGroup label="Dịp">
            <FilterChip
              active={occasion === ALL}
              onClick={() => setOccasion(ALL)}
              label="Tất cả dịp"
              count={counts.occasionAll}
            />
            {occasions.map((o) => (
              <FilterChip
                key={o}
                active={occasion === o}
                onClick={() => setOccasion(o)}
                label={OCCASION_LABELS[o]}
                count={counts.occasion[o]}
              />
            ))}
          </FilterGroup>

          <FilterGroup label="Mùa">
            <FilterChip
              active={season === ALL}
              onClick={() => setSeason(ALL)}
              label="Tất cả"
              count={counts.seasonAll}
            />
            {SEASON_FILTERS.map((s) => (
              <FilterChip
                key={s}
                active={season === s}
                onClick={() => setSeason(s)}
                label={SEASON_LABELS[s]}
                count={counts.season[s]}
              />
            ))}
          </FilterGroup>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="animate-in fade-in duration-500 flex flex-col items-center py-20 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-secondary/50 text-muted-foreground">
            <Flower2 size={22} strokeWidth={1.5} />
          </span>
          <p className="mt-5 font-serif text-3xl tracking-[-0.03em]">Chưa có bó nào như vậy.</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
            Thử bỏ một bộ lọc, hoặc tìm bằng loài hoa khác — ví dụ &ldquo;hồng&rdquo;, &ldquo;tulip&rdquo;.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 inline-flex h-11 items-center rounded-full bg-foreground px-6 text-[10px] uppercase tracking-[0.16em] text-background transition hover:opacity-85"
          >
            Xóa bộ lọc
          </button>
        </div>
      ) : (
        <div key={gridKey} className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, index) => (
            <div
              key={product._id}
              className="animate-in fade-in slide-in-from-bottom-3 duration-500"
              style={{
                animationDelay: `${Math.min(index, 8) * 70}ms`,
                animationFillMode: 'backwards',
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function FilterGroup({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label={`Lọc theo ${label.toLowerCase()}`}>
      <span className="mr-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      {children}
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean
  onClick: () => void
  label: string
  count: number
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex h-9 items-center rounded-full border px-4 text-[10px] uppercase tracking-[0.14em] transition ${
        active
          ? 'border-foreground bg-foreground text-background'
          : 'border-border bg-background/60 text-muted-foreground hover:border-foreground/40 hover:text-foreground'
      }`}
    >
      {label}
      <span
        className={`ml-1.5 text-[9px] tracking-normal ${active ? 'opacity-70' : 'opacity-50'}`}
        aria-hidden
      >
        {count}
      </span>
    </button>
  )
}
