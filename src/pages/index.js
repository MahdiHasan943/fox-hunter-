import Link from "next/link";
import "../styles/Home.module.css";
import HomePageMenu from "@/Components/HomePageMenu";
import Reservation from "@/Components/Reservation";
import ImageSlide from "@/Components/imageSlide/ImageSlide";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import NewSlide from "@/Components/NewSlide";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import RoomSlide from "@/Components/imageSlide/RoomSlide";

export default function Home() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {/* 1 */}
      <div className="overflow-hidden relative h-[1650px] lg:h-[1898px]  flex items-center justify-start  ">
        <div className="absolute top-0 left-0 z-50 opacity-[0.2] h-[1500px] lg:h-[1898px] w-full bg-[#000] "></div>
        <img
          className="absolute top-0 left-0 h-[1500px] lg:h-[1898px] w-full"
          src="/images/foxmainhero.png"
          alt=""
        />
        <div className="absolute z-50 top-[300px] lg:top-[500px] px-4 sm:px-0 sm:pl-[80px] lg:pl-[150px] xl:pl-[250px]">
          <img className="w-[150px]" src="./welcome.png" alt="" />
          <h1 className="PassionHero mt-4 text-[65px] leading-[66px] sm:text-[101px] sm:leading-[95%]">
            FOX HUT
            <br />
            BAR
          </h1>
          <p className="where my-4">Where The World comes to DANCE & dine</p>
        </div>

        <div className="absolute bottom-0 z-50 w-full bg-[#C182608F] py-8 lg:h-[650px]">
          <h2 className="underline underline-offset-4 font-popping text-[48px] font-bold decoration-white text-center">
            About Us
          </h2>
          <div className="w-full mt-6 px-6 grid grid-cols-1 gap-20 lg:grid-cols-3 lg:mt-20 lg:px-10">
            <p className="font-popping  leading-[22px] tracking-wider sm:w-[498px] mx-auto text-[16px] text-[#fff]">
              Right opposite Leicester’s main train station, Hind & PB Lounge is
              a gastro pub fit for breakfast, lunch and dinner. On London Road,
              it’s one of the most popular spots in central Leicester thanks to
              classic British pub food alongside other international favourites,
              a buzzing atmosphere, well-stocked bar and regular events. Whether
              you just want to take the edge off and relax with a coffee or go a
              bit crazy in the early hours, Hind & PB Lounge is fit for
              whatever.
            </p>

            <p className="font-popping  leading-[22px] tracking-wider sm:w-[498px] mx-auto text-[16px] text-[#fff]">
            Serving classic British pub food alongside other international favourites. Starters, sides, main, steaks, dessert and lots more. 

We also have wine, Shots & Liqueurs, Passion Blend, Pina Colada, Margarita, Maitai, Manhattan, Sex On The Beach, Vodka, Cosmopolitan,Classic Mojito, Woo – Woo, Passion Coconut, Blue Lagoon, Spirits, Soft Drinks & Juice, Glass Juice, Bottled Beers and lots more...
            </p>


            <p className="font-popping leading-[22px] tracking-wider sm:w-[498px] mx-auto text-[16px] text-[#fff]">
              Serving classic British pub food alongside other international
              favourites. Starters, sides, main, steaks, dessert and lots more.
              We also have wine, Shots & Liqueurs, Passion Blend, Pina Colada,
              Margarita, Maitai, Manhattan, Sex On The Beach, Vodka,
              Cosmopolitan,Classic Mojito, Woo – Woo, Passion Coconut, Blue
              Lagoon, Spirits, Soft Drinks & Juice, Glass Juice, Bottled Beers
              and lots more...
            </p>
          </div>
        </div>
      </div>
      {/* 2 */}
    

      {/* 3 */}
      <div className="sm:flex mt-[50px] items-center gap-[100px]  lg:ml-[50px] 2xl:ml-[200px] px-6">
            <div className="">
              <h4 className="text-[36px] lg:ml-[-44px] lg:text-[60px] sm:text-[40px]     lg:text-end mr-4 dark:text-white text-black font-bold">
                Meal Deals
              </h4>
        </div>
            <div className="">
              <p className="dark:text-white text-[20px] mt-[20px] sm:mt-0 sm:text-[24px] sm:font-bold text-black ">
                MONDAY – FRIDAY <br className="hidden lg:block" /> 7AM – 12NOON: FULL ENGLISH BREAKFAST WITH FREE BOTTOMLESS COFFEE

                <br className="hidden lg:block" /> 12NOON – 5PM: LUNCH DEALS

                <br className="hidden lg:block" />5PM – 8PM: DINNER

              </p>
              <p className="dark:text-white text-[20px] sm:text-[24px] mt-5 sm:font-bold text-black ">
                OFFERS AND DISCOUNTS <br className="hidden lg:block" /> # HAPPY
                HOUR: MONDAY – FRIDAY 5PM TO 8PM.
              </p>
              
            </div>
          </div>
      <HomePageMenu></HomePageMenu>

      {
        currentTheme === 'dark'?      <img className="px-4 w-[85%]  sm:w-auto sm:px-16 mb-10 lg:ml-[50px]" src="/images/foxbutbarrntertainmentrooms.png" alt="" />
:          <img className="px-4 w-[85%]  sm:w-auto mb-10 sm:px-16 lg:ml-[50px]" src="/images/EntertainmentRooms.png" alt="" />

      }
      <div className="overflow-hidden sm:w-[95%] mx-auto">
        <RoomSlide/>

      </div>
    
{/* <NewSlide/> */}
      {/* Our Event Gallery */}
      <div
        id="event"
        className="flex px-6 py-24 w-full justify-center  items-center"
      >
        <div className="w-full md:w-[50%]">
          <h3 className="dark:text-white text-black text-[30px] pb-10   sm:text-[60px] md:leading-[80px] font-bold">
            Our Event Gallery
          </h3>
          <p className="dark:text-white font-semibold py-4 text-black ">
            Fox Hut Bar is very known for organising amazing events throughout
            the year and make sure to always check this section of our website
            for the very latest. If you missed our event an would like to see
            pictures taken, please click and get re-directed to out Instagram
            page for more Event information and images.
          </p>
        </div>
      </div>
      <ImageSlide></ImageSlide>
      <Reservation></Reservation>
    </>
  );
}
