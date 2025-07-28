import Link from "next/link"

export default function Footerinfo() {
    return (
        <div className="bg-neutral-900 h-full w-full lg:max-w-full lg:max-h-[15rem] overflow-x-hidden relative border-t-[#FFD700] border-2">
            <footer className="lg:flex lg:justify-center w-full">
                <div className="lg:max-w-[20rem] w-full text-center my-auto items-center justify-center mt-10">
                     <h1 className="font-bold lg:text-2xl text-[20px] text-white">Ordo Realitas</h1>
                     <p className="textoResponsivo text-white">Ordo Realitas busca contribuir e conectar comunidades através de seus comandos interativos de rpg com o tema de Ordem Paranormal.</p>
                 </div>

                 <div className="lg:max-w-[20rem] w-full text-center my-auto items-center justify-center mt-10">
                     <h1 className="font-bold text-white lg:text-2xl text-[20px]">Links</h1>
                     <ul>
                         <li>
                             <Link href="https://discord.gg/nx4P9PaNCm" target="_blank" className="navItem textoResponsivo text-white">Servidor de Suporte</Link>
                         </li>
                         <li>
                         <Link href="comandos" prefetch className="navItem textoResponsivo text-white">Comandos</Link>
                         </li>
                     </ul>
                 </div>

                 <div className="lg:max-w-[20rem] w-full text-center my-auto items-center justify-center mt-10">
                     <h1 className="font-bold lg:text-2xl text-[20px] text-white">Termos</h1>
                     <ul>
                         <li>
                             <Link href="https://www.notion.so/Pol-tica-de-Privacidade-Ordo-Realitas-13539c003fe280dfb698d6a43dc4ae26" target="_blank" className="navItem textoResponsivo text-white">
                             Política de Privacidade</Link>
                         </li>
                         <li>
                             <Link href="https://liberating-dart-6ed.notion.site/Termos-de-Servi-o-Ordo-Realitas-13539c003fe28005a038d9bafdc4112a" target="_blank" className="navItem textoResponsivo text-white">
                             Termos de Serviço</Link>
                         </li>
                     </ul>
                 </div>
            </footer>
<h1 className="text-white w-full text-center mt-5 textoResponsivo">© 2025 speedlightzx - Todos os direitos reservados</h1>
        </div>
    )
}