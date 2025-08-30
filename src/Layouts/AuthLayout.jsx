import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="bg-base-300">
           <header className="py-14">
              <Navbar></Navbar>
           </header> 
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;