import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


export default function Llaves() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#002E5D] text-white sm:items-start">

                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        <Image

                            src="/restauracion2.png"
                            alt="imposicion de manos"
                            width={100}
                            height={40}
                            priority
                        />
                        Restauracion
                    </h1>
                    <h2>
                        El ibispo tiene es rsponsable del sacerdocio aarónico        </h2>
                    <h3>
                        El 15 de mayo se restauraron las llaves del sacerdocio armónico por medio de Juan el bautista, lo cual nos permite regresar de regreso a nuestros padres celestiales por medio del bautismo. Y aquí quiero que hagan una pausa y mediten <br />
                        ¿Qué pasaría si no pudiéramos bautizarnos?<br />
                        Y esto va tanto para los bautismos en capillas como para los templos.<br />
                        ¿Qué pasaría sin las ordenanzas de la santa cena?<br />
                        Todo esto es posible por el propio modo y obtener el sacerdocio por medio de nuestros líderes.<br />

                    </h3>


                    <Link href="/p4">
                        <div className="flex items-center gap-2">
                            <FaArrowRight />
                            <span>Siguiente</span>
                        </div>
                    </Link>

                </div>
            </main>
        </div>
    );
}
