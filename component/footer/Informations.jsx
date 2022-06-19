import React from 'react'
import Icons from '../../utils/icons'

const Informations = () => {
    return (
        <div className="flex flex-wrap md:flex-nowrap justify-center">
            <div className="w-5/6 md:w-3/6 h-full m-1">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.29091261679!2d-75.88826033399285!3d8.75867574584014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5a2f25afc6d78d%3A0xa3e361d108dc23d3!2sTomatos%20Restaurant!5e0!3m2!1ses!2sco!4v1655355365272!5m2!1ses!2sco"
                    width="100%"
                    height="100%"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="h-full flex flex-wrap  justify-center">
                <div className="flex w-36 items-center m-1 ">
                    <p>{Icons.phone}</p>
                    <p className="ml-2">313333333333</p>
                </div>
                <div className="flex w-36 items-center m-1">
                    <p>{Icons.email}</p>
                    <p className="ml-2">mitienda@mail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Informations