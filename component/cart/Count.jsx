import React, { useState } from 'react'

const Count = ({ init, cant }) => {

    const [count, setCount] = useState(init);

    const hanldeCount = (valor) => {
        let num = count + valor
         
        if(num <= 0){
            setCount(0)
           return cant(0);
        }else{
            setCount(num);
            cant(num);
        }
    }

    

    return (
        <div className="border border-black flex h-25 w-84 rounded-md justify-center items-center">
            <button
                onClick={() => hanldeCount(+1)}
                className="w-2/6 text-grey-light font-bold">
                +
            </button>
            <p className="w-2/6 text-center text-xs text-grey-light font-medium">
                {count}
            </p>
            <button
                onClick={() => hanldeCount(-1)}
                className="w-2/6 text-grey-light font-bold"
            >
                -
            </button>
        </div>
    )
}

export default Count