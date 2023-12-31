import React from "react";
import style from "../../styles/Menu.module.css";

const Continental = () => {
  return (
    <>
      {" "}
      <div className={`${style.Continental} h-[550px] lg:h-[800px] relative`}>
       <div className="absolute bg-[#121212] opacity-[0.1] top-0 left-0 h-full w-full"></div>
              <div className=" flex justify-center h-full items-center">
          <h1 className="text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]">
          CONTINENTAL         </h1>
        </div>
      </div>
      <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
        <div className="">
          <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
          African Section     </p>

          <div className="xl:w-[960px] mx-auto">
            <div className=" relative">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                Jollof Rice with Plantain & Salad 
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />
                    <img className="w-[200px] sm:absolute top-0 right-0 h-[150px]" src="../../images/cFirstImage.png" alt="" />
              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
              opt chicken, assorted meat, fish
                          </p>
            </div>
            {/* 2 */}
            <div className="py-[100px] relative">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                Student Jollof Rice with Chicken
                </p>
                <p className="MDPText  py-4 text-[#B5986D]"></p>
              </div>
              <img className="w-[200px]  sm:absolute top-[65px] right-0 h-[150px]" src="../../images/empty.png" alt="" />

              <img className="py-2 w-full" src="../../MDLine.png" alt="" />
              <p className="MDSPText dark:text-[#ffffffb3] text-black">
              </p>
            </div>
            {/* 3 */}
            <div className="relative">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                African Spiced Chicken Suya
                </p>
                <p className="MDPText text-[#B5986D]">  </p>
              </div>
              <img className="w-[200px] sm:absolute top-0 right-0 h-[150px]" src="../../images/cThirdItem.png" alt="" />

              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">Served with onions, tomato and spiced suya pepper
             
              </p>
            </div>

            {/* 4 */}
            <div className="my-[50px] relative">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                African Spiced Beef Suya
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="w-[200px] sm:absolute top-0 right-0 h-[150px]" src="../../images/cfourItem.png" alt="" />

              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">Served with onions, tomato and spiced suya pepper
              </p>
            </div>
                      {/* 5 */}
                      <div className="relative">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                African Spiced Beef Suya Kebab
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="w-[200px] sm:absolute top-0 right-0 h-[150px]" src="../../images/cfiveItem.png" alt="" />

              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText md:w-[500px] py-4 dark:text-[#ffffffb3] text-black">served with salad, mayo, bbq, ketchup with home made hand cut chips
              </p>
                      </div>
                      
                      {/* 6 */}
                      <div className="relative my-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                On Bone Spice Grilled Tilapia Fish
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="w-[200px] sm:absolute top-0 right-0 h-[150px]" src="../../images/csixItem.png" alt="" />

              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText md:w-[500px] py-4 dark:text-[#ffffffb3] text-black">Served with salad, African spiced fish sauce and options of plantain or potato wedges
              </p>
            </div>
          </div>
        </div>
          </div>
         
    </>
  );
};

export default Continental;
