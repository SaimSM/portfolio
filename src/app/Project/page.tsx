export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 to-blue-400 text-white">
      <h1 className="text-4xl font-bold mb-8 animate-fade-in-down">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-4">Project 1</h3>
          <p className="mb-4">Description of Project 1</p>
          <a href="https://github.com" className="text-blue-500">View on GitHub</a>
        </div>
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-4">Project 2</h3>
          <p className="mb-4">Description of Project 2</p>
          <a href="https://github.com" className="text-blue-500">View on GitHub</a>
        </div>
      </div>
    </div>
  );
}
