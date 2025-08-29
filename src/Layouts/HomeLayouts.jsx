import LeftSidebar from "../components/LeftSidebar";
import NewsHome from "../components/NewsHome";
import RightSidebar from "../components/RightSidebar";

const HomeLayouts = () => {
    return (
        <div className="grid grid-cols-12 mt-14 w-10/12 mx-auto">
            <div className="col-span-3">
                <LeftSidebar></LeftSidebar>
            </div>
            <div className="col-span-6">
                 <NewsHome></NewsHome>
            </div>
            <div className="col-span-3">
                 <RightSidebar></RightSidebar>
            </div>
        </div>
    );
};

export default HomeLayouts;