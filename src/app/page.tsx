'use client'

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col gap-y-20 overflow-x-hidden">
      { /* background */ }
      <img src="elementos.png" alt="elementos" 
      className="absolute inset-0 z-0 contrast-90 brightness-35 hidden lg:block"/>

      <img src="medoMobile.jpg" alt="medo" 
      className="absolute inset-0 z-0 top-[-6rem] contrast-90 brightness-35 block w-full lg:hidden"/>

      <section className="w-full h-screen max-h-[40rem] max-w-[85rem] z-10 flex">

      <div className="flex max-w-[40vh] md:max-w-[80vh] lg:max-w-full h-full w-full max-h-[40rem] border-white items-center justify-center ml-10 gap-5 z-10">
        { /* foto do bot e texto */ }
          <img className="border-2 rounded-full max-w-35 max-h-35 md:max-w-45 md:max-h-45 lg:max-w-70 lg:max-h-70 bg-black border-red-500" src="avatar.png" alt="avatar" />
          <h1 className="w-[30rem] h-[10rem] lg:text-2xl md:text-base text-sm flex font-semibold text-white">👋Olá! Eu sou o Ordo Realitas! Eu sou um bot de rpg de ordem paranormal!
          </h1>

        { /* botoes de adicionar e ver ultima atualizacao */ }
          <div className="gap-5 flex flex-col lg:flex-row">
            <button className="border-2 rounded-md p-2.5 textoResponsivo botaoInicioResponsivo text-white bg-purple-500 border-black font-semibold cursor-pointer transition duration-200 hover:bg-purple-700 hover:underline max-h-[8vh]">
            Adicionar ao servidor
            </button>

            <button className="border-2 rounded-md p-2.5 textoResponsivo botaoInicioResponsivo text-white bg-red-500 border-black font-semibold cursor-pointer transition duration-200 hover:bg-red-700 hover:underline max-h-[8vh]">
            Última Atualização
            </button>
          </div>
      </div>

      { /* secoes abaixo onde tem os elementos e textos */ }

      { /* medo */ }
      </section>

      <div className="bg-neutral-800 border-t-2 border-amber-300 relative">
      <section className="w-full items-center flex justify-end mt-10 p-3">
        <p className="text-white text-center textoResponsivo">Ordo Realitas é um bot de rpg dentro do discord que tem como base o sistema de Ordem Paranormal. Com o bot é possível criar sua própria ficha de Ordem Paranormal customizada do jeito que você quiser! É possível alterar uma ficha completa, que também calcula os status de acordo com classe e NEX. Pode te ajudar em mesas de RPG podendo guardar itens, rituais, perícias e poderes paranormais, e também, podendo esconder a ficha caso ninguém mais possa ver.
O Ordo Realitas também tem o próprio RPG, ele utiliza como base o sistema de Ordem Paranormal, no rpg do bot é possível criar sua ficha com alguns elementos customizáveis, e lutar contra monstros poderosos! É possível Transcender, comprar itens, comprar itens, e até mesmo batalhar contra outras pessoas! Tudo isso usando como base o sistema de Ordem Paranormal. :)</p>
        <img src="medo.png" alt="medo" className="elementoResponsivo medoSombra"/>
      </section>

{ /* conhecimento */ }
      <section className="w-full items-center flex justify-start mt-10 p-3">
      <img src="Conhecimento.webp" alt="conhecimento" className="elementoResponsivo conhecimentoSombra"/>
      <p className="text-white text-center textoResponsivo">Com o Ordo Realitas, você pode usar comandos que podem ajudar em suas mesas de rpg! O Ordo Realitas fornece comandos de criar uma ficha totalmente customizável de Ordem Paranormal, incluindo inventário, perícias, e etc. Além de calcular os status automaticamente de acordo com o NEX da ficha. E também inclui um comando de rolagem de dados.</p>
      </section>

{ /* energia */ }
      <section className="w-full items-center flex justify-end mt-10 p-3">
        <p className="text-white text-center textoResponsivo">O Ordo Realitas também tem o próprio rpg, onde é possível enfrentar diversos monstros do universo de Ordem Paranormal e monstros diferentes, aumentar o NEX do seu personagem, transcender, conseguir rituais e itens poderosos, fazer missões e muito mais! Jogue e se torne o mais forte!</p>
        <img src="Energia.webp" alt="energia" className="elementoResponsivo energiaSombra"/>
      </section>

{ /* sangue */ }
      <section className="w-full items-center flex justify-start mt-10 p-3">
      <img src="Sangue.webp" alt="sangue" className="elementoResponsivo sangueSombra"/>
      <p className="text-white text-center textoResponsivo">Além de batalhar contra diversos monstros poderosos do Ordo Realitas, também é possível batalhar contra outros jogadores. E no futuro será possível subir de ranking em um Leaderboard global...</p>
      </section>

{ /* morte */ }
      <section className="w-full items-center flex justify-end mt-10 p-3">
        <p className="text-white text-center textoResponsivo">⚙️O Ordo Realitas foi criado e desenvolvido por <span className="font-bold">speedlightzx</span>.
        <br />
        💠 Criador de Ordem Paranormal: <span className="font-bold">Rafael Lange / Cellbit.</span>
        <br />
        📚 Referências: <span className="font-bold">Ordem Paranormal RPG Livro de Regras</span> e <span className="font-bold">Material Extra comunidade PlayRay.</span>
        </p>
        <img src="Morte.webp" alt="morte" className="elementoResponsivo morteSombra"/>
      </section>

    { /* simbolo maior */ }
      <div className="flex justify-center items-center w-full relative">
        <img src="maior.png" alt="simbolo maior" 
        className="max-w-120 max-h-120 sm:max-w-160 sm:max-h-160 simboloMaior"/>
        <div className="absolute top-1/2">
          <button className="botaoSimboloMaior border-2 rounded-md p-2.5 max-h-[10vh] text-white bg-purple-500 border-black font-semibold cursor-pointer transition duration-200 hover:bg-purple-700 hover:underline">Adicionar ao servidor</button>
        </div>
      </div>

      </div>
    </div>
  );
}
