import { createContext, useEffect, useState } from "react"
import { getProduct } from "../../utils/api/product.queries";
import { readCart } from "./actions";

export const ContextCart = createContext(null)

export default function CartContext({ children }) {
  const [cart, setCart] = useState([])
  const [count, setCount]= useState(0);
  const [product, setProduct]= useState([]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify([]));
    let _cart = readCart() || []
    if(_cart?.length > 0){
        setCart(_cart);
    }
}, []);



const loadProduct = async () => {
  const res = await getProduct(1);
  if (res) {
    setProduct(res.data)
  } else {
      console.log(res)
  }
}


useEffect(() => {
  loadProduct();

}, [])


  return (
    <ContextCart.Provider value={{ cart,product, setCart, setProduct }} >
      {children}
    </ContextCart.Provider>
  )
}