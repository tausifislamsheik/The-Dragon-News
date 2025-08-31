import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <div className="text-center">
            <span className="loading loading-bars loading-xl min-h-screen"></span>
        </div>
    }

    if(user && user?.email){
        return children
    }
    return (
        <Navigate state={location.pathname} to='/auth/login'></Navigate>
    );
};

export default PrivateRoute;