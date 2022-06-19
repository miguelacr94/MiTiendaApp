import React, { useState } from 'react'
import { paymethods } from '../../utils/data'

const TypePayment = ({ pay }) => {


    const [paY, setPay] = useState(null);

    const handleSelect = (p) => {
        pay(p);
        setPay(p);
    }

    return (
        <div className="flex m-1">
            {paymethods.map((p, index) => {
                return (
                    <div
                        onClick={() => handleSelect(p)}
                        className={` bg-white m-1 p-1 flex justify-center items-center ${p.id === paY?.id ? 'border-2 border-black' : ''} `}>
                        < img
                            key={index}
                            src={p.image}
                            className="w-16 "
                        />
                    </div>

                )

            })

            }

        </div>
    )
}

export default TypePayment