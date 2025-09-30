const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Brajesh 👋</h1>
      <p className="text-xl">A passionate Java Developer & Web Enthusiast</p>
      <a href="#contact" className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg">Contact Me</a>
    </section>
  );
};

export default Hero;