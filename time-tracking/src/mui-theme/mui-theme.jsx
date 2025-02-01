import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Inter",
    },
    title: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSize: "16px",
      color: "#03061B",
      fontWeight: 600,
    },
  },
  palette: {
    black_custom: {
      main: "#03061B",
    },
    grey_custom: {
      main: "#858b91",
    },
    background: {
      main: "#f9fafc",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "primary" },
              style: ({ theme }) => ({
                display: "block",
                margin: "0 auto",
                background: theme.palette.grey_custom.main,
                color: "white",
                padding: "8px 20px",
              }),
            },
          ],
        },
      },
    },
  },
});
