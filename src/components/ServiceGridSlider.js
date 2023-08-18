import React, {Component} from 'react';
import SwiperSlider, { SwiperSlide } from "./swiper"

class ServiceGridSlider extends Component{
    render(){
        const params = {
            slidesPerView : 3,
            loop: true,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            // Responsive breakpoints
            breakpoints: {
                300:{
                    slidesPerView : 1
                },
                768:{
                    slidesPerView : 2

                },
                992:{
                    slidesPerView : 3
                }
            }
        }
        let data = [
            {img: 'service1.jpg', iconName: 'flaticon-002-welding', serviceTitle: 'Cáp trung thế', serviceExcerpt: 'Cáp chống thấm, cách điện XLPE, màn chắn bằng đồng 0.127, giáp sợi thép, vỏ bọc PVC', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service2.jpg', iconName: 'flaticon-004-walkie-talkie', serviceTitle: 'Cáp đồng, nhôm trần', serviceExcerpt: 'Bao gồm các loại cáp đồng nhôm trần A,C,TK, lõi thép bôi mỡ trung tính', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service3.jpg', iconName: 'flaticon-015-cart', serviceTitle: 'Cáp vặn xoắn', serviceExcerpt: 'Cáp vặn xoắn với 11 loại và 3 kết cấu ruột dẫn, chiều dài 500-2000m/lô', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service1.jpg', iconName: 'flaticon-010-tank-1', serviceTitle: 'Cáp điều khiển', serviceExcerpt: 'Bao gồm các loại cáp không lưới và có lưới, kết nối ruột dẫn nhiều sợi cấp 5, Truyền tín hiệu điều khiển điện, giữa bộ phận điều khiển, bộ phận trung gian, bộ phận chấp hành.', serviceUrl: 'service-details-left-sidebar'},
        ];

        let DataList = data.map((val, i)=>{
            return(
                <SwiperSlide key={i}>
                    <div className="swiper-slide">
                        <div className="service-grid-item">
                        <div className="service-grid-item__image">
                            <div className="service-grid-item__image-wrapper">
                            <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                                <img src={`assets/img/service/${val.img}`} className="img-fluid" alt="" />
                            </a>
                            </div>
                            <div className="icon">
                            <i className={val.iconName} />
                            </div>
                        </div>
                        <div className="service-grid-item__content">
                            <h3 className="title">
                            <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>{val.serviceTitle}</a>
                            </h3>
                            <p className="subtitle">{val.serviceExcerpt}</p>
                            <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`} className="see-more-link">Xem thêm</a>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        });
        return(
            <div>
                {/*====================  service grid slider area ====================*/}
                <div className="service-grid-slider-area section-space--inner--120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area text-center">
                        <h2 className="section-title section-space--bottom--50">Sản phẩm tiêu biểu</h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="service-slider">
                            <SwiperSlider options={params}>
                                {DataList}
                            </SwiperSlider>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*====================  End of service grid slider area  ====================*/}

            </div>
        )
    }
}


export default ServiceGridSlider;
