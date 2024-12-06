import { Link } from "react-router-dom";

function FeaturedMovies({ movies }) {
  const topRatedMovies = movies.sort((a, b) => b.rating - a.rating);

  return (
    <section className=" text-white py-12">
      <div className="w-11/12 mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Movies</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {/* Movie Cards */}
          {topRatedMovies.map((movie) => (
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
            to="/movies"
            className="inline-block px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-lg"
          >
            See All Movies
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovies;
