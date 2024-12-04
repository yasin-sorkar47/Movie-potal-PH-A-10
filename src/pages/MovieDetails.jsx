import { Link, useLoaderData } from "react-router-dom";

export default function MovieDetails() {
  const movie = useLoaderData();

  return (
    <div>
      <h1 className="text-white text-4xl font-bold text-center mt-10">
        Movie Details
      </h1>
      <div className="bg-gray-900 text-white min-h-screen py-10">
        <div className="relative">
          <img
            src={movie.poster}
            alt="Movie Poster"
            className="w-full h-[500px] object-cover brightness-50"
          />
          <div className="absolute top-10 left-10">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p className="text-lg mt-2">
              Release Year:{" "}
              <span className="font-medium">{movie.releaseYear}</span>
            </p>
            <p className="mt-1">
              Duration:{" "}
              <span className="font-medium">{movie.duration} mins</span>
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Summary</h2>
              <p className="text-gray-300 leading-7">{movie.summary}</p>

              <div className="flex items-center mt-6">
                <span className="bg-green-500 text-white px-3 py-1 rounded-md mr-4">
                  Genre: {movie.genre}
                </span>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">★★★★☆</span>
                  <span>({movie.rating}/5)</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Details</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  Release Year:{" "}
                  <span className="font-medium">{movie.releaseYear}</span>
                </li>
                <li>
                  Duration:{" "}
                  <span className="font-medium">{movie.duration} mins</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col space-y-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md">
                  Add to Favorites
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md">
                  Delete Movie
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <Link
            to={"/movies"}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md"
          >
            See All Movies
          </Link>
        </div>
      </div>
    </div>
  );
}
