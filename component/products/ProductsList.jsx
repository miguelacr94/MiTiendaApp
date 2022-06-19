import React, { useState } from 'react';
import Carousel from "react-elastic-carousel";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { products2 } from '../../utils/data';
import { carouselBreakPoints } from '../../utils/helpers';
import ProductDetail from '../modals/ProductDetail';


const ProductsList = () => {

    const [showModal, setShowModal] = useState(false);

    const [selectProduct, setSelectProduct] = useState(null);

    const handleModal = (state) => setShowModal(state);
    
    const hanldeSelectProduct = (data) => {
        setShowModal(true);
        setSelectProduct(data);
    }



    
    return (
        <> <div className="flex flex-wrap justify-center ">
            <Carousel breakPoints={carouselBreakPoints} showArrows={false} infiniteLoop={true} interval={3000} autoPlay  >

                {products2 && products2.map((p, index) => {
                    return (
                        <div className="flex flex-wrap">
                            <img
                                key={index}
                                src={p.image}
                                className="w-52 h-40 bg-grey m-2"
                            />
                            <button
                                onClick={() => hanldeSelectProduct(p)}
                                className='bg-primary w-full p-1 rounded-lg'
                            >Ver
                            </button>
                        </div>
                    )
                })}

            </Carousel>
        </div>

            <Modal
                open={showModal}
                onClose={() => handleModal(false)}
                center
            >
                <ProductDetail
                    product={selectProduct}
                    onClose={() => handleModal(false)}
                />
            </Modal>


        </>
    )
}

export default ProductsList