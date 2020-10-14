import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { breakPoints } from "constants/style.const";

// 15af5c
export const primary = "#2935ab";
export const secondary = "#F7941E";

const theme = createMuiTheme({
  palette: {
    primary: { main: primary },
    secondary: { main: secondary },
  },
  breakpoints: {
    values: breakPoints,
  },
});

export default responsiveFontSizes(theme);
