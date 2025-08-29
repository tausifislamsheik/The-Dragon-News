import { FaEye, FaShareAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    rating,
    total_view,
    details,
    image_url,
    
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl border rounded-2xl">
      {/* Author Info */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 cursor-pointer" />
      </div>

      {/* Title */}
      <div className="px-4 mt-3">
        <h1 className="font-bold text-lg">{title}</h1>
      </div>

      {/* Image */}
      <figure className="px-4 py-3">
        <img src={image_url} alt="news" className="rounded-xl" />
      </figure>

      {/* Details */}
      <div className="px-4 text-sm text-gray-600">
        {details.length > 180 ? (
          <>
            {details.slice(0, 180)}...
            <span className="text-orange-500 cursor-pointer"> Read More</span>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t mt-2">
        <div className="flex items-center text-orange-500">
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} className="text-lg" />
          ))}
          <span className="ml-2 text-gray-700 font-medium">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
