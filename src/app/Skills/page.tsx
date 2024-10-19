export default function Skills() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Skills</h1>
        <div className="grid grid-cols-2 gap-8 max-w-4xl">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold">HTML/CSS</h3>
            <p>Experience with responsive design and modern UI frameworks like Tailwind CSS.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold">TypeScript</h3>
            <p>Building scalable web applications using TypeScript with React and Next.js.</p>
          </div>
          {/* Add more skill sections */}
        </div>
      </div>
    );
  }
  