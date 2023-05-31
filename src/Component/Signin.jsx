import Sidebar from "./Sidebar";
import logo from "../assets/image/logo.png";
import google from "../assets/image/googleicon.png";
import line from "../assets/image/Line.png";
import { useState } from "react";
// import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";


function Signin() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  function submitHandler(event) {
    event.preventDefault();
  }

  function emailHandler(event) {
    setDetails({ ...details, email: event.target.value });
  }

  function passwordHandler(event) {
    setDetails({ ...details, password: event.target.value });
  }

  //  function handleGoogleSignInSuccess(response) {
  //    const token = response.accessToken;
  //    // Store the token in local storage or send it to the server for server-side authentication
  //    // Redirect the user to the dashboard component
  //    window.location.href = "/dashboard";
  //  }
  //  function handleGoogleSignInFailure(response) {
  //    console.error("Google Sign-In failed:", response);
  //  }

  return (
    <div className="flex flex-col md:flex-row md:h-screen md:py-[5%] md:px-[20%] lg:px-[25%] lg:h-full">
      <Sidebar />
      <div className="bg-white px-10 pt-5 md:pt-5">
        <img
          src={logo}
          alt="logo"
          className="w-[8%] inline md:block md:w-[10%]"
        />
        <h1 className="inline text-lg font-bold pl-[30%] md:block md:pl-0 md:pt-3">
          Sign up
        </h1>
        {/* <p className="text-xs pt-[1%] text-center text-gray-600 md:text-left">
          Welcome back! Please enter your details.
        </p> */}
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
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
            <button
              type="submit"
              className="block text-sm mt-5 mx-auto bg-light-purple text-white px-14 py-1 rounded-md"
            >
              Sign up
            </button>
          </form>
          <p className="text-sm md:mx-auto mt-2">
            <span>
              <img src={line} alt="line" className="inline w-24 md:w-20" />
            </span>{" "}
            or{" "}
            <span>
              <img src={line} alt="line" className="inline w-24 md:w-20" />
            </span>
          </p>
          <button
            className="border-2 border-gray-100 py-1 mt-5 px-10 rounded-md md:px-2 md:mx-auto"
            type="submit"
          >
            {" "}
            <span className="mr-4">
              <img src={google} alt="googleicon" className="inline w-[8%]" />
            </span>
            {/* <GoogleLogin
              clientId="205773971669-8nbujk1vtk2mef3fh25l1doetfq0n766.apps.googleusercontent.com"
              onSuccess={handleGoogleSignInSuccess}
              onFailure={handleGoogleSignInFailure}
              cookiePolicy={"single_host_origin"}
            /> */}
            <Link to="/dashboard" className="text-xs">
              Sign in with Google
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
