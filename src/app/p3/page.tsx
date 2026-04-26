'use client'

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLang } from "../context/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function P3() {
    const { t } = useLang()

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="relative flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#002E5D] text-white sm:items-start">
                <LanguageSwitcher />
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        <Image
                            src="/restauracion2.png"
                            alt="Restauracion"
                            width={100}
                            height={40}
                            priority
                        />
                        {t.p3.h1}
                    </h1>
                    <h2>{t.p3.h2}</h2>
                    <h3>
                        {t.p3.q1}<br />
                        {t.p3.q2}<br />
                        {t.p3.q3}<br />
                        {t.p3.q4}<br />
                        {t.p3.q5}
                    </h3>

                    <Link href="/p4">
                        <div className="flex items-center gap-2">
                            <FaArrowRight />
                            <span>{t.p3.next}</span>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
}
