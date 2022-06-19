import React from 'react'
import ContactForm from '../forms/ContactForm'

const Contacts = () => {
    return (
        <div className="mt-8 md:w-5/6 lg:w-5/6 m-auto">
            <h2 className="text-grey-Dark text-center font-bold text-xl font-sans">
                Contacto
            </h2>

            <div className="flex flex-wrap md:flex-nowrap justify-center mt-4 ">

                <div className="w-5/6 sm:w-5/6 md:w-3/6 px-2 ">
                    <p className="text-grey-Dark text-justify ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem architecto,
                        fugit tenetur voluptas quo, explicabo est modi minima illo pariatur,
                        aliquam similique quidem. Qui doloremque suscipit repellat,
                        aliquam mollitia illum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam, dignissimos ipsum! Totam qui recusandae reprehenderit voluptas,
                        repellat accusamus aliquid iusto molestiae pariatur nam, deserunt officiis tempora.
                        Blanditiis necessitatibus dignissimos quas.
                    </p>
                </div>

                <div className="w-5/6 sm:w-5/6 md:w-3/6 px-4">
                    <ContactForm />
                </div>

            </div>
        </div>
    )
}

export default Contacts