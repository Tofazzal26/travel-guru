import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
const Navbar = () => {
  const nabLinks = (
    <>
      <NavLink to="/">
        <li className="text-lg font-semibold">News</li>
      </NavLink>
      <NavLink to="/">
        <li className="text-lg font-semibold">Destination</li>
      </NavLink>
      <NavLink to="/">
        <li className="text-lg font-semibold">Blog</li>
      </NavLink>
      <NavLink to="/">
        <li className="text-lg font-semibold">Contact</li>
      </NavLink>
    </>
  );

  return (
    <div className="pt-6">
      <div className="container mx-auto">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {nabLinks}
              </ul>
            </div>
            <img className="btn btn-ghost text-xl mr-10" src={logo} alt="" />
            <label className="input bg-[#FFFFFF33] border-2 border-white text-white input-bordered flex items-center gap-2">
              <input
                type="text"
                className="text-[#FFFFFF] lg:w-[350px]"
                placeholder="Search your Destination..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-6 h-6 "
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal ml-[330px] text-white space-x-12 px-1">
              {nabLinks}
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn text-black text-lg border-none bg-[#F9A51A]">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
