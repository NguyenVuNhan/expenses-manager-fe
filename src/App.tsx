import React from "react";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import GlobalStyle from "./GlobalStyle";
import Routes from "./routes";
import theme from "./theme";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Routes />
    </MuiThemeProvider>
  );
};

export default App;
