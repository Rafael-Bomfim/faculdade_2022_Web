export default function init(props){
    let qtd = []
    for(let i = 0; i <= props.n; i++){
        qtd.push(<span>{i}, </span>)
    }
    return (
        <>
            <h1>{qtd}</h1>
        </>
    )
}

