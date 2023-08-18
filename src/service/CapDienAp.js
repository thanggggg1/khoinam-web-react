import {memo} from "react";
import data from "../data/cap-dien-ap.json"
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import NavBar from "../components/NavBar";
import {DataList} from "./CapTrungThe";
const CapDienAp = memo(function CapDienAp(){
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
                                    <li>Service</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*====================  End of breadcrumb area  ====================*/}

            {/*====================  service page content ====================*/}
            <div className="page-wrapper section-space--inner--120">
                {/*Service section start*/}
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
                {/*Service section end*/}
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

export default CapDienAp
