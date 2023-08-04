import React from "react";
import NavMenu from "./Navmenu";
const Navbar = () => {
  return (
    <nav className="flex p-6 py-4 border-b-2 items-center justify-between space-x-6">
      <h1 className="font-semibold text-black text-xl">You & I Everywhere</h1>
      <NavMenu />
    </nav>
  );
};

export default Navbar;
