'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLang, Lang } from '../context/LanguageContext'

const pages = [
  { href: '/may-10May2026',    label: '⌂' },
  { href: '/may-10May2026/p1', label: 'P1' },
  { href: '/may-10May2026/p2', label: 'P2' },
  { href: '/may-10May2026/p3', label: 'P3' },
  { href: '/may-10May2026/p4', label: 'P4' },
  { href: '/may-10May2026/p5', label: 'P5' },
]

const langOptions: { value: Lang; label: string }[] = [
  { value: 'es', label: 'ES' },
  { value: 'en', label: 'EN' },
  { value: 'pt', label: 'PT' },
]

interface LessonNavProps {
  position?: 'top' | 'bottom'
}

export default function LessonNav({ position = 'bottom' }: LessonNavProps) {
  const pathname = usePathname()
  const { lang, setLang } = useLang()
  const isTop = position === 'top'

  return (
    <nav
      className={`fixed ${isTop ? 'top-0' : 'bottom-0'} left-0 right-0 z-40 flex items-center justify-between px-3 py-2 bg-[#002E5D] ${isTop ? 'border-b' : 'border-t'} border-white/20`}
    >
      <div className="flex gap-1">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className={`px-2 h-8 flex items-center justify-center rounded text-xs font-bold transition-colors ${
              pathname === page.href
                ? 'bg-white text-[#002E5D]'
                : 'text-white hover:bg-white/20'
            }`}
          >
            {page.label}
          </Link>
        ))}
      </div>

      {isTop && (
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value as Lang)}
          className="bg-white text-[#002E5D] font-semibold rounded px-2 py-1 text-xs border border-white/30 cursor-pointer"
        >
          {langOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      )}
    </nav>
  )
}
