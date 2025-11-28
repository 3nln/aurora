import { useTheme } from "@mui/material";
import React from "react";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  // If the theme object is falsy or has no palette (which means it is not a real MUI theme),
  // it likely means the Aurora Theme Provider is not wrapped by the MUI Theme Provider.
  if (!theme || !theme.palette) {
    throw new Error(
      "Aurora ThemeProvider must be wrapped inside the MUI ThemeProvider. Please ensure <ThemeProvider> from '@mui/material/styles' wraps Aurora ThemeProvider."
    );
  }
  return (
    <>
      {JSON.stringify(theme)}
      Aurora Theme Provider
      {children}
    </>
  );
};
