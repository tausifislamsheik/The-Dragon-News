import { Outlet } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

const HomeLayouts = () => {
    return (
        <div className="grid grid-cols-12 mt-14 w-10/12 mx-auto">
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
    );
};

export default HomeLayouts;