export default function init(props){

    let resultado = 0;
    let operador ='';
    let operacao ='';

    if (props.soma){
        resultado = soma(props.num1, props.num2);
        operador = "+"
        operacao = "da Soma"
    }
    else if (props.subtracao){
        resultado = subtracao(props.num1, props.num2);
        operador = "-"
        operacao = "da Subtração"
    }
    else if (props.multiplicacao){
        resultado = multiplicacao(props.num1, props.num2);
        operador = "*"
        operacao = "da Multiplicação"
    }
    else if (props.divisao){
        if(props.num2 != 0){
            resultado = divisao(props.num1, props.num2);
            operador = "/"
            operacao = "da Divisão"
        }
        else{
            return (
                <>
                    <h1>Divisão por 0</h1>
                </>
            )
        }
    }
    else{
        return (
            <>
                <h1>Operação inválida</h1>
            </>
        )
    }

    return (
        <>
            <h2>Resultado {operacao}</h2>
            <h3>{props.num1} {operador} {props.num2} = {resultado}</h3>
        </>
    )
}

function soma(a, b){
    return a+b
}

function subtracao(a, b){
    return a-b
}

function multiplicacao(a, b){
    return a*b
}

function divisao(a, b){
    return a/b
}