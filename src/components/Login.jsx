import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const {loginUser, forgetPassword} = useContext(AuthContext)
    const [error, setError] = useState('')
    const emailRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')

         loginUser(email, password)
         .then(result =>{
            console.log(result)
            navigate(location?.state ? location?.state : '/')
         })
         .catch(err => {
            setError({ ...error, login:err.code})
         })
    }

    const handleResetPassword = () =>{
        console.log(emailRef.current.value)
        const email = emailRef.current.value;
        if(!email){
           alert('Please provide a valid email') 
        }else{
            forgetPassword(email)
            .then(result =>{
             alert('Sent email for reset password, Check your email',result)
            })
            .catch(error => console.log(error.message))
        }
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
                        <input type="email" ref={emailRef} name="email" className="input w-full bg-gray-100 border-none" placeholder="Enter your email address" />
                        <label className="label text-lg font-semibold">Password</label>
                        <input type="password" name="password" className="input w-full bg-gray-100 border-none" placeholder="Enter your password" />
                        
                            {
                                error.login && <p className="text-red-500 text-center">Invalid email or password</p>
                            }
                        
                        <div><a onClick={handleResetPassword} className="link link-hover text-gray-500">Forgot password?</a></div>
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