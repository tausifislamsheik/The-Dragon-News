import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import HomeLayouts from "../Layouts/HomeLayouts";

const Root = () => {
    return (
        <div className="font-poppins">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;