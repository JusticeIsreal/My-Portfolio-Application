import type { AppProps } from 'next/app'
import "../styles/Style.css"
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
