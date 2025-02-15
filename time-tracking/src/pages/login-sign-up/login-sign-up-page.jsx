import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase/firebase.js";
import { useContext } from "react";
import AuthContext from "../../context/auth/auth.jsx";
import { Navigate, useSearchParams } from "react-router";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import {
  buttonStyle,
  formStyle,
  stylesContainerLoginPage,
} from "./login-sign-up-page-styles.js";
import styles from "./login-sign-up-page.module.css";

const LoginSignUpPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLogin } = useContext(AuthContext);
  const type = searchParams.get("type");
  const isLoginPage = type === "signIn";

  const goToCreatePage = () => setSearchParams({ type: "signUp" });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm();

  const onLoginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const onRegisterUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const onSubmit = ({ email, password }) => {
    if (isLoginPage) onLoginUser(email, password);
    else onRegisterUser(email, password);
  };

  if (isLogin) return <Navigate to="/" />;

  return (
    <Stack>
      <Stack sx={stylesContainerLoginPage}>
        <Typography
          variant="title"
          component="h2"
          sx={{ marginBottom: "32px" }}
        >
          {isLoginPage ? "Log in" : "Sign up"}
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
          <Box sx={{ padding: "0px 16px" }}>
            <label htmlFor="email">enter email</label>
            <input
              className={styles.form_field}
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </Box>
          <Box sx={{ padding: "0px 16px" }}>
            <label htmlFor="password">enter password</label>
            <input
              className={styles.form_field}
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </Box>

          <Button sx={buttonStyle} variant="primary" type="submit">
            {isLoginPage ? "Login" : "Sign up"}
          </Button>
        </form>
        {isLoginPage ? (
          <>
            <Divider
              orientation="horizontal"
              sx={{
                width: "90%",
                marginTop: "24px",
                borderColor: "rgb(0 0 0 / 45%)",
              }}
            />
            <Button
              sx={{
                marginTop: "24px",
                padding: "4px 0px",
                width: "94%",
              }}
              variant="text"
              type="submit"
              onClick={goToCreatePage}
            >
              Create account
            </Button>
          </>
        ) : null}
      </Stack>
    </Stack>
  );
};
export default LoginSignUpPage;
