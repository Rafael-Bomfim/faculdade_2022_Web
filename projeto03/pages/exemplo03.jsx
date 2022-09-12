import estilo from "../styles/exemplo03.module.css"

export default function init(){
    return (
        <>
        <h1 className={estilo.vermelho}>Exemplo de css escopado</h1>
        <h1 id={estilo.cinza}>Estilo por id</h1>
        </>
    )
}