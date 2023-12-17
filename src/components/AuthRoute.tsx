import { useEffect, useState, ReactNode } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export interface IAuthRouteProps {
  children?: ReactNode;
}

const AuthRoute = ({ children }: IAuthRouteProps) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        navigate("/login", { replace: true });
      }
    });
    return () => AuthCheck();
  }, [auth]);

  // rendering children
  return <>{loading ? <p>... loading</p> : children}</>;
};

export default AuthRoute;
