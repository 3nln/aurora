import { useTheme } from "@mui/material";
import React from "react";
import { AuroraUI } from "./AuroraUI";

export const AuroraProvider = (props) => {
  const {
    accessDenied,
    authCallbackPage,
    authenticationError,
    authProvider,
    basename,
    catchAll,
    children,
    darkTheme,
    dashboard,
    dataProvider,
    defaultTheme,
    disableTelemetry,
    error,
    i18nProvider,
    layout,
    lightTheme,
    loading,
    loginPage,
    notification,
    queryClient,
    ready,
    requireAuth,
    store,
    theme,
    title = 'React Admin',
  } = props;


  return (
    <>
      <AuroraUI
         accessDenied={accessDenied}
         authCallbackPage={authCallbackPage}
         authenticationError={authenticationError}
         catchAll={catchAll}
         dashboard={dashboard}
         disableTelemetry={disableTelemetry}
         error={error}
         layout={layout}
         loading={loading}
         loginPage={loginPage}
         notification={notification}
         ready={ready}
         requireAuth={requireAuth}
         title={title}
      >
        {children}
      </AuroraUI>
    </>
  );
};
