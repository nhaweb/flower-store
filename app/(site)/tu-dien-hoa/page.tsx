import type { Metadata } from 'next'
import AnimatedContent from '@/components/AnimatedContent'
import { FlowerCard } from '@/components/flower-card'
import { getFlowerTypes } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Từ điển hoa',
  description:
    'Ý nghĩa, mùa đẹp, tuổi thọ và cách chăm của từng loài hoa ở xưởng PML Flower. Chọn loài theo lời bạn muốn nói.',
}

export default async function FlowerDictionaryPage() {
  const flowers = await getFlowerTypes()

  return (
    <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-28 sm:px-8 lg:px-12">
      <div className="mb-14 max-w-2xl">
        <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Từ điển hoa</p>
        <h1 className="font-serif text-5xl tracking-[-0.06em] sm:text-6xl">Mỗi loài một tính.</h1>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          Cùng một lời muốn nói, nhưng mỗi loài hoa kể một kiểu. Chọn theo ý nghĩa, theo mùa, hay theo mức độ lười
          của bạn cũng được — thoải mái nhé.
        </p>
      </div>

      {flowers.length === 0 ? (
        <p className="text-sm text-muted-foreground">Từ điển đang được cập nhật — ghé lại sau ít ngày nhé.</p>
      ) : (
        <AnimatedContent
          distance={64}
          duration={0.85}
          blur={8}
          stagger={0.08}
          threshold={0.12}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {flowers.map((flower) => (
            <FlowerCard key={flower._id} flower={flower} />
          ))}
        </AnimatedContent>
      )}
    </main>
  )
}
