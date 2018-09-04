import React from 'react';
import withPadding from "../../HOC/WithPadding/WithPadding";
import SwiperEl from "../../components/UI/swiper/Swiper";
import Swiper from 'react-id-swiper';
import './Home.scss'
import ImgCard from "../../components/UI/Card/Card";
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Typography from "@material-ui/core/Typography/Typography";
import EnhancedTabs from "../../components/UI/EnhancedTabs/EnhancedTabs";
import Container from "../../HOC/Container/Container";

class Home extends React.Component {
    mainSwiperNav = (action) => {
        if (!this.mainSwiper) return;
        if (action === 'prev') {
            this.mainSwiper.slidePrev();
            return;
        }
        this.mainSwiper.slideNext();
    }


    render() {
        const parms = {
            slidesPerView: 1,
            spaceBetween: 30,
            clickable: true,
            lazy: true,
            preloadImages: false,
            loadPrevNext: false,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            autoplay: {
                delay: 5000
            }
        }
        const {
            mainSwiperNav
        } = this;
        return (
            <div className="Home">
                <Container>
                    <div className="homeSwiper">
                        <Tooltip title="previous slide"><Button className="slidNavButton prev" variant="fab" color="primary"
                                                                onClick={() => mainSwiperNav('prev')}
                                                                mini><Icon>chevron_left</Icon></Button></Tooltip>
                        <Tooltip title="next slide"><Button className="slidNavButton next" variant="fab" color="primary" onClick={() => mainSwiperNav('next')}
                                                            mini><Icon>chevron_right</Icon></Button></Tooltip>
                        <Swiper {...parms} ref={(node) => node ? this.mainSwiper = node.swiper : void 0}>
                            <div className="SlideItem">
                                <div data-background="//via.placeholder.com/1200x600" className="swiper-lazy">
                                    <div className="swiper-lazy-preloader"></div>
                                </div>
                                <div className="caption">
                                    <Typography className="Captiontext" variant="display1"
                                                component="h3"> ejnoy shopping with rogger</Typography>
                                </div>
                            </div>
                            <div className="SlideItem">
                                <div data-background="//via.placeholder.com/1201x600" className="swiper-lazy">
                                    <div className="swiper-lazy-preloader"></div>
                                </div>
                                <div className="caption">
                                    <Typography className="Captiontext" variant="display1"
                                                component="h3"> ejnoy shopping with rogger</Typography>
                                </div>
                            </div>
                            <div className="SlideItem">
                                <div data-background="//via.placeholder.com/1205x600" className="swiper-lazy">
                                    <div className="swiper-lazy-preloader"></div>
                                </div>
                                <div className="caption">
                                    <Typography className="Captiontext" variant="display1"
                                                component="h3"> ejnoy shopping with rogger</Typography>
                                </div>
                            </div>
                            <div className="SlideItem">
                                <div data-background="//via.placeholder.com/1210x600" className="swiper-lazy">
                                    <div className="swiper-lazy-preloader"></div>
                                </div>
                                <div className="caption">
                                    <Typography className="Captiontext" variant="display1"
                                                component="h3"> ejnoy shopping with rogger</Typography>
                                </div>
                            </div>
                            <div className="SlideItem">
                                <div data-background="//via.placeholder.com/1220x600" className="swiper-lazy">
                                    <div className="swiper-lazy-preloader"></div>
                                </div>
                                <div className="caption">
                                    <Typography className="Captiontext" variant="display1"
                                                component="h3"> ejnoy shopping with rogger</Typography>
                                </div>
                            </div>
                            <div className="SlideItem">
                                <div data-background="//via.placeholder.com/1198x600" className="swiper-lazy">
                                    <div className="swiper-lazy-preloader"></div>
                                </div>
                                <div className="caption">
                                    <Typography className="Captiontext" variant="display1"
                                                component="h3"> ejnoy shopping with rogger</Typography>
                                </div>
                            </div>
                        </Swiper>
                    </div>
                    <div className="cardsCont">
                        <ImgCard/>
                        <ImgCard/>
                        <ImgCard/>
                        <ImgCard/>
                        <ImgCard/>
                        <ImgCard/>
                        <ImgCard/>
                    </div>
                    <EnhancedTabs
                        disableRouting
                        toolbarClasses={['nowShadow']}
                        tab={[{label: 'Featured'}, {label: 'Top Rated'}, {label: 'best deals'}]}
                    >
                        <div><SwiperEl/></div>
                        <div><SwiperEl/></div>
                        <div><SwiperEl/></div>
                    </EnhancedTabs>
                </Container>
            </div>
        )
    }
}

export default withPadding(Home);