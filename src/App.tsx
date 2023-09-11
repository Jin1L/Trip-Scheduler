import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
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
    path: "/about",
    page: <About />,
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
      </Routes>
    </Router>
  );
}

export default App;
