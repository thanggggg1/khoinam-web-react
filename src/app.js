import React, {  Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const CapCaoSu = lazy(()=>import("./service/CapCaoSu"))
const CapChongChay = lazy(()=>import("./service/CapChongChay"))
const CapDienAp = lazy(()=>import("./service/CapDienAp"))
const CapDongNhomBoc = lazy(()=>import("./service/CapDongNhomBoc"))
const CapDongNhomTran = lazy(()=>import("./service/CapDongNhomTran"))
const CapTrungThe = lazy(()=>import("./service/CapTrungThe"))
const CapVanXoan = lazy(()=>import("./service/CapVanXoan"))
const DienDanDung = lazy(()=>import("./service/DienDanDung"))
const SoiNhomTran = lazy(()=>import("./service/SoiNhomTran"))


const HomeOne = lazy(() => import("./home/HomeOne"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./service/Services"));
const ServiceDetailsLeftSidebar = lazy(() => import("./service/ServiceDetailsLeftSidebar"));
const ServiceDetailsRightSidebar = lazy(() => import("./service/ServiceDetailsRightSidebar"));
const Projects = lazy(() => import("./project/Projects"));
const ProjectDetails = lazy(() => import("./project/ProjectDetails"));
const BlogLeftSidebar = lazy(() => import("./blog/BlogLeftSidebar"));
const BlogRightSidebar = lazy(() => import("./blog/BlogRightSidebar"));
const BlogDetailsLeftSidebar = lazy(() => import("./blog/BlogDetailsLeftSidebar"));
const BlogDetailsRightSidebar = lazy(() => import("./blog/BlogDetailsRightSidebar"));
const Contact = lazy(() => import("./pages/Contact"));
const NoMAtch = lazy(() => import("./pages/404"));

const App = () => {
  return (
    <Router>
        <Suspense fallback={<div />}>
            <Routes>
                <Route path="/" element={<HomeOne />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/services" element={<CapTrungThe />} />
                <Route path="/services/cap-trung-the" element={<CapTrungThe />} />
                <Route path="/services/cap-cao-su" element={<CapCaoSu />} />
                <Route path="/services/cap-chong-chay" element={<CapChongChay />} />
                <Route path="/services/cap-dien-ap" element={<CapDienAp />} />
                <Route path="/services/cap-dong-nhom-boc" element={<CapDongNhomBoc />} />
                <Route path="/services/cap-dong-nhom-tran" element={<CapDongNhomTran />} />
                <Route path="/services/cap-van-xoan" element={<CapVanXoan />} />
                <Route path="/services/dien-dan-dung" element={<DienDanDung />} />
                <Route path="/services/soi-nhom-tran" element={<SoiNhomTran />} />
                <Route path="/service-details-left-sidebar" element={<ServiceDetailsLeftSidebar />} />
                <Route path="/service-details-right-sidebar" element={<ServiceDetailsRightSidebar />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project-details" element={<ProjectDetails />} />
                <Route path="/blog-left-sidebar" element={<BlogLeftSidebar />} />
                <Route path="/blog-right-sidebar" element={<BlogRightSidebar />} />
                <Route path="/blog-details-left-sidebar" element={<BlogDetailsLeftSidebar />} />
                <Route path="/blog-details-right-sidebar" element={<BlogDetailsRightSidebar />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="*" element={<NoMAtch />} />
            </Routes>
        </Suspense>
      </Router>
  )
}

export default App
