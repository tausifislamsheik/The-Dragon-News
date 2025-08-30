import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen w-10/12 mx-auto">
                <div className="hero-content">
                    <div className="card bg-white p-10 py-14 w-full max-w-lg shrink-0">
                        <h1 className="text-3xl font-semibold pb-12 text-center">Register your account</h1>
                        <hr className="pt-4 text-gray-200" />
                    <form className="">
                        <fieldset className="fieldset space-y-2">
                        <label className="label text-lg font-semibold">Your Name</label>
                        <input type="text" className="input w-full bg-gray-100 border-none" placeholder="Enter your name" />
                        <label className="label text-lg font-semibold">Photo URL</label>
                        <input type="text" className="input w-full bg-gray-100 border-none" placeholder="Enter your photo url" />
                        <label className="label text-lg font-semibold">Email</label>
                        <input type="email" className="input w-full bg-gray-100 border-none" placeholder="Enter your email address" />
                        <label className="label text-lg font-semibold">Password</label>
                        <input type="password" className="input w-full bg-gray-100 border-none" placeholder="Enter your password" />
                        <p className="text-gray-500 text-sm"><input type="checkbox" className="checkbox checkbox-sm" /> Accept <span className="font-semibold">Terms & Conditions</span></p>
                        <button className="btn btn-neutral mt-3">Register</button>
                        </fieldset>
                    </form>
                    <h1 className="text-center pt-4">Already have an account? <Link className="text-red-500 font-semibold" to='/auth/login'>Login</Link></h1>
                    </div>
                </div>
            </div>
    );
};

export default Register;