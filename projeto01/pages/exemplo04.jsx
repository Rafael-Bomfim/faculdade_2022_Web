//Exemplo de uso do componete Titulo

import Titulo from "../components/Titulo";

export default function init(){
    return ( //utilizando react fragment
        <>
            <Titulo titulo="Teste titulo" subtitulo="Teste subtitulo"></Titulo>
            <Titulo titulo="Pagina Cadastro" subtitulo="Gerenciar cadastro"/>
            <Titulo titulo="ADS" subtitulo="Quarto Semestre" pequeno/>
        </>
    )
}