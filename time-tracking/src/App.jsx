import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { theme } from "./mui-theme/mui-theme.jsx";
import TimerPage from "./pages/timer/timer-page.jsx";
import PrivateRoute from "./routes/private-route.jsx";
import LoginSignUpPage from "./pages/login-sign-up/login-sign-up-page.jsx";
import useAuth from "./utils/use-auth/use-auth.js";
import Header from "./components/header/header.jsx";
import { useContext } from "react";
import AuthContext from "./context/auth/auth.jsx";

function App() {
  const { isLoading } = useAuth();
  const { isLogin } = useContext(AuthContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ minHeight: "100vh", background: "#F9FAFC" }}>
          {isLogin && <Header />}
          <Container maxWidth="lg">
            {isLoading ? (
              <p>Loading....</p>
            ) : (
              <Routes>
                <Route element={<PrivateRoute />}>
                  <Route exact path="/" element={<TimerPage />} />
                </Route>
                <Route exact path="/login" element={<LoginSignUpPage />} />
              </Routes>
            )}
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
