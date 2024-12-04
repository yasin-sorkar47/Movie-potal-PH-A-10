const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500">
          Welcome to Movie Portal!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4">
          Your one-stop destination for exploring the cinematic world! Whether
          you’re a casual movie lover or a hardcore cinephile, Movie Portal is
          here to make your movie-watching experience effortless, exciting, and
          enjoyable.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            At Movie Portal, we strive to bring movies closer to people. Our
            mission is to provide a platform that makes discovering and enjoying
            movies a seamless experience. Whether you're searching for the
            latest releases, exploring classics, or curating your own favorites
            list, we've got you covered.
          </p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/600x400" // Replace with a relevant image URL
            alt="Movie Experience"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-6">
          Why Choose Movie Portal?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              Comprehensive Library
            </h3>
            <p className="text-gray-300">
              Access a vast collection of movies from various genres, languages,
              and eras. There's something for everyone!
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              Personalized Experience
            </h3>
            <p className="text-gray-300">
              Create your own favorites list, explore highly rated movies, and
              enjoy a tailored experience just for you.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              Seamless Navigation
            </h3>
            <p className="text-gray-300">
              Our intuitive interface and responsive design ensure a hassle-free
              browsing experience across all devices.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <img
            src="https://via.placeholder.com/600x400" // Replace with a vision-related image URL
            alt="Future Vision"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We aim to become the most trusted platform for movie lovers
            worldwide, a place where cinema comes alive, and every story finds
            its audience. Our vision is to foster a vibrant community of movie
            enthusiasts who can connect, share, and celebrate their love for
            cinema.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-3xl font-semibold text-yellow-500 mb-4">
          Ready to Start Your Cinematic Journey?
        </h3>
        <button className="px-8 py-3 bg-yellow-500 text-gray-900 font-bold rounded-lg shadow-md hover:bg-yellow-400 transition-all">
          Explore Movies Now
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
