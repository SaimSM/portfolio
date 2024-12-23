// "use client"; // Ensures this is treated as a client component

// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
//       <div className="container mx-auto px-4 flex justify-between items-center py-4">
//         {/* Portfolio Name */}
//         <div className="text-white text-3xl font-bold tracking-wide">
//           <Link href="/">Saim Portfolio</Link>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8">
//           <Link href="/" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">
//             Home
//           </Link>
//           <Link href="/about" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">
//             About
//           </Link>
//           <Link href="/skills" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">
//             Skills
//           </Link>
//           <Link href="/projects" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">
//             Projects
//           </Link>
//           <Link href="/contact" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">
//             Contact
//           </Link>
//         </div>

//         {/* Mobile Menu */}
//         <div className="md:hidden">
//           <Link href="/" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out block py-2">
//             Home
//           </Link>
//           <Link href="/about" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out block py-2">
//             About
//           </Link>
//           <Link href="/skills" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out block py-2">
//             Skills
//           </Link>
//           <Link href="/projects" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out block py-2">
//             Projects
//           </Link>
//           <Link href="/contact" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out block py-2">
//             Contact
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-500 p-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
//         <ul className="flex space-x-6">
//           <li><Link href="/" className="text-white hover:text-gray-200">Home</Link></li>
//           <li><Link href="/About" className="text-white hover:text-gray-200">About</Link></li>
//           <li><Link href="/Contact" className="text-white hover:text-gray-200">Contact</Link></li>
//           <li><Link href="/Project" className="text-white hover:text-gray-200">Project</Link></li>
//           <li><Link href="/Skills" className="text-white hover:text-gray-200">Skills</Link></li>
          
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-extrabold tracking-wide cursor-pointer hover:text-gray-200 transition duration-300">
         <Link href="/">My Portfolio</Link>
        </h1>
        
        <ul className="flex space-x-8">
          <li>
            <Link href="/">
              <span className="text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 shadow-md hover:shadow-lg cursor-pointer">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/About">
              <span className="text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 shadow-md hover:shadow-lg cursor-pointer">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/Contact">
              <span className="text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 shadow-md hover:shadow-lg cursor-pointer">
                Contact
              </span>
            </Link>
          </li>
          <li>
            <Link href="/Project">
              <span className="text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 shadow-md hover:shadow-lg cursor-pointer">
                Project
              </span>
            </Link>
          </li>
          <li>
            <Link href="/Skills">
              <span className="text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 shadow-md hover:shadow-lg cursor-pointer">
                Skills
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
