import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { themeConfig } from "./shared/config/muiConfig.tsx";
import { AuroraProvider } from "aurora-admin";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={themeConfig}>
      <AuroraProvider
        layout={<div>Layout</div>}
        dashboard={<div>Dashboard</div>}
        accessDenied={<div>Access denied</div>}
        notFound={<div>Not found</div>}
        error={<div>Error</div>}
        loading={<div>Loading</div>}
        notAuthenticated={<div>Not authenticated</div>}
        notAuthorized={<div>Not authorized</div>}
        authProvider={<div>Auth provider</div>}
        i18nProvider={<div>I18n provider</div>}
        queryClient={<div>Query client</div>}
        router={<div>Router</div>}
        defaultTheme={<div>Theme provider</div>}
        theme={themeConfig}
        lightTheme={themeConfig}
        darkTheme={themeConfig}
        >
        <CssBaseline />
        <App />
      </AuroraProvider>
    </ThemeProvider>
  </StrictMode>
);
