import { Link } from "react-router-dom";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";

export default function Banner() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slider2} className="w-full h-[400px] lg:h-[600px] " />
        <div className="absolute bg-gray-900 bg-opacity-50   h-full left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
          <a href="#slide4" className="btn btn-circle ml-1 md:ml-5">
            ❮
          </a>
          <div className="text-center">
            <h1 className="text-xl lg:text-5xl font-bold text-yellow-400">
              MoveFix - Elevate Your Movie Experience
            </h1>
            <p className="max-w-[924px] text-gray-100 mt-4">
              Your ultimate destination for discovering, exploring, and enjoying
              movies. Dive into a visually stunning platform designed for film
              lovers to explore top-rated movies, build favorites, and stay
              inspired.
            </p>
            <Link
              to={"/movies"}
              className="btn bg-green-600 border-none hover:bg-green-500 text-white mt-2"
            >
              Explore More
            </Link>
          </div>
          <a href="#slide2" className="btn btn-circle mr-1 md:mr-5">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={slider1} className="w-full h-[400px] lg:h-[600px]" />
        <div className="absolute bg-gray-900   bg-opacity-50   h-full   left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
          <a href="#slide1" className="btn btn-circle ml-1 md:ml-5">
            ❮
          </a>
          <div className="text-center">
            <h1 className="text-xl lg:text-5xl font-bold text-yellow-400">
              MoveFix - Elevate Your Movie Experience
            </h1>
            <p className="max-w-[924px] text-gray-100 mt-4">
              Your ultimate destination for discovering, exploring, and enjoying
              movies. Dive into a visually stunning platform designed for film
              lovers to explore top-rated movies, build favorites, and stay
              inspired.
            </p>
            <Link
              to={"/movies"}
              className="btn bg-green-600 border-none hover:bg-green-500 text-white mt-5"
            >
              Explore More
            </Link>
          </div>
          <a href="#slide3" className="btn btn-circle mr-1 md:mr-5">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={slider3} className="w-full h-[400px] lg:h-[600px]" />
        <div className="absolute bg-gray-900   bg-opacity-50   h-full   left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
          <a href="#slide2" className="btn btn-circle ml-1 md:ml-5">
            ❮
          </a>
          <div className="text-center">
            <h1 className="text-xl lg:text-5xl font-bold text-yellow-400">
              MoveFix - Elevate Your Movie Experience
            </h1>
            <p className="max-w-[924px] text-gray-200 mt-4">
              Your ultimate destination for discovering, exploring, and enjoying
              movies. Dive into a visually stunning platform designed for film
              lovers to explore top-rated movies, build favorites, and stay
              inspired.
            </p>
            <Link
              to={"/movies"}
              className="btn bg-green-600 border-none hover:bg-green-500 text-white mt-5"
            >
              Explore More
            </Link>
          </div>
          <a href="#slide4" className="btn btn-circle mr-1 md:mr-5">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={slider4} className="w-full h-[400px] lg:h-[600px]" />
        <div className="absolute bg-gray-900   bg-opacity-50   h-full   left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
          <a href="#slide3" className="btn btn-circle ml-1 md:ml-5">
            ❮
          </a>
          <div className="text-center">
            <h1 className="text-xl lg:text-5xl font-bold text-yellow-400">
              MoveFix - Elevate Your Movie Experience
            </h1>
            <p className="max-w-[924px] text-gray-100 mt-4">
              Your ultimate destination for discovering, exploring, and enjoying
              movies. Dive into a visually stunning platform designed for film
              lovers to explore top-rated movies, build favorites, and stay
              inspired.
            </p>
            <Link
              to={"/movies"}
              className="btn bg-green-600 border-none hover:bg-green-500 text-white mt-5"
            >
              Explore More
            </Link>
          </div>
          <a href="#slide1" className="btn btn-circle mr-1 md:mr-5">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
