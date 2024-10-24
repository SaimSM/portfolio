export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-200 to-gray-400">
      <h1 className="text-5xl font-bold mb-8 text-gray-800 animate-slide-down">Get in Touch</h1>

      {/* Contact Form */}
      <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md animate-fade-in">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105">
            Submit
          </button>
        </div>
      </form>

      {/* Contact Info */}
      <div className="mt-10 space-y-4 text-center text-gray-700">
        <p>Email: <a href="mailto:muhammadsaimnadeem@example.com" className="text-blue-600 hover:underline">muhammadsaimnadeem@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com" className="text-blue-600 hover:underline">LinkedIn Profile</a></p>
        <p>GitHub: <a href="https://github.com" className="text-blue-600 hover:underline">GitHub Profile</a></p>
        <p>Phone: +123456789</p>
      </div>
    </div>
  );
}
