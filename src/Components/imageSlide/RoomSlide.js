import React, { useEffect } from 'react';
import Swiper from 'swiper'; // Import Swiper library
import 'swiper/swiper-bundle.min.css'; // Import Swiper CSS

const RoomSlide = () => {
    useEffect(() => {
        // Initialize Swiper for slider-1
        const swiper1 = new Swiper("#swiper-1", {
          effect: "fade",
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: "#swiper-1 .swiper-pagination",
            clickable: true,
          },
          lazy: true,
          loop: true,
        });
    
        // Initialize Swiper for slider-2
        const swiper2 = new Swiper("#swiper-2", {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 24,
          pagination: {
            el: "#swiper-2 .swiper-custom-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return `<div class=${className}>
                  <span class="number">${index + 1}</span>
                  <span class="line"></span>
                  </div>`;
            },
          },
          lazy: true,
          loop: true,
          keyboard: {
            enabled: true,
          },
          navigation: {
            nextEl: "#swiper-2 #nav-right",
            prevEl: "#swiper-2 #nav-left",
          },
          breakpoints: {
            800: {
              slidesPerView: 1.5,
            },
            1400: {
              slidesPerView: 2,
            },
          },
        });
    
        document.getElementById('nav-left').addEventListener('click', () => {
          swiper2.slidePrev();
        });
    
        document.getElementById('nav-right').addEventListener('click', () => {
          swiper2.slideNext();
        });
      }, []);
      return (
        
        <div className="">
     <div>
         
    
    
          <section id="slider-2">
            <div className="container wide">
              <div className="swiper" id="swiper-2">
                  <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <figure className='relative'>
                    <iframe  src="./images/fox_v.mp4" ></iframe>
                                          <div className="absolute w-full top-0 left-0 py-4 flex justify-center">
                                          {/* <p className="  font-popping  lg:text-[30px] font-bold text-white text-center">FOX HUT SHISHA GARDEN</p> */}

                                          </div>
                    
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className='relative'>
                                          <img className='lg:h-[955px]' src="./images/foxhutslide1.png" alt="Marbella, Spain" />
                                          <div className="absolute w-full top-0 left-0 py-4 flex justify-center">
                                          <p className="  font-popping  lg:text-[30px] font-bold text-white text-center">FOX HUT PARTY ROOM</p>

                                          </div>

                      {/* <figcaption>
                        <img src="img/icon-location.svg" alt="Icon location" />
                        Marbella, Spain
                      </figcaption> */}
                    </figure>
                    </div>
                    
                   

                  <div className="swiper-slide">
                    <figure className='relative'>
                                          <img src="./images/foxhutslide2.png" alt="Sevilla, Spain" />
                                          <div className="absolute w-full top-0 left-0 py-4 flex justify-center">
                                          <p className="  font-popping  lg:text-[30px] font-bold text-white text-center">FOX HUT SHISHA GARDEN</p>

                                          </div>
                      {/* <figcaption>
                        <img src="img/icon-location.svg" alt="Icon location" />
                        Sevilla, Spain
                      </figcaption> */}
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className='relative'>
                                          <img src="./images/foxhutslide3.png" alt="Fornalutx, Mallorca, Spain" />
                                          <div className="absolute w-full top-0 left-0 py-4 flex justify-center">
                                          <p className="  font-popping  lg:text-[30px] font-bold text-white text-center">FOX HUT GAME ROOM</p>

                                          </div>
                      {/* <figcaption>
                        <img src="" alt="Icon location" />
                        Fornalutx, Mallorca, Spain
                      </figcaption> */}
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className='relative'>
                                          <img src="./images/foxhutslide1.png" alt="Calle Niño de Guevara, 1, 29008 Málaga, Spain" />
                                          <div className="absolute w-full top-0 left-0 py-4 flex justify-center">
                                          <p className="  font-popping  lg:text-[30px] font-bold text-white text-center">FOX HUT PARTY ROOM</p>

                                          </div>
                      {/* <figcaption>
                        <img src="img/icon-location.svg" alt="Icon location" />
                        Calle Niño de Guevara, 1, 29008 Málaga, Spain
                      </figcaption> */}
                    </figure>
                  </div>
                
                  <div className="swiper-slide">
                    <figure className='relative'>
                                          <img src="./images/foxhutslide3.png" alt="Cala S'Almunia in Mallorca, Spain" />
                                          <div className="absolute w-full top-0 left-0 py-4 flex justify-center">
                                          <p className="  font-popping  lg:text-[30px] font-bold text-white text-center">FOX HUT GAME ROOM</p>

                                          </div>
                      {/* <figcaption>
                        <img src="img/icon-location.svg" alt="Icon location" />
                        Cala S'Almunia in Mallorca, Spain
                      </figcaption> */}
                    </figure>
                  </div>     
                </div>
                <div class="swiper-custom-nav">
                        <svg id="nav-left" width="64" height="64" viewBox="0 0 64 64" id="nav-left" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M32 2.79753e-06C14.3269 4.34256e-06 -4.34256e-06 14.3269 -2.79753e-06 32C-1.2525e-06 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 1.2525e-06 32 2.79753e-06ZM28.9334 24.3999C28.6667 24.1333 28.4 23.9999 28 23.9999C27.6 23.9999 27.3334 24.1333 27.0667 24.3999L20.4 31.0666L20.4 31.0667C20.2 31.2667 20.075 31.5041 20.025 31.751C19.9417 32.1624 20.0666 32.6 20.4 32.9333L27.0667 39.6C27.6 40.1333 28.4 40.1333 28.9333 39.6C29.4667 39.0667 29.4667 38.2667 28.9333 37.7333L24.5334 33.3334L42.7222 33.3334C43.4889 33.3334 44 32.8 44 32C44 31.2 43.4889 30.6667 42.7222 30.6667L24.5333 30.6667L28.9334 26.2666C29.4667 25.7333 29.4667 24.9333 28.9334 24.3999Z" fill="white"/>
                        </svg>
    
                        <svg id="nav-right" width="64" height="64" viewBox="0 0 64 64" id="nav-right" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM35.0666 39.6001C35.3333 39.8667 35.6 40.0001 36 40.0001C36.4 40.0001 36.6666 39.8667 36.9333 39.6001L43.6 32.9334L43.6 32.9333C43.8 32.7333 43.925 32.4959 43.975 32.249C44.0583 31.8376 43.9334 31.4 43.6 31.0667L36.9333 24.4C36.4 23.8667 35.6 23.8667 35.0667 24.4C34.5333 24.9333 34.5333 25.7333 35.0667 26.2667L39.4666 30.6666H21.2778C20.5111 30.6666 20 31.2 20 32C20 32.8 20.5111 33.3333 21.2778 33.3333H39.4667L35.0666 37.7334C34.5333 38.2667 34.5333 39.0667 35.0666 39.6001Z" fill="white"/>
                        </svg>
                    </div>
                <div className="swiper-custom-pagination"></div>
              </div>
            </div>
          </section>
        </div>
        </div>
      );
    };
export default RoomSlide