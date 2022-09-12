export default function inicio(props){
    return (
        <>
            <h1 style={{
                backgroundColor: props.numero >= 0? "blue" : "red",
                color: "#FFF",
                textAlign: props.direita? "right" : "left"
            }}>
                Valor: {props.numero}
            </h1>
            <h2 className={props.numero>=0? "verde":"cinza"}>
                Valor condicional (classe) : (props.numero)
            </h2>
        </>
    )
}