import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import AuthContext from "../context/auth/auth.jsx";

const PrivateRoute = (props) => {
  const { isLogin } = useContext(AuthContext);

  if (isLogin) return <Outlet {...props} />;
  else return <Navigate to="/login?type=signIn" />;
};
export default PrivateRoute;
