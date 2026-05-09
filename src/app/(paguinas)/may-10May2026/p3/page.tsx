'use client'

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLang } from "../../../context/LanguageContext";

//http://localhost:3000/may-10May2026/p1
export default function P3() {
    const { t } = useLang()
    const m = t.may.p3

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="relative flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#002E5D] text-white sm:items-start">

                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        <Image
                            src="/hemanos-ministrantes.png"
                            alt="Ministracion"
                            width={100}
                            height={40}
                            priority
                        />
                        {m.h1}
                    </h1>
                    <h2>{m.h2}</h2>
                    <h3>
                        {m.body1}<br /><br />
                        {m.body2}<br /><br />
                        {m.body3}<br /><br />
                        {m.body4}<br /><br />
                    </h3>
                    <Link href="/may-10May2026/p4">
                        <div className="flex items-center gap-2">
                            <FaArrowRight />
                            <span>{m.next}</span>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
}
