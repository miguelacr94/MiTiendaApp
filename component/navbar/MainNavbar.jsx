/* eslint-disable @next/next/no-img-element */
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Icons from "../../utils/icons";

import HamburguerMenu from "./menu/HamburguerMenu";
import Cart from "../cart/Cart";
import { ContextCart } from "../../provider/cart/context";

export default function MainNavbar() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuCart, setShowMenuCart] = useState(false);
  // let menu = useRef(null);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const handleSignUpModal = (state) => setShowSignUpModal(state);
  const handleShowMenuCart = (state) => setShowMenuCart(state);
  const handleShowMenu = (state) => setShowMenu(state);
  const {cart, setCart}= useContext(ContextCart);

  return (
    <>
      <nav className="fixed flex items-center justify-center w-full h-6 px-5 py-8 
      bg-optional from-black  z-20 top-0 border border-b-grey">
        <div className="flex justify-center w-full">

          <div className="flex justify-start items-center sm:w-3/6 w-full ">
            <div className="bg-red-400 rounded-3xl p-2 text-white font-bold">MT</div>
          </div>
          <div className="sm:block justify-end w-3/6 ">
            <Nav
              showMenuCart={(state) => handleShowMenuCart(state)}
              showMenu={(state) => handleShowMenu(state)}
              showButtons={showMenuCart}
              numCart={cart.length}
            />
          </div>
        </div>
      </nav>

      <div className={`bg-grey-cart sm:-mt-4 md:-mt-4 mt-6 right-0 fixed transition-right duration-1000 ease-in-out z-20 w-5/6 sm:w-4/6 md:w-2/6 
      ${showMenuCart ? 'mr-0' : '-mr-menu '}
      `}>
        <Cart
          closeCart={() => handleShowMenuCart(false)}
        
        />
      </div>

      <div className={`bg-grey-cart sm:-mt-4 w-4/6 flex justify-center  m-6 right-0 fixed transition-right duration-1000 ease-in-out z-20 
      ${showMenu ? 'mr-0' : '-mr-menu '}
      `}>
        <HamburguerMenu />
      </div>
    </>
  );




}

export const Nav = ({ showMenuCart, showMenu, showButtons, numCart }) => {
  const [cart, setCart] = useState(false);
  const [menu, setMenu] = useState(false);


  const hanldeShowbutton = () => {
    setCart(showButtons);
  }

  useEffect(
    hanldeShowbutton
    , [showButtons])

  const handleNav = () => {

    if (menu === true) {
      setMenu(false);
      showMenu(false);
    }

    setCart(!cart);
    showMenuCart(!cart);

  }

  const handleNavMenu = () => {
    if (cart === true) {
      setCart(false);
      showMenuCart(false);
    }
    setMenu(!menu);
    showMenu(!menu);
  }

  // useEffect(() => {
  //   countCartItem();
  // }, [cart])





  return (
    <div className="flex justify-end ">
      <div className="text-center text-white font-light font-sans">
        <p>Mi tienda</p>
        <p>3133030343</p>
      </div>
      {menu ?
        <>
          <button className="flex text-white m-2 text-2xl" onClick={handleNavMenu}>
            {Icons.close2}
          </button>

        </>
        :
        <>
          <button className="flex text-white m-2" onClick={handleNavMenu}>
            {Icons.menu2}
          </button>
          <p className="w-4 h-4 text-xs bg-red-400 text-white font-light absolute text-center rounded-full">{numCart}</p>
        </>

      }
      {cart ?
        <button className="flex text-white m-2 text-2xl" onClick={handleNav}>
          {Icons.close2}
        </button>
        :
        <button className="flex text-white m-2 " onClick={handleNav}>
          {Icons.cart}
        </button>
      }
    </div>
  )

}