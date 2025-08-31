import { Outlet } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayouts = () => {
    return (
        <div>
                   <Header></Header>
                   <Navbar></Navbar>
            <div className="grid md:grid-cols-12 mt-14 w-10/12 mx-auto">
                    <div className="col-span-3">
                     <LeftSidebar></LeftSidebar>
                    </div>
                    <div className="col-span-6">
                        <Outlet></Outlet>
                    </div>
                    <div className="col-span-3">
                        <RightSidebar></RightSidebar>
                    </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts;