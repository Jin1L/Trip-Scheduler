import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import QuestionsAnswer from "./pages/qa";
// import Trending from "./pages/trending";
import { SignUp } from "./pages/authentication/SignUp";
import { Login } from "./pages/authentication/Login";
import History from "./pages/history";

interface RouteProps {
  path: string;
  page: JSX.Element;
}

const routes: RouteProps[] = [
  {
    path: "/",
    page: <Main />,
  },
  {
    path: "/history",
    page: <History />,
  },
  {
    path: "/qa",
    page: <QuestionsAnswer />,
  },
  {
    path: "/login",
    page: <Login />,
  },
  {
    path: "/signup",
    page: <SignUp />,
  },
];

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.page}
            ></Route>
          );
        })}
        {/* <Route path="/" element={<Main />} />
        <Route path="/history" element={<History />}></Route>
        <Route path="/qa" element={<QuestionsAnswer />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
