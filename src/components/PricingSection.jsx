export default function PricingSection() {
  return (
    <section className="bg-gradient-to-r from-[#23262f] to-[#11151c] text-white py-20  my-[100px]">
      <div className="w-11/12 mx-auto px-6 text-center">
        <p>OUR PRICING PLANS</p>
        <h2 className="text-4xl font-bold mb-8 text-yellow-500">
          Our Pricing Strategy
        </h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10">
          {/* Premium Plan */}
          <div className="bg-[#1b1e24] p-8 rounded-lg shadow-lg flex flex-col items-center justify-between">
            <h3 className="text-2xl font-semibold mb-4">PREMIUM</h3>
            <p className="text-4xl font-bold text-yellow-500 mb-6">
              $7.99 <span className="text-base">Monthly</span>
            </p>
            <ul className="text-sm text-gray-300 mb-6">
              <li>✔️ Video quality: Good</li>
              <li>✔️ Resolution: 480p</li>
              <li>✔️ Screens you can watch: 1</li>
              <li>✔️ Cancel anytime</li>
            </ul>
            <button className="bg-yellow-500 text-black py-2 px-6 rounded-full font-semibold w-full">
              Buy Now
            </button>
          </div>

          {/* Standard Plan */}
          <div className="bg-[#1b1e24] p-8 rounded-lg shadow-lg flex flex-col items-center justify-between border-4 border-yellow-500">
            <h3 className="text-2xl font-semibold mb-4">STANDARD</h3>
            <p className="text-4xl font-bold text-yellow-500 mb-6">
              $9.99 <span className="text-base">Monthly</span>
            </p>
            <ul className="text-sm text-gray-300 mb-6">
              <li>✔️ Video quality: Better</li>
              <li>✔️ Resolution: 1080p</li>
              <li>✔️ Screens you can watch: 2</li>
              <li>✔️ Cancel anytime</li>
            </ul>
            <button className="bg-yellow-500 text-black py-2 px-6 rounded-full font-semibold w-full">
              Buy Now
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-[#1b1e24] p-8 rounded-lg shadow-lg flex flex-col items-center justify-between">
            <h3 className="text-2xl font-semibold mb-4">PREMIUM</h3>
            <p className="text-4xl font-bold text-yellow-500 mb-6">
              $11.99 <span className="text-base">Monthly</span>
            </p>
            <ul className="text-sm text-gray-300 mb-6">
              <li>✔️ Video quality: Best</li>
              <li>✔️ Resolution: 4K+HDR</li>
              <li>✔️ Screens you can watch: 4</li>
              <li>✔️ Cancel anytime</li>
            </ul>
            <button className="bg-yellow-500 text-black py-2 px-6 rounded-full font-semibold w-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
