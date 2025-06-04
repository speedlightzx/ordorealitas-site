export default function Navigation() {
   return (
        <nav className="relative z-10 flex w-full justify-between gap-15 p-2 pl-3 pr-15 border-b-2 border-amber-300 bg-black font-semibold text-white">
            <div className="flex items-center gap-x-1">
                 <img src="medo.png" alt="medoicon"
                className="max-w-12 max-h-12"/>
                <h1 className="text-sm font-bold lg:text-2xl">Ordo Realitas</h1>
            </div>
            
            <div className="flex gap-x-10 items-center">
                <a href="#" className="navItem textoResponsivo">FAQ</a>
                <a href="#" className="navItem textoResponsivo">Servidor de Suporte</a>
                <a href="#" className="navItem textoResponsivo">Comandos</a>
            </div>
        </nav>
    )
}