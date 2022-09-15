//é preciso importar todos os css que quiser que apareça para todos os componentes
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
