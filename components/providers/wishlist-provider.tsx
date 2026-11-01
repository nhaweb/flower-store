'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type WishlistItem = {
  id: string
  slug: string
  name: string
  price: number
  imageUrl?: string
  tagline?: string
}

type WishlistContextValue = {
  items: WishlistItem[]
  count: number
  has: (id: string) => boolean
  toggle: (item: WishlistItem) => void
  remove: (id: string) => void
  clear: () => void
}

const STORAGE_KEY = 'petal-stem-wishlist'
const WishlistContext = createContext<WishlistContextValue | null>(null)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setItems(JSON.parse(raw) as WishlistItem[])
    } catch {
      /* ignore */
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items, ready])

  const has = useCallback((id: string) => items.some((item) => item.id === id), [items])

  const toggle = useCallback((item: WishlistItem) => {
    setItems((prev) => {
      if (prev.some((entry) => entry.id === item.id)) {
        return prev.filter((entry) => entry.id !== item.id)
      }
      return [...prev, item]
    })
  }, [])

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const value = useMemo(
    () => ({ items, count: items.length, has, toggle, remove, clear }),
    [items, has, toggle, remove, clear],
  )

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export function useWishlist() {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider')
  return ctx
}
