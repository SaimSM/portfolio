import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-500 to-indigo-600 text-white">
      <header className="text-center">
        <h1 className="text-6xl font-extrabold mb-4 animate-slide-down">Hello, I am Saim!</h1>
        <p className="text-xl mb-6 animate-fade-up">A passionate Web Developer with experience in creating dynamic web solutions using modern technologies.</p>
        
        {/* Animated Projects Link */}
        <Link href="/Project" className="px-6 py-3 bg-white text-black rounded-lg shadow-lg hover:bg-gray-300 transition-transform transform hover:scale-105 animate-bounce">
          View My Projects
        </Link>
      </header>

      <section className="mt-14 text-center">
        <h2 className="text-4xl font-semibold mb-8">Career & Background</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">Education</h3>
            <p>Bachelor’s in Software Engineering at Sindh Madarsatul Islam University.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">Experience</h3>
            <p>Python Developer at a shipping company, Web Developer, and passionate about front-end technologies.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
