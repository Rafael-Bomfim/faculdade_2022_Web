import Pai from "../components/comunicacao_direta/Pai"

export default function init(){
    return(
        <>
        <h1>Teste pai</h1>
            <Pai/>
            <h2>-----------------------------------</h2>
            <Pai nome="Cebolinha" sobrenome="Souza"/>
        </>
    )
}