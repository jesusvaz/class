import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
//https://www.churchofjesuschrist.org/?lang=spa

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#002E5D] text-white sm:items-start">
        <Image

          src="/santa-fe-logo.png"
          alt="Logo del barriop Santa Fe"
          width={300}
          height={300}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            <Image

              src="/gary_e_stevenson_apostle.webp"
              alt="Next.js logo"
              width={100}
              height={40}
              priority
            />
            Élder Gary E. Stevenson
          </h1>
          <h2>
            Gary E. Stevenson fue sostenido para servir como miembro del Cuórum de los Doce Apóstoles de La Iglesia de Jesucristo de los Santos de los Últimos Días el 3 de octubre de 2015.

          </h2>
          <h3>
            Todo iba bien en la actividad familiarhasta que surgió la pregunta en mí
            Dónde están las llaves?
          </h3>


          <Link href="/p1">
            <div className="flex items-center gap-2">
              <FaArrowRight />
              <span>Empezar</span>
            </div>
          </Link>

        </div>
      </main>
    </div>
  );
}
