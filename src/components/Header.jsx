import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = false;

  const onLogout = () => {
    console.log("onLogOUt");
  };

  return (
    <div className=" bg-gray-800">
      <nav className="w-11/12 mx-auto text-white p-4">
        <div className="flex items-center justify-between">
          {/* Logo / Website Name */}
          <Link to="/" className="text-xl font-bold">
            <img className="h-8" src={logo} alt="logo" />
          </Link>

          {/* Navigation Links */}
          <ul
            className={`lg:flex lg:space-x-4 ${
              isMenuOpen ? "block" : "hidden"
            } absolute lg:static bg-gray-800 w-full lg:w-auto top-16 left-0`}
          >
            <li>
              <Link to="/" className="block p-2 hover:bg-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/movies" className="block p-2 hover:bg-gray-700">
                All Movies
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/add-movie" className="block p-2 hover:bg-gray-700">
                    Add Movie
                  </Link>
                </li>
                <li>
                  <Link to="/favorites" className="block p-2 hover:bg-gray-700">
                    My Favorites
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link to="/about" className="block p-2 hover:bg-gray-700">
                About Us
              </Link>
            </li>
          </ul>

          {/* Authentication Section */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {!user ? (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="btn btn-primary btn-sm"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="btn btn-secondary btn-sm"
                >
                  Register
                </button>
              </>
            ) : (
              <div className="relative flex items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0YsgBw5MLXuXwWACiRUhdny4i74PjrzaGKQ&s"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  title="hero alom"
                  onClick={() => navigate("/profile")}
                />
                <button
                  onClick={onLogout}
                  className="btn btn-error btn-sm ml-2"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
