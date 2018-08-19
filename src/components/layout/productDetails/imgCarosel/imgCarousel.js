import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "./imgCarousel.scss";

const PoductImgaes = props => {
    return (
        <div className="pi">
            <Carousel showArrows={false} showIndicators={false} emulateTouch>
                <div><img src="//via.placeholder.com/1200x600" alt=""/></div>
                <div><img src="//via.placeholder.com/1200x600" alt=""/></div>
                <div><img src="//via.placeholder.com/1200x600" alt=""/></div>
                <div><img src="//via.placeholder.com/1200x600" alt=""/></div>
            </Carousel>
        </div>)
}
export default PoductImgaes;