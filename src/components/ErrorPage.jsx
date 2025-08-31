import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <div className="my-60 border border-gray-300 inline-block px-18 p-10 rounded-2xl">
               <h1 className="text-6xl font-semibold mb-5">Oops!!!</h1>
               <p className="text-2xl text-gray-400">Page not found</p>
               <Link className="btn bg-red-600 text-white mt-10" to='/'>Go back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;