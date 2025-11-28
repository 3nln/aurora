import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { themeConfig } from "./shared/config/muiConfig.tsx";
import { AuroraProvider } from "aurora-admin";
import { MyLayout } from "./shared/layout/MyLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={themeConfig}>
      <AuroraProvider
        layout={MyLayout}
      >
        <CssBaseline />
        <App />
        Text
      </AuroraProvider>
    </ThemeProvider>
  </StrictMode>
);
