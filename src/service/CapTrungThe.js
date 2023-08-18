import React, {memo} from "react";
import data from "../data/cap-trung-the.json"
import NavBar from "../components/NavBar";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { Link } from 'react-router-dom';


export const DataList = memo(function (props){
    return (
        props.data.map((val,index)=>{
            return (
                <div
                    className="col-lg-4 col-md-6 col-12 section-space--bottom--30"
                    key={index}
                >
                    <div className="service-grid-item">
                        <div className="service-grid-item__image">
                            <div className="service-grid-item__image-wrapper">
                                <Link to={`${process.env.PUBLIC_URL}/${val.pageLink}`} state={{
                                    customProp:val
                                }}>
                                    <img
                                        src={require(`../assets/images/${val.images[0]}`)}
                                        className="img-fluid"
                                        alt="Sản phẩm
 Grid"
                                    />
                                </Link>
                            </div>
                            <div className="icon">
                                <i className={val.iconClass} />
                            </div>
                        </div>
                        <div className="service-grid-item__content">
                            <h3 className="title">
                                <Link to={`${process.env.PUBLIC_URL}/${val.pageLink}`} state={{
                                    customProp:val
                                }}/>
                            </h3>
                            <p className="subtitle">{val.serviceSubtitle}</p>
                            <Link to={`${process.env.PUBLIC_URL}/${val.pageLink}`} state={{
                                customProp:val
                            }}>
                                XEM THÊM
                            </Link>
                        </div>
                    </div>
                </div>
            )
        })
    )
})

const CapTrungThe = memo(function CapTrungThe(){
    return (
        <div>
            {/* Navigation bar */}
            <NavBar />
            {/* breadcrumb */}
            {/*====================  breadcrumb area ====================*/}
            <div
                className="breadcrumb-area breadcrumb-bg"
                style={{
                    backgroundImage: `url(assets/img/backgrounds/funfact-bg.jpg)`
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="page-banner text-center">
                                <h1>Sản phẩm
</h1>
                                <ul className="page-breadcrumb">
                                    <li>
                                        <a href="/">Trang chủ</a>
                                    </li>
                                    <li>Sản phẩm
</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*====================  End of breadcrumb area  ====================*/}

            {/*====================  service page content ====================*/}
            <div className="page-wrapper section-space--inner--120">
                {/*Sản phẩm
 section start*/}
                <div className="service-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-item-wrapper">
                                    <div className="row"><DataList data={data}/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Sản phẩm
 section end*/}
            </div>

            {/*====================  End of service page content  ====================*/}

            {/* Brand logo */}
            <BrandLogoSlider background="grey-bg" />

            {/* Footer */}
            <Footer />

            {/* Mobile Menu */}
            <MobileMenu />
        </div>
    )
})


export default CapTrungThe;
