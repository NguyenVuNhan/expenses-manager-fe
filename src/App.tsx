import React, { useEffect } from "react";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import GlobalStyle from "./GlobalStyle";
import Routes from "./routes";
import theme from "./theme";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios.get("/hello").then((data) => console.log(data));
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Routes />
    </MuiThemeProvider>
  );
};

export default App;
