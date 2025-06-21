interface iComandosLayout {
    Titulo: string,
    Descricao: string
}

export default function ComandosLayout({ Titulo, Descricao }: iComandosLayout) {
    return (
        <div className="bg-[#111C3A] p-4 rounded-md border-l-4 border-[#7F00FF] shadow-md">
            <strong className="text-[#61dafbaa] text-2xl">{Titulo}</strong>
            <p className="text-white">{Descricao}</p>
        </div>
    )
}