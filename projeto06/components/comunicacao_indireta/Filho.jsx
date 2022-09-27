export default function init(props){
    return(
        <>
            <h1>Filho</h1>
            <button onClick={()=>props.funcao(4, 6)}>Somar</button>
        </>
    )
}