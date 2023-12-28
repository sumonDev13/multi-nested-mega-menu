

const TopNavbar = () => {
  return (
    <nav className="bg-customGray sm:px-4 md:px-8 lg:px-12 xl:px-40 h-25px flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <a href="#" className="text-black hover:text-gray-700 transition duration-300">Item 1</a>
        <a href="#" className="text-black hover:text-gray-700 transition duration-300">Item 2</a>
        <a href="#" className="text-black hover:text-gray-700 transition duration-300">Item 3</a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-black hover:text-gray-700 transition duration-300">Item 4</a>
        <a href="#" className="text-black hover:text-gray-700 transition duration-300">Item 5</a>
        <a href="#" className="text-black hover:text-gray-700 transition duration-300">Item 6</a>
      </div>
    </nav>
  );
};

export default TopNavbar;
