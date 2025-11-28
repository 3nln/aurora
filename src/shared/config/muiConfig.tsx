import { createTheme } from "@mui/material/styles";

export const themeConfig = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#000000",
    },
    error: {
      main: "#000000",
    },
  },
  shadows: [] as any,
  typography: {},
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
});
