const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-900 text-white p-4 flex justify-between shadow-lg">
      <h1 className="text-xl font-bold">Brajesh Portfolio</h1>
      <ul className="flex space-x-6">
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;