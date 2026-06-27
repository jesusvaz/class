'use client'

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLang } from "./context/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function Home() {
  const { t } = useLang()

  const series1Links = [
    { href: '/p1', label: t.nav.p1 },
    { href: '/p2', label: t.nav.p2 },
    { href: '/p3', label: t.nav.p3 },
    { href: '/p4', label: t.nav.p4 },
    { href: '/p5', label: t.nav.p5 },
  ]

  const series2Links = [
    { href: '/may-10May2026', label: t.nav.mayHome },
    { href: '/may-10May2026/p1', label: t.nav.mayP1 },
    { href: '/may-10May2026/p2', label: t.nav.mayP2 },
    { href: '/may-10May2026/p3', label: t.nav.mayP3 },
    { href: '/may-10May2026/p4', label: t.nav.mayP4 },
    { href: '/may-10May2026/p5', label: t.nav.mayP5 },
  ]

  const series3Links = [
    { href: '/jun-13June2026', label: t.nav.junHome },
    { href: '/jun-13June2026/p1', label: t.nav.junP1 },
    { href: '/jun-13June2026/p2', label: t.nav.junP2 },
    { href: '/jun-13June2026/p3', label: t.nav.junP3 },
    { href: '/jun-13June2026/p4', label: t.nav.junP4 },
    { href: '/jun-13June2026/p5', label: t.nav.junP5 },
  ]

  const series4Links = [
    { href: '/junio-182026',    label: t.nav.jun18Home },
    { href: '/junio-182026/p1', label: t.nav.jun18P1 },
    { href: '/junio-182026/p2', label: t.nav.jun18P2 },
    { href: '/junio-182026/p3', label: t.nav.jun18P3 },
    { href: '/junio-182026/p4', label: t.nav.jun18P4 },
    { href: '/junio-182026/p5', label: t.nav.jun18P5 },
  ]

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="relative flex flex-1 w-full max-w-3xl flex-col items-center py-12 px-8 bg-[#002E5D] text-white gap-8">
        <LanguageSwitcher />

        <Image
          src="/santa-fe-logo.png"
          alt="Logo del barrio Santa Fe"
          width={80}
          height={80}
          priority
        />

        <h1 className="text-2xl font-semibold tracking-tight text-white">
          {t.nav.home}
        </h1>

        <NavSection title={t.nav.series1} links={series1Links} />
        <NavSection title={t.nav.series2} links={series2Links} />
        <NavSection title={t.nav.series3} links={series3Links} />
        <NavSection title={t.nav.series4} links={series4Links} />
      </main>
    </div>
  )
}

function NavSection({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <nav className="w-full">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-3 pb-2 border-b border-blue-700">
        {title}
      </h2>
      <ul className="flex flex-col gap-2">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <FaArrowRight className="text-blue-300 shrink-0 text-sm" />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
