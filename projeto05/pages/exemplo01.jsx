import Lista from "../components/Lista"
import Item from "../components/Item"

export default function init(){
    // return (
    //     <>
    //         <Lista conteudo="ADS"/>
    //         <Lista conteudo="FATEC"/>
    //     </>
    // )
    return (
        <>
            <Lista>
                <Item conteudo="ADS"/>
                <Item conteudo="DSM"/>
                <Item conteudo="FATEC"/>
            </Lista>
        </>
    )
}