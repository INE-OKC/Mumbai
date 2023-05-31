import pic from '../assets/image/media.png'
import icon from '../assets/image/mediaicon.png'

function Media() {
  return (
    <div className=" bg-dash-color px-3 pt-2 mx-2 pb-4 rounded-2xl hidden md:block ">
      <div className="flex justify-between pl-4 pr-2 mb-4">
        <h4 className="text-white text-sm pt-2">Media</h4>
        <img src={icon} alt="icon" className="" />
      </div>
      <img src={pic} alt="pic" className="w-96" />
    </div>
  );
}

export default Media