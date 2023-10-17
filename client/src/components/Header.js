import React from "react";
import { logoDark, cartImg } from "../assets/index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  /* -------------------------------------------- LOGIC -------------------------------------------- */

  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);

  /* -------------------------------------------- UI -------------------------------------------- */
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-[gray]-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-28" src={logoDark} alt="logoDark" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="font-titleFont text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              <Link to="/"> Home </Link>
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
          <Link to="/cart">
            <div className="relative">
              <img className="w-6" src={cartImg} />
              <span className="absolute w-6 top-2 left-0 text-sm flex item-center justify-center font-semibold font-titleFont">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={
                userInfo
                  ? `${userInfo.image}`
                  : "https://ak5.picdn.net/shutterstock/videos/19584025/thumb/1.jpg?ip=x480"
              }
              alt="account-logo"
            />
          </Link>
          {userInfo && <p>{userInfo.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
