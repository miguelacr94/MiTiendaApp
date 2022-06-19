import React, { useContext, useEffect, useState } from 'react'
import Icons from '../../utils/icons'
import Payment from '../payment/Payment';
import TypePayment from '../payment/TypePayment';
import CartItems from './CartItems'
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Tickects from '../modals/Tickects';
import { ContextCart } from '../../provider/cart/context';

const Cart = ({ closeCart }) => {

    const [tabs, settabs] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [databuy, setDataBuy] = useState(null);
    const { cart, setCart } = useContext(ContextCart);
    const handleModal = (state) => setShowModal(state);
    const handleBuy = (data) => setDataBuy(data);

    const hanldeResetTab = () => {
        settabs(1);
        closeCart();
    }


    useEffect(() => {
        settabs(1);
    }, [cart])

    return (
        <div className="p-4">
            <div className="flex">
                <div className="w-16">
                    {tabs == 2 && <button onClick={() => settabs(1)} className="w-16" >{Icons.arrowLeft}</button>}
                </div>
                <div className="flex flex-wrap ">
                    <div className="flex flex-wrap justify-center"><p>{Icons.cart}</p>
                        <p className='ml-2 text-titleCart'>TUS PRODUCTOS</p></div>

                </div>
            </div>

            <div className="h-line w-6/6 bg-black mt-2 m-auto">
            </div>
            <div className='mt-2 '>
                {tabs === 1 ?
                    <CartItems
                        tab={(tab) => settabs(tab)}
                    />
                    : tabs === 2 ?
                        <Payment
                            res={(r) => handleBuy(r)}
                            openModal={() => handleModal(true)}
                            closeCart={() => hanldeResetTab()}
                        />
                        : ''
                }
            </div>


            <Modal
                open={showModal}
                onClose={() => handleModal(false)}
                center
            >
                <Tickects
                    data={databuy}
                />
            </Modal>



        </div>
    )
}

export default Cart





