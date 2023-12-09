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
      <div className="overflow-hidden relative h-[1500px] lg:h-[1698px]  flex items-center justify-start  ">
        <div className="absolute top-0 left-0 z-50 opacity-[0.5] h-[1500px] lg:h-[1698px] w-full bg-[#000] "></div>
        <div className="absolute w-full top-0 left-0">
        {/* <img
          className=" h-[1500px] lg:h-[1698px] mx-auto"
          src="/images/foxhutHeroBg.png"
          alt=""
        /> */}
        <img
          className="h-[400px]  w-full  lg:h-[900px] 2xl:h-[1350px]  mx-auto"
          src="/images/foxhutHeroBg2.png"
          alt=""
          />
           <img
          className="h-[200px]  w-full lg:h-[900px] 2xl:h-[850px]  mx-auto"
          src="/images/foxhutHeroBg1.png"
          alt=""
        />
        </div>
       
        <div className="absolute z-50 top-[300px] lg:top-[500px] px-4 sm:px-0 sm:pl-[80px] lg:pl-[150px] xl:pl-[250px]">
          <img className="w-[150px]" src="./welcome.png" alt="" />
          <h1 className="PassionHero mt-4 text-[65px] leading-[66px] sm:text-[101px] sm:leading-[95%]">
            FOX HUT
            <br />
            BAR
          </h1>
          <p className="where my-4">Where The World comes to DANCE & dine</p>
        </div>

        <div className="absolute bottom-0 flex  items-center z-50 w-full bg-[#C182608F] py-8 lg:h-[650px]">
          <div className="w-full">
          <h2 className="underline underline-offset-4 font-popping text-[48px] text-[white!important] font-bold decoration-white text-center">
            About Us
          </h2>
          <div className="w-full mt-6 px-6 grid grid-cols-1 gap-20 md:grid-cols-2 xl:grid-cols-3 lg:mt-20 lg:px-10">
            <p className="font-popping  leading-[28px] tracking-wider 2xl:w-[498px] mx-auto text-[16px] text-[#fff]">
            FoxHut Bar is a great Pub and Bar, Located on Welford Road.
Few minutes away from Leicester Tigers and Kings Power stadium. It’s one of the most popular
Spots in central Leicester. Foxhut Bar is a gastro pub Fit for breakfast, lunch and dinner. Thanks to classic British pub food alongside other International favourites. A buzzing atmosphere, well-stocked bar and
Regular events. 
            </p>

            <p className="font-popping leading-[28px] tracking-wider 2xl:w-[498px] mx-auto text-[16px] text-[#fff]">
            Whether you just want to take the edge off and relax with a coffee
Or go a bit crazy in the early hours, Foxhut Bar is the place to be.
Serving classic foods, Starters, sides, main, steaks, dessert, Continental and lots more.
We also have Spirits, wines, champagne, Shots & Liqueurs, Cocktails and Soft drinks.
            </p>


            <p className="font-popping leading-[28px] tracking-wider 2xl:w-[498px] mx-auto text-[16px] text-[#fff]">
            FoxHut Bar, is a place that has it all including Live Sports. Gaming Section with Pool
Table, Football Table and Darts Board.
Foxhut Bar can be free booked for Private Events, Office Meetings, interviews and trainings with projector available.
            </p>
          </div>
         </div>
        </div>
      </div>
      {/* 2 */}
    

      {/* 3 */}
      <div className="sm:flex mt-[50px] items-center gap-[100px]  lg:ml-[50px] 2xl:ml-[200px] px-6">
            <div className="">
              <h4 className="text-[36px] lg:ml-[-44px] lg:text-[60px] sm:text-[40px]     lg:text-end mr-4 dark:text-white text-black font-bold">
              Weekly Activities
              </h4>
        </div>
        <div className="">
          
          
          
          <p className="dark:text-white text-[20px] mt-[20px] sm:mt-0 sm:text-[24px] sm:font-bold text-black ">
          o Happy hours, Monday to Friday 5pm – 8pm


              





                

          </p>

          <p className="dark:text-white text-[20px] sm:text-[24px] mt-5 sm:font-bold text-black ">
          o Shisha available, Monday to Thursday 4pm-10pm, Friday to Saturday 4pm-02am




          </p>
          <p className="dark:text-white text-[20px] sm:text-[24px] mt-5 sm:font-bold text-black ">
          o Thursdays, Students Night


          </p>

          <p className="dark:text-white text-[20px] sm:text-[24px] mt-5 sm:font-bold text-black ">
          o Fridays. Old Skool 80s -90s Night




          </p>

              <p className="dark:text-white text-[20px] sm:text-[24px] mt-5 sm:font-bold text-black ">
              o Saturdays, Afrobeat Night



          </p>
          <p className="dark:text-white text-[20px] sm:text-[24px] mt-5 sm:font-bold text-black ">
          o Everyday games. Pool Table, Football Table, Dartboar




              </p><p className="dark:text-white text-[20px] sm:text-[24px] mt-5 sm:font-bold text-black ">
              o Live Sports with Large projector screens



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