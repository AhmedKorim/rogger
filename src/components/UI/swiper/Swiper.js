import React from 'react'
import Swiper from 'react-id-swiper';
import ProductCard from "../../layout/ProductCard/ProductCard";

const SwiperEl = props => {
    const params = {
        slidesPerView: 5,
        spaceBetween: 0,
        clickable: true
    };
    return (
        <Swiper {...params}>
            <div>
                <ProductCard/>
            </div>
          <div>
                <ProductCard/>
            </div>
          <div>
                <ProductCard/>
            </div>
          <div>
                <ProductCard/>
            </div>
          <div>
                <ProductCard/>
            </div>
          <div>
                <ProductCard/>
            </div>
            <div>
                <ProductCard/>
            </div>
        </Swiper>
    )
}
export default SwiperEl