import React, { useState, useEffect } from "react";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiSun,BiMoon } from "react-icons/bi";

function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav className=" shadow-none w-[100vw] mt-[20px] mb-[-170px]  py-8 px-6 lg:px-12 nav">
      <div className="flex w-full shadow-none   justify-between md:justify-around ">
        <div className="flex overflow-hidden  items-center">
          <a
             href={"/"}
            className="  text-white shadow-none nav__brand PB"
          >
            <img src="/images/foxnavlogo.png" alt="" />
          </a>
        </div>

        <ul className={`2xl:ml-[200px] ${active}`}>
        <a
             href={"/"}
            className="MAINLOGO  PB"
          >
            <img src="/images/foxnavlogo.png" alt="" />
          </a>

          <Link
            className={`${
              router.pathname === "/"
                ? "text-[#fc6506]  nav__link"
                : "nav__link  text-white	"
            } `}
            href={"/"}
            onClick={navToggle}
          >
            <li className=" nav__item item">Home</li>
          </Link>
          <Link href={'/Menu'}
           className={`${
            router.pathname === "/Menu"
              ? "text-[#fc6506] nav__link"
              : "nav__link text-white	"
              } `}
              onClick={navToggle}
          >
          <li className="nav__item menu hover:text-[#fc6506]">
            Menu
            {/* <ul className=" subMenu">
              <Link
                className={`${
                  router.pathname === "/Menu/GASTRO"
                    ? "text-[#b1935e]  nav__link"
                    : "nav__link  text-white	"
                } `}
                href={"/Menu/GASTRO"}
                onClick={navToggle}
              >
                <li
                  className="text-center itmeD  nav__item "
                  onClick={navToggle}
                >
                  GASTRO
                </li>
              </Link>

              <Link
                className={`${
                  router.pathname === "/Menu/CONTINENTAL"
                    ? "text-[#b1935e]  nav__link"
                    : "nav__link  text-white	"
                } `}
                href={"/Menu/CONTINENTAL"}
                onClick={navToggle}
              >
                <li className="text-center nav__item itmeD">CONTINENTAL</li>
              </Link>
            </ul> */}
          </li>
          </Link> 

          <Link
            className={`${
              router.pathname === "/#event"
                ? "text-[#fc6506] nav__link"
                : "nav__link text-white"
            } 	`}
            href={"/#event"}
            onClick={navToggle}
          >
            {" "}
            <li className="nav__item">Events </li>
          </Link>

          <Link
            className={`${
              router.pathname === "/WineAndCoctail/WineAndCoctail"
                ? "text-[#fc6506] nav__link"
                : "nav__link text-white	"
            } `}
            href={"/WineAndCoctail/Drinks"}
            onClick={navToggle}
          >
            <li className="nav__item">Drinks </li>
          </Link>

          <Link
            className={`${
              router.pathname === "/Contact/Contact"
                ? "text-[#fc6506] nav__link"
                : "nav__link text-white"
            } 	`}
            href={"/Contact/Contact"}
            onClick={navToggle}
          >
            {" "}
            <li className=" nav__item ">Contact </li>
          </Link>
          <div className="flex justify-center px-6">
          {currentTheme === "dark" ? (
            <button className="" onClick={() => setTheme("light")}>
            <BiMoon className="text-[24px]"/>
              
            </button>
          ) : (
            <button className="" onClick={() => setTheme("dark")}>
            <BiSun className="text-[24px]"/>
            </button>
          )}
        </div>
        </ul>
      
      </div>

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Header;
