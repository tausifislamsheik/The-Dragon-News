import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <div></div>
            <div>
                <ul className="flex gap-3 text-gray-400 text-lg font-semibold">
                   <Link>Home</Link>
                   <Link>About</Link>
                   <Link>Career</Link>
                </ul>
            </div>
            <div className='flex gap-2'>
                <img src={userIcon} alt="" />
                <button className="btn btn-neutral px-6">Login</button>
            </div>
        </div>
    );
};

export default Navbar;