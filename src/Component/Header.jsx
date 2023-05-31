import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <header className="p-4 flex justify-between md:px-8 lg:px-16">
      <div className="flex lg:my-auto">
        <img src={logo} alt="logo" />
        <h1 className="text-white ml-4 text-3xl mt-2">INE</h1>
      </div>
      <button
        className={`${menuActive ? "hidden" : "block"} text-3xl lg:hidden`}
        onClick={() => setMenuActive(true)}
      >
        <RiMenuFill className="text-white" />
      </button>
      <nav
        className={`${
          menuActive ? "block" : "hidden"
        } flex flex-col bg-black h-72 rounded-md absolute right-7 w-36 lg:relative lg:block lg:bg-[#151515] lg:flex-row lg:h-auto lg:w-auto lg:my-auto lg:pt-2`}
      >
        <button
          className="text-2xl mt-3 ml-28 lg:hidden"
          onClick={() => setMenuActive(false)}
        >
          <RiCloseFill className="text-button-color bg-white rounded-sm" />
        </button>
        <ul className="my-auto lg:flex bg-black">
          <li className="bg-button-color text-white text-sm w-20 text-center mx-auto mb-2 py-1 lg:bg-inherit lg:text-lg lg:w-auto lg:mr-16">
            <a href="/" className="lg:text-white">
              Home
            </a>
          </li>
          <li className="bg-button-color text-stone-400 text-sm w-20 text-center mx-auto mb-2 py-1 lg:bg-inherit lg:text-lg lg:w-auto lg:mr-16">
            <a href="/">About Us</a>
          </li>
          <li className="bg-button-color text-stone-400 text-sm w-20 text-center mx-auto mb-2 py-1 lg:bg-inherit lg:text-lg lg:w-auto lg:mr-60">
            <a href="/">Contact</a>
          </li>
          <li className="bg-button-color text-stone-400 text-sm w-20 text-center mx-auto mb-2 py-1 lg:bg-inherit lg:text-lg lg:w-auto lg:mr-6">
            <Link to="login">Login</Link>
          </li>
          <li className="bg-button-color text-white text-sm w-20 text-center mx-auto mb-2 py-1  lg:text-lg lg:w-auto lg:bg-stone-500  hover:bg-stone-600 lg:py-1 lg:px-5 lg:rounded-2xl">
            <Link to="signin">Sign in</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
