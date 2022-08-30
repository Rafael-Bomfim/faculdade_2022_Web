export default function Titulo(props){

    return props.pequeno ? (
            <>
                <p>{props.titulo}</p>
                <p>{props.subtitulo}</p>
            </>
    ) : (
             <>  {/* utilizando react fragment  */}
                <h1>{props.titulo}</h1>
                <h2>{props.subtitulo}</h2>
            </>
    )
}