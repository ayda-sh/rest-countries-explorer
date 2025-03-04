import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container mx-auto items-center">
      <div className="flex items-center justify-center py-10 mx-20 flex-wrap">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-extrabold mb-2">
            Explore Countries with
            <span className="text-blue-800">Real-Time Data</span>
          </h1>
          <p className="text-gay-500 mb-4">
            Discover details about every country around the world – from
            capitals to regions!
          </p>
          <div className="space-x-4 flex">
            <NavLink
              to="/countries"
              className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition flex items-center"
            >
              Explore Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </NavLink>
            <NavLink
              to="/about"
              className="inline-block px-6 py-2 text-gray-500 bg-gray-100 rounded transition"
            >
              Learn More
            </NavLink>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="w-full rounded-lg shadow-lg"
            src="src/assets/screen-0.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
