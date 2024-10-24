export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 to-blue-400 text-white">
      <h1 className="text-5xl font-bold mb-12 animate-fadeInDown">My Projects</h1>

      {/* Projects Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl p-6">
        
        {/* Project 1 */}
        <div className="relative bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:rotate-2 duration-500 group">
          <h3 className="text-3xl font-bold mb-4 animate-slideInLeft">Project 1</h3>
          <p className="mb-4 animate-slideInRight">A brief description of Project 1, showcasing key features and technologies used.</p>
          
          {/* Animated GitHub Button */}
          <a href="https://github.com" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110">
            View on GitHub
          </a>
          
          {/* Floating Image Effect */}
          <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>

        {/* Project 2 */}
        <div className="relative bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:rotate-2 duration-500 group">
          <h3 className="text-3xl font-bold mb-4 animate-slideInLeft">Project 2</h3>
          <p className="mb-4 animate-slideInRight">A brief description of Project 2, showcasing the technologies used.</p>
          
          {/* Animated GitHub Button */}
          <a href="https://github.com" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110">
            View on GitHub
          </a>
          
          {/* Floating Image Effect */}
          <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>

        {/* Project 3 (Add more projects similarly) */}
        <div className="relative bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:rotate-2 duration-500 group">
          <h3 className="text-3xl font-bold mb-4 animate-slideInLeft">Project 3</h3>
          <p className="mb-4 animate-slideInRight">A brief description of Project 3, showcasing the technologies used.</p>
          
          {/* Animated GitHub Button */}
          <a href="https://github.com" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110">
            View on GitHub
          </a>
          
          {/* Floating Image Effect */}
          <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>

      </div>
    </div>
  );
}
