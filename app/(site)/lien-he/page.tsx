import type { Metadata } from 'next'
import { InquiryForm } from '@/components/shop/inquiry-form'
import { getSiteSettings } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Liên hệ',
  description: 'Gửi yêu cầu đặt hoa hoặc nhắn Zalo / gọi điện cho PML Flower.',
}

export default async function ContactPage() {
  const settings = await getSiteSettings()

  return (
    <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-28 sm:px-8 lg:px-12">
      <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1fr]">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Liên hệ</p>
          <h1 className="font-serif text-5xl tracking-[-0.06em] sm:text-6xl">Đặt hoa cùng chúng tôi</h1>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            Website chỉ để xem và chọn hoa, không thu tiền online. Bạn gửi yêu cầu, xưởng xác nhận rồi hẹn giờ giao.
          </p>
        </div>
        <dl className="grid gap-5 self-end text-sm sm:grid-cols-2">
          {settings.phone && (
            <div>
              <dt className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Điện thoại</dt>
              <dd className="mt-2">
                <a href={`tel:${settings.phone.replace(/\s/g, '')}`} className="font-serif text-2xl">
                  {settings.phone}
                </a>
              </dd>
            </div>
          )}
          {settings.email && (
            <div>
              <dt className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Email</dt>
              <dd className="mt-2">
                <a href={`mailto:${settings.email}`}>{settings.email}</a>
              </dd>
            </div>
          )}
          {settings.address && (
            <div>
              <dt className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Địa chỉ</dt>
              <dd className="mt-2 whitespace-pre-line">{settings.address}</dd>
            </div>
          )}
          {settings.hours && (
            <div>
              <dt className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Giờ mở cửa</dt>
              <dd className="mt-2">{settings.hours}</dd>
            </div>
          )}
          {settings.deliveryNote && (
            <div className="sm:col-span-2">
              <dt className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Giao hoa</dt>
              <dd className="mt-2 text-muted-foreground">{settings.deliveryNote}</dd>
            </div>
          )}
        </dl>
      </div>

      <InquiryForm settings={settings} />
    </main>
  )
}
