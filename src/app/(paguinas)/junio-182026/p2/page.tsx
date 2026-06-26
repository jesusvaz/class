'use client'

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLang } from "../../../context/LanguageContext";


export default function P2() {
    const { t } = useLang()
    const m = t.may.p2

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="relative flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#002E5D] text-white sm:items-start">

                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1>Como reconocer los susurros del espiritu santo</h1>
                    <Link
                        href="https://www.youtube.com/watch?v=o0N3_TozU14&t=6s"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/bednard.png"
                            alt="hermanos ministrantes"
                            width={200}
                            height={100}
                            className="rounded-2xl"
                            priority
                        />
                    </Link>
                    {/* https://www.youtube.com/watch?v=o0N3_TozU14&t=6s */}
                    <Link href="/junio-182026/p3">
                        <div className="flex items-center gap-2 mt-6">
                            <FaArrowRight />
                            <span>Siguiente</span>
                        </div>
                    </Link>
                    <p>
                        Si tu estas haciendo tu parte solo obedece por que el espiritu os indicara 
                        lo que debeis de decir en ese momento:
                        <br/>
                        <Link
                            href="https://www.churchofjesuschrist.org/study/scriptures/nt/luke/12?lang=spa"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "underline" }}
                        >
                            Lucas 12:12
                        </Link>
                    </p>
                    <Link href="/junio-182026/p3">
                        <div className="flex items-center gap-2 mt-6">
                            <FaArrowRight />
                            <span>Siguiente</span>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
}
