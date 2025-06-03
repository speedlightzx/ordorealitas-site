export default function Home() {
  return (
    <div className="flex h-full flex-col gap-y-31">
      <section className="w-full h-[40rem] flex">
      <img src="elementos.png" alt="" 
      className="absolute inset-0 z-0 top-[-6rem] contrast-90 brightness-35"/>
      <div className="flex w-full h-full items-center ml-10 gap-5 z-10">
          <img className="border-2 rounded-full w-100 h-100 bg-black border-white" src="medo.png" alt="" />
          <h1 className="w-[30rem] h-[12rem] text-2xl flex font-semibold text-white">👋Olá! Eu sou o Ordo Realitas! Eu sou um bot de rpg de ordem paranormal!
          <br />
          <br />
          Atualmente estou em x servidores.
          </h1>

          <div className="gap-5 flex relative top-10">
            <button className="border-2 rounded-md p-2.5 text-white bg-purple-500 border-black font-semibold cursor-pointer transition duration-200 hover:bg-purple-700 hover:underline">Adicionar ao servidor</button>
            <button className="border-2 rounded-md p-2.5 text-white bg-red-500 border-black font-semibold cursor-pointer transition duration-200 hover:bg-red-700 hover:underline">Última Atualização</button>
          </div>
      </div>
      </section>

      <div className="bg-neutral-900 border-t-2 border-white relative">
      <section className="w-full items-center flex justify-end mt-10">
        <p className="text-white text-center ">Ordo Realitas é um bot de rpg dentro do discord que tem como base o sistema de Ordem Paranormal. Com o bot é possível criar sua própria ficha de Ordem Paranormal customizada do jeito que você quiser! É possível alterar uma ficha completa, que também calcula os status de acordo com classe e NEX. Pode te ajudar em mesas de RPG podendo guardar itens, rituais, perícias e poderes paranormais, e também, podendo esconder a ficha caso ninguém mais possa ver.
O Ordo Realitas também tem o próprio RPG, ele utiliza como base o sistema de Ordem Paranormal, no rpg do bot é possível criar sua ficha com alguns elementos customizáveis, e lutar contra monstros poderosos! É possível Transcender, comprar itens, comprar itens, e até mesmo batalhar contra outras pessoas! Tudo isso usando como base o sistema de Ordem Paranormal. :)</p>
        <img src="medo.png" alt="medo" className="w-70 h-70 "/>
      </section>

      </div>
    </div>
  );
}
