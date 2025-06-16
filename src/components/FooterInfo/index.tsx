'use client'

export default function Footerinfo() {
    return (
        <div className="bg-neutral-900 h-screen w-full lg:max-w-full lg:max-h-[15rem] overflow-x-hidden relative">
            
            <footer className="flex h-[13rem] w-full ml-10 justify-center flex-col lg:flex-row">
                <div className="lg:max-w-[20rem] w-full text-center my-auto items-center justify-center mt-10">
                    <h1 className="font-bold lg:text-2xl text-xs text-white">Ordo Realitas</h1>
                    <p className="textoResponsivo text-white">Ordo Realitas busca contribuir e conectar comunidades através de seus comandos interativos de rpg com o tema de Ordem Paranormal.</p>
                </div>

                <div className="lg:max-w-[20rem] w-full text-center my-auto items-center justify-center">
                    <h1 className="font-bold text-white lg:text-2xl text-xs">Links</h1>
                    <ul>
                        <li>
                            <a onClick={() => window.open('https://discord.gg/nx4P9PaNCm')} href="#" className="navItem textoResponsivo text-white">Servidor de Suporte</a>
                        </li>
                        <li>
                        <a href="#" className="navItem textoResponsivo text-white">Comandos</a>
                        </li>
                    </ul>
                </div>

                <div className="lg:max-w-[20rem] w-full text-center my-auto items-center justify-center">
                    <h1 className="font-bold lg:text-2xl text-xs text-white">Termos</h1>
                    <ul>
                        <li>
                            <a onClick={() => window.open('https://www.notion.so/Pol-tica-de-Privacidade-Ordo-Realitas-13539c003fe280dfb698d6a43dc4ae26')} href="#" className="navItem textoResponsivo text-white">
                            Política de Privacidade</a>
                        </li>
                        <li>
                            <a onClick={() => window.open('https://liberating-dart-6ed.notion.site/Termos-de-Servi-o-Ordo-Realitas-13539c003fe28005a038d9bafdc4112a')} href="#" className="navItem textoResponsivo text-white">
                            Termos de Serviço</a>
                        </li>
                    </ul>
                </div>
            </footer>
            <h1 className="text-white w-full text-center textoResponsivo">© 2025 speedlightzx - Todos os direitos reservados</h1>
        </div>
    )
}