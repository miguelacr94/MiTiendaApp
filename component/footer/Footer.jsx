import React from 'react'

import Informations from './Informations'
import Social from './Social'

const Footer = () => {
    return (
        <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full md:w-3/6  m-1  p-1">
                <Informations />
            </div>
            <div className="w-full md:w-3/6  m-1  p-1">
                <Social />
            </div>
        </div>
    )
}

export default Footer