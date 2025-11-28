import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { themeConfig } from "./shared/config/muiConfig.tsx";
import { ThemeProvider as AuroraThemeProvider } from "aurora-admin";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuroraThemeProvider>
      <ThemeProvider theme={themeConfig}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </AuroraThemeProvider>
  </StrictMode>
);
