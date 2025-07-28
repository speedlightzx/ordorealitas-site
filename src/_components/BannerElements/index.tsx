import Link from "next/link"

export default function BannerElements() {
    return (
    <div className="w-full h-screen max-h-[40rem] max-w-[85rem] z-10 flex">
      <div className="flex flex-col lg:flex-row max-w-[40vh] md:max-w-[80vh] lg:max-w-full h-full w-full max-h-[40rem] border-white items-center justify-center ml-10 gap-5 z-10">
        { /* foto do bot e texto */ }
          <img className="border-2 rounded-full max-w-50 max-h-50 md:max-w-45 md:max-h-45 lg:max-w-70 lg:max-h-70 bg-black border-red-500" src="avatar.png" alt="avatar" />
          <h1 className="lg:max-w-[30rem] w-full text-center h-[10rem] text-2xl flex font-semibold text-white">👋Olá! Eu sou o Ordo Realitas! Eu sou um bot de rpg de ordem paranormal!
          </h1>

        { /* links de adicionar o bot e ver ultima atualizacao */ }
          <div className="gap-5 flex">
            <Link
            target="_blank"
            href='https://discord.com/api/oauth2/authorize?client_id=1042204545012473926&permissions=277025516545&scope=bot%20applications.commands'
            className="border-2 rounded-md p-2.5 botoesInicioResponsivo text-white bg-purple-500 border-black font-semibold cursor-pointer transition duration-200 hover:bg-purple-700 hover:underline">
            Adicionar ao servidor
            </Link>

            <Link
            href='patch-notes'
            prefetch
            className="border-2 rounded-md p-2.5 botoesInicioResponsivo text-white bg-red-500 border-black font-semibold cursor-pointer transition duration-200 hover:bg-red-700 hover:underline">
            Última Atualização
            </Link>
          </div>
      </div>
    </div>
    )
}