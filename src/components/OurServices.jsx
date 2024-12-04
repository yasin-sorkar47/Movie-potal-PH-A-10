import serviceImage from "../assets/services_img02.jpg";

export default function OurServices() {
  return (
    <section className="bg-gradient-to-r from-[#23262f] to-[#11151c] text-white py-20">
      <div className="w-11/12 mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Text */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6">
            Download Your Shows Watch Offline.
          </h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <i className="fas fa-tv text-white text-xl"></i> {/* TV Icon */}
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-semibold">Enjoy on Your TV.</h3>
                <p className="text-gray-300 text-sm">
                  Watch your favorite movies and TV shows directly on your
                  television. Seamlessly stream content with high-quality video
                  for a truly cinematic experience from the comfort of your
                  home.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <i className="fas fa-video text-white text-xl"></i>{" "}
                {/* Video Icon */}
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-semibold">Watch Everywhere.</h3>
                <p className="text-gray-300 text-sm">
                  Take your movies with you! Whether you're on a plane, at the
                  beach, or commuting, you can enjoy your favorite movies and
                  shows anywhere with offline access on your device.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative flex justify-center items-center">
            <img
              src={serviceImage}
              alt="Phone Preview"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 right-4 bg-yellow-500 text-black py-2 px-4 rounded-full">
              <span className="font-bold">Download</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
