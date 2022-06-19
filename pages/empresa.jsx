import React from 'react'
import Company from '../component/company/company'
import Footer from '../component/footer/Footer'

const company = () => {
    return (
        <div>
            <main className="w-full sm:mt-20 mt-0">
                <section className="h-screen bg-no-repeat bg-cover bg-home text-white">

                    <div className="w-full m-auto flex-wrap ">

                        {/* BANNER */}
                        <div className="w-full h-48 sm:h-56 md:h-72 lg:h-banner mt-1 flex flex-col m-auto items-center justify-center bg-grey mt-10 ">
                            Banner Interactivo Intro
                        </div>

                        {/* Company */}
                        <div>
                            <Company />
                        </div>

                        {/* Footer */}
                        <div className="bg-optional mt-4">
                            <Footer />
                        </div>
                    </div>

                </section>


            </main>

        </div>
    )
}

export default company