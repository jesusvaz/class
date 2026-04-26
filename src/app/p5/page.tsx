'use client'

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLang } from "../context/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function P5() {
    const { t } = useLang()

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="relative flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#002E5D] text-white sm:items-start">
                <LanguageSwitcher />
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        {t.p5.h1}
                    </h1>
                    <h3>
                        {t.p5.q1}<br />
                        {t.p5.q2}
                    </h3>

                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <FaArrowRight />
                            <span>{t.p5.restart}</span>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
}
