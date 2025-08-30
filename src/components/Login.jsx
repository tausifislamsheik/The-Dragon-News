import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const {loginUser} = useContext(AuthContext)

    const handleSubmit = (e) =>{
        e.preventDefault();

        const form = new FormData(e.target)
        const email = form.get('email')
         const password = form.get('password')
         
         console.log({email,password})

         loginUser(email, password)
         .then(result =>{
            console.log(result)
         })
         .catch(error => console.log(error.message))
    }
    return (
            <div className="min-h-screen w-10/12 mx-auto">
                <div className="hero-content">
                    <div className="card bg-white p-10 py-14 w-full max-w-lg shrink-0">
                        <h1 className="text-3xl font-semibold pb-12 text-center">Login your account</h1>
                        <hr className="pt-4 text-gray-200" />
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset space-y-2">
                        <label className="label text-lg font-semibold">Email</label>
                        <input type="email" name="email" className="input w-full bg-gray-100 border-none" placeholder="Enter your email address" />
                        <label className="label text-lg font-semibold">Password</label>
                        <input type="password" name="password" className="input w-full bg-gray-100 border-none" placeholder="Enter your password" />
                        <div><a className="link link-hover text-gray-500">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <h1 className="text-center pt-4">Don't have an account? <Link className="text-red-500 font-semibold" to='/auth/register'>Register</Link></h1>
                    </div>
                </div>
            </div>
    );
};

export default Login;