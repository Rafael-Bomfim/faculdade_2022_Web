import If from "../components/If"

export default function init(){
    const num = 7;
    return (
        <>
            <If condicao={num%2 === 0}>
                <h2>{num} é par</h2>
            </If>
            <If condicao={num%2 === 1}>
                <h2>{num} é impar</h2>
            </If>
        </>
    )
}