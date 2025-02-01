import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./mui-theme/mui-theme.jsx";
import TimerPage from "./pages/timer/timer-page.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", background: "#F9FAFC" }}>
        <Container maxWidth="lg">
          <TimerPage />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
