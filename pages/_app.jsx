import {styles} from '../styles/global.css'
import { AppProps } from 'next/app'
import Layout from "./layout"
export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}
