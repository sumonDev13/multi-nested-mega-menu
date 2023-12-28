

const Navbar = () => {
  return (
    <nav className="bg-white h-70px flex flex-col sm:flex-row justify-between items-center py-3 px-4 sm:px-6 lg:px-40">
      {/* Logo */}
      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
        <img src="/src/assets/icons/logo.svg" alt="Logo" className="h-37.88 w-129px" />
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-4 sm:mx-6 lg:mx-8 relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-10 px-3 pr-10 rounded bg-customGray"
        />
        <button className="absolute inset-y-0 right-0 flex items-center justify-center bg-gray-200 hover:bg-gray-300 h-full w-10 rounded">
          <img src="/src/assets/icons/search.svg" alt="Search" className="h-44 w-47" />
        </button>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        {/* User Button */}
        <button className="text-gray-700 hover:text-gray-900 transition duration-300">
          <img src="/src/assets/icons/User.svg" alt="User" className="h-6 w-6" />
        </button>

        {/* Love Button */}
        <button className="text-gray-700 hover:text-gray-900 transition duration-300">
          <img src="/src/assets/icons/love.svg" alt="Love" className="h-6 w-6" />
        </button>

        {/* Cart Button */}
        <button className="text-gray-700 hover:text-gray-900 transition duration-300">
          <img src="/src/assets/icons/Cart.svg" alt="Cart" className="h-6 w-6" />
        </button>

        {/* Cloud Storage Button */}
        <button className="text-gray-700 hover:text-gray-900 transition duration-300">
          <img src="/src/assets/icons/Vector.svg" alt="Cloud" className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
