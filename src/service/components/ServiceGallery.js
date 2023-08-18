import React, {Component, memo} from 'react';
import SwiperSlider, { SwiperSlide } from "../../components/swiper";

const ServiceGallery = memo(function ServiceGallery(props){

    const params = {
        slidesPerView : 1,
        loop: true,
        navigation: true
    };
    let imageGalleryData = props.images;

    let ImageGalleryDataList = imageGalleryData.map((val, i) => {
        return(
            <SwiperSlide className="service-gallery__single-slide" key={i}>
                <div className="item">
                    <img src={require(`../../assets/images/${val}`)} className="img-fluid" alt="gallery data" />
                </div>
            </SwiperSlide>
        )
    });
    return (
        <div>
            <div className="service-gallery">
                <SwiperSlider options={params}>
                    {ImageGalleryDataList}
                </SwiperSlider>
            </div>
        </div>
    )
})

export default ServiceGallery;
