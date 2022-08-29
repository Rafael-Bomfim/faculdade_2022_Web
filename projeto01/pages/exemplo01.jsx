export default function init(){ //exportando função sem parâmetros
    const nome = "Cebolinha"
    return ( 
        <div>
            <h1>Hello Word!!!</h1>
            <h2>Outro texto!!</h2>
            <h3>3+3</h3>
            <h3>{3+3}</h3>
            <h3>{soma(4,6)}</h3>
            <h3>Nome: {nome}</h3>
        </div>
    ) //div dentro de parenteses permite que usemos html junto com Java Script
}

function soma(a,b){
    return a+b;
}