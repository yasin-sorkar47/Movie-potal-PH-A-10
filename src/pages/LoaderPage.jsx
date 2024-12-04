export default function LoaderPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="loader-reel w-16 h-16 border-4 border-t-blue-500 border-gray-400 rounded-full animate-spin"></div>
        </div>
        <h1 className="text-2xl font-semibold">Loading Your Movies...</h1>
        <p className="mt-2 text-gray-400">
          Grab some popcorn while we set the screen!
        </p>
      </div>
    </div>
  );
}
