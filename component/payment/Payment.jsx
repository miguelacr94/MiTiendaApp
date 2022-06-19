import React, { useState } from 'react'
import ClientForm from '../forms/ClientForm'
import TypePayment from './TypePayment'

const Payment = ({ res, openModal, closeCart }) => {

    const [pay, setPay] = useState(null);

    const hanldeSelectPay = (p) => {
        setPay(p.id);
    }

    return (
        <div className="overflow-auto">
            <div >
                <TypePayment
                    pay={(p) => hanldeSelectPay(p)}
                />
            </div>
            <div className="w-5/6 sm:w-5/6 md:w-5/6 px-4">
                <ClientForm
                    pay={pay}
                    data={(data) => res(data)}
                    openModal={() => openModal()}
                    closeCart={closeCart}
                />
            </div>

        </div>
    )
}

export default Payment