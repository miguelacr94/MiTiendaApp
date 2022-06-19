import React, { useContext } from 'react'
import { itemAlreadyInCart, saveCart } from '../../provider/cart/actions';
import { ContextCart } from '../../provider/cart/context';
import Swal from 'sweetalert2';
const ProductDetail = ({ product, onClose }) => {


    const { cart, setCart } = useContext(ContextCart);

    const addToCart = (data) => {

        const cantidad = {
            cant: 1
        }
        const dato = {};


        if (!itemAlreadyInCart(data._id)) {
            dato = Object.assign(cantidad, data);
            setCart([...cart, dato]);
            saveCart([...cart, dato]);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Articulo Adquirido',
                height: '20px',
                width: '200px',
                showConfirmButton: false,
                timer: 1500
            });
            onClose();
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
           
        }
    };

    return (
        <div className="w-64 sm:w-80 ju flex flex-wrap justify-center p-2">
            <div className="w-full p-4 mt-4">
                <img
                    src={product.image}
                    className="w-full h-52"
                />
            </div>
            <div className="bg-optional w-full text-white p-2">
                <h3 className="text-md">{product.title}</h3>
                <p className="text-xs font-sans font-light mt-2">{product.decription}.</p>
                <p className="text-center">${product.price}</p>
            </div>
            <button
                onClick={() => addToCart(product)}
                className="bg-primary p-1 px-2 rounded-md text-white mt-2"
            >
                Adquirir
            </button>
        </div>
    )
}

export default ProductDetail