import Activity from "./Activity";
import Follow from "./Follow";
import Stories from "./Stories";
import Media from "./Media";
import ConnectWallet from "./ConnectWallet";
import bigmanpic from "../assets/image/bigman.png";
import dots from "../assets/image/dots.png";
import jamespic from "../assets/image/contentfour.png";
import spaypic from "../assets/image/spay.png";
import { useState } from "react";
import { FaHeart, FaRegComment, FaPaperPlane } from "react-icons/fa";

function Explore() {
  const [isLike, setIsLike] = useState(false);
  const [count, setCount] = useState(348);

  function handleLike() {
    setIsLike(!isLike);

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
      <div className=" explore_bg px-4 bg-dash-color border-t border-search-text md:w-[44%] md:mr-[31.9%] md:mt-14">
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
            <div className="w-full pt-2">
              <div className="flex justify-between w-full">
                <p>
                  <span className="text-white text-lg">Trending For You</span>
                </p>{" "}
                <br />
              </div>

               <div className="trendTitle">
               <p className="oktcStyle text-white w-[95%]">#OKTC :</p>
              <p className=" text-white w-[95%]">
                Just bought my first $OKTC and I'm already loving the speed and
                low fees! Excited to be a part of the OKTC community{" "}
              </p>
               </div>
            </div>
          </div>
        
        </div>
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
            <div className="w-full pt-2">
              <div className="flex justify-between w-full">
                <p>
                  <span className="text-white text-lg">Trending For You</span>
                </p>{" "}
                <br />
              </div>

               <div className="trendTitle">
               <p className="oktcStyle text-white w-[95%]">#OKTC :</p>
              <p className=" text-white w-[95%]">
                Just bought my first $OKTC and I'm already loving the speed and
                low fees! Excited to be a part of the OKTC community{" "}
              </p>
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

export default Explore;
