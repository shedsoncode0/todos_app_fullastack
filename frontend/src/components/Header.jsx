import React from "react";
import Logo from "../assets/logo.png"

const Header = () => {
  return (
    <>
      <header className="h-36 w-full bg-gray700 p-5 flex justify-center items-end">
         <div className="w-36">
         <img className="w-full h-full object-cover" src={Logo} alt="logo" />
         </div>
      </header>
    </>
  );
};

export default Header;
