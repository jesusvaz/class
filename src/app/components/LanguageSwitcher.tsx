'use client'

import { useLang, Lang } from '../context/LanguageContext'

const options: { value: Lang; label: string }[] = [
  { value: 'es', label: 'Español' },
  { value: 'en', label: 'English' },
  { value: 'pt', label: 'Português' },
]

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang()

  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value as Lang)}
      className="absolute top-4 right-4 bg-white text-[#002E5D] font-semibold rounded px-2 py-1 text-sm border border-white/30 cursor-pointer"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  )
}
