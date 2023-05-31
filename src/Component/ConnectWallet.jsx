import searchpic from '../assets/image/searchicon.png'
import homepic from '../assets/image/homeicon.png'
import explorepic from '../assets/image/exploreicon.png'
import profilepic from '../assets/image/profileicon.png'
import savingspic from '../assets/image/savingsicon.png'
import messagepic from '../assets/image/messageicon.png'
import { Link } from 'react-router-dom'

function ConnectWallet() {
  return (
    <div className="md:w-auto md:pt-5 fixed bottom-0 md:relative w-full bg-black md:bg-inherit md:px-2">
      <div className="hidden md:block">
        <input
          type="text"
          placeholder="Search..."
          className="py-3 pl-4 bg-search-color text-white text-xs rounded-3xl w-[100%]"
        />
        <button className="ml-[-10%]">
          <img src={searchpic} alt="searchicon" className="inline" />
        </button>
      </div>
      <div className=" px-2 py-3  md:pt-0 md:mt-3 md:px-3 bg-dash-color md:w-[100%] md:rounded-lg md:pb-4 flex justify-between md:justify-start md:block">
        <ul className="md:pt-2 flex w-[70%] justify-between md:w-auto md:block ">
          <li className="block md:hover:bg-list-color md:pl-4 md:mb-2 md:ml-2 hover:rounded-lg md:pt-3">
            <img src={homepic} alt="homeicon" className="inline md:pb-2" />
            <span className="text-white font-medium text-sm ml-4 md:ml-4 hidden md:inline">
              <a href="/">Home</a>
            </span>
          </li>
          <hr className=" border-gray-500 hidden md:block" />
          <li className="block md:hover:bg-list-color md:pl-2 md:pt-3 md:mb-2 md:ml-2 hover:rounded-lg">
            <img src={explorepic} alt="homeicon" className="inline" />
            <span className="text-white font-medium text-sm ml-4 hidden md:inline">
              <a href="/explore">Explore</a>
            </span>
          </li>
          <hr className=" border-gray-500 hidden md:block" />
          <li className="block md:hover:bg-list-color md:pl-2 md:pt-3 md:mb-2 md:ml-2 hover:rounded-lg">
            <img src={messagepic} alt="homeicon" className="inline" />
            <span className="text-white font-medium text-sm ml-4 hidden md:inline">
              <a href="/message">Messages</a>
            </span>
          </li>
          <hr className=" border-gray-500 hidden md:block" />
          <li className="block md:hover:bg-list-color md:pl-2 md:pt-3 md:mb-2 md:ml-2 hover:rounded-lg">
            <img src={profilepic} alt="homeicon" className="inline" />
            <span className="text-white font-medium text-sm ml-4 hidden md:inline">
              <a href="/">Profile</a>
            </span>
          </li>
          <hr className=" border-gray-500 hidden md:block" />
          <li className="block md:hover:bg-list-color md:pl-1 md:pt-3 md:mb-2 md:ml-2 hover:rounded-lg">
            <img src={savingspic} alt="homeicon" className="inline" />
            <span className="text-white font-medium text-sm ml-4 hidden md:inline">
              <Link to="/mysavings">My Savings</Link>
            </span>
          </li>
          <hr className=" border-gray-500 hidden md:block" />
        </ul>
        <button className="bg-gradient-to-r from-button-start via-button-mid to-button-end md:mt-5 text-white md:font-medium py-2 md:px-4 md:text-sm rounded-md md:ml-[20%] text-xs px-1">
          <a href="/">Connect Wallet</a>
        </button>
      </div>
    </div>
  );
}

export default ConnectWallet