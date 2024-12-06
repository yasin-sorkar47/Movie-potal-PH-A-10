import { useContext, useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { AuthContext } from "../context";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, singOutUser, setUser } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return storedTheme ? storedTheme === "dark" : prefersDark;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const onLogout = () => {
    singOutUser()
      .then(() => {
        console.log("user logged out successfully");
        navigate("/login");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" bg-gray-800 ">
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
            } absolute lg:static z-50 bg-gray-800 w-full lg:w-auto top-16 left-0`}
          >
            <li>
              <NavLink to="/" className="block p-2 hover:bg-gray-700">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className="block p-2 hover:bg-gray-700">
                All Movies
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to="/addMovie"
                    className="block p-2 hover:bg-gray-700"
                  >
                    Add Movie
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/favorites"
                    className="block p-2 hover:bg-gray-700"
                  >
                    My Favorites
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink to="/about" className="block p-2 hover:bg-gray-700">
                About Us
              </NavLink>
            </li>
          </ul>

          {/* Authentication Section */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className=" dark:bg-gray-800 text-black  py-2 px-1 rounded"
            >
              {darkMode ? (
                <MdLightMode className="text-xl text-gray-100" />
              ) : (
                <MdDarkMode className="text-xl text-gray-100" />
              )}
            </button>
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
                {/* Hamburger Icon for Mobile */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden text-2xl ml-4 text-white"
                >
                  ☰
                </button>
              </>
            ) : (
              <div className="relative flex items-center">
                <img
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  title={user?.displayName}
                  onClick={() => navigate("/profile")}
                />
                <button
                  onClick={onLogout}
                  className="btn btn-error btn-sm ml-1 md:ml-2"
                >
                  Logout
                </button>
                {/* Hamburger Icon for Mobile */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden text-2xl  text-white"
                >
                  ☰
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
