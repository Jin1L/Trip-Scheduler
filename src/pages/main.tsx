import Navbar from "../feature/Navbar";
import Home from "../feature/Home";

function Main() {
  return (
    <div className="flex w-full">
      <Navbar />

      <div className="h-screen border-r"></div>
      <div className="w-full">
        <Home />
      </div>
    </div>
  );
}

export default Main;
