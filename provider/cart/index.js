import CartContext from './context'

export default function CartProvider({ children }){

  return (
    <>
      <CartContext>
        { children }
      </CartContext>
    </>
  )
}