import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const NewsHome = () => {
  const {data:news} = useLoaderData();

  return (
    <div className="mr-12">
      <h1 className="font-semibold text-xl mb-7">Dragon News Home</h1>
      <div className="space-y-5">
          {news.length === 0 ? (
        <div className="text-center my-40">
            <p className="border border-gray-400 inline text-2xl p-4 rounded-2xl text-gray-500">No news available</p>
        </div>
      ) : (
        news.map(singleNews => (
          <NewsCard key={singleNews._id} news={singleNews} />
        ))
      )}
      </div>
    </div>
  );
};

export default NewsHome;
