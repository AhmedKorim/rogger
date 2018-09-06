import React, {Component} from 'react'
import {Carousel} from "react-responsive-carousel";
import "./imgCarousel.scss";
import Swiper from 'react-id-swiper';
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";

const parms = {
    slidesPerView: 1,
    spaceBetween: 0,
    clickable: true,
    lazy: true,
    preloadImages: false,
    loadPrevNext: false,
    loop: true,
    a11y: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    autoplay: {
        delay: 5000
    }
}

class PoductImgaes extends Component {


    mainSwiperNav = (action) => {
        if (!this.mainSwiper) return;
        if (action === 'prev') {
            this.mainSwiper.slidePrev();
            return;
        }
        this.mainSwiper.slideNext();
    }

    render() {
        const {
            props: {
                product: {
                    imagesArray,
                    productImg
                },
            },
            mainSwiperNav
        } = this;
        console.log(imagesArray);
        return (
            <div className="productImagesSwiper">
                <Tooltip title="previous slide">
                    <Button className="slidNavButton prev"
                            variant="fab" color="default"
                            onClick={() => mainSwiperNav('prev')}
                            mini><Icon>chevron_left</Icon></Button></Tooltip>
                <Tooltip title="next slide">
                    <Button className="slidNavButton next"
                            variant="fab" color="default"
                            onClick={() => mainSwiperNav('next')}
                            mini><Icon>chevron_right</Icon></Button></Tooltip>
                <Swiper {...parms} ref={(node) => node ? this.mainSwiper = node.swiper : void 0} className="swiperContainer">
                    {imagesArray.map(image => <div className="SlideItem" key={Object.keys(image)[0]}>
                            <div className="imgWrapper">
                                <div data-background={Object.values(image)[0]} className="swiper-lazy"></div>
                            </div>
                            <div className="swiper-lazy-preloader"></div>
                        </div>
                    )}
                </Swiper>
            </div>
        )
    }
}

export default PoductImgaes;