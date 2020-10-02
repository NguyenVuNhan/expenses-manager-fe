import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { breakPoints } from "./constants/style.const";

const theme = createMuiTheme({
  breakpoints: {
    values: breakPoints,
  },
});

export default responsiveFontSizes(theme);
