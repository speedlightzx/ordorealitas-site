export default function Navigation() {
   return (
        <nav className="relative z-10 inset-0 flex w-full justify-between p-2 pl-3 pr-15 border-b-2 border-b-white bg-black font-semibold text-white">
            <div className="flex items-center gap-x-1">
                 <img src="medo.png" alt="medoicon"
                className="max-w-12 max-h-12"/>
                <h1 className="text-2xl font-bold">Ordo Realitas</h1>
            </div>
            
            <div className="flex gap-x-10 items-center">
                <a href="#" className="navItem">FAQ</a>
                <a href="#" className="navItem">Servidor de Suporte</a>
                <a href="#" className="navItem">Comandos</a>
            </div>
        </nav>
    )
}