import Cabecalho from "../components/Cabecalho"

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-screen flex justify-center 
    items-center">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <Cabecalho titulo="Pagina Inicial" subtitulo="Subtitulo da página inicial"/>
    </div>
  )
}