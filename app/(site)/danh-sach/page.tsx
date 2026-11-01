import type { Metadata } from 'next'
import Link from 'next/link'
import { InquiryForm } from '@/components/shop/inquiry-form'
import { getSiteSettings } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Danh sách đặt hoa',
  description: 'Các bó hoa bạn đã chọn — gửi yêu cầu đặt cho PML Flower.',
}

export default async function WishlistPage() {
  const settings = await getSiteSettings()

  return (
    <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-28 sm:px-8 lg:px-12">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Danh sách</p>
        <h1 className="font-serif text-5xl tracking-[-0.06em] sm:text-6xl">Đặt hoa của bạn</h1>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          Thêm bó từ{' '}
          <Link href="/cua-hang" className="underline underline-offset-4">
            cửa hàng
          </Link>{' '}
          rồi gửi yêu cầu. Ở đây không có giỏ thanh toán, chỉ cần liên hệ để xưởng xác nhận.
        </p>
      </div>
      <InquiryForm settings={settings} />
    </main>
  )
}
