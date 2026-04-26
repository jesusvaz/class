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
                        Desafio
                    </h1>
                    <h2>

                    </h2>
                    <h3>
                        Tres maneras de encontrar las llaves: para bendecir sus vidas y las vidas de otras personas. Porque la responsabilidad de obtener la diabetes es de que la usemos Y si vamos a nuestro prójimo así como Jesucristo lo hizo en su tiempo durante la Tierra. <br />

                        1.- Prepárese para el servicio misional <br />
                        Cada día tenemos la oportunidad de compartir el evangelio aún en nuestra propia familia. <br />
                        Muchos ojos nos están observando y viendo cómo nos comportamosbr    <br />
                        2.- Así están al templo

                        Tenemos la oportunidad de redimir los muertos trabajando y alineándose en la meta de nuestro padre  celestial que es llevar a cabo la inmortalidad y la vida eterna del hombre para que regresen de nuevo a su presencia  con todos los convenios que el Señor nos permite hacer hoy en día. <br />
                        3.- Sigan adelante co fe <br />


                    </h3>


                    <Link href="/p5">
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
