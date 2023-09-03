import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import QuestionsAnswer from "./pages/qa";
// import Trending from "./pages/trending";
import { SignUp } from "./pages/authentication/SignUp";
import { Login } from "./pages/authentication/Login";
import History from "./pages/history";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/history" element={<History />}></Route>
        <Route path="/qa" element={<QuestionsAnswer />} />
        {/* <Route path="/trending" element={<Trending />} /> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
