import { createBrowserRouter } from "react-router-dom";
import Main from "../layOuts/Main";
import AboutUs from "../pages/AboutUs";
import AddMovies from "../pages/AddMovies";
import AllMovies from "../pages/AllMovies";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MovieDetails from "../pages/MovieDetails";
import MyFavorites from "../pages/MyFavorites";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import UpdateMovie from "../pages/UpdateMovie";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:8000/movies?limit=6"),
      },
      {
        path: "/movies",
        element: <AllMovies />,
        loader: () => fetch("http://localhost:8000/movies"),
      },
      {
        path: "/movieDetails/:id",
        element: (
          <PrivateRoutes>
            <MovieDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:8000/movies/${params.id}`),
      },
      {
        path: "/updateMovie/:id",
        element: (
          <PrivateRoutes>
            <UpdateMovie />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:8000/movies/${params.id}`),
      },
      {
        path: "/addMovie",
        element: (
          <PrivateRoutes>
            <AddMovies />
          </PrivateRoutes>
        ),
      },
      {
        path: "/favorites",
        element: (
          <PrivateRoutes>
            <MyFavorites />
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:8000/movies"),
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export { router };
