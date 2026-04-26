'use client'

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLang } from "../context/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function P4() {
    const { t } = useLang()

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="relative flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#002E5D] text-white sm:items-start">
                <LanguageSwitcher />
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        <Image
                            src="/restauracion2.png"
                            alt="Desafio"
                            width={100}
                            height={40}
                            priority
                        />
                        {t.p4.h1}
                    </h1>
                    <h3>
                        {t.p4.intro}<br /><br />
                        <strong>{t.p4.c1title}</strong><br />
                        {t.p4.c1}<br /><br />
                        <strong>{t.p4.c2title}</strong><br />
                        {t.p4.c2}<br /><br />
                        <strong>{t.p4.c3title}</strong>
                    </h3>

                    <Link href="/p5">
                        <div className="flex items-center gap-2">
                            <FaArrowRight />
                            <span>{t.p4.next}</span>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
}
