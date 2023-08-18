import React, {Component} from 'react';
import SwiperSlider, { SwiperSlide } from "./swiper"

class HeroSliderOne extends Component{

    render(){
        const params = {
            slidesPerView : 1,
            loop: true,
            navigation: true,
            autoplay: {
                delay: 5500,
                disableOnInteraction: false,
            },
        }

        let data = [
            {bgImg: 'slider3.jpg', sliderTitle: 'CHẤT LƯỢNG', sliderSubtitle: '', btnLink: 'contact-us'},
            {bgImg: 'slider2.jpg', sliderTitle: 'UY TÍN', sliderSubtitle: '', btnLink: 'contact-us'},
            {bgImg: 'slider1.jpg', sliderTitle: 'CHUYÊN NGHIỆP', sliderSubtitle: '', btnLink: 'contact-us'}
        ];

        let DataList = data.map((val, i)=>{
            return(
                <SwiperSlide key={i}>
                    <div className="hero-slider__single-item" style={{ backgroundImage: `url(assets/img/slider/${val.bgImg})` }} >
                        <div className="hero-slider__content-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                    <div className="hero-slider__content">
                                        <h2 className="hero-slider__title">{val.sliderTitle}</h2>
                                        <p className="hero-slider__text">{val.sliderSubtitle}</p>
                                        {/*<a className="hero-slider__btn" href={`${process.env.PUBLIC_URL}/${val.btnLink}`}> XEM THÊM </a>*/}
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        });

        return(
            <div>
                {/*====================  hero slider area ====================*/}
                <div className="hero-alider-area">
                    <SwiperSlider options={params}>
                        {DataList}
                    </SwiperSlider>
                </div>
                {/*====================  End of hero slider area  ====================*/}

            </div>
        )
    }
}

export default HeroSliderOne;
