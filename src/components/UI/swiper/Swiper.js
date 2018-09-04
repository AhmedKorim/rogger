import React, {Component} from 'react'
import Swiper from 'react-id-swiper';
import ProductCard from "../../layout/ProductCard/ProductCard";
import {withWidth} from "@material-ui/core";
import './Swiper.scss';

class SwiperEl extends Component {
    render() {
        const params = {
            slidesPerView: 6,
            spaceBetween: 10,
            clickable: true,
            a11y: true,
            breakpoints: {
                639: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                890: {
                    slidesPerView: 2,
                    spaceBetween: 10
                }, 950: {
                    slidesPerView: 3,
                    spaceBetween: 10
                }, 1150: {
                    slidesPerView: 3,
                    spaceBetween: 10
                }, 1200: {
                    slidesPerView: 4,
                    spaceBetween: 10
                }, 1350: {
                    slidesPerView: 4,
                    spaceBetween: 10
                }, 1400: {
                    slidesPerView: 5,
                    spaceBetween: 10
                }, 1550: {
                    slidesPerView: 5,
                    spaceBetween: 15
                },
            }

        };
        return (
            <div className="slider">
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
            </div>
        )
    }
}

export default withWidth()(SwiperEl);