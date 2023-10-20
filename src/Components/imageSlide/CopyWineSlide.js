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
            <div className="next-slick-arrow absolute z-50 bg-[red]"> ⫸ </div>
          </div>
        ),
        prevArrow: (
          <div>
            <div className="prev-slick-arrow absolute z-50"> ⫷ </div>
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
        <div className="overflow-hidden">
              <Slider ref={arrowRef} {...settings}>
        <div className="      h-[380px] lg:h-[750px] projectOne ">   
              <img
                className="w-full    mx-auto  h-[380px] lg:h-[750px] "
                src="./images/foxhutslide1.png"
                alt=""
              />       
            </div>
            <div className="      h-[380px] lg:h-[750px] projectOne ">   
              <img
                className="w-full    mx-auto  h-[380px] lg:h-[750px] "
                src="./images/foxhutslide2.png"
                alt=""
              />       
            </div>
            <div className="      h-[380px] lg:h-[750px] projectOne ">   
              <img
                className="w-full    mx-auto  h-[380px] lg:h-[750px] "
                src="./images/foxhutslide3.png"
                alt=""
              />       
            </div>
            <div className="      h-[380px] lg:h-[750px] projectOne ">   
              <img
                className="w-full    mx-auto  h-[380px] lg:h-[750px] "
                src="./images/foxhutslide2.png"
                alt=""
              />       
        </div>
       
      </Slider>
    </div>
    );
};

export default CopyWineSlide;
