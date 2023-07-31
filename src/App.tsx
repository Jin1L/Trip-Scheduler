import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import MyTrips from "./pages/myTrips";
import About from "./pages/about";
import { Login } from "./pages/login";
function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mytrips" element={<MyTrips />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
