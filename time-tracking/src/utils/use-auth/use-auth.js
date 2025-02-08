import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import AuthContext from "../../context/auth/auth.jsx";

const useAuth = () => {
  const { onLogin } = useContext(AuthContext);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        onLogin();
        console.log(user);
      } else {
        console.log(2);
      }
    });
  }, []);
};
export default useAuth;
