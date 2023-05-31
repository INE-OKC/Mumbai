 import icon from '../assets/image/sidebaricon.png'

function Sidebar() {
  return (
    <div className="bg-[url(/images/wave.png)] bg-no-repeat px-10 py-[1%] h-[40%] md:w-[300px] md:h-auto md:bg-cover lg:w-[550px]">
      <div className="bg-sidebar-color backdrop-blur-md text-white my-[4%] px-10 rounded-md text-center md:my-[50%] md:text-left lg:h-[150px]">
        <p className="text-base pt-5 pb-2 md:text-xl lg:text-2xl">
          <span className="mr-2">
            <img src={icon} alt="icon" className="inline w-[3%] md:w-[7%]" />
          </span>{" "}
          Digital Platform to discuss everything{" "}
          <span className="text-dark-green">OKTC.</span>
        </p>
        <p className="text-center pb-4 text-xs md:text-left">
          You will never know everything. But you will know more.
        </p>
      </div>
    </div>
  );
}

export default Sidebar