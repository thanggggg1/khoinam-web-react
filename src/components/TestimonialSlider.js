import React, { Component } from "react";
import SwiperSlider, { SwiperSlide } from "./swiper";
import { EffectFade } from "swiper";

class TestimonialSlider extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      loop: true,
      autoplay: false,
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },
      modules: [EffectFade]
    };
    let data = [
      {
        testimonialImage: "1.jpg",
        testimonialName: "Anh Ngọc Minh",
        testimonialDesignation: "Khách hàng Bình Dương",
        testimonialText:
          "Tôi chọn mua hàng bên Công ty bởi do tính chuyên nghiệp, hiệu quả cao khi hợp tác"
      },
      {
        testimonialImage: "1.jpg",
        testimonialName: "Tiêu Minh Chính",
        testimonialDesignation: "Trường phòng kinh doanh",
        testimonialText:
            "Công ty là đối tác kinh doanh chiến lược cho lựa chọn lâu dài của công ty Chúng tôi. Các sản phẩm chuyên dụng này giúp ích được rất nhiều trong gia đình thêm đẹp và bền lâu"
      },
      {
        testimonialImage: "1.jpg",
        testimonialName: "Anh Mạnh Hùng",
        testimonialDesignation: "CEO",
        testimonialText:
        "Các đơn hàng mang đến rất nhiều sự hài lòng, nhanh chóng, tiêu chuẩn rất tuyệt. Cảm ơn quý công ty"
      }
    ];

    let DataList = data.map((val, i) => {
      return (
        <SwiperSlide key={i}>
          <div className="testimonial-slider__single-slide">
            <div className="author">
              <div className="author__image">
                <img
                  src={`assets/img/testimonial/${val.testimonialImage}`}
                  alt=""
                />
              </div>
              <div className="author__details">
                <h4 className="name">{val.testimonialName}</h4>
                <div className="designation">{val.testimonialDesignation}</div>
              </div>
            </div>
            <div className="content">{val.testimonialText}</div>
          </div>
        </SwiperSlide>
      );
    });

    return (
      <div>
        {/*====================  testimonial slider area ====================*/}
        <div
          className="testimonial-slider-area testimonial-slider-area-bg section-space--inner--120"
          style={{
            backgroundImage: `url(assets/img/backgrounds/testimonial.jpg)`
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="testimonial-slider">
                  <div className="testimonial-slider__container-area">
                    <SwiperSlider options={params}>{DataList}</SwiperSlider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of testimonial slider area  ====================*/}
      </div>
    );
  }
}

export default TestimonialSlider;
