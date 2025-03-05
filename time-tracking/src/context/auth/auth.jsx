import { signOut } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../../firebase/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const onLogin = (email) => {
    setIsLogin(true);
    setUserEmail(email);
  };

  const onLogOut = () => {
    signOut(auth).then(() => setIsLogin(false));
  };

  return (
    <AuthContext.Provider value={{ userEmail, isLogin, onLogin, onLogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
