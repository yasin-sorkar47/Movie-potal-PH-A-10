import React, { useContext, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../context";

const AddMovies = () => {
  const [formData, setFormData] = useState({
    poster: "",
    title: "",
    genre: "",
    duration: "",
    releaseYear: "",
    summary: "",
  });

  const { user } = useContext(AuthContext);

  const years = [
    2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
    2012, 2011, 2010,
  ];

  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState({});

  //   get the all value from input field
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   handle validation fuction
  const handleValidation = () => {
    const newErrors = {};
    if (!formData.poster || !/^https?:\/\/.+/.test(formData.poster)) {
      newErrors.poster = "Poster URL is required and must be valid.";
    }
    if (!formData.title || formData.title.length < 2) {
      newErrors.title = "Title must be at least 2 characters.";
    }
    if (!formData.genre) {
      newErrors.genre = "Please select a genre.";
    }
    if (!formData.duration || formData.duration < 60) {
      newErrors.duration = "Duration must be at least 60 minutes.";
    }
    if (!formData.releaseYear) {
      newErrors.releaseYear = "Please select a release year.";
    }
    if (!rating) {
      newErrors.rating = "Please provide a rating.";
    }
    if (!formData.summary || formData.summary.length < 10) {
      newErrors.summary = "Summary must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const movieData = {
        ...formData,
        rating,
        email: user?.email,
      };

      fetch("https://movie-fix-server-a-10.vercel.app/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            Swal.fire({
              title: "Good job!",
              text: "You have added movie successfully!",
              icon: "success",
            });
          }
        });

      //   reset the form
      setFormData({
        poster: "",
        title: "",
        genre: "",
        duration: "",
        releaseYear: "",
        summary: "",
      });

      setRating(0);
      setErrors({});
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-900 text-white p-8 rounded-lg shadow-lg my-10">
      <h1 className="text-3xl font-bold text-yellow-500 mb-6">Add a Movie</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Movie Poster */}
        <div>
          <label className="block text-yellow-400">Movie Poster URL</label>
          <input
            type="text"
            name="poster"
            value={formData.poster}
            onChange={handleChange}
            className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded"
          />
          {errors.poster && (
            <p className="text-red-500 text-sm">{errors.poster}</p>
          )}
        </div>

        {/* Movie Title */}
        <div>
          <label className="block text-yellow-400">Movie Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        {/* Genre */}
        <div>
          <label className="block text-yellow-400">Genre</label>
          <select
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded"
          >
            <option value="">Select Genre</option>
            {["Comedy", "Drama", "Horror", "Action", "Sci-Fi"].map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          {errors.genre && (
            <p className="text-red-500 text-sm">{errors.genre}</p>
          )}
        </div>

        {/* Duration */}
        <div>
          <label className="block text-yellow-400">Duration (in minutes)</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded"
          />
          {errors.duration && (
            <p className="text-red-500 text-sm">{errors.duration}</p>
          )}
        </div>

        {/* Release Year */}
        <div>
          <label className="block text-yellow-400">Release Year</label>
          <select
            name="releaseYear"
            value={formData.releaseYear}
            onChange={handleChange}
            className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded"
          >
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          {errors.releaseYear && (
            <p className="text-red-500 text-sm">{errors.releaseYear}</p>
          )}
        </div>

        {/* Rating */}
        <div>
          <label className="block text-yellow-400">Rating</label>
          <div className="flex">
            <Rating
              onClick={(rate) => setRating(rate)}
              ratingValue={rating}
              size={30}
              fillColor="#facc15"
              emptyColor="#4b5563"
              className="flex flex-row" // Ensure it uses a row layout
            />
          </div>

          {errors.rating && (
            <p className="text-red-500 text-sm">{errors.rating}</p>
          )}
        </div>

        {/* Summary */}
        <div>
          <label className="block text-yellow-400">Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded h-32"
          />
          {errors.summary && (
            <p className="text-red-500 text-sm">{errors.summary}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded transition"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovies;
