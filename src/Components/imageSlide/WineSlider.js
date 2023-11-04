import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Slider from "react-slick";

const WineSlider = () => {
  var settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: 'progressive',

    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,  
    nextArrow: (
      <div>
        <div className="next-slick-arrow"> ⫸ </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> ⫷ </div>
      </div>
    ),

   
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
          
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],

  };

  const arrowRef = useRef(null);

  return (
    <Slider ref={arrowRef} {...settings}>
      {/* {sliderProject} */}
      <div className="project h-[600px]  flex justify-center mt-[100px]       ">
        <div className="">
          <div className="border  py-10 mx-auto flex justify-center items-center     sm:w-[400px] h-[420px]  my-auto border-[#B5986D]">
            <img
              className="mx-auto sm:w-[300px] sm: h-full  sm:h-[350px] "
              src="../images/bottleM.png"
              alt=""
            />
          </div>
          <p className="text-[24px] text-center text-[#B5986D]">
            Bottled Beers
          </p>
          <div className="flex justify-center">
            <Link
              href={"/WineAndCoctail/BottledBeers"}
              className="text-center text-[20px] mx-auto dark:text-white text-black"
            >
              View menu
            </Link>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="project h-[600px]  flex justify-center mt-[100px]       ">
        <div className="">
          <div className="border  py-10 mx-auto flex justify-center items-center  sm:w-[400px] h-[420px]  my-auto border-[#B5986D]">
            <img
              className=" mx-auto sm:w-[300px] sm: h-full  sm:h-[350px]"
              src="../images/coctailM.png"
              alt=""
            />
          </div>
          <p className="text-[24px] text-center text-[#B5986D]">Cocktail</p>

          <div className="flex justify-center">
            <Link
              href={"/WineAndCoctail/Cocktails"}
              className="text-center text-[20px] mx-auto dark:text-white text-black"
            >
              View menu
            </Link>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="project h-[600px]  flex justify-center mt-[100px]       ">
        <div className="">
          <div className="border  py-10 mx-auto   sm:w-[400px] h-[420px]  my-auto border-[#B5986D]">
          <img
              className="mx-auto sm:w-[300px] sm: h-full  sm:h-[350px]"
              src="../images/NewvodkaM.png"
              alt=""
            />
          </div>
          <p className="text-[24px] text-center text-[#B5986D]">Spirits</p>

          <div className="flex justify-center">
            <Link
              href={"/WineAndCoctail/Spirits"}
              className="text-center text-[20px] mx-auto dark:text-white text-black"
            >
              View menu
            </Link>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="project h-[600px]  flex justify-center mt-[100px]       ">
        <div className="">
          <div className="border  py-10 mx-auto   sm:w-[400px] h-[420px]  my-auto border-[#B5986D]">
            <img
              className="mx-auto sm:w-[300px] sm: h-full  sm:h-[350px] "
              src="../images/softDrinkgM.png"
              alt=""
            />
          </div>
          <p className="text-[24px] text-center text-[#B5986D]">Soft Drink</p>
          <div className="flex justify-center">
            <Link
              href={"/WineAndCoctail/Softdrinks"}
              className="text-center text-[20px] mx-auto dark:text-white text-black"
            >
              View menu
            </Link>
          </div>
        </div>
      </div>
      {/* 5 */}

      <div className="project h-[600px]  flex justify-center mt-[100px]       ">
        <div className="">
          <div className="border py-10 mx-auto  flex items-center justify-center sm:w-[400px] h-[420px]  my-auto border-[#B5986D]">
            <img
              className="mx-auto  sm:w-[320px] object-cover scale-105 h-full  sm:h-[380px] "
              src="../images/draftM.png"
              alt=""
            />
          </div>
          <p className="text-[24px] text-center text-[#B5986D]">Draft Beers</p>
          <div className="flex justify-center">
            <Link
              href={"/WineAndCoctail/DraftBeers"}
              className="text-center text-[20px] mx-auto dark:text-white text-black"
            >
              View menu
            </Link>
          </div>
        </div>
      </div>

      {/* 6 */}

      <div className="project h-[600px]  flex justify-center mt-[100px]       ">
        <div className="">
          <div className="border  py-10 mx-auto   sm:w-[400px] overflow-hidden h-[420px]  my-auto border-[#B5986D]">
            <img
              className="mx-auto w-full  sm:w-[350px] object-cover  sm:sm:  mt-[-15px] h-[400px] "
              src="../images/WinesMenu.jpg"
              alt=""
            />
          </div>
          <p className="text-[24px] text-center text-[#B5986D]">Wines</p>
          <div className="flex justify-center">
            <Link
              href={"/WineAndCoctail/Wines"}
              className="text-center text-[20px] mx-auto dark:text-white text-black"
            >
              View menu
            </Link>
          </div>
        </div>
      </div>


      <div className="project h-[600px]  flex justify-center mt-[100px]       ">
        <div className="">
        <div className="border  py-10 mx-auto flex justify-center items-center  sm:w-[400px] h-[420px]  my-auto border-[#B5986D]">
            <img
              className="mx-auto sm:w-[300px] sm: h-full  sm:h-[350px]"
              src="../images/newvodkavM.png"
              alt=""
            />
          </div>
          <p className="text-[24px] text-center text-[#B5986D]">Vodka & Rum Bar</p>
          <div className="flex justify-center">
            <Link
              href={"/WineAndCoctail/Vodka"}
              className="text-center text-[20px] mx-auto dark:text-white text-black"
            >
              View menu
            </Link>
          </div>
        </div>
      </div>


      <div className="project h-[600px]  flex justify-center mt-[100px]       ">
        <div className="">
          <div className="border  py-10 mx-auto flex justify-center items-center  sm:w-[400px] h-[420px]  my-auto border-[#B5986D]">
            <img
              className="mx-auto sm:w-[300px] sm: h-full  sm:h-[320px]"
              src="../images/ShotsHero.png"
              alt=""
            />
          </div>
          <p className="text-[24px] text-center text-[#B5986D]">Shots Liquers & Gin</p>
          <div className="flex justify-center">
            <Link
              href={"/WineAndCoctail/ShotsGin"}
              className="text-center text-[20px] mx-auto dark:text-white text-black"
            >
              View menu
            </Link>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default WineSlider;
