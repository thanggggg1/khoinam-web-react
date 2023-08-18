import React, { Component } from 'react';

class FeatureIcon extends Component{
    render(){

        let data = [
            {featureIcon: "feature-1.png", featureTitle: "Sứ mệnh", featureDescription: "Công ty TNHH thiết bị điện Khôi Nam cam kết làm việc với tinh thần và trách nhiệm cao, mang lại cho đối tác và khách hàng sự thành công và đóng góp thật nhiều cho cộng đồng, xã hội."},
            {featureIcon: "feature-2.png", featureTitle: "Tầm nhìn", featureDescription: "Với phương châm kinh doanh “ chất lượng, uy tín, chuyên nghiệp” cùng với niềm đam mê phục vụ và thái độ hợp tác tận tình, chu đáo. Công ty TNHH Thiết Bị Điện Khôi Nam được thành lập với mong muốn trở thành một trong những đơn vị hàng đầu về cung cấp dây và cáp điện, thiết bị điện."},
            {featureIcon: "feature-3.png", featureTitle: "Giá trị cốt lõi", featureDescription: "Công ty TNHH thiết bị điện Khôi Nam định hướng xây dựng thương hiệu mạnh trên cơ sở phát huy nội lực, độc lập, trung thực, khách quan trong kinh doanh."}
        ];

        let Datalist = data.map((val, i)=>{
            return(
                <div className="col-lg-4 col-md-6 col-12 section-space--bottom--30" key={i}>
                    <div className="feature">
                    <div className="icon">
                        <img src={`assets/img/icons/${val.featureIcon}`} className="img-fluid" alt="" />
                    </div>
                    <div className="content">
                        <h3>{val.featureTitle}</h3>
                        <p>{val.featureDescription}</p>
                    </div>
                    </div>
                </div>
            )
        });

        return(
            <div>
                {/*Feature section start*/}
                <div className={`feature-section section-space--inner--100 ${this.props.background}`}>
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="feature-item-wrapper">
                                <div className="row">
                                    {Datalist}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Feature section end*/}
            </div>
        )
    }
}

export default FeatureIcon;
