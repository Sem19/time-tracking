import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase/firebase.js";
import { useContext, useState } from "react";
import AuthContext from "../../context/auth/auth.jsx";
import { Navigate, useSearchParams } from "react-router";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import {
  buttonStyle,
  formStyle,
  stylesContainerLoginPage,
} from "./login-sign-up-page-styles.js";
import styles from "./login-sign-up-page.module.css";

const messages = {
  "auth/user-not-found": "User not found. Please check your email.",
  "auth/wrong-password": "Incorrect password. Please try again.",
  "auth/email-already-in-use":
    "This email is already registered. Try logging in.",
};

const LoginSignUpPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLogin } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const type = searchParams.get("type");
  const isLoginPage = type === "signIn";

  const goToCreatePage = () => setSearchParams({ type: "signUp" });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLoginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      setErrorMessage(messages[error.code]);
      reset();
    });
  };

  const onRegisterUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      setErrorMessage(messages[error.code]);
      reset();
    });
  };

  const onSubmit = ({ email, password }) => {
    setErrorMessage("");
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
            <label htmlFor="email">Enter email</label>
            <input
              className={styles.form_field}
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <Typography color="error" variant="body2">
                {errors.email.message}
              </Typography>
            )}
          </Box>
          <Box sx={{ padding: "0px 16px" }}>
            <label htmlFor="password">Enter password</label>
            <input
              className={styles.form_field}
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <Typography color="error" variant="body2">
                {errors.password.message}
              </Typography>
            )}
          </Box>

          {errorMessage && (
            <Typography color="error" sx={{ textAlign: "center", mt: 2 }}>
              {errorMessage}
            </Typography>
          )}

          <Button sx={buttonStyle} variant="primary" type="submit">
            {isLoginPage ? "Login" : "Sign up"}
          </Button>
        </form>

        {isLoginPage ? (
          <>
            <Divider
              orientation="horizontal"
              sx={{
                width: "93%",
                marginTop: "34px",
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
              type="button"
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
