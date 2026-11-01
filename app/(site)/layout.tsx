import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { BackToTop } from '@/components/layout/back-to-top'
import ClickSpark from '@/components/ClickSpark'
import { getSiteSettings } from '@/lib/content'

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings()

  return (
    <ClickSpark
      sparkColor={['#c45c5c', '#e8a0a0', '#f3d6dd', '#ffffff']}
      sparkSize={11}
      sparkRadius={28}
      sparkCount={10}
      shape="dot"
      duration={620}
      glow={0.45}
      gravity={0.35}
      className="min-h-screen"
    >
      <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <SiteHeader brandName={settings.brandName} />
        {children}
        <SiteFooter settings={settings} />
        <BackToTop />
      </div>
    </ClickSpark>
  )
}
