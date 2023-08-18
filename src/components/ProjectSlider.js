import React, { Component } from 'react';
import SwiperSlider, { SwiperSlide } from "./swiper"


class ProjectSlider extends Component{
    render(){

        const params = {
            slidesPerView : 1,
            loop: true,
            autoplay: false,
            speed: 1000,
            spaceBetween: 30,
            navigation: true
        };

        let data = [
            {img: '1-project-1.png', sliderTitle: 'Công trình: Le Jardin, Park City', sliderShortDesc: 'Địa điểm: Lê Trọng Tấn, La Khê, Hà Đông, Hà Nội\n' +
                    'Đơn vị thi công: Công ty Cổ phần Đầu tư Xây dựng Đăng Sơn' +
                    'Hạng mục: Cung cấp dây cáp điện Cadi-Sun', sliderLink: 'project-details'},
            {img: '1-project-2.png', sliderTitle: 'Công trình: Vinhomes Dream City', sliderShortDesc: 'Địa điểm: Nghĩa Trụ, Văn Giang, Hưng Yên\n' +
                    'Đơn vị thi công: Công ty Cổ phần Đầu tư Xây dựng Đăng Sơn' +
                    'Hạng mục: Cung cấp dây cáp điện Cadi-Sun', sliderLink: 'project-details'},
            {img: '1-project-3.png', sliderTitle: 'Công trình: Bệnh viện Đa khoa TTH Quảng Bình', sliderShortDesc: 'Địa điểm: Thành phố Đồng Hới, Quảng Bình\n' +
                    'Đơn vị thi công: Công ty Cổ phần TTH Group\n' +
                    'Hạng mục: Cung cấp dây cáp điện Cadi-Sun', sliderLink: 'project-details'},
        ];


        let DataList = data.map((val, i)=>{

            return(
                <SwiperSlide key={i}>
                    <div className="swiper-slide latest-project-slider__single-slide">
                        <div className="row row-30 align-items-center">
                            <div className="col-lg-6">
                                <div className="image">
                                    <img src={`assets/img/projects/${val.img}`} className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="content">
                                    <h3 className="count">{'0'+(i+1)}</h3>
                                    <h2 className="title">{val.sliderTitle}</h2>
                                    <p className="desc">{val.sliderShortDesc}</p>
                                    <a href={`${process.env.PUBLIC_URL}/${val.sliderLink}`} className="see-more-link see-more-link--color">XEM THÊM</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        });

        return(
            <div>
               {/*====================  project slider area ====================*/}
                <div className="project-slider-area grey-bg section-space--inner--120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        {/* section title */}
                        <div className="section-title-area text-center">
                            <h2 className="section-title section-space--bottom--50">Dự án gần đây </h2>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="latest-project-slider">
                            <div className="latest-project-slider__container-area">
                                <SwiperSlider options={params} navClass="project">
                                    {DataList}
                                </SwiperSlider>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/*====================  End of project slider area  ====================*/}
            </div>
        )
    }
}


export default ProjectSlider;
