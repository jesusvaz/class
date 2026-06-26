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
                        href="https://www.youtube.com/watch?v=68QMfszZJYU"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <br/>
                        <Image
                            src="/ulises.png"
                            alt="hermanos ministrantes"
                            width={500}
                            height={100}
                            priority
                        />
                    </Link>
                    <Link href="/junio-182026/p1">
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
