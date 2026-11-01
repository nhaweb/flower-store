'use client'

import { useMemo, useState, type FormEvent } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { useWishlist } from '@/components/providers/wishlist-provider'
import { formatVnd } from '@/lib/format'
import type { SiteSettings } from '@/sanity/lib/types'

export function InquiryForm({ settings }: { settings: SiteSettings }) {
  const { items, clear } = useWishlist()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')
  const [date, setDate] = useState('')
  const [sent, setSent] = useState(false)

  const total = useMemo(() => items.reduce((sum, item) => sum + item.price, 0), [items])

  const body = useMemo(() => {
    const lines = [
      `Xin chào PML Flower,`,
      ``,
      `Tôi muốn đặt hoa:`,
      ...items.map((item) => `- ${item.name} (${formatVnd(item.price)})`),
      ``,
      `Tạm tính: ${formatVnd(total)}`,
      `Họ tên: ${name}`,
      `SĐT: ${phone}`,
      date ? `Ngày nhận mong muốn: ${date}` : '',
      note ? `Ghi chú: ${note}` : '',
    ].filter(Boolean)
    return lines.join('\n')
  }, [items, total, name, phone, date, note])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return

    if (settings.email) {
      const subject = encodeURIComponent(`Đặt hoa — ${name}`)
      const mailto = `mailto:${settings.email}?subject=${subject}&body=${encodeURIComponent(body)}`
      window.location.href = mailto
    }

    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-card bg-secondary p-8 sm:p-12">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check size={20} />
        </div>
        <h2 className="font-serif text-3xl tracking-[-0.04em]">Gần xong rồi!</h2>
        <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
          Xưởng sẽ nhắn lại xác nhận còn hoa và ngày giao qua điện thoại hoặc Zalo. Muốn nhanh hơn thì gọi trực tiếp
          {settings.phone ? ` ${settings.phone}` : ''}.
        </p>
        <button
          type="button"
          onClick={() => {
            clear()
            setSent(false)
            setName('')
            setPhone('')
            setNote('')
            setDate('')
          }}
          className="mt-8 text-xs uppercase tracking-[0.16em] underline underline-offset-8"
        >
          Xóa danh sách và tạo yêu cầu mới
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
      <div className="space-y-4">
        <h2 className="font-serif text-3xl tracking-[-0.04em]">Bó đã chọn</h2>
        {items.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Chưa có bó nào. Vào cửa hàng, bó nào thích thì nhấn trái tim để thêm vào danh sách.
          </p>
        ) : (
          <ul className="divide-y divide-border border-y border-border">
            {items.map((item) => (
              <li key={item.id} className="flex items-center justify-between gap-4 py-4">
                <div>
                  <p className="font-serif text-xl">{item.name}</p>
                  {item.tagline && <p className="text-xs text-muted-foreground">{item.tagline}</p>}
                </div>
                <span className="shrink-0 tabular-nums text-sm">{formatVnd(item.price)}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="text-sm">
          Tạm tính tham khảo: <strong className="tabular-nums">{formatVnd(total)}</strong>
        </p>
        <p className="text-xs leading-5 text-muted-foreground">
          Giá chỉ để tham khảo. Website không thu tiền online. Bạn gửi yêu cầu, xưởng xác nhận rồi hẹn giao.
        </p>
      </div>

      <div className="rounded-card bg-secondary p-6 sm:p-8">
        <h2 className="font-serif text-3xl tracking-[-0.04em]">Thông tin liên hệ</h2>
        <div className="mt-6 grid gap-4">
          <label className="grid gap-2 text-xs uppercase tracking-[0.14em]">
            Họ tên
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-11 rounded-full border border-border bg-background px-4 text-sm normal-case tracking-normal outline-none ring-primary focus:ring-2"
            />
          </label>
          <label className="grid gap-2 text-xs uppercase tracking-[0.14em]">
            Số điện thoại
            <input
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-11 rounded-full border border-border bg-background px-4 text-sm normal-case tracking-normal outline-none ring-primary focus:ring-2"
            />
          </label>
          <label className="grid gap-2 text-xs uppercase tracking-[0.14em]">
            Ngày nhận mong muốn
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="h-11 rounded-full border border-border bg-background px-4 text-sm normal-case tracking-normal outline-none ring-primary focus:ring-2"
            />
          </label>
          <label className="grid gap-2 text-xs uppercase tracking-[0.14em]">
            Ghi chú
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={4}
              placeholder="Lời chúc trên thiệp, địa chỉ giao, màu ưa thích…"
              className="rounded-2xl border border-border bg-background px-4 py-3 text-sm normal-case tracking-normal outline-none ring-primary focus:ring-2"
            />
          </label>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={items.length === 0}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-xs uppercase tracking-[0.15em] text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Gửi yêu cầu đặt hoa <ArrowUpRight size={14} />
          </button>
          {settings.zalo && (
            <a
              href={settings.zalo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center rounded-full border border-border bg-background/60 px-6 text-xs uppercase tracking-[0.15em] transition-colors hover:border-foreground/50 hover:bg-background"
            >
              Nhắn Zalo
            </a>
          )}
        </div>
      </div>
    </form>
  )
}
