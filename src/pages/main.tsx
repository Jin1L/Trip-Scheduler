import Navbar from "../feature/Navbar";
import Home from "../feature/Home";
import "./main.css";

function Main() {
  return (
    <div className="main">
      <Navbar />
      <div>
        <Home/>
      </div>
    </div>
  );
}

export default Main;
