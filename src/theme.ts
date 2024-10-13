import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      light: "#000",
      dark: "#000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#555555",
      light: "#f5f5f5",
      dark: "#333",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#000",
      secondary: "#555555",
      disabled: "#a6a6a6",
    },
    background: {
      default: "#f3f4f9",
      paper: "#ffffff",
    },
    grey: {
      50: "#f5f5f5",
      100: "#e0e0e0",
      200: "#d9d9d9",
      300: "#d5d8db",
      400: "#a6a6a6",
      500: "#8f8f8f",
      600: "#4e4c4a",
      700: "#4c4e54",
      800: "#333",
      900: "#1a1a1a",
    },
  },
  typography: {
    allVariants: {
      color: "#000",
    },
    h1: {
      color: "#333",
    },
    h2: {
      color: "#000",
    },
    body1: {
      color: "#555555",
    },
    body2: {
      color: "#555555",
    },
    subtitle1:{
        color:"#000"
    },
    subtitle2:{
        color: "#555555",
    }
  },
});

export default theme;
