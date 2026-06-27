'use client'

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLang } from "../../../context/LanguageContext";


export default function P3() {
    const { t } = useLang()
    const m = t.jun18.p3

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="relative flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#002E5D] text-white sm:items-start">

                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1>{m.h1}</h1>
                    <Link
                        href="https://youtu.be/Ghtzq_wOGIU?si=rVfqh3LdZnG_IZfA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/Chistoferson.png"
                            alt="hermanos ministrantes"
                            width={200}
                            height={100}
                            className="rounded-2xl"
                            priority
                        />
                    </Link>

                    <p>
                        {m.body1}
                        <br />
                        <Link
                            href="https://www.churchofjesuschrist.org/study/scriptures?lang=spa"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "underline" }}
                        >
                            {m.linkText}
                        </Link>
                        <br />
                        {m.body2}
                        <br />
                        {m.body3}
                    </p>
                    <Link href="/junio-182026/p4">
                        <div className="flex items-center gap-2 mt-6">
                            <FaArrowRight />
                            <span>{m.next}</span>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
}
