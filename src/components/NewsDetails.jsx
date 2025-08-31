import moment from 'moment';
import logo from '../assets/logo.png'
import RightSidebar from './RightSidebar';
import { Link, useLoaderData } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import Footer from './Footer';

const NewsDetails = () => {

    const data = useLoaderData();
    const news = data.data[0];

    return (
        <div>
            <header>
                <div className='w-10/12 mx-auto'>
                    <div className='flex flex-col items-center mt-10 space-y-3'>
                        <img src={logo} alt="" />
                        <h2 className='text-gray-400 text-xl'>Journalism Without Fear Or Favour</h2>
                        <p className='text-gray-500 text-xl font-semibold'>{moment().format('dddd, MMMM Do YYYY')}</p>
                    </div>
                </div>
            </header>
            <main className='grid md:grid-cols-12 gap-5 w-10/12 mx-auto mt-10'>
                 <section className='col-span-9'>
                    <h1 className='text-xl font-semibold'>Dragon News</h1>
                    <div className="card bg-base-100 mt-7 border border-gray-300 p-5">
                        <figure>
                            <img
                            src={news?.image_url
}
                            alt="news" />
                        </figure>
                        <div className="card-body space-y-2">
                            <h2 className="card-title md:text-2xl">{news?.title}</h2>
                            <p className='text-gray-500'>{news?.details}</p>
                            <div className="card-actions">
                            <Link to={`/category/${news?.category_id}`} className="btn bg-[#d72050] text-white"><IoArrowBack className='text-lg' />All news in this category</Link>
                            </div>
                        </div>
                        </div>
                 </section>
                 <section className='col-span-3'>
                    <RightSidebar></RightSidebar>
                 </section>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default NewsDetails;