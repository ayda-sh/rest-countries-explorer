import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="container mx-auto px-8">
      <div className="flex items-center p-4 py-5">
        <a href="/" className="flex items-center">
          <span className="text-black font-bold text-xl">REST</span>
          <span className="text-blue-600 font-bold text-xl">Explorer</span>
        </a>
        <div className="flex space-x-4 ml-8 border-l pl-8 border-[#ccc]">
          <NavLink
            to="/"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            Home
          </NavLink>
          <NavLink
            to="/countries"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            Countries
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
