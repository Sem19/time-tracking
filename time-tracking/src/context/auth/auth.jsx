import { signOut } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../../firebase/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const onLogin = () => setIsLogin(true);

  const onLogOut = () => {
    signOut(auth).then(() => setIsLogin(false));
  };

  return (
    <AuthContext.Provider value={{ isLogin, onLogin, onLogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
