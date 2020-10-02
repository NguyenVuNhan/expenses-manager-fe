import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  "@global": {
    body: {
      margin: 0,
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
    },
  },
});

const GlobalStyles = () => null;

export default withStyles(styles, { withTheme: true })(GlobalStyles);
