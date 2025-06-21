import ComandosLayout from "../ComandosLayout";

export default function OrdemParanormalComandos() {
    return (
        <div className="p-2 flex flex-col gap-y-2">
            <ComandosLayout Titulo="/opficha" Descricao="Permite criar uma ficha de Ordem Paranormal totalmente customizável. Também calcula os status automaticamente."/>
            <ComandosLayout Titulo="/roll" Descricao="Role dados. O bot retorna o maior dado somado, soma de todos os dados, e todos os dados rolados."/>
        </div>
    )
}