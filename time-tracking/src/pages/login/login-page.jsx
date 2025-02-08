import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase/firebase";
import { useContext } from "react";
import AuthContext from "../../context/auth/auth.jsx";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isLogin, onLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        onLogin();
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email" {...register("email")} />
      <input type="password" placeholder="Password" {...register("password")} />

      <input type="submit" />
    </form>
  );
};
export default LoginPage;
