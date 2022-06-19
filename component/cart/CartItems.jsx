import React, { useContext, useEffect, useState } from 'react'
import { getTotal, itemAlreadyInCart, readCart, saveCart } from '../../provider/cart/actions';
import { ContextCart } from '../../provider/cart/context';
import { product } from '../../utils/data'
import { formatter } from '../../utils/helpers';
import Icons from '../../utils/icons'
import Count from './Count';



const CartItems = ({ tab }) => {

    const [loading, setLoading] = useState(true);
    const { cart, setCart } = useContext(ContextCart);

    const removeFromCart = (item) => { // funcion encargada de remover los articulos del carro de compra
        setLoading(true);
        const items = readCart() || []
        const newCart = items.filter(e => e._id != item._id); // filtra los datos desiguales y los almacena 
        saveCart(newCart);
        setCart(newCart);
        setLoading(false);
    };

    const handleNext = () => {
        tab(2);
    }



    const hanldeNewCar = (cant, p) => { // funcion de manejar el conteo de cantidad de articulos a comprar
     
        const car = {
            cant: cant ,
            description: p.description,
            _id: p._id,
            image: p.image,
            price: p.price,
            title: p.title,
        }
        const index = cart.findIndex((e) => e._id == p._id);
        if (index != -1) {
            cart[index] = car;
        }
        setCart([...cart]);
        saveCart(cart);

    }



    return (
        <div className="h-banner overflow-auto">

            {cart.length == 0 ? (
                <p className="text-center">Carro vacio</p>

            ) : (
                cart.map((p, index) => {
                    return (
                        <div className="flex mt-4 flex-wrap justify-center items-center">
                            <div className='w-2/6 '>
                                <img
                                    src={p.image}
                                    className="h-20 w-5/6  m-auto p-1"
                                />

                            </div>

                            <div className="w-4/6 md:text-center" key={index}>
                                <p className="text-terminos font-medium text-grey-Dark">{p.title}</p>
                                <p className="mt-3 font-bold text-grey-Dark text-cart">{p.price} COP</p>
                                <div className="mt-2 flex flex-wrap md:justify-center md:items-center">
                                    <div >
                                        <Count
                                            init={p.cant}
                                            cant={(e) => hanldeNewCar(e, p)}
                                        />
                                    </div>
                                    <div className="ml-2">
                                        <button
                                            onClick={() => removeFromCart(p)}
                                            className="rounded-full w-25 h-25 border border-red-500 flex justify-center items-center text-red-500">
                                            {Icons.close2}
                                        </button>
                                    </div>

                                </div>
                                <div className="h-line w-terminos md:w-full bg-black mt-4 m-auto -ml-78 md:ml-1">
                                </div>
                            </div>

                        </div>
                    );
                })
            )}

           { cart.length > 0 ? <div>Total: {formatter.format(getTotal())}</div> : ''}


            <div className="mt-9 h-20 flex justify-center items-center">
                {cart.length == 0 ? (
                    ''

                ) : <button
                    onClick={() => handleNext()}
                    className="w-button h-10  rounded-md border border-black font-bold font-sans" >
                    Pagar
                </button>}
            </div>

            <div className=" h-8"></div>
        </div>
    )
}

export default CartItems