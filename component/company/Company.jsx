import React from 'react';
import Carousel from "react-elastic-carousel";

import { companyData } from '../../utils/data';
import { carouselBreakPoints } from '../../utils/helpers';

const Company = () => {
    return (
        <div className="mt-8 ">
            <h3>Empresa</h3>
            <div className="flex justify-center">
                <Carousel breakPoints={carouselBreakPoints} showArrows={false}>
                    {companyData.map((c, index) => {
                        return (
                            <div key={index} className="flex flex-wrap w-5/6 sm:w-5/6 lg:w-5/6 mt-4 bg-optional p-2 rounded-md">
                                <img
                                    src={c.image}
                                    className="w-46 h-40 m-auto" />
                                <div className="text-justify px-2">
                                    {c.text}
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default Company;