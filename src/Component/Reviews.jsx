import one from '../assets/image/Review-one.png';
import two from '../assets/image/Review-two.png'
import three from '../assets/image/Review-three.png'
import pyramidPic from '../assets/image/pyramid.png'
import backbtn from '../assets/image/back.png'
import frontbtn from '../assets/image/front.png'
import reviews from '../data/reviews-post';
import { useState } from 'react';

function Reviews() {
 const [slide, setSlide] = useState(0)

 const handleBackButtonClick = () => {
   setSlide((prevSlide) => prevSlide - 1);
 };

  const handleNextButtonClick = () => {
    setSlide((prevSlide) => prevSlide + 1);
  };

  const currentIndex = reviews[slide]

  return (
    <div className="px-4 mt-10 pb-4">
      <img src={pyramidPic} alt="image" className="mx-auto mb-10" />
      <h3 className="text-white pl-3 pb-2 md:text-center md:text-lg lg:text-2xl">
        What our members said?
      </h3>
      <p className="text-white text-xs pl-3 md:text-center md:text-sm lg:text-lg">
        Quotes from satisfied customers or users
      </p>
      <div className=" relative mt-10">
        <img src={three} alt="" className="z-20 relative w-[100%]" />
        <img
          src={two}
          alt="pic"
          className="w-[95%] mt-[-36%] ml-[2.5%] z-10 relative"
        />
        <img src={one} alt="pic" className="w-[90%] mt-[-37%] ml-[5%]" />
        <img
          src={currentIndex.pic}
          alt="pic"
          className="absolute top-[-4%] z-30 left-[43%] md:top-[4%] md:left-[45%] lg:left-[48%] lg:top-[6%]"
        />
        <div className="flex justify-between w-[80%] absolute top-[30%] left-[10%] z-40">
          <button disabled={slide === 0} onClick={handleBackButtonClick}>
            <img src={backbtn} alt="backbtn" />
          </button>
          <p className="text-[0.5rem] w-[50%] mx-auto text-white md:text-sm lg:text-lg">
            {currentIndex.content}
          </p>
          <button
            disabled={slide === reviews.length - 1}
            onClick={handleNextButtonClick}
          >
            <img src={frontbtn} alt="frontbtn" />
          </button>
        </div>
      </div>
      <div className="text-white flex justify-center">
        {slide === 0 ? (
          <span className="rounded-full border-button-color border-2 mr-1 w-3 h-3 bg-light-purple lg:w-4 lg:h-4 lg:mr-2"></span>
        ) : (
          <span className="rounded-full border-button-color border-2 mr-1 w-3 h-3 lg:w-4 lg:h-4 lg:mr-2"></span>
        )}
        {slide === 1 ? (
          <span className="rounded-full border-button-color border-2 mr-1 w-3 h-3 bg-light-purple lg:w-4 lg:h-4 lg:mr-2"></span>
        ) : (
          <span className="rounded-full border-button-color border-2 mr-1 w-3 h-3 lg:w-4 lg:h-4 lg:mr-2"></span>
        )}
        {slide === 2 ? (
          <span className="rounded-full border-button-color border-2 mr-1 w-3 h-3 bg-light-purple lg:w-4 lg:h-4 lg:mr-2"></span>
        ) : (
          <span className="rounded-full border-button-color border-2 mr-1 w-3 h-3 lg:w-4 lg:h-4 lg:mr-2"></span>
        )}
        {slide === 3 ? (
          <span className="rounded-full border-button-color border-2 w-3 h-3 bg-light-purple lg:w-4 lg:h-4"></span>
        ) : (
          <span className="rounded-full border-button-color border-2 w-3 h-3 lg:w-4 lg:h-4"></span>
        )}
      </div>
    </div>
  );
}

export default Reviews