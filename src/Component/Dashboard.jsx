import Activity from "./Activity"
import Follow from "./Follow"
import Stories from "./Stories"
import Media from "./Media"
import ConnectWallet from "./ConnectWallet"
import bigmanpic from '../assets/image/bigman.png'
import dots from '../assets/image/dots.png'
import jamespic from '../assets/image/contentfour.png'
import spaypic from '../assets/image/spay.png'
import { useState } from "react"
import { FaHeart, FaRegComment,  FaPaperPlane} from "react-icons/fa";

function Dashboard() {
 const [isLike, setIsLike] = useState(false);
 const [count, setCount] = useState(348);
 
 function handleLike(){
  setIsLike(!isLike)

  if (!isLike) {
    setCount((prev) => prev + 1);
  } else {
    setCount((prev) => prev - 1);
  }
 }

  return (
    <div className=" md:flex md:flex-row-reverse">
      <div className="md:w-[31.5%] md:fixed right-0">
        <Activity />
        <Stories />
        <Follow />
        <Media />
      </div>
      <div className="px-4 bg-dash-color border-t border-search-text md:w-[44%] md:mr-[31.9%] md:mt-14">
        {/* <div className="bg-dash-color hidden h-10 backdrop-blur-sm md:block "></div> */}
        <div className="flex pt-6 pb-4 ">
          <img src={bigmanpic} alt="pic" />
          <input
            type="text"
            placeholder="Start a post"
            className="w-full ml-3 bg-inherit rounded-3xl border border-search-text pl-4 text-xs"
          />
        </div>
        <hr className=" border-gray-500" />
        <div className=" mb-[7%] pb-[12%] md:pb-4 md:mb-3">
          <div className="flex pt-10 md:pt-3">
            <img src={bigmanpic} alt="pic" className="mr-3 h-[100%]" />
            <div className="w-full pt-2">
              <div className="flex justify-between w-full">
                <p>
                  <span className="text-white text-lg">Big Man</span>
                  <span className="ml-3 text-search-text text-sm">
                    @BigMan_{" "}
                  </span>
                  <span className="ml-3 text-search-text text-sm">. 7min</span>
                </p>
                <button>
                  <img src={dots} alt="dots" />
                </button>
              </div>
              <p className="mt-3 text-white w-[95%]">
                Just bought my first $OKTC and I'm already loving the speed and
                low fees! Excited to be a part of the OKTC community{" "}
                <span className="mt-3 block">
                  <img src={spaypic} alt="pic" />
                </span>
                <span className="block mt-5">#oktc #Crypto</span>
              </p>
              <div className="flex w-[70%] justify-between mt-10">
                <button className="text-search-text flex">
                  <FaRegComment /> <span className="ml-2 text-sm">100</span>
                </button>
                <button onClick={handleLike} className="flex">
                  {isLike ? (
                    <FaHeart className="text-red-700 " />
                  ) : (
                    <FaHeart className="text-search-text" />
                  )}{" "}
                  <span className="text-search-text ml-2 text-sm">{count}</span>
                </button>
                <button className="text-search-text flex ">
                  <FaPaperPlane /> <span className="ml-2 text-sm">457</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex pt-10">
            <img src={jamespic} alt="pic" className="mr-3 h-[100%]" />
            <div className="w-full pt-2">
              <div className="flex justify-between w-full">
                <p>
                  <span className="text-white text-lg">James Walker</span>
                  <span className="ml-3 text-search-text text-sm">
                    @mrwalker
                  </span>
                  <span className="ml-3 text-search-text text-sm">. 8min</span>
                </p>
                <button>
                  <img src={dots} alt="dots" />
                </button>
              </div>
              <p className="mt-3 text-white w-[95%]">
                Experience lightning-fast, low-cost payments with OKTC Pay!
                💸⚡{" "}
                <span className="block mt-5 w-[10%]">
                  #OktcPay #cryptopayments #fastandaffordable
                </span>
                <span className="mt-3 block">
                  <img src={spaypic} alt="pic" />
                </span>
              </p>
              <div className="flex w-[70%] justify-between mt-10">
                <button className="text-search-text flex">
                  <FaRegComment /> <span className="ml-2 text-sm">100</span>
                </button>
                <button onClick={handleLike} className="flex">
                  {isLike ? (
                    <FaHeart className="text-red-700 " />
                  ) : (
                    <FaHeart className="text-search-text" />
                  )}{" "}
                  <span className="text-search-text ml-2 text-sm">{count}</span>
                </button>
                <button className="text-search-text flex ">
                  <FaPaperPlane /> <span className="ml-2 text-sm">457</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:fixed md:left-0 md:w-[23.7%]">
        <ConnectWallet />
      </div>
    </div>
  );
}

export default Dashboard