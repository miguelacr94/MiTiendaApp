import { useContext, useEffect } from "react";
import Contacts from "../component/contacts/contacts";
import Footer from "../component/footer/Footer";
import PrincipalsProducts from "../component/products/PrincipalsProducts";
import Welcome from "../component/welcome/Welcome";
import { readCart } from "../provider/cart/actions";
import { ContextCart } from "../provider/cart/context";

export default function Home() {

  return (
    <div >

      <main className="w-full sm:mt-20 mt-0">
        <section className="h-screen bg-no-repeat bg-cover bg-home text-white">

          <div className="w-full m-auto flex-wrap ">
          
            {/* BANNER */}
            <div className="w-full h-48 sm:h-56 md:h-72 lg:h-banner mt-1 flex flex-col m-auto items-center justify-center bg-grey mt-10 ">
              Banner Interactivo Intro
            </div>

            {/* Welcome */}
            <div>
              <Welcome />
            </div>

            {/* Principal Products */}
            <div>
              <PrincipalsProducts />
            </div>

            {/* Contact */}
            <div id='contact' >
              <Contacts />
            </div>

            {/* Footer */}
            <div className="bg-optional mt-4">
              <Footer />
            </div>
          </div>

        </section>


      </main>
      

    </div>
  )
}
