import Link from "next/link"

export default function Navigation() {
   return (
        <nav className="relative z-20 flex w-full justify-between gap-15 p-2 pl-3 pr-15 border-b-2 border-amber-300 bg-black font-semibold text-white">
            <div>
                <Link href="/" prefetch className="text-sm font-bold lg:text-2xl flex items-center">
                <img src="medo.png" alt="medoicon"
                className="max-w-12 max-h-12"/>
                Ordo Realitas
                </Link>
            </div>
            
            <div className="flex gap-x-10 items-center">
                <Link href="faq" prefetch className="navItem textoResponsivo">FAQ</Link>
                <Link href="https://discord.gg/nx4P9PaNCm" target="_blank" className="navItem textoResponsivo">Servidor de Suporte</Link>
                <Link href="comandos" prefetch className="navItem textoResponsivo">Comandos</Link>
            </div>
        </nav>
    )
}