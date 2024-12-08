import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function AllMovies() {
  const data = useLoaderData();
  const [val, setVal] = useState("");

  const movies = data.filter((item) =>
    item.title.toLowerCase().includes(val.toLowerCase())
  );

  return (
    <section className=" text-white py-12">
      <div className="w-11/12 mx-auto px-6">
        <h2 className="text-3xl font-bold dark:dark:text-gray-100 text-gray-700  text-center">
          All Movies
        </h2>
        <p className="max-w-[724px] text-gray-700 dark:text-gray-100 mb-8  mt-3 text-center mx-auto">
          Experience the world of cinema like never before with MoveFix, your
          gateway to a curated collection of top-rated films. Explore detailed
          reviews, genres, and timeless classics with an elegantly designed
          interface tailored for movie enthusiasts.
        </p>
        <input
          className="border text-gray-700 dark:text-gray-100 rounded-sm bg-transparent px-4 mb-8 py-1"
          placeholder="Search"
          onChange={(e) => setVal(e.target.value)}
          type="text"
          name="search"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {/* Movie Cards */}
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{movie.title}</h3>
                <p className="text-gray-400 text-sm">{movie.genre}</p>
                <p className="text-gray-400 text-sm">
                  Duration: {movie.duration} mins
                </p>
                <p className="text-gray-400 text-sm">
                  Release Year: {movie.releaseYear}
                </p>
                <p className="text-yellow-400 text-sm">
                  Rating: {movie.rating} / 5
                </p>
                <Link
                  to={`/movieDetails/${movie._id}`}
                  className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* See All Movies Button */}
        <div className="text-center mt-8">
          <Link
            to={"/"}
            className="inline-block px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-lg"
          >
            Goto Home
          </Link>
        </div>
      </div>
    </section>
  );
}
