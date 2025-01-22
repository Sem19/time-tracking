import { Container, ThemeProvider } from "@mui/material";
import StartTimer from "./components/start-timer/start-timer.jsx";
import { theme } from "./mui-theme/mui-theme.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <StartTimer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
