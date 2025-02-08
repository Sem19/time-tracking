import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { theme } from "./mui-theme/mui-theme.jsx";
import TimerPage from "./pages/timer/timer-page.jsx";
import PrivateRoute from "./routes/private-route.jsx";
import LoginPage from "./pages/login/login-page.jsx";
import useAuth from "./utils/use-auth/use-auth.js";

function App() {
  useAuth();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ minHeight: "100vh", background: "#F9FAFC" }}>
          <Container maxWidth="lg">
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route exact path="/" element={<TimerPage />} />
              </Route>
              <Route exact path="/login" element={<LoginPage />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
