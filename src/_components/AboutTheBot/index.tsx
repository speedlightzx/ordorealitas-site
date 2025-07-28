import ElementSection from "../ElementSection";
import LargerSymbol from "../LargerSymbol";

export default function AboutTheBot() {
    return (
      <div className="bg-neutral-800 border-t-2 border-amber-300 relative">

{ /* medo */ }
    <ElementSection>
        <p className="text-white text-center textoResponsivo">Ordo Realitas é um bot de rpg dentro do discord que tem como base o sistema de Ordem Paranormal. Com o bot é possível criar sua própria ficha de Ordem Paranormal customizada do jeito que você quiser! É possível alterar uma ficha completa, que também calcula os status de acordo com classe e NEX. Pode te ajudar em mesas de RPG podendo guardar itens, rituais, perícias e poderes paranormais, e também, podendo esconder a ficha caso ninguém mais possa ver.
O Ordo Realitas também tem o próprio RPG, ele utiliza como base o sistema de Ordem Paranormal, no rpg do bot é possível criar sua ficha com alguns elementos customizáveis, e lutar contra monstros poderosos! É possível Transcender, comprar itens, comprar itens, e até mesmo batalhar contra outras pessoas! Tudo isso usando como base o sistema de Ordem Paranormal. :)</p>
        <img src="medo.png" alt="medo" className="elementoResponsivo medoSombra"/>
    </ElementSection>

{ /* conhecimento */ }
      <ElementSection>
      <img src="Conhecimento.webp" alt="conhecimento" className="elementoResponsivo conhecimentoSombra"/>
      <p className="text-white text-center textoResponsivo">Com o Ordo Realitas, você pode usar comandos que podem ajudar em suas mesas de rpg! O Ordo Realitas fornece comandos de criar uma ficha totalmente customizável de Ordem Paranormal, incluindo inventário, perícias, e etc. Além de calcular os status automaticamente de acordo com o NEX da ficha. E também inclui um comando de rolagem de dados.</p>
      </ElementSection>

{ /* energia */ }
      <ElementSection>
        <p className="text-white text-center textoResponsivo">O Ordo Realitas também tem o próprio rpg, onde é possível enfrentar diversos monstros do universo de Ordem Paranormal e monstros diferentes, aumentar o NEX do seu personagem, transcender, conseguir rituais e itens poderosos, fazer missões e muito mais! Jogue e se torne o mais forte!</p>
        <img src="Energia.webp" alt="energia" className="elementoResponsivo energiaSombra"/>
      </ElementSection>

{ /* sangue */ }
      <ElementSection>
      <img src="Sangue.webp" alt="sangue" className="elementoResponsivo sangueSombra"/>
      <p className="text-white text-center textoResponsivo">Além de batalhar contra diversos monstros poderosos do Ordo Realitas, também é possível batalhar contra outros jogadores. E no futuro será possível subir de ranking em um Leaderboard global...</p>
      </ElementSection>

{ /* morte */ }
      <ElementSection morte>
        <p className="text-white text-center textoResponsivo">⚙️O Ordo Realitas foi criado e desenvolvido por <span className="font-bold">speedlightzx</span>.
        <br />
        💠 Criador de Ordem Paranormal: <span className="font-bold">Rafael Lange / Cellbit.</span>
        <br />
        📚 Referências: <span className="font-bold">Ordem Paranormal RPG Livro de Regras</span> e <span className="font-bold">Material Extra comunidade PlayRay.</span>
        </p>
        <img src="Morte.webp" alt="morte" className="elementoResponsivo morteSombra"/>
      </ElementSection>

    { /* simbolo maior */ }
    <LargerSymbol />

      </div>
    )
}