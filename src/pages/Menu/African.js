import React from "react";
import style from "../../styles/Menu.module.css";

const African = () => {
  return (
    <>
      {" "}
      <div className={`${style.Africans} h-[550px] relative`}>
       <div className="absolute bg-[#121212] opacity-[0.1] top-0 left-0 h-full w-full"></div>
              <div className=" flex justify-center h-full items-center">
          <h1 className="text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]">
          AFRICAN SECTION        </h1>
        </div>
      </div>
      <div className=" pt-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
        <div className="">
          <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
            African Dishes          </p>
      
        </div>
        
      </div>
        
      <div className="pb-10 px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px] grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 ">
            <div className="flex  items-center"><p className="font-popping text-[34px] text-[#121212] dark:text-white">Grilled Tilapia Fish</p></div>
            <div className="flex justify-center items-center w-full"><img className="mx-auto" src="../images/telepia.png" alt="" /></div>
        {/* 2     */}
        <div className="flex  items-center"><p className="font-popping text-[34px] text-[#121212] dark:text-white">Jollof Rice with Plantain</p></div>
            <div className="flex justify-center items-center w-full"><img className="mx-auto" src="../images/joloRice.png" alt="" /></div>
            
        {/* 3 */}
        <div className="flex  items-center"><p className="font-popping text-[34px] text-[#121212] dark:text-white">Chicken Suya</p></div>
            <div className="flex justify-center items-center w-full"><img className="mx-auto" src="../images/chicken.png" alt="" /></div>
            
        {/* 4 */}
        <div className="flex  items-center"><p className="font-popping text-[34px] text-[#121212] dark:text-white">Beef Suya</p></div>
            <div className="flex justify-center items-center w-full"><img className="mx-auto" src="../images/beefSuya.png" alt="" /></div>
            
          </div>

         
    </>
  );
};

export default African;
