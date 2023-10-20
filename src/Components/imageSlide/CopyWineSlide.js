import React, { useRef } from "react";
import Slider from "react-slick";
const CopyWineSlide = () => {
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
            <div className="next-slick-arrow "> ⫸ </div>
          </div>
        ),
        prevArrow: (
          <div>
            <div className="prev-slick-arrow "> ⫷ </div>
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
              

        
              <Slider ref={arrowRef} {...settings} >
        <div className="    relative  h-[380px] lg:h-[750px] projectOne ">   
              <img
                className="w-full    mx-auto  h-[380px] lg:h-[750px] "
                src="./images/foxhutslide1.png"
                alt=""
          />   
          <div className="absolute py-8 top-0 left-0  h-[380px] lg:h-[750px] flex flex-col justify-between items-center w-full">
                      <p className="font-popping  lg:text-[30px] mt-[100px] font-bold text-white text-center">FOX HUT PARTY ROOM</p>
                      <div className="sm:flex w-full  justify-end items-center h-[400px]   gap-8">
        <div className="px-4 sm:pr-10 py-20 ">
         
          <p className=" text-white text-[14px] sm:text-[36px] sm:my-8">
            Drinks & Cocktails
          </p>
          <p className="hidden sm:block text-[14px] sm:text-[18px]  text-white  my-8">
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
            <div className="   relative   h-[380px] lg:h-[750px] projectOne ">   
              <img
                className="w-full    mx-auto  h-[380px] lg:h-[750px] "
                src="./images/foxhutslide2.png"
                alt=""
          />   
          
          <div className="absolute py-8 top-0 left-0  h-[380px] lg:h-[750px] flex flex-col justify-between items-center w-full">
                      <p className="font-popping  lg:text-[30px] mt-[100px] font-bold text-white text-center">FOX HUT SHISHA ROOM</p>
                      <div className="sm:flex w-full  justify-end items-center h-[400px]   gap-8">
        <div className="px-4 sm:pr-10 py-20 ">
         
          <p className=" text-white text-[14px] sm:text-[36px] sm:my-8">
            Drinks & Cocktails
          </p>
          <p className="hidden sm:block text-[14px] sm:text-[18px]  text-white  my-8">
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
            <div className="   relative   h-[380px] lg:h-[750px] projectOne ">   
              <img
                className="w-full    mx-auto  h-[380px] lg:h-[750px] "
                src="./images/foxhutslide3.png"
                alt=""
          />   
          <div className="absolute py-8 top-0 left-0  h-[380px] lg:h-[750px] flex flex-col justify-between items-center w-full">
                      <p className="font-popping  lg:text-[30px] mt-[100px] font-bold text-white text-center">FOX HUT GAME ROOM</p>
                      <div className="sm:flex w-full  justify-end items-center h-[400px]   gap-8">
        <div className="px-4 sm:pr-10 py-20 ">
         
          <p className=" text-white text-[14px] sm:text-[36px] sm:my-8">
            Drinks & Cocktails
          </p>
          <p className="hidden sm:block text-[14px] sm:text-[18px]  text-white  my-8">
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
            <div className="   relative   h-[380px] lg:h-[750px] projectOne ">   
              <img
                className="w-full    mx-auto  h-[380px] lg:h-[750px] "
                src="./images/foxhutslide2.png"
                alt=""
          />    
          
          <div className="absolute py-8 top-0 left-0  h-[380px] lg:h-[750px] flex flex-col justify-between items-center w-full">
                      <p className="font-popping  lg:text-[30px] mt-[100px] font-bold text-white text-center">FOX HUT SHISHA ROOM</p>
                      <div className="sm:flex w-full  justify-end items-center h-[400px]   gap-8">
        <div className="px-4 sm:pr-10 py-20 ">
         
          <p className=" text-white text-[14px] sm:text-[36px] sm:my-8">
            Drinks & Cocktails
          </p>
          <p className="hidden sm:block text-[14px] sm:text-[18px]  text-white  my-8">
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
       
      </Slider>
    );
};

export default CopyWineSlide;
