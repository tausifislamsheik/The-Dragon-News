import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const {user, signOutUser} = useContext(AuthContext)

    const handleSignOut = () =>{
        signOutUser()
        .then(() => console.log('Sign out user successfully'))
        .catch(error => console.log('ERROR',error.message))
    }
    return (
        <div className='flex items-center justify-between w-10/12 mx-auto'>
            <div></div>
            <div>
                <ul className="flex gap-3 text-gray-400 text-lg font-semibold">
                   <Link>Home</Link>
                   <Link>About</Link>
                   <Link>Career</Link>
                </ul>
            </div>
            <div className='flex gap-2'>
                {
                    user && user?.email ? <>
                        <img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="" />
                        <div>
                            <p className='font-semibold'>{user?.displayName}</p>
                            <p className='text-sm text-gray-400'>{user?.email}</p>
                            <button onClick={handleSignOut} className="btn bg-red-600 text-white px-6">Log-Out</button>
                        </div>
                    </> : <>
                    <img className='object-cover w-10 h-10 rounded-full' src={userIcon} alt="" />
                    <Link to='/auth/login' className="btn btn-neutral px-6">Login</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;