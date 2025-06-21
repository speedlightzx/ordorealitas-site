export default function patch_notes() {
    return (
        <div className="w-full h-screen bg-neutral-800 p-2 overflow-y-auto ">
<h1 className="w-full text-center text-[#E0CBFF] underline text-2xl font-semibold">Última atualização: 21/05/2025</h1>

<div className="border-white flex w-full lg:flex-row flex-col items-center mt-5 gap-y-10">
    <section className="items-center w-1/2 justify-start flex flex-col">
        <h1 className="text-2xl font-bold mb-3 text-white">📌Novo</h1>
        <div className="overflow-y-auto shadow-md rounded-md border-[#FFD700] border-l-4 w-[35vh] lg:w-full h-screen max-h-[80vh] max-w-[70vh] text-white p-3">
            <p className="whitespace-pre-wrap text-sm">
                {`
[+] Adicionado sistema de Trilhas.
[+] Trilhas adicionadas: 
      Combatente: Guerreiro e Tropa de Choque.
      Especialista: Médico de Campo e Atirador de Elite.
      Ocultista: Conduíte, Flagelador e Lâmina Paranormal.
[+] Adicionado teste de Reflexos.
[+] Adicionado teste de Fortitude.
[+] Novo item: Treino de Medicina: Veterano.
[+] Agora a perícia de Medicina não é mais completamente inútil.
[+] Adicionado opção de resetar ficha na criação de uma ficha.
[~] Os monstros Guardião Ósseo, Escutado, Perturbado de Energia e Anárquico Descontrolado podem fazer o jogador passar por um teste de resistência.

[+] Novo ritual: Hemofagia ★★.
[+] Novo ritual: Proteção contra Rituais ★★.
[+] Novo ritual: Rejeitar Névoa ★★.
[+] Novo ritual: Aprimorar Mente ★★.
[+] Novo ritual: Arma Atroz ★.
[+] Novo ritual: Paradoxo ★★.
[+] Novo ritual: Espirais da Perdição ★.
[+] Novo poder paranormal: Potencial Reaproveitado.
[+] Novo poder paranormal: Precognição.
[+] Novo item: Treino de Reflexos: Veterano.

[+] Adicionado monstros com chance de spawn que são mais fortes do que o comum...
[+] Nex máximo agora é 75%.
[+] Novas dungeons adicionadas.
[+] Novos monstros adicionados.
[+] Novas missões adicionadas.
[+] Novos itens únicos de monstros adicionados.
                `}
            </p>
        </div>
    </section>

    <section className="items-center w-1/2 justify-end flex flex-col">
        <h1 className="text-2xl font-bold mb-3 text-white">📝Alterações</h1>
                <div className="overflow-y-auto shadow-md rounded-md border-[#FFD700] border-l-4 w-[35vh] lg:w-full h-screen max-h-[80vh] max-w-[70vh] text-white p-3">
            <p className="whitespace-pre-wrap text-sm">
                {`
[~] As missões agora mostram o progresso.
[~] A opção de bloquear agora só aparece quando tem algum bônus de fortitude.
[+] Dama de Sangue agora pode dropar Empaladora Sangrenta.
[+] Lembrado agora pode dropar Hive Mind.
[+] Aumentado o dano do Deflagração de Energia: 3d10+10->4d10+10.
[+] Aumentado o dano normal e crítico de todos os rituais de amaldiçoar arma com elemento: 1d6->1d8, 3d6->3d8.
[+] Sniper agora tem mais chance de dar crítico.
[-] Bloquear agora não usa mais vigor para somar no dano reduzido ( exceto com casca grossa ).
[-] Aumentado levemente a vida dos monstros das dungeon tier 1 e 2.
[-] Diminuído o dano de perfuração do Guardião Ósseo.
[-] Aumentado levemente o dano de sanidade do Perturbado de Energia.
[-] Aumentado levemente a defesa de alguns monstros.
[-] Aumentado o preço da Katana Desfragmentada e Tridente para 6500.
[-] Diminuído o dano do Flecha Flamejante: 5d10+10->5d10, 9d8+5->8d8.
[-] Aumentado o custo de PE do Deflagração de Energia: 6->8.
[-] Aumentado o custo de PE do Aprimorar Físico: 4->8.
[-] Treino de Pontaria: Veterano e Treino de Luta: Veterano não aparecem mais no /loja.
                `}
            </p>
        </div>
    </section>
</div>

        </div>
    )
}