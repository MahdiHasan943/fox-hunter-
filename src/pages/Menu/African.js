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
      <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
        <div className="">
          <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
          African Dishes          </p>

        </div>
          </div>
         
    </>
  );
};

export default African;
