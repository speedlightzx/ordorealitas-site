import QuestionResponse from "@/_components/QuestionResponse"

export default function faq() {
    return (
        <div className="w-full h-full bg-neutral-800 p-3">
            <div className="w-full h-full flex flex-wrap gap-5 justify-center">
                <QuestionResponse
                question="Como jogar com o Ordo Realitas?"
                response="Para jogar é bem simples, primeiramente você deve fazer sua ficha usando o comando /ficha, depois disso você libera algumas outras funções como o /duelo, /dungeon, /combate, etc. e para ficar mais forte você deve ganhar mais nex que é o seu “nível”."/>
            
                <QuestionResponse 
                question="Tem drops de itens?"
                response="Sim! Para conseguir itens você pode dropar nos comandos de /dungeon e /combate, ou matando monstros específicos, ou comprando no /loja."/>
            
                <QuestionResponse 
                question="O que tem que fazer no jogo?"
                response="Não tem um objetivo específico, eu diria que só ficar mais forte mesmo."/>

                <QuestionResponse 
                question="Tem como conseguir rituais?"
                response="Sim! É possível conseguir rituais transcendendo, dropando ou comprando pergaminhos de rituais."
                />

                <QuestionResponse 
                question="Como funciona o combate?"
                response="O combate contra monstros normais funcionam por turno, onde o jogador começa fazendo a primeira ação, e em seguida o monstro. Com sistema de dados, bônus de perícia, defesa e etc."
                />

                <QuestionResponse 
                question="Tem pvp?"
                response="Tem pvp sim! É possível fazer 1v1 com outros jogadores usando o comando /duelo."
                />

                <QuestionResponse 
                question="Tem como eu criar minha própria ficha de ordem paranormal?"
                response="Sim, é possível criar sua própria ficha de ordem paranormal usando o Ordo Realitas. Usando o comando /opficha o bot retorna uma ficha totalmente customizável de ordem paranormal e que pode calcular status automaticamente."
                />
            </div>
        </div>
    )
}