import { Link } from "react-router-dom";

function FeaturedMovies() {
  const movies = [
    {
      id: 1,
      poster:
        "https://static0.srcdn.com/wordpress/wp-content/uploads/2023/11/greatest-movies-of-all-time.jpg",
      title: "Inception",
      genre: ["Action", "Sci-Fi", "Thriller"],
      duration: 148,
      releaseYear: 2010,
      rating: 8.8,
      summary:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the task of planting an idea into the mind of a CEO.",
    },
    {
      id: 2,
      poster:
        "https://i.ytimg.com/vi/yuIpbZZuEco/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCB6wznvSwo_z1UpFMQtCcuDYLZaA",
      title: "The Dark Knight",
      genre: ["Action", "Crime", "Drama"],
      duration: 152,
      releaseYear: 2008,
      rating: 9.0,
      summary:
        "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    },
    {
      id: 3,
      poster:
        "https://www.upv.edu.ph/images/upv-prof-movie-love-child-show-cinemalaya.jpg",
      title: "The Shawshank Redemption",
      genre: ["Drama"],
      duration: 142,
      releaseYear: 1994,
      rating: 9.3,
      summary:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      id: 4,
      poster:
        "https://i.ytimg.com/vi/hM-KfH7xMBQ/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBuilJla8Pz5mafm7NcJCvTNBp-1A",
      title: "The Godfather",
      genre: ["Crime", "Drama"],
      duration: 175,
      releaseYear: 1972,
      rating: 9.2,
      summary:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
      id: 5,
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZ8J3eb6hQVeR8z4IlGxQnOKKONknmPvkDknTZQEy6rTkIQg2OMs6ij5ZsgZlySa3fGQ&usqp=CAU",
      title: "The Lord of the Rings: The Return of the King",
      genre: ["Action", "Adventure", "Drama"],
      duration: 201,
      releaseYear: 2003,
      rating: 8.9,
      summary:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    },
    {
      id: 6,
      poster: "https://i.ytimg.com/vi/d_1Q7DaSnBU/maxresdefault.jpg",
      title: "Interstellar",
      genre: ["Adventure", "Drama", "Sci-Fi"],
      duration: 169,
      releaseYear: 2014,
      rating: 8.6,
      summary:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    },
  ];

  // Sort the movies by rating (highest to lowest) and get the top 6 movies
  const topRatedMovies = movies.sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <section className=" text-white py-12">
      <div className="w-11/12 mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Movies</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {/* Movie Cards */}
          {topRatedMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{movie.title}</h3>
                <p className="text-gray-400 text-sm">
                  {movie.genre.join(", ")}
                </p>
                <p className="text-gray-400 text-sm">
                  Duration: {movie.duration} mins
                </p>
                <p className="text-gray-400 text-sm">
                  Release Year: {movie.releaseYear}
                </p>
                <p className="text-yellow-400 text-sm">
                  Rating: {movie.rating} / 10
                </p>
                <Link
                  to={`/movie-details/${movie.id}`}
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
            to="/all-movies"
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
