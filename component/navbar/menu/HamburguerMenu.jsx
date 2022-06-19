import React from 'react'
import { publicNavLinks } from '../../../utils/routes'
import { useRouter } from 'next/router'



const HamburguerMenu = () => {
    const router = useRouter();

    console.log(router.route);

    return (
        <div className="sm:flex justify-center items-center">
            {publicNavLinks.map((ruta, index) => {
                return (

                    <div key={index} className={`m-2 w-24 text-center  ${router.route == ruta.path ? ' bg-grey-light rounded-lg text-white': ''}`} >
                        <a
                            type="button"
                            href={ruta.path}
                            className="w-full h-8 items-center justify-center hover:text-primary p-1 "
                        >
                            {ruta.name}
                        </a>
                      
                    </div>

                );
            })}
           
        </div>
    )
}

export default HamburguerMenu