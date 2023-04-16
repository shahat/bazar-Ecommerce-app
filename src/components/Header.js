import React from "react";
import { logoDark, cartImg } from "../assets/index";
function Header() {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-[gray]-800">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <img className="w-28" src={logoDark} alt="logoDark" />
        </div>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="font-titleFont text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="font-titleFont text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              pages
            </li>
            <li className="font-titleFont text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              shop
            </li>
            <li className="font-titleFont text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="font-titleFont text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <div className="relative">
            <img className="w-6" src={cartImg} />
            <span className="absolute w-6 top-2 left-0 text-sm flex item-center justify-center font-semibold font-titleFont">
              0
            </span>
          </div>
          <img
            className="w-8 h-8 rounded-full"
            src="https://ak5.picdn.net/shutterstock/videos/19584025/thumb/1.jpg?ip=x480"
            alt="account-logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
