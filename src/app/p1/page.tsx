import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { MdFlightClass } from "react-icons/md";
export default function P1() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#002E5D] text-white sm:items-start">
                <div>
                    <Image
                        //imagen dde la camioneta
                        src="/sin-llave.png"
                        alt="Next.js logo"
                        width={150}
                        height={100}
                        priority
                    />
                    <h3>
                        El auto tenía un potencial enorme pero sin las llaves solamente era un pedazo de lámina y plástico al cual no podíamos entrar
                    </h3>
                    <p>
                        Que decisiones en la vida diaria nos dejan en la situación de no poder usar el automóvil?<br />
                        Que herramientas tenemos para echar a andar el auto?<br />
                        La expiación lo hace posible <br />
                        Los pasos del arrepentimiento: sentir dolor,pedir perdón y no volverlo a hacer

                    </p>
                    <Link href="/p2" >
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