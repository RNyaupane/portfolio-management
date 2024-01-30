import React from "react";
import { CgCloseO } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <div className="flex justify-between my-5 ">
        <h2 className="text-white font-bold text-2xl">Portfolio</h2>
        <CgCloseO className="text-white text-3xl mr-1" />
      </div>
    </>
  );
};

export default Header;
