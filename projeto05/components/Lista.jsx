export default function init(props){
    return (
        <>
            <h1>Lista de Valores</h1>
            <ul>
                {props.children}
            </ul>
        </>
    )
}