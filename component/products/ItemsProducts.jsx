import React, { useContext, useEffect } from 'react';
import Carousel from "react-elastic-carousel";
import { itemAlreadyInCart, readCart, saveCart } from '../../provider/cart/actions';
import { ContextCart } from '../../provider/cart/context';
// import { products } from '../../utils/data';
import { carouselBreakPoints } from '../../utils/helpers';
import Swal from 'sweetalert2'
import Buttons from '../materials/Buttons';

const ItemsProducts = () => {
    const { cart, setCart } = useContext(ContextCart);
    const { product, setProduct } = useContext(ContextCart);

    const addToCart = (data) => {

        // toma el objeto del producto seleccionado y adicional le agrega la cantidad 
        const cantidad = {
            cant: 1
        }
        const dato = {};

        if (!itemAlreadyInCart(data._id)) {
            dato = Object.assign(cantidad, data);
            setCart([...cart, dato]);  //almacecna en el Context del carro de compra
            saveCart([...cart, dato]); // almacena producto en  el localStorage

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Articulo Adquirido',
                height: '20px',
                width: '200px',
                showConfirmButton: false,
                timer: 1500
            });

        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Articulo Ya Adquirido',
                height: '20px',
                width: '200px',
                showConfirmButton: false,
                timer: 1500
            });

            // closeModal();
        }
    };



    return (
        <>
            <Carousel breakPoints={carouselBreakPoints} showArrows={false} >
                {product && product.map((p, index) => {
                    return (
                        <div key={index} className="flex flex-col w-5/6 sm:w-5/6 lg:w-5/6 mt-4 justify-center items-center ">
                            <div className="h-36 w-36 m-auto">
                                <img
                                    src={p.image}
                                    className="h-full w-5/6 bg-grey m-auto"
                                />

                            </div>
                            <div className="text-grey-Dark text-center">
                                <h2 class="text-md font-bold font-sans">{p.title}</h2>
                                <p className="font-sans font-light text-md">{p.description}</p>
                            </div>
                            <Buttons
                                text="Añadir al carro"
                                className="bg-primary text-white  p-1 rounded-x "
                                onClick={() => addToCart(p)}
                            />



                        </div>

                    )
                })}

            </Carousel>
            <button>Ver más</button>

        </>
    )
}

export default ItemsProducts