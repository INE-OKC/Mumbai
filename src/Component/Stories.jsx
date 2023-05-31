import trudy from '../assets/image/trudypic.png'
import jessie from '../assets/image/jessypic.png'
import alex from '../assets/image/contentThree.png'
import clara from '../assets/image/clarapic.png'
import max from '../assets/image/maxpic.png'
import trudyhalf from '../assets/image/trudyhalf.png'

function Stories() {
  return (
    <div className="bg-dash-color py-2 pl-4 md:pl-2 md:mx-2 md:rounded-md ">
      <h3 className="text-white font-medium text-sm hidden md:block">
        Stories
      </h3>
      <div className="flex justify-between my-2">
        <div>
          <p className="bg-gradient-to-r from-stories-start to-stories-end rounded-full md:w-8">
            <img
              src={trudy}
              alt="trudy"
              className="w-12 p-[0.1rem] md:w-8 md:mb-1"
            />
          </p>
          <h4 className="text-white text-sm font-medium md:text-xs text-center">
            Trudy
          </h4>
        </div>
        <div>
          <p className="bg-gradient-to-r from-stories-start to-stories-end rounded-full md:w-8">
            <img
              src={jessie}
              alt="jessie"
              className="w-12 p-[0.1rem] md:w-8 md:mb-1"
            />
          </p>
          <h4 className="text-white text-sm font-medium md:text-xs text-center">
            Jessie
          </h4>
        </div>
        <div>
          <p className="bg-gradient-to-r from-stories-start to-stories-end rounded-full md:w-8">
            <img
              src={alex}
              alt="alex"
              className="w-12 p-[0.1rem] md:w-8 md:mb-1"
            />
          </p>
          <h4 className="text-white text-sm font-medium md:text-xs text-center">
            Alex
          </h4>
        </div>
        <div>
          <p className="bg-gradient-to-r from-stories-start to-stories-end rounded-full md:w-8">
            <img
              src={clara}
              alt="clara"
              className="w-12 p-[0.1rem] md:w-8 md:mb-1"
            />
          </p>
          <h4 className="text-white text-sm font-medium md:text-xs text-center">
            Clara
          </h4>
        </div>
        <div>
          <p className="bg-gradient-to-r from-stories-start to-stories-end rounded-full md:w-8">
            <img
              src={max}
              alt="max"
              className="w-12 p-[0.1rem] md:w-8 md:mb-1"
            />
          </p>
          <h4 className="text-white text-sm font-medium md:text-xs text-center">
            Max
          </h4>
        </div>
        <div>
          <p className="bg-gradient-to-r from-stories-start to-stories-end rounded-full md:w-8">
            <img
              src={jessie}
              alt="jessie"
              className="w-12 p-[0.1rem] md:w-8 md:mb-1"
            />
          </p>
          <h4 className="text-white text-sm font-medium md:text-xs text-center">
            Jessie
          </h4>
        </div>
        <div>
          <p className="bg-gradient-to-r from-stories-start to-black rounded-l-3xl md:w-4">
            <img
              src={trudyhalf}
              alt="trudy"
              className="w-6 p-[0.1rem] md:w-4 md:mb-1"
            />
          </p>
          <h4 className="text-white text-sm font-medium md:text-xs text-center">
            Tru
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Stories