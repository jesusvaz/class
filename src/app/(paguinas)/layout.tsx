import LanguageSwitcher from '../components/LanguageSwitcher'

export default function PaguinasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full">
      <LanguageSwitcher />
      {children}
    </div>
  )
}
