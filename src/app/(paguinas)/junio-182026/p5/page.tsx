// https://youtu.be/yY8JbFuGQIg?si=d25MuaOhVgc6q6d0

'use client'

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLang } from "../../../context/LanguageContext";


export default function P5() {
    const { t } = useLang()
    const m = t.jun18.p5

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="relative flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#002E5D] text-white sm:items-start">

                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1>{m.h1}</h1>

                    <Link
                        href="https://youtu.be/yY8JbFuGQIg?si=d25MuaOhVgc6q6d0"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/bednard.png"
                            alt="hermanos ministrantes"
                            width={200}
                            height={150}
                            className="rounded-2xl"
                            priority
                        />
                    </Link>

                    {m.body}
                    <hr />
                    <ul>
                        <li>{m.li1}</li>
                        <li>{m.li2}</li>
                        <li>{m.li3}</li>
                    </ul>

                    <h2><u>{m.task}</u></h2>
                    <h2>{m.task2}</h2>
                    <Link
                        href="https://youtu.be/yY8JbFuGQIg?si=d25MuaOhVgc6q6d0"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/Nelson.png"
                            alt="hermanos ministrantes"
                            width={200}
                            height={150}
                            className="rounded-2xl"
                            priority
                        />
                    </Link>

                    <Link href="/junio-182026">
                        <div className="flex items-center gap-2 mt-6">
                            <FaArrowRight />
                            <span>{m.goBack}</span>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
}
