import Sidebar from "./Sidebar";
import logo from "../assets/image/logo.png";
import google from "../assets/image/googleicon.png";
import line from "../assets/image/Line.png";
import { useState } from "react";

function Login() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  function submitHandler(event) {
    event.preventDefault();
    alert("tested successfully");
  }

  function emailHandler(event) {
    setDetails({ ...details, email: event.target.value });
  }

  function passwordHandler(event) {
    setDetails({ ...details, password: event.target.value });
  }

  return (
    <div className="flex flex-col md:flex-row md:h-screen md:py-[5%] md:px-[20%] lg:px-[25%] lg:h-full lg:w-full">
      <Sidebar />
      <div className="bg-white px-10 pt-3 md:pt-5 lg:w-[350px]">
        <img
          src={logo}
          alt="logo"
          className="w-[8%] inline md:block md:w-[10%]"
        />
        <h1 className="inline text-lg font-bold pl-[30%] md:block md:pl-0 md:pt-3">
          Hey, Hello
        </h1>
        <p className="text-xs pt-[1%] text-center text-gray-600 md:text-left">
          Welcome back! Please enter your details.
        </p>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
          <button className="border-2 border-gray-100 py-1 mt-3 px-10 rounded-md md:px-2 md:mx-auto">
            {" "}
            <span className="mr-4">
              <img src={google} alt="googleicon" className="inline w-[8%]" />
            </span>
            <a
              href="/"
              className="text-xs"
              onClick={() => {
                alert("you wooul be redirected to the dashboard");
              }}
            >
              Sign in with Google
            </a>
          </button>
          <p className="text-sm md:mx-auto">
            <span>
              <img src={line} alt="line" className="inline w-24 md:w-20" />
            </span>{" "}
            or{" "}
            <span>
              <img src={line} alt="line" className="inline w-24 md:w-20" />
            </span>
          </p>
          <form onSubmit={submitHandler} className="mt-3">
            <label htmlFor="email" id="email" className="text-sm font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={details.email}
              onChange={emailHandler}
              className="border-2 block my-1 py-1 px-2 rounded-md"
              required
            />
            <label htmlFor="email" id="email" className="text-sm font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={details.password}
              onChange={passwordHandler}
              className="border-2 block my-1 py-1 px-2 rounded-md"
              required
            />
            <label className="cursor-pointer">
              <input type="checkbox" className="w-3 h-3" />
              <span className="text-xs ml-4">Remember for 30 days</span>
            </label>
            <button
              type="submit"
              className="block text-sm mt-2 mx-auto bg-light-purple text-white px-14 py-1 rounded-md"
              onClick={submitHandler}
            >
              Log in
            </button>
          </form>
          <p className="text-xs mt-1 lg:mt-2 md:mx-auto">
            <a href="/" className="text-decoration-line: underline">
              Forgot Password
            </a>
          </p>
          <p className="text-xs mt-2 lg:mt-3">
            <span>Don't have an account?</span>
            <a href="/" className="text-decoration-line: underline pl-1">
              Sign up for free
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
