import React from "react";
import style from "../../styles/Menu.module.css";

const SideSmallPlates = () => {
  return (
    <>
      {" "}
      <div className={`${style.sidesHero} h-[550px] relative`}>
       <div className="absolute bg-[#121212] opacity-[0.2] top-0 left-0 h-full w-full"></div>
              <div className=" flex justify-center h-full items-center">
          <h1 className="text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]">
          SIDES & SMALL PLATES</h1>
        </div>
      </div>
      <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
        <div className="">
          <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
          Sides       </p>

          <div className="xl:w-[960px] mx-auto">
            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                Garlic Ciabatta                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
              </p>
            </div>
            {/* 2 */}
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                HSweet Potato Fries
                </p>
                <p className="MDPText  py-4 text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />
              <p className="MDSPText dark:text-[#ffffffb3] text-black">
              </p>
            </div>
            {/* 3 */}
            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                Hand cut Chips
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
              </p>
            </div>

            {/* 4 */}
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                Mixed Leaf Salad                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">

              </p>
            </div>
                      {/* 5 */}
                      <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                Onion Rings                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">

              </p>
            </div>
            
            {/* 6 */}
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                Fried Plantain              </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
              </p>
            </div>
                      
          </div>
        </div>
          </div>
          <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
        <div className="">
          <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
          Small Plates         </p>

          <div className="xl:w-[960px] mx-auto">
            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                Breaded Mushrooms (V)
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
              served with garlic mayo
              </p>
            </div>
            {/* 2 */}
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                Halloumi Bites
                </p>
                <p className="MDPText  py-4 text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />
              <p className="MDSPText dark:text-[#ffffffb3] text-black">
              lettuce, sundries tomato
              </p>
            </div>
            {/* 3 */}
            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                Nachos                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
              mixed jalapenos salsa, sour cream, guacamole
              </p>
            </div>


            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                Mixed Olives
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
              </p>
            </div>

                    
                      
          </div>
        </div>
      </div>
    </>
  );
};

export default SideSmallPlates;
