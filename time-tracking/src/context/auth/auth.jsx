import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin);
  const onLogin = () => setIsLogin(true);
  const onLogOut = () => setIsLogin(false);

  return (
    <AuthContext.Provider value={{ isLogin, onLogin, onLogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
