import React from "react";
import NavMenu from "./Navmenu";
const Navbar = () => {
  return (
    <nav className="flex p-6 py-4 bg-gray-100 border-b-4 border-cyan-300 items-center justify-between space-x-6">
      <h1 className=" font-semibold tracking-tighter text-gray-700 text-xl ">
        Oua
      </h1>
      <NavMenu />
    </nav>
  );
};

export default Navbar;
