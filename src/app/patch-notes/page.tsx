export default function patch_notes() {
    return (
        <div className="w-full h-screen bg-neutral-800 p-2 overflow-y-auto ">
<h1 className="w-full text-center text-[#E0CBFF] underline text-2xl font-semibold">Última atualização: 12/02/2026</h1>

<div className="border-white flex w-full lg:flex-row flex-col items-center mt-5 gap-y-10">
    <section className="items-center w-1/2 justify-start flex flex-col">
        <h1 className="text-2xl font-bold mb-3 text-white">📌Novo</h1>
        <div className="overflow-y-auto shadow-md rounded-md border-[#FFD700] border-l-4 w-[35vh] lg:w-full h-screen max-h-[80vh] max-w-[70vh] text-white p-3">
            <p className="whitespace-pre-wrap text-sm">
                {`
[+] Novo botão adicionado nos combates: Habilidades.
[+] Agora é possível stackar itens utilizáveis.
[+] Adicionado itens amaldiçoados(armas e armaduras).
[+] Novos pergaminhos amaldiçoados: Pergaminho Amaldiçoador de Armas e Pergaminho Amaldiçoador de Proteções.
[+] Novo item: Bandagem.
[+] Novo item: Kit Médico.
[+] Maldições de armas adicionadas: Antielemento, Senciente, Repulsora, Energética, Erosiva, Lancinante e Sanguinária.
[+] Maldições de proteções adicionadas: Abascanta, Cinética, Voltaica, Repulsiva, Regenerativa.
[+] Novo equipável: Escudo.
[+] Novo ritual: Armadura de Sangue ★.
[+] Novo ritual: Fortalecimento Sensorial ★.
[+] Novo ritual: Descarnar ★★★.
[+] Novo ritual: Ferver Sangue ★★★.
[+] Novo ritual: Troca Justa ★★.
[+] Novo comando: /ajuda.
                `}
            </p>
        </div>
    </section>

    <section className="items-center w-1/2 justify-end flex flex-col">
        <h1 className="text-2xl font-bold mb-3 text-white">📝Alterações</h1>
                <div className="overflow-y-auto shadow-md rounded-md border-[#FFD700] border-l-4 w-[35vh] lg:w-full h-screen max-h-[80vh] max-w-[70vh] text-white p-3">
            <p className="whitespace-pre-wrap text-sm">
                {`
[~] Alterado as recompensas do /vote: Lâmina Femoral,  Mini Gun, Pergaminho1, Pergaminho2, Pergaminho Amaldiçoador de Armas e Pergaminho Amaldiçoador de Proteções
[~] Alterado o visual de alguns comandos.
[~] Agora os rituais são categorizados pelo elemento escolhido.
[~] Agora o revidar pode contra atacar dando dano elemental.
[~] Agora o /eitem mostra a raridade dos itens e um emoji de acordo com o tipo do item.
[~] Agora o /roll também mostra a rolagem de dados feita.
[~] Agora o /missoes mostra quanto tempo falta para resetar as missões.
[~] Aumentado a chance de spawn do Cultista Lunático e Enpap-X.
[+] Aumentado a chance de drop do Pergaminho3 na dungeon dos cultistas e na dungeon tier 3.
[+] Aumentado a chance de drop dos treinos veteranos de perícia na dungeon dos cultistas e na dungeon tier 3.
[+] Aumentado a chance de drop da Corrente do Condenado Eterno.
[+] Aumentada a vida do ritual de Tela de Ruído: 40->50.
[-] Aumentado o dano de um dos ataques do Enpap-X.
[-] Aumentado a DT dos testes de fortitude do Enpap-X: 15->20.
[-] Reduzido o buff de dano do Enpap-X: 10->1.
[-] Reduzido o dano de todos os ataques da Múmia Xipófaga.
                `}
            </p>
        </div>
    </section>
</div>

        </div>
    )
}