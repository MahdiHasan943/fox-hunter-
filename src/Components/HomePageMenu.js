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
        "lettuce, tomato, onion, cheese, bacon,  mayo, topped with pickleand accompanied  with homemade hand cut chips ",
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

      p1Title: "Jollof Rice with Plantain & Salad (opt)",
      p1Text:
        "chicken, assorted meat, fish",
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

      p1Title: "Fox Hut Pizza BBQ",
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

      p2Title: "Veggie Breakfast",
      p2Text: "eggs, mushrooms, tomato and baked beans with toast",
      p2Price: " ",

      p3Title: " Egg on Toast (opt)",
      p3Text: "fried, poached, scrambled",
      p3Price: " ",

      p4Title: "GAdvocado on Toast (V)",
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

      p3Title: "  Baileys Bread and Butter Pudding",
      p3Text:
        " ",
      p3Price: " ",

      p4Title: "Sticky Toffee Pudding",
      p4Text:
        " ",
      p4Price: " ",

      p5Title: "with vanilla ice cream",
      p5Text: "  ",
      p5Price: " ",
      p6Title: "Belgium Waffle",
      p7Title:"with vanilla ice cream",

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

      p3Title: "  Baileys Bread and Butter Pudding",
      p3Text: "Served with vanilla ice cream",
      p3Price: " ",

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
      <div className="md:flex pt-20 md:pt-[100px]  pb-20 h-full overflow-hidden ">
        <div className="relative h-full  md:w-[30%]">
          <h1 className="text-[36px] lg:text-[60px] sm:text-[40px]   text-center   lg:text-end mr-4 dark:text-white text-black font-bold">
            Our Menu
          </h1>
          <div className=" sm:w-auto  md:mr-[-300px] h-[1000px] sm:h-[900px]    lg:mr-[-200px]">
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
                    <h4 className=" menuCardTitle font-popping dark:text-white mt-5 lg:mb-6 font-bold text-[34px] sm:text-[40px] text-black">
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
        <div className="w-full   md:w-[70%] h-[100%]">
          <PhotoView src="./images/menuright.png">
            <img
              className=" w-[969px] sm:h-[821px]"
              src="./images/menuright.png"
              alt=""
            />
          </PhotoView>
        </div>
      </div>
    </PhotoProvider>
  );
};
export default HomePageMenu;
