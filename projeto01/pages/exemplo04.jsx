//Exemplo de uso do componete Titulo

import Titulo from "../components/Titulo";

export default function init(){
    return (
        <div>
            <Titulo titulo="Teste titulo" subtitulo="Teste subtitulo"></Titulo>
            <Titulo titulo="Pagina Cadastro" subtitulo="Gerenciar cadastro"/>
        </div>
    )
}