export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 to-blue-400 text-white">
      <h1 className="text-4xl font-bold mb-8 animate-fade-in-down">My Projects</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        
        {/* Project 1 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-4">Pixel perfect design</h3>
          <p className="mb-4">made a pixel perfect design using figma file with the help of nextjs</p>
          <a 
            href="https://github.com/SaimSM/Pixel-perfect-design" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
          <p className="mb-4">Created a portfolio using nextjs</p>
          <a 
            href="https://github.com/SaimSM/portfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 3 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-4">My Website</h3>
          <p className="mb-4">Created a website to check my hand-on experince in tailwind CSS</p>
          <a 
            href="https://github.com/SaimSM/mywebsite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 4 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-4">Resume</h3>
          <p className="mb-4">Build a resume using HTML, CSS and Javascript</p>
          <a 
            href="https://github.com/SaimSM/Resume-Builder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View on GitHub
          </a>
        </div>

      </div>
    </div>
  );
}
