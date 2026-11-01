export const metadata = {
  title: 'Sanity Studio',
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-white text-black">{children}</div>
}
