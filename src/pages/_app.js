import '../styles/styles.scss';
import Mainlayout from '../components/layouts/MainLayout'
import {ContextProvider} from "../../src/context/Context"

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Mainlayout>
        <Component {...pageProps} />
      </Mainlayout>
    </ContextProvider>
  )
}

export default MyApp
