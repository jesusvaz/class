import Image from "next/image";
import Link from "next/link";
//https://www.churchofjesuschrist.org/?lang=spa
import { MdFlightClass } from "react-icons/md";
export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#002E5D] text-white sm:items-start">
                <div>
                    <Link href="/" >
                        Inicio
                    </Link>
                    {/* <Link href="https://www.youtube.com/watch?v=xWu5ZoH3Hpw" target="_blank">
                        Ver Video
                    </Link> */}
                </div>
            </main>
        </div>
    );
}
