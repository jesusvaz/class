'use client'

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLang } from "../../../context/LanguageContext";


export default function P1() {
    const { t } = useLang()
    const m = t.may.p1

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="relative flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#002E5D] text-white sm:items-start">

                <div>
                    <Image
                        src="/hemanos-ministrantes.png"
                        alt="hemanos ministrantes"
                        width={100}
                        height={40}
                        priority
                    />

                    <u><i><h3>{m.h1}</h3></i></u>
                    <div>
                        {m.body1}
                        <br />
                        <u><i><h3>{m.h2}</h3></i></u>
                        <Image
                            src="/padres.png"
                            alt="padre"
                            width={100}
                            height={40}
                            priority
                        />
                        {m.body2}
                        <br />
                        <u><i><h3>{m.h3}</h3></i></u>
                        {m.body3}
                        <br />
                    </div>
                    <Link href="/may-10May2026/p2">
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
