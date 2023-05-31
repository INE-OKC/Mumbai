import david from '../assets/image/contentTwo.png'
import mark from '../assets/image/contentThree.png'
import lily from '../assets/image/lilypic.png'

function Follow() {
  return (
    <div className=" bg-dash-color pt-4 pl-3 pr-6 pb-3 rounded-3xl hidden md:block md:my-2 md:mx-2 ">
      <h2 className="text-white text-base">Who to follow</h2>
      <div className="flex justify-between mt-3 mb-2">
        <div className="flex ">
          <img src={lily} alt="lilypic" className="w-[30%] h-[100%]" />
          <div className="ml-2">
            <h3 className="text-white font-medium text-xs">Lily Chen</h3>
            <p className="text-search-text text-xs">@sunnysol</p>
          </div>
        </div>
        <button className="bg-white text-xs font rounded-3xl h-7 mt-1 px-4">
          Follow
        </button>
      </div>
      <hr className=" border-gray-500" />
      <div className="flex justify-between mt-3 mb-2">
        <div className="flex ">
          <img src={david} alt="davidpic" className="w-[25%] h-[100%]" />
          <div className="ml-2">
            <h3 className="text-white font-medium text-xs">David Lee</h3>
            <p className="text-search-text text-xs">@solanaking</p>
          </div>
        </div>
        <button className="bg-white text-xs font rounded-3xl h-7 mt-1 px-4">
          Follow
        </button>
      </div>
      <hr className=" border-gray-500" />
      <div className="flex justify-between mt-3 mb-2">
        <div className="flex ">
          <img src={mark} alt="lilypic" className="w-[25%] h-[100%]" />
          <div className="ml-2">
            <h3 className="text-white font-medium text-xs">Mark Thompson </h3>
            <p className="text-search-text text-xs">@thesolanaguy</p>
          </div>
        </div>
        <button className="bg-white text-xs font rounded-3xl h-7 mt-1 px-4">
          Follow
        </button>
      </div>
      <hr className=" border-gray-500" />
      <p className="text-blue-500 mt-2 text-xs">
        <a href="/">Show More</a>
      </p>
    </div>
  );
}

export default Follow