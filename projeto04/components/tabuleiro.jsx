import Linha from "./linha"

export default function init(props){
    let tabuleiro = []
    let isBlack = props.preto
    for(var i = 0; i < props.dimensao; i++){
        tabuleiro.push(
        <div>
            <Linha preto={isBlack} dimensao={props.dimensao} />  
        </div>
        )
        isBlack = !isBlack
    }
    return (
        <>
            {tabuleiro}
        </>
    )
}