export default function init(){
    return (
        <div>
            {span(20)}
        </div>
    )
}

function span(n){
    const vet = []
    for(let i = 0; i <= n; i++){
        vet.push(<span>{i}, </span>)
    }
    return vet
}

