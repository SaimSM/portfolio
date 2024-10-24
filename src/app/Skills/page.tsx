export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
      <h1 className="text-5xl font-bold mb-10 animate-fadeIn">Skills</h1>

      {/* Skill Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl p-6">
        {/* Skill 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 hover:rotate-2 duration-500 relative group">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">HTML/CSS</h3>
          <p className="text-gray-600">
            Experience with responsive design and modern UI frameworks like
            Tailwind CSS.
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4 overflow-hidden">
            <div
              className="bg-blue-500 h-full rounded-full animate-progress"
              style={{ width: "90%" }}
            ></div>
          </div>

          {/* Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
        </div>

        {/* Skill 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 hover:rotate-2 duration-500 relative group">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">TypeScript</h3>
          <p className="text-gray-600">
            Building scalable web applications using TypeScript with React and
            Next.js.
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4 overflow-hidden">
            <div
              className="bg-blue-500 h-full rounded-full animate-progress"
              style={{ width: "85%" }}
            ></div>
          </div>

          {/* Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
        </div>

        {/* Add more skills with similar structure */}
        {/* Example Skill 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 hover:rotate-2 duration-500 relative group">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">JavaScript</h3>
          <p className="text-gray-600">
            Advanced knowledge of JavaScript for building dynamic web
            applications.
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4 overflow-hidden">
            <div
              className="bg-blue-500 h-full rounded-full animate-progress"
              style={{ width: "95%" }}
            ></div>
          </div>

          {/* Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
}
