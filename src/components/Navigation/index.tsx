'use client'

export default function Navigation() {
   return (
        <nav className="relative z-10 flex w-full justify-between gap-15 p-2 pl-3 pr-15 border-b-2 border-amber-300 bg-black font-semibold text-white">
            <div className="">
                <a href="/" className="text-sm font-bold lg:text-2xl flex items-center">
                <img src="medo.png" alt="medoicon"
                className="max-w-12 max-h-12"/>
                Ordo Realitas
                </a>
            </div>
            
            <div className="flex gap-x-10 items-center">
                <a href="#" className="navItem textoResponsivo">FAQ</a>
                <a href="#" className="navItem textoResponsivo">Servidor de Suporte</a>
                <a href="comandos" className="navItem textoResponsivo">Comandos</a>
            </div>
        </nav>
    )
}