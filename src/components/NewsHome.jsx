import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const NewsHome = () => {

    const {data: news} = useLoaderData();
    console.log(news)
    return (
        <div>
            <h1 className="font-semibold text-xl">Dragon News Home</h1>
            {
                news.map(singleNews => <NewsCard key={singleNews.category_id} news={singleNews}></NewsCard>)
            }
        </div>
    );
};

export default NewsHome;