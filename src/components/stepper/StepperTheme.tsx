import { createTheme } from "@mui/material/styles";

export const StepperTheme = createTheme({
  palette: {
    primary: {
      light: "#D6EAF8",
      main: "#4c9aff",
    },
    secondary: {
      light: "#fff",
      main: "#f4f5f7",
    },
  },
  components: {
    // Name of the component
    MuiStep: {
      styleOverrides: {
        // Name of the slot
        root: {
          background: "#fff",
          width: "33%",
          margin: 2,
          padding: "1rem",
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
        },
      },
    },
  },
});
