import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectCreative, Navigation, Pagination } from "swiper";
import { PhotoProvider, PhotoView } from "react-photo-view";
const elementSize = 500;

const NewSlide = () => {
    const SlidesImages = [
        {
          "id": "1",
          "imgL": "./images/foxhutslide1.png",
          "imgM": "./images/foxhutslide2.png",
          "imgR":"./images/foxhutslide3.png"
        }
        ,
        {
          "id": "2",
          "imgL": "./images/foxhutslide1.png",
          "imgM": "./images/foxhutslide2.png",
          "imgR":"./images/foxhutslide3.png"
        }
        ,
        {
          "id": "3",
          "imgL": "./images/foxhutslide1.png",
          "imgM": "./images/foxhutslide2.png",
          "imgR":"./images/foxhutslide3.png"
        }
      ]
  return (
      <div>
          <Swiper
              
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -300],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        navigation={{ clickable: true }}
        modules={[EffectCreative, Navigation]}
        className="mySwiper"
      >
        {
          SlidesImages.map(slidesImage=> <SwiperSlide>
              <div className="flex justify-between w-full    py-16 gap-4">
                  <img className="h-[250px] w-full sm:w-[385px]  sm:h-[380px] lg:h-[800px]" src={slidesImage?.imgL} alt="" />
                  <div className="relative w-full min-w-[200px] lg:w-[900px]">
                      <img className="h-[250px] w-full lg:w-[900px] sm:h-[380px] lg:h-[800px]" src={slidesImage?.imgM} alt="" />
                      <div className="absolute py-4 top-0 left-0 w-full">
                      <p className="font-popping lg:text-[30px] font-bold text-white text-center">FOX HUT SHIHSA ROOM</p>
                      <div className="sm:flex w-full  justify-end items-center min-h-[460px] sm:h-[732px] xl:h-[900px]   gap-8">
        <div className="px-4 sm:pr-10 py-20 ">
         
          <p className=" text-white text-[14px] sm:text-[36px] sm:my-8">
            Drinks & Cocktails
          </p>
          <p className="hidden sm:block text-[14px] sm:text-[36px]  text-white  my-8">
            We offer variety of deals throughout the week at fox hut <br />
bar. To be the first to know follow us on social media.
          </p>
          <div className="flex mt-20 gap-4 sm:gap-10 justify-center">
            <a
              target="_blank"
              href="https://www.facebook.com/passionblendbarleicester"
            >
              <img src="./f.png" alt="" />
            </a>

            <a target="_blank" href="https://twitter.com/passion_blend?lang=en">
              <img src="./twitter.png" alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/passionblendbar/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
            >
              <img src="./instra.png" alt="" />
            </a>
            <a target="_blank" href="https://www.tiktok.com/@passionblendbar">
              <img src="./tiktok.png" alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.snapchat.com/add/passionblendbar"
            >
              <img src="./snap.png" alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/@passionblendbarchannel/videos"
            >
              <img src="./youtube.png" alt="" />
            </a>
          </div>
        </div>
      </div> 
                          
                      </div>
                  </div>
                  <img className="h-[250px] w-full sm:w-[385px]  sm:h-[380px] lg:h-[800px]" src={slidesImage?.imgR} alt="" />
                 </div>
          </SwiperSlide>)
       }  
      </Swiper>
    </div>
  )
}

export default NewSlide