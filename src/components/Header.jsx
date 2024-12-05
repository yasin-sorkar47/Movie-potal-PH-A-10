import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { AuthContext } from "../context";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, singOutUser, setUser } = useContext(AuthContext);

  const onLogout = () => {
    singOutUser()
      .then(() => {
        console.log("user logged out successfully");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
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
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  title={user?.displayName}
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
