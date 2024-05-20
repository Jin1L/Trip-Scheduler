import Navbar from "../feature/Navbar";
import Home from "../feature/Home";
import "./main.css";

function Main() {
  return (
    <div className="flex main">
      <Navbar />
      <div className="h-screen border-r"></div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default Main;
