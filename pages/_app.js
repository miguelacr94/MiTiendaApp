import Head from "next/head";
import MainNavbar from "../component/navbar/MainNavbar";
import CartProvider from '../provider/cart'
import '../styles/globals.css'
import "../theme/core.css";

function MyApp({ Component, pageProps }) {
  return (

    <>
      <Head>
        <title>MiTienda</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CartProvider>
        <MainNavbar />
        <Component {...pageProps} />
      </CartProvider>
    </>


  )
}

export default MyApp
