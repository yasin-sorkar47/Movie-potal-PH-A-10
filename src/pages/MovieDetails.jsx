import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context";

export default function MovieDetails() {
  const navigate = useNavigate();
  const movie = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user.email);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://movie-fix-server-a-10.vercel.app/movies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              navigate("/movies");
            }
          });
      }
    });
  };

  const handleAddToFavorites = (id) => {
    const email = { email: user.email };

    fetch(`https://movie-fix-server-a-10.vercel.app/status/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Your movie has been added to Favorites!",
            icon: "success",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You have added this as Favorite!",
          });
        }
      });
  };

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
                <button
                  onClick={() => handleAddToFavorites(movie._id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md"
                >
                  Add to Favorites
                </button>
                <Link
                  to={`/updateMovie/${movie._id}`}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 text-center px-6 rounded-md"
                >
                  Update Movie
                </Link>
                <button
                  onClick={() => handleDelete(movie._id)}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md"
                >
                  Delete Movie
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <Link
            to={"/movies"}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md"
          >
            See All Movies
          </Link>
        </div>
      </div>
    </div>
  );
}
