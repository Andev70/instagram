import "./404.scss";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 mx-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          404 - Page not found
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          We're sorry, but the page you're looking for cannot be found.
        </p>
        <Link
          to="/users"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Go back to homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
