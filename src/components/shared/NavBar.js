import { Link } from "react-router-dom";

const NavBar = () => {


  return (
    <div>
      <nav className="bg-black p-8 text-white py-5">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img src="logo/lgo1.png" className="h-10 rounded-xl mr-3" alt="Flowbite Logo" />
          </Link>
          <div className=" w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 text-white md:p-0"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="block py-2 pl-3 pr-4 text-white md:p-0"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="block py-2 pl-3 pr-4 text-white md:p-0"
                  >
                    Registration
                  </Link>
                </li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;