const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <h1 className="text-6xl font-extrabold mb-8 animate-slide-down">About Me</h1>
      
      <p className="text-lg mb-6 max-w-xl text-center animate-fade-up">
        I am a Software Engineering student with a deep interest in web development and problem-solving. I have worked with technologies like Next.js, TypeScript, Tailwind CSS, and Python.
      </p>
      
      <p className="text-lg max-w-xl text-center animate-fade-up delay-200">
        My mission is to create smooth, aesthetically pleasing websites with an excellent user experience.
      </p>
    </div>
  );
};

export default About;
