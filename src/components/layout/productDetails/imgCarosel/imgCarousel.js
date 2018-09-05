import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "./imgCarousel.scss";

const PoductImgaes = props => {
    const {images}=props;
    return (
        <div className="pi">
            <Carousel showArrows={false} showIndicators={false} emulateTouch>
                {images.map(image=> <div key={Object.keys(image)[0]}>
                    <img src={Object.values(image)[0]} alt=""/>
                </div>)}
            </Carousel>
        </div>)
}
export default PoductImgaes;