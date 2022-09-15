import Tabuleiro from "../components/tabuleiro"

export default function init(){
    return (
        <>
            <Tabuleiro/>
            <h1>Outro Tabuleiro</h1>
            <Tabuleiro dimensao={8}/>  
        </> 
    )
}