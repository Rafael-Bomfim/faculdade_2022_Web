//se o css for global, ele deve ser importado no arquivo _app.js (regra do next)

export default function init(){
    return(
        <div className="ex01">
            <div class="azul">#azul</div>
            <div className="verde">#verde</div> {/*div.verde*/}
        </div>
    )
}