'use client'

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLang } from "../../../context/LanguageContext";

export default function P5() {
    const { t } = useLang()
    const m = t.may.p5

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="relative flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#002E5D] text-white sm:items-start">

                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        {m.h1}
                    </h1>
                    <Image
                        src="/jesucritoKoking.png"
                        alt="Ministrar a su manera"
                        width={100}
                        height={40}
                        priority
                    />
                    <Link href="/may-10May2026">
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
