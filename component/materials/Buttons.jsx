import React from 'react'

const Buttons = ({
    className,
    onClick,
    text,

}) => {
    return (
        <div>
            <button
                className={ `${className} rounded-xl border border-grey p-2`}
                onClick={onClick}
            >
                {text}
            </button>

        </div>
    )
}

export default Buttons