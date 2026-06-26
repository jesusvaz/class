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
                    <h1>El señor a preparado las escrituras desde el principio</h1>
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
                        Las escrituras han salido de la obscuidad para ensanchar nuestro entendimiento de loas enseñanzas de los profetas y de Jesucristo.
                        <br />
                        <Link
                            href="https://www.churchofjesuschrist.org/study/scriptures?lang=spa"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "underline" }}
                        >
                            Escrituras
                        </Link>
                        <br />
                        En especial para enseñar que hay un Dios y que ha decretado leyes para vivir en la senda de los convenios.
                        <br />
                        Buquemos tener unn testimonio por medio del espiritú. Escudriñemos y Meditemos las escrituras.
                    </p>
                     <Link href="/junio-182026/p4">
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
