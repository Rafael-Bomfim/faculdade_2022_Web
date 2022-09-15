import Celula from "./celula"
import css from "../styles/linha.module.css"

 const Linha = (props) => {
    var line =[]
    var isBlack = !!props.preto

    
        for(var i = 0; i < props.dimensao; i++){
            line.push(<Celula preto={isBlack}/>)
            isBlack = !isBlack
        }
        
    
    return (
        <div className={css.lin}>
            {line}
        </div>
    )
}

export default Linha