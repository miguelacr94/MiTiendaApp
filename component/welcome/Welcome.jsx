import React from 'react'

const Welcome = () => {
    return (
        <div className="mt-8 lg:w-5/6 m-auto">
            <h2 className="text-grey-Dark text-center font-bold text-xl font-sans">Bienvenidos a Mi Tienda</h2>
            <div className="text-grey-Dark flex flex-wrap  lg:flex-nowrap justify-center mt-2 ">
                <div className="w-5/6 h-36 sm:w-5/6 lg:w-2/6 md:h-40 bg-grey m-1">
                   <img 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrY32gGi0hSopV43k97TEAv1jMUozApeVXnQ&usqp=CAU'
                    className='w-full h-full'
                   />
                </div>
                <div className="w-5/6 sm:w-5/6 lg:w-4/6 lg:h-40 m-1 ">
                    <p className="text-justify h-36 overflow-hidden font-sans text-grey-Dark font-light ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Est deleniti neque temporibus. Laboriosam, similique minima nobis
                        est aliquid rerum optio soluta fugit mollitia, quo vero placeat quia
                        nam nemo hic!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Enim sequi soluta libero tempora officiis dolores necessitatibus rem,
                        veritatis ullam modi doloremque repellat ratione molestiae,
                        blanditiis ipsa inventore asperiores, explicabo quod.
                    </p>
                   
                </div>
            </div>

        </div>
    )
}

export default Welcome