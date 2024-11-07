import React from "react";
import logo from "../assets/Netflix_Logo_PMS.png";
import download from "../assets/download.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
const Header = () => {
  const handleSignOut = () => {
    console.log("signed out")
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-full flex justify-between h-24 px-4 text-white">
      <img className="w-44" src={logo} alt="logo" />

      <div className="flex items-center h-full gap-4">
        <img src={download} className="h-3/5" />
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
