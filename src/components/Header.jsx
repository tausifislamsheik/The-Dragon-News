import moment from 'moment';
import logo from '../assets/logo.png'
import Marquee from 'react-fast-marquee';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex flex-col items-center mt-10 space-y-3'>
                <img src={logo} alt="" />
                <h2 className='text-gray-400 text-xl'>Journalism Without Fear Or Favour</h2>
                <p className='text-gray-500 text-2xl font-semibold'>{moment().format('dddd, MMMM Do YYYY')}</p>
               <div className='flex items-center gap-3 bg-gray-100 p-3 rounded-md  my-5'>
                  <p className='bg-[#d72050] text-white p-2 px-4 rounded-sm font-semibold'>Latest</p>
                   <Marquee speed={150} pauseOnHover={true}>
                       <p className='font-bold text-gray-700 text-xl'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as it happened !</p>
                    </Marquee>
                </div>
            </div>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;