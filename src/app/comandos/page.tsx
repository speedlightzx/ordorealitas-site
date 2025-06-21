'use client'

import OrdemParanormalComandos from "@/components/OrdemParanormalComandos"
import OrdoRealitasComandos from "@/components/OrdoRealitasComandos"
import { useState } from "react"

export default function comandos() {

    type comandos = 'Ordo Realitas' | 'Ordem Paranormal'
    const [opcaoSelecionada, setOpcao] = useState<comandos>('Ordo Realitas')

    return (
        <div className="w-full h-screen bg-neutral-800 flex flex-col lg:flex-row items-center">

        <nav className="text-white gap-y-1 justify-center items-center lg:justify-normal list-none text-center lg:border-r-2 border-b-2 border-b-[#000000] border-r-[#000000] w-full lg:max-w-[25vh] h-full max-h-[25vh] lg:max-h-full flex flex-col">
            <li
            className={`opcaoComando w-[25vh] mt-15 ${opcaoSelecionada == 'Ordo Realitas' ? 'bg-[#ff0000]' : ''}`}
            onClick={() => setOpcao('Ordo Realitas')}>
            🎲 Ordo Realitas
            </li>
            
            <li 
            className={`opcaoComando w-[25vh] ${opcaoSelecionada == 'Ordem Paranormal' ? 'bg-[#ff0000]' : ''}`}
            onClick={() => setOpcao('Ordem Paranormal')}>
            💠 Ordem Paranormal
            </li>
        </nav>

        <section className="w-full h-full overflow-y-auto">
            {opcaoSelecionada == 'Ordo Realitas' && <OrdoRealitasComandos/>}
            {opcaoSelecionada == 'Ordem Paranormal' && <OrdemParanormalComandos />}
        </section>

        </div>
    )
}