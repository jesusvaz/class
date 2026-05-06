'use client'

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
// import { useLang } from "../context/LanguageContext";
// import LanguageSwitcher from "../components/LanguageSwitcher";

export default function P1() {
    // const { t } = useLang()

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="relative flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#002E5D] text-white sm:items-start">
                {/* <LanguageSwitcher /> */}
                <div>
                    <Image
                        src="/sin-llave.png"
                        alt="Sin llave"
                        width={150}
                        height={100}
                        priority
                    />
                    <h3>Chuy</h3>
                    <p>
                        vazquez<br />
                        carrillo<br />
                        el mero<br />
                    mero
                    </p>
                    <Link href="/p2">
                        <div className="flex items-center gap-2">
                            <FaArrowRight />
                            <span>next</span>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
}
