import LessonNav from '../components/LessonNav'

export default function PaguinasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full pt-12 pb-14">
      <LessonNav position="top" />
      {children}
      <LessonNav position="bottom" />
    </div>
  )
}
