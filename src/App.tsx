import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import { SignUp } from "./pages/authentication/SignUp";
import { Login } from "./pages/authentication/login";
import AuthRoute from "./components/AuthRoute";
import Navbar from "./feature/Navbar";
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
    <>
      <Router>
        <Routes>
          {routes.map((route) => {
            if (route.path === "/history") {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<AuthRoute>{route.page}</AuthRoute>}
                ></Route>
              );
            } else {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.page}
                ></Route>
              );
            }
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
