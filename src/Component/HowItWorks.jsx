import redpic from '../assets/image/redpic.png'
import purplepic from "../assets/image/purplepic.png";
import bluepic from "../assets/image/bluepic.png";
import reddishpic from "../assets/image/reddishpic.png";
import ashpic from "../assets/image/ashpic.png";
function HowItWorks() {
  return (
    <section className="py-6  px-4 md:px-8">
      <h3 className="text-white text-base mb-2 md:text-xl md:text-center lg:text-2xl">
        How does it work?
      </h3>
      <p className="text-white text-sm md:text-base md:text-center lg:text-lg">
        A detailed guide to using OKTC Social Media
      </p>
      <div className="mt-20 md:flex md:flex-wrap md:justify-center md:mt-24">
        <div className='bg-[url("/images/redbg.png")] flex flex-col items-center md:w-[40%] md:mr-20 lg:w-[28%] lg:mt-2 lg:mr-40'>
          <img
            src={redpic}
            alt="pic"
            className="w-[30%] mt-[-4rem] md:mt-[-3rem] "
          />
          <h4 className="text-white mt-20 pb-6 text-sm md:mt-32 lg:text-lg lg:mt-32 lg:pb-10">
            Creating an account
          </h4>
        </div>
        <div className='bg-[url("/images/purplebg.png")] flex flex-col items-center mt-20 md:w-[40%] md:mt-0 lg:w-[28%] lg:mt-2'>
          <img
            src={purplepic}
            alt="pic"
            className="w-[30%] mt-[-3rem] md:mt-[-2rem]"
          />
          <h4 className="text-white mt-20 pb-6 text-sm md:mt-32 lg:text-lg lg:mt-32 lg:pb-10">
            Make Posts
          </h4>
        </div>
        <div className='bg-[url("/images/bluebg.png")] flex flex-col items-center mt-20 md:w-[40%] md:mt-28 md:mr-20 lg:w-[28%] lg:mt-30 lg:mr-40'>
          <img
            src={bluepic}
            alt="pic"
            className="w-[30%] mt-[-3rem] md:mt-[-2rem]"
          />
          <h4 className="text-white mt-20 pb-6 text-sm md:mt-36 lg:text-lg lg:mt-32 lg:pb-10">
            Chatting with Friends
          </h4>
        </div>
        <div className='bg-[url("/images/reddishbg.png")] flex flex-col items-center mt-20 md:w-[40%] md:mt-28 lg:w-[28%] lg:mt-30'>
          <img
            src={reddishpic}
            alt="pic"
            className="w-[30%] mt-[-3rem] md:mt-[-2rem]"
          />
          <h4 className="text-white mt-20 pb-6 text-sm md:mt-36 lg:text-lg lg:mt-32 lg:pb-10">
            Customizing your Profile
          </h4>
        </div>
        <div className='bg-[url("/images/ashbg.png")] flex flex-col items-center mt-20 md:w-[40%] md:mt-28 lg:w-[28%] lg:mt-20 lg:ml-20'>
          <img src={ashpic} alt="pic" className="w-[30%] mt-[-3rem]" />
          <h4 className="text-white mt-20 pb-6 text-sm lg:text-lg lg:mt-20 lg:pb-0">
            Save for the Future
          </h4>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks