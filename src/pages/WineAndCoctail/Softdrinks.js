import React from "react";
const Softdrinks = () => {
  return (
    <div className="">
      <div
        className="h-[600px] lg:h-[850px] bg-no-repeat   bg-cover bg-full bg-center w-full"
        style={{ backgroundImage: `url("../RedW.jpg")` }}
      >
        <div className=" flex justify-center h-full items-center">
          <h1 className="text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]">
          Soft Drinks Bar          </h1>
        </div>
      </div>
      <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
        <div className="">
          <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
            Soft drinks
          </p>

          <div className="xl:w-[960px] mx-auto">
            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                J2O
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>
            {/* 2 */}
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">Cola Cola </p>
                <p className="MDPText  py-4 text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>
            {/* 3 */}
            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                Appletiser                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                Monster                 </p>
                <p className="MDPText  py-4 text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>

            {/* 4 */}
            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">Juice</p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                    Soda
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>

            {/* 5 */}
            <div className="pb-10">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">Lemonade </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>

            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">Coke </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">Fanta </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>
            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">Tonic</p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Softdrinks;
