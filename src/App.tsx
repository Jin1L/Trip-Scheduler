import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import QuestionsAnswer from "./pages/qa";
import Trending from "./pages/trending";
import { Login } from "./pages/authentication/login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/qa" element={<QuestionsAnswer />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
