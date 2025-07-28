import ComandosLayout from "../ComandosLayout";

export default function OrdoRealitasComandos() {
    return (
        <div className="p-2 flex flex-col gap-y-2">
            <ComandosLayout Titulo="/ficha" Descricao="Permite criar uma ficha para jogar o RPG do Ordo Realitas. Caso já tenha uma ficha criada, você verá toda a sua ficha de personagem."/>
            <ComandosLayout Titulo="/combate" Descricao="Entre em combate com monstros de baixo NEX."/>
            <ComandosLayout Titulo="/duelo" Descricao="Desafie outro jogador para um duelo."/>
            <ComandosLayout Titulo="/dungeon" Descricao="Desafie dungeons de diferentes níveis e monstros e ganhe itens poderosos."/>
            <ComandosLayout Titulo="/eitem" Descricao="Equipe um item desejado."/>
            <ComandosLayout Titulo="/eritual" Descricao="Equipe um ritual desejado."/>
            <ComandosLayout Titulo="/loja" Descricao="Compre ou venda itens. A loja muda de itens diariamente."/>
            <ComandosLayout Titulo="/missoes" Descricao="Veja suas missões diárias. Ganhe dinheiro e recompensas aleatórias."/>
            <ComandosLayout Titulo="/vote" Descricao="Vote no Ordo Realitas e ganhe recompensas!"/>
            <ComandosLayout Titulo="/info" Descricao="Veja as informações do Ordo Realitas."/>
        </div>
    )
}