import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import AuthContext from "../../context/auth/auth.jsx";

const useAuth = () => {
  const { onLogin } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) onLogin(user?.email);
      setIsLoading(false);
    });
  }, []);

  return { isLoading };
};
export default useAuth;
