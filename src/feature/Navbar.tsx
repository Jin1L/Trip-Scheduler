import NavMenu from "./Navmenu";
import { Footer } from "./Footer";

const Navbar = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <nav className="py-4 items-center h-5/6">
        <div className="px-10 pt-4 flex justify-center">
          <h1 className="font-semibold text-black text-xl">WanderPlan</h1>
        </div>
        <NavMenu />
      </nav>
      <Footer />
    </div>
  );
};

export default Navbar;
