import type { Metadata } from 'next'
import { ShopFilters } from '@/components/shop/shop-filters'
import { getProducts } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Cửa hàng',
  description: 'Bó hoa theo mùa — chọn và gửi yêu cầu đặt hoa tại PML Flower.',
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ dip?: string; mua?: string }>
}) {
  const [{ dip, mua }, products] = await Promise.all([searchParams, getProducts()])

  return (
    <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-28 sm:px-8 lg:px-12">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Cửa hàng</p>
        <h1 className="font-serif text-5xl tracking-[-0.06em] sm:text-6xl">Hoa đang có</h1>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          Giá chỉ để tham khảo. Thêm bó thích vào danh sách rồi gửi yêu cầu, xưởng sẽ nhắn lại xác nhận còn hoa và
          ngày giao qua Zalo hoặc điện thoại.
        </p>
      </div>
      <ShopFilters
        products={products}
        initialOccasion={dip}
        initialSeason={mua}
      />
    </main>
  )
}
