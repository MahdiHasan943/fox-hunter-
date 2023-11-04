import React from "react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "./SwiperNavButtons";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const HomePageMenu = () => {
  const menuCards = [
    {
      id: "1",
      title: "Pub Classics",

      p1Title: "Sirloin Steak",
      p1Text:"with hand cut chips grilled tomato and  peppercorn sauce ",
      p1Price: "",

      p2Title: " Fox Hut Homemade Beef Burger",
      p2Text:
        "lettuce, tomato, onion, cheese, bacon,  mayo, topped with pickle and accompanied  with homemade hand cut chips ",
      p2Price: " ",

      p3Title: " Classic Beef Burger",
      p3Text:
        " lettuce, tomato, onion, ketchup, homemade  chips",
      p3Price: " ",

      p4Title: "Classic Salmon",
      p4Text: "with vegetables ",
      p4Price: " ",
      
      p5Title: "Pan Fried Sausage and Mash",
      p5Text:
        "sausage, fried onion, mash potatoes and  gravy",
        p6Title: "Half Grilled Chicken",
        p6Text: " serves with hand cut chips or salad.",
    },
    {
      id: "2",
      title: "Continental",

      p1Title: "Jollof Rice with Plantain & Salad ",
      p1Text:
        "(opt) chicken, assorted meat, fish",
      p1Price: "",

      p2Title: " Student Jollof Rice with Chicken",
      
      // p2Text:
      //   " Eggs, mushrooms, tomato, fresh made hash brown and beans served with a side of toast. ",
      p2Price: " ",

      p3Title: "  African Spiced Chicken Suya",
      p3Text: " ",
      p3Price: " ",

      p4Title: "African Spiced Beef Suya",
      p4Text:
        "",
      p4Price: " ",
      p5Title:"African Spiced Beef Suya Kebab",
      p5Text:""
      // "sausage, fried onion, mash potatoes and  gravy" 
      ,
      p6Title: "On Bone Spice Grilled Tilapia Fish",
      p6Text: " with salad, plantain, or potato wedges  and spicy fish sauce.",

    },
    {
      id: "3",
      title: "Pizzas",

      p1Title: "	FOX HUT PIZZA",
      p1Text: "BBQ base, chicken, beef, mushroom,  red onion, cheese, olives",
      p1Price: "",

      p2Title: "Hawaii Pizza",
      p2Text: " tomato base, pineapple, ham, cheese",
      p2Price: " ",

      p3Title: " Margarita Pizza",
      p3Text:
        " tomato base and cheese",
      p3Price: " ",

      p4Title: "Pepperoni Pizza",
      p4Text: " tomato base, pepperoni, jalapeno, red  anion, cheese",
      p4Price: " ",

      p5Title: "Vegetarian Pizza",
      p5Text:
        "tomato base, mushrooms, peppers,    sweetcorn, red onion, olives,    cheese",
      p5Price: " ",
    },
    {
      id: "4",
      title: " Breakfast",

      p1Title: "FULL English Breakfast",
      p1Text: "pork sausage, bacon, tomato, baked beans, mushrooms, and eggs with side toast",
      p1Price: "",

      p2Title: "VEGETARIAN BREAKFAST ",
      p2Text: "eggs, mushrooms, tomato and baked beans with toast homemade hashbrown",
      p2Price: " ",

      p3Title: " Egg on Toast ",
      p3Text: "(opt) fried, poached, scrambled",
      p3Price: " ",

      p4Title: "	AVOCADO ON TOAST ",
      p4Text: " with garnish",
      p4Price: " ",

      p5Title: "All Day Breakfast",
      p5Text:
        " pork sausage, bacon, tomato, baked beans, mushrooms and eggs with side toast",
      p5Price: " ",

      // p6Title: "Grilled Chicken Burger",
      // p6Text: "  Served in burn with lettuce mayonnaise, tomato .",
      // p6Price: " ",
    },
    {
      id: "5",
      title: "Dessert",

      p1Title: "Flavoured Ice Cream",
      p1Text:""
        ,
      p1Price: "",

      p2Title: "Cheesecake ",
      p2Text: "",
      p2Price: " ",

      p3Title: " Sticky Toffee Pudding ",
      p3Text:"with vanilla ice cream",
        
      p3Price: " ",

      p4Title: "",
      p4Text:
        " ",
      p4Price: " ",

      p5Title: "Belgium Waffle",
      p5Text: " with vanilla ice cream ",
      p5Price: " ",
      p6Title: "",
      p7Title:"",

    },
    {
      id: "6",
      title: "Hot Drinks",

      p1Title: "Espresso",
      p1Text:""
        ,
      p1Price: "",

      p2Title: "Cappuccino  ",
      p2Text: "",
      p2Price: " ",

      p3Title: " Latte",
      p3Text:
        " ",
      p3Price: " ",

      p4Title: "Mocha ",
      p4Text:
        " ",
      p4Price: " ",

      p5Title: "Hot Chocolate ",
      p5Text: "  ",
      p5Price: " ",
      p6Title: "Tea ",
      p7Title:"Americano ",
    },
    {
      id: "7",
      title: "Sides & Small Plates",

      p1Title: "Breaded Mushrooms (V)",
      p1Text:"served with garlic mayo"
        ,
      p1Price: "",

      p2Title: "Halloumi Bites  ",
      p2Text: "lettuce, sundries tomato",
      p2Price: " ",

      p3Title: " Nachos",
      p3Text: " mixed jalapenos salsa, sour cream,  guacamole",
      p3Price: " ",

      p4Title: "Mixed Olives ",
      p4Text:
        " ",
      p4Price: " ",

      p5Title: "Garlic Ciabatta ",
      p5Text: "  ",
      p5Price: " ",
      p6Title: "Sweet Potato Fries ",
      p7Title: "Hand cut Chips ",
      p8Title: "Mixed Leaf Salad",
      p9Title: "Onion Rings",
      p10Title:"Fried Plantain",
    },
    {
      id: "8",
      title: "Sandwiches",

      p1Title: " Club Sandwich",
      p1Text:
        "Chicken, bacon lettuce and tomato  with mayo",
      p1Price: "",

      p2Title: " BLT",
      p2Text: "Chicken, bacon lettuce and tomato  with mayo",
      p2Price: " ",

      // p3Title: "  Baileys Bread and Butter Pudding",
      // p3Text: "Served with vanilla ice cream",
      // p3Price: " ",

      p4Title: "Tuna Melt",
      p4Text:
        "  Grilled bacon with lettuce and tomato  in a thick cut Sandwich with mayo",
      p4Price: " ",

      p5Title: "Sausage, Bacon or Cheese & Onion Cob ",
      p5Text: " ",
      p5Price: " ",
    },
  ];
  return (
    <PhotoProvider>
      <div className="lg:flex justify-center  items-center pt-20 md:pt-[100px]  pb-20 h-full overflow-hidden ">
        <div className="relative h-full  md:w-[30%] xl:w-[25%]">
          <h1 className="text-[36px] lg:text-[60px] sm:text-[40px]   text-center   lg:text-end mr-4 dark:text-white text-black font-bold">
            Our Menu
          </h1>
          <div className=" sm:w-auto  md:mr-[-300px] xl:mr-[-320px]  4xl:mr-[-300px] h-[1000px] sm:h-[900px]    ">
            <Swiper
              className="relative"
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={100}
              slidesPerView="auto"
            >
              {menuCards.map((menuCard) => (
                <SwiperSlide key={menuCard.id} className=" mt-[50px]">
                  <SwiperNavButtons></SwiperNavButtons>

                  <div className="absolute top-[100px] sm:top-0 overflow-hidden right-8 sm:right-0 w-[90%]  sm:w-[500px] h-[550px]  sm:h-auto px-10 lg:py-20 rounded-2xl bg-[#C18260]">
                    <h4 className=" menuCardTitle sm:px-10 font-popping dark:text-white mt-5 lg:mb-6 font-bold text-[34px] sm:text-[40px] text-black">
                      {menuCard?.title}
                    </h4>
                    <div className="flex sm:px-10 mt-[10px] sm:mt-[20px] items-center justify-between">
                      <div className="">
                        <p className="dark:text-white text-black font-bold text-[16px] lg:text-[20px]">
                          {menuCard?.p1Title}
                        </p>
                        <p className="dark:text-white text-black  text-[15px] lg:text-[17px]">
                          {menuCard?.p1Text}
                        </p>
                      </div>
                      {/* <p className="dark:text-white text-black font-bold text-[20px]">
                        {menuCard?.p1Price}
                      </p> */}
                    </div>
                    {/* 2 */}
                    <div className="flex sm:px-10 mt-[10px] sm:mt-[20px] items-center justify-between">
                      <div className="">
                        <p className="dark:text-white text-black font-bold  text-[16px] lg:text-[20px]">
                          {menuCard?.p2Title}
                        </p>
                        <p className="dark:text-white text-black  text-[15px] lg:text-[17px]">
                          {menuCard?.p2Text}
                        </p>
                      </div>
                      {/* <p className="dark:text-white text-black font-bold  text-[16px] lg:text-[20px]">
                        {menuCard?.p2Price}
                      </p> */}
                    </div>
                    {/* 3 */}
                    <div className="flex sm:px-10 mt-[10px] sm:mt-[20px] items-center justify-between">
                      <div className="">
                        <p className="dark:text-white text-black font-bold  text-[16px] lg:text-[20px]">
                          {menuCard.p3Title}
                        </p>
                        <p className="dark:text-white text-black  text-[15px] lg:text-[17px]">
                          {menuCard?.p3Text}
                        </p>
                      </div>
                      {/* <p className="dark:text-white text-black font-bold  text-[16px] lg:text-[20px]">
                        {menuCard?.p3Price}
                      </p> */}
                    </div>
                    {/* 4 */}
                    <div className="flex sm:px-10 mt-[10px] sm:mt-[20px] items-center justify-between">
                      <div className="">
                        <p className="dark:text-white text-black font-bold  text-[16px] lg:text-[20px]">
                          {menuCard?.p4Title}
                        </p>
                        <p className="dark:text-white text-black text-[15px] lg:text-[17px]">
                          {menuCard?.p4Text}
                        </p>
                      </div>
                      {/* <p className="dark:text-white text-black font-bold text-[20px]">
                        {menuCard?.p4Price}
                      </p> */}
                    </div>
                    {/* 5 */}
                    <div className="flex sm:px-10 mt-[10px] sm:mt-[20px] items-center justify-between">
                      <div className="">
                        <p className="dark:text-white text-black font-bold  text-[16px] lg:text-[20px]">
                          {menuCard?.p5Title}
                        </p>
                        <p className="dark:text-white text-black  text-[15px] lg:text-[17px]">
                          {menuCard?.p5Text}
                        </p>
                      </div>
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        {menuCard?.p5Price}
                      </p>
                    </div>
                    {/* 6 */}
                    <div className="flex mt-[10px] sm:mt-[20px] sm:px-10  items-center justify-between">
                      <div className="">
                        <p className="dark:text-white text-black font-bold  text-[16px] lg:text-[20px]">
                          {menuCard?.p6Title}
                        </p>
                        <p className="dark:text-white text-black  text-[15px] lg:text-[17px]">
                          {menuCard?.p6Text}
                        </p>
                      </div>
                      {/* <p className="dark:text-white text-black font-bold  text-[16px] lg:text-[20px]">
                        {menuCard?.p6Price}
                      </p> */}
                    </div>
                    {/* 7 */}
                    <div className="flex mt-[10px] sm:mt-[20px] sm:px-10  items-center justify-between">
                      <div className="">
                        <p className="dark:text-white text-black font-bold  text-[16px] lg:text-[20px]">
                          {menuCard?.p7Title}
                        </p>
                        <p className="dark:text-white text-black text-[15px] lg:text-[17px]">
                          {menuCard?.p7Text}
                        </p>
                      </div>
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        {menuCard?.p7Price}
                      </p>
                    </div>
                    <p className="dark:text-white mt-[10px] sm:mt-[20px] sm:px-10  text-black font-bold  text-[16px] lg:text-[20px]">
                          {menuCard?.p8Title}
                    </p>
                    <p className="dark:text-white mt-[10px] sm:mt-[20px] sm:px-10  text-black font-bold text-[15px] lg:text-[17px]">
                          {menuCard?.p9Title}
                    </p>
                    <p className="dark:text-white mt-[10px] sm:mt-[20px] sm:px-10  text-black font-bold  text-[16px] lg:text-[20px]">
                          {menuCard?.p10Title}
                        </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-full lg:flex items-center 55xl:gap-20 justify-center  mt-[-230px] mx-auto lg:mt-[0px] md:w-[70%] xl:w-[75%] h-[100%]">
          <PhotoView src="./images/menuright.png">
            <img
              className="2xl:w-[850px] 55xl:w-[908px]  lg:h-[645px]"
              src="./images/menuright.png"
              alt=""
            />
          </PhotoView>
          <div className="mx-auto  right-0 px-4 md:w-[450px]  ">
        <div className="px-4  sm:pr-10 py-20 ">
         
         <p className=" text-stone-950 dark:text-white text-[22px] sm:text-[36px] sm:my-8">
           Drinks & Cocktails
         </p>
         <p className=" text-[14px] sm:text-[14px] text-stone-950 dark:text-white  my-8">
           We offer variety of deals throughout the week at fox hut 
bar. To be the first to know follow us on social media.
         </p>
         <div className="flex mt-20 gap-4 4xl:gap-10 justify-center">
           <a
             target="_blank"
             href="https://www.facebook.com/foxhutbar78"
           >
             <img src="./f.png" alt="" />
           </a>

           <a target="_blank" href="https://twitter.com/foxhutbar?t=mHvWFuU9BZZSxgkxgk38ew&s=09">
             <img src="./twitter.png" alt="" />
           </a>
           <a
             target="_blank"
             href="https://www.instagram.com/foxhutbar78?igshid=YTQwZjQ0NmI0OA"
           >
             <img src="./instra.png" alt="" />
           </a>
           <a target="_blank" href="https://www.tiktok.com/@foxhutbar?_t=8gvExiSSLZo&_r=1">
             <img src="./tiktok.png" alt="" />
           </a>
           <a
             target="_blank"
             href="https://www.snapchat.com/add/foxhutbar?share_id=uYJQRtUbIrk&locale=en-GB"
           >
             <img src="./snap.png" alt="" />
           </a>
           <a
             target="_blank"
             href="https://www.youtube.com/@FoxHutBar"
           >
             <img src="./youtube.png" alt="" />
           </a>
         </div>
       </div>
        </div>
        </div>
        {/* 3 */}
      
      </div>
    </PhotoProvider>
  );
};
export default HomePageMenu;
