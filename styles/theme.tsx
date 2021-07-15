import { ReactNode } from "react";
import { createTheme, CssBaseline, MuiThemeProvider } from "@material-ui/core";

export const muiTheme = createTheme({
  typography: {
    fontFamily: [
      `Inter`,
      `-apple-system`,
      `BlinkMacSystemFont`,
      `"Segoe UI"`,
      `sans-serif`,
    ].join(","),
  },
});

export const CustomStylingProvider = ({
  children,
}: {
  children: ReactNode;
}) => (
  <MuiThemeProvider theme={muiTheme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);
