import React from 'react'
import Reservation from '@/Components/Reservation'

const BottledBeers = () => {
  return (
    <div className=''>

      <div className='h-[480px]   bg-no-repeat  bg-cover bg-full bg-center w-full'
        style={{ backgroundImage: `url("../images/bottleBeerHero.png")` }} >
    <div className=" flex justify-center h-full items-center">
<h1 className='text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]'>Bottled Beer & Cider Bar</h1>
</div>
     </div>
     <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
                    <div className="">
                      <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
                      Bottled Beers
                      </p>

                      <div className="xl:w-[960px] mx-auto">
                        <div className="">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Birra Moretti
                            </p>
                            <p className="MDPText text-[#B5986D]"></p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                          
                        </div>
                        {/* 2 */}
                        <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Desperados
                            </p>
                            <p className="MDPText  py-4 text-[#B5986D]"></p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                         
                        </div>
                        {/* 3 */}
                        <div className="">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Heineken 0%                            </p>
                            <p className="MDPText text-[#B5986D]"></p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                         
                          
            </div>
          
            <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Newcastle Brown                            </p>
                            <p className="MDPText text-[#B5986D]"></p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                          
                          
                        </div>
            
            {/* 5 */}
            <div className="">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Sol                            </p>
                            <p className="MDPText text-[#B5986D]"></p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                          
                          
                        </div>                                   
                       
                      </div>
                    </div>
      </div>
      <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
                    <div className="">
                      <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
                      Bottled Cider
                      </p>

                      <div className="xl:w-[960px] mx-auto">
                        <div className="">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Bulmers
                            </p>
                            <p className="MDPText text-[#B5986D]"></p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                          
                        </div>
                        {/* 2 */}
                        <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Old Mout Cider
                            </p>
                            <p className="MDPText  py-4 text-[#B5986D]"></p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                         
                        </div>
                        {/* 3 */}
                        <div className="">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Old Mout Cider 0%                         </p>
                            <p className="MDPText text-[#B5986D]"></p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                         
                          
            </div>
          
          
            
      
                                      
                       
                      </div>
                    </div>
      </div>
      <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
        <div className="">
          <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
          Ready Drinks          </p>

          <div className="xl:w-[960px] mx-auto">
            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                VK Blue
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>
            {/* 2 */}
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                VK Cherry 
                </p>
                <p className="MDPText  py-4 text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>
            {/* 3 */}
            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                VK Ice
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>
          </div>
        </div>
      </div>
   
         

</div>
  )
}

export default BottledBeers