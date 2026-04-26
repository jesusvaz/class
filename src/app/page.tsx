'use client'

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLang } from "./context/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function Home() {
  const { t } = useLang()

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="relative flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#002E5D] text-white sm:items-start">
        <LanguageSwitcher />
        <Image
          src="/santa-fe-logo.png"
          alt="Logo del barrio Santa Fe"
          width={300}
          height={300}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            <Image
              src="/gary_e_stevenson_apostle.webp"
              alt="Élder Gary E. Stevenson"
              width={100}
              height={40}
              priority
            />
            Élder Gary E. Stevenson
          </h1>
          <h2>{t.home.bio}</h2>
          <h3>{t.home.intro}</h3>

          <Link href="/p1">
            <div className="flex items-center gap-2">
              <FaArrowRight />
              <span>{t.home.start}</span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
