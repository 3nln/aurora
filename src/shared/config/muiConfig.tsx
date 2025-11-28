import { createTheme } from "@mui/material/styles";

export const themeConfig = createTheme({
  palette: {
    primary: {
      main: "#0000ff",
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
