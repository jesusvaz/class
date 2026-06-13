'use client'

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLang } from "../../context/LanguageContext";

export default function JuneHome() {
    const { t } = useLang()

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="relative flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#002E5D] text-white sm:items-start">
                <Image
                    src="/santa-fe-logo.png"
                    alt="Logo del barrio Santa Fe"
                    width={300}
                    height={300}
                    priority
                />
                <div>
                    <Link
                        href="https://www.youtube.com/watch?v=tWiNpfTJY8g"
                        target="_blank"
                    >
                        <Image
                            src="/Clark_Gilbert.png"
                            alt="Clark Gilbert"
                            width={150}
                            height={100}
                            className="rounded-lg"
                            priority
                        />
                    </Link>
                    <Link href="/jun-13June2026/p1">
                        <div className="flex items-center gap-2 mt-6">
                            <FaArrowRight />
                            <span>{t.jun.home.start}</span>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
}
