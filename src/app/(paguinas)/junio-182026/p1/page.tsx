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
                    <Link
                        href="https://www.youtube.com/watch?v=68QMfszZJYU"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/pampanos.png"
                            alt="hermanos ministrantes"
                            width={200}
                            height={100}
                            className="rounded-2xl"
                            priority
                        />
                    </Link>

                    <h1 className="mt-6 text-5xl font-extrabold">
                        Yo soy la vid verdadera.
                        Ustedes son los pámpanos
                    </h1>


                    <br />
                    <i>Cómo podemos producir buenos frutos?</i>
                    <br /><br />
                    <ul className="list-disc pl-6">
                        <li>Estudio de las escrituras</li>
                        <li>Ver videos de la conferencia general</li>
                        <li>
                            Clases que nos dieron en la capilla
                        </li>
                        <li>
                            Lecciones aprendidas en el templo
                        </li>

                    </ul>
                    <Link href="/junio-182026/p2">
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
