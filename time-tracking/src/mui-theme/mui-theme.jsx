import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Inter",
    },
    title_section16: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSize: "16px",
      color: "#182a42",
      fontWeight: 600,
    },
    title_section14_spacting: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSize: "14px",
      color: "#182a42",
      fontWeight: 600,
      letterSpacing: "1.4px",
      textTransform: "uppercase",
    },
    title_section14: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSize: "14px",
      color: "#182a42",
      fontWeight: 600,
    },
    label: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      color: "#aeb4c2",
      lineHeight: "15px",
    },
    second_text: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      color: "#535353",
      lineHeight: "16px",
    },
    validation_text: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "15px",
      color: "#f24e1e",
    },
  },
  palette: {
    black_custom: {
      main: "#505a63",
      secondary: "#2b2b2b",
    },
    blue_custom: {
      main: "#4285f4",
      secondary: "#0065ff",
    },
    green_custom: {
      main: "#33b679",
    },
    grey_custom: {
      main: "#8e9aab",
    },
    red_custom: {
      main: "#ec3b03",
    },
  },
});
