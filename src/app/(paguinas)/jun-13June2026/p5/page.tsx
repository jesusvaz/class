'use client'

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLang } from "../../../context/LanguageContext";

export default function JunP5() {
    const { t } = useLang()
    const m = t.jun.p5

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="relative flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#002E5D] text-white sm:items-start">
                <div>
                    <h1 className="text-xl font-bold mb-6">{m.h1}</h1>
                    <h2 className="text-lg mb-4">{m.h2a}</h2>
                    <h2 className="text-lg mb-4">{m.h2b}</h2>
                    <h2 className="text-lg mb-8">{m.h2c}</h2>
                    <Link href="/jun-13June2026">
                        <div className="flex items-center gap-2">
                            <FaArrowRight />
                            <span>{m.goBack}</span>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
}
