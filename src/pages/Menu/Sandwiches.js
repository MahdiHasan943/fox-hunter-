import React from "react";
import style from "../../styles/Menu.module.css";

const Sandwiches = () => {
  return (
    <>
      {" "}
      <div className={`${style.sandWichHero} h-[550px] relative`}>
       <div className="absolute bg-[#121212] opacity-[0.2] top-0 left-0 h-full w-full"></div>
              <div className=" flex justify-center h-full items-center">
          <h1 className="text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]">
          SANDWICHES       </h1>
        </div>
      </div>
      <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
        <div className="">
          <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
          Sanwich         </p>

          <div className="xl:w-[960px] mx-auto">
            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                Club Sandwich                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
              Chicken, bacon lettuce and tomato with mayo              </p>
            </div>
            {/* 2 */}
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                BLT                </p>
                <p className="MDPText  py-4 text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />
              <p className="MDSPText dark:text-[#ffffffb3] text-black">
              Chicken, bacon lettuce and tomato with mayo              </p>
            </div>
            {/* 3 */}
            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                Tuna Melt                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
              Flacked tuna, mayo,  melted cheese with hand cut chips        </p>
            </div>

            {/* 4 */}
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                Sausage, Bacon or Cheese & Onion Cob                 </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
              </p>
            </div>
                      {/* 5 */}
                   
                      
          </div>
        </div>
          </div>
         
    </>
  );
};

export default Sandwiches

;
