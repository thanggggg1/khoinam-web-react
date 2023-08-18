import React, { memo} from "react";
import NavBar from "../components/NavBar";
import Sidebar from "./components/Sidebar";
import ServiceGallery from "./components/ServiceGallery";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { useLocation } from 'react-router-dom';

const ServiceDetailsLeftSidebar = memo(function ServiceDetailsLeftSidebar(){
  const location = useLocation()
  const data = location.state.customProp;
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
                  <h1>Chi tiết sản phẩm</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Trang chủ</a>
                    </li>
                    <li>
                      <a href={`${process.env.PUBLIC_URL}/services`}>
                        Sản phẩm
                      </a>
                    </li>
                    <li>Thông tin</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper section-space--inner--120">
          {/*Sản phẩm
 section start*/}
          <div className="service-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12 order-1 order-lg-2">
                  <div className="service-details">
                    {/* service gallery */}
                    <ServiceGallery images={data.images}/>

                    <div className="content section-space--top--30">
                      <div className="row">
                        <div className="col-12">
                          <h3>{data.name}</h3>
                          <div
                               dangerouslySetInnerHTML={{ __html: data.description.replace(/\n/g, '<br />')}} />
                        </div>
                          <img src={require(`../assets/images/${data.images_descriptions[0]}`)} alt="image"/>
                          <img src={require(`../assets/images/${data.images_prices[0]}`)} alt="image"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 order-2 order-lg-1">
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
          {/*Sản phẩm
 section end*/}
        </div>

        {/* Brand logo */}
        <BrandLogoSlider background="grey-bg" />

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
  )
})
export default ServiceDetailsLeftSidebar;
