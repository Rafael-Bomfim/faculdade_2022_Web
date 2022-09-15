export default function init(){
    const nomes = ["Cebolinha", "Monica", "Magali", "Cascão"]

    //Forma 1
    function renderizarLista(){
        let Lista = []
        for (let index = 0; index < nomes.length; index++) {
            const element = nomes[index];
            Lista.push(<li key={index}>{element}</li>)
        }
        return Lista; 
    }

    //Forma 2
    function renderizarListaMap(){
        return nomes.map((elemento, i) => <li key={i}>
        {elemento}</li>)
    }


    return(
        <>
        <h1>Nomes</h1>
        <ol>
         {renderizarLista()}
        </ol>

        <h1>Nomes - Forma 2</h1>
        <ul>
            {renderizarListaMap()}
        </ul>
        </>
    )
}