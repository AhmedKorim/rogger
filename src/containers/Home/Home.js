import React from 'react';
import withPadding from "../../HOC/WithPadding/WithPadding";
import SwiperEl from "../../components/UI/swiper/Swiper";
import Swiper from 'react-id-swiper';
import './Home.scss'
import ImgCard from "../../components/UI/Card/Card";

class Home extends React.Component {

    render() {
        const parms = {
            slidesPerView: 1,
            spaceBetween: 30,
            clickable: true,
            autoplay: {
                delay: 5000
            }
        }
        return (
            <div className="Home">
                <div className="container">
                    <div className="cardsCont">
                        <ImgCard/>
                        <ImgCard/>
                        <ImgCard/>
                        <ImgCard/>
                        <ImgCard/>
                        <ImgCard/>
                        <ImgCard/>
                    </div>
                </div>
                <div className="container">
                    <div className="homeSwiper">
                        <Swiper {...parms}>
                            <div>
                                <img src="//via.placeholder.com/1200x500" alt=""/>
                            </div>
                            <div>
                                <img src="//via.placeholder.com/1200x500" alt=""/>
                            </div>
                            <div>
                                <img src="//via.placeholder.com/1200x500" alt=""/>
                            </div>
                            <div>
                                <img src="//via.placeholder.com/1200x500" alt=""/>
                            </div>
                        </Swiper>
                    </div>
                </div>
                <SwiperEl/>
            </div>
        )
    }
}

export default withPadding(Home);