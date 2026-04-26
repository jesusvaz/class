import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


export default function Llaves() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#002E5D] text-white sm:items-start">

                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">

                        Tentaciones
                    </h1>
                    <h2>

                    </h2>
                    <h3>
                        Todos los días enfrentamos diferentes tentaciones que ponen a prueba nuestro testimonio. <br />
                        Como dice la Biblia una tercera parte de los hijos de Dios no estuvo de acuerdo con el plan de salvación y <br />
                         se privaron de la oportunidad de aprender y tener experiencias con un cuerpo físico. Podemos continuar siempre fieles porque al final dice Elder Holland que ganaremos. <br />



                    </h3>


                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <FaArrowRight />
                            <span>Reiniciar</span>
                        </div>
                    </Link>

                </div>
            </main>
        </div>
    );
}
