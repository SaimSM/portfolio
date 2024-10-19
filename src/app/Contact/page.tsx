export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>

      <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-md animate-fade-in">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </form>

      <div className="mt-8 space-y-4 text-center">
        <p>Email: <a href="mailto:muhammadsaimnadeem@example.com" className="text-blue-500">muhammadsaimnadeem@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com" className="text-blue-500">LinkedIn Profile</a></p>
        <p>GitHub: <a href="https://github.com" className="text-blue-500">GitHub Profile</a></p>
        <p>Phone: +123456789</p>
      </div>
    </div>
  );
}
