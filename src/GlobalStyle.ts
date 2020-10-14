import { withStyles, Theme } from "@material-ui/core";

const styles = (theme: Theme) => ({
  "@global": {
    // Styling
    ".noScrollBar": {
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },

    // Text
    ".font-weight-bold": {
      fontWeight: "500 !important",
    },
    ".text-muted": {
      color: `${theme.palette.text.disabled} !important`,
    },
    ".text-danger": {
      color: `${theme.palette.error.main} !important`,
    },
    ".text-success": {
      color: `${theme.palette.success.main} !important`,
    },

    // Flex
    ".d-flex": {
      display: "flex !important",
    },
    ".align-items-center": {
      alignItems: "center",
    },
    ".justify-content-center": {
      justifyContent: "center",
    },
    ".flex-grow-0": {
      "-ms-flex-positive": "0 !important",
      flexGrow: "0 !important",
    },
    ".flex-grow-1": {
      "-ms-flex-positive": "1 !important",
      flexGrow: "1 !important",
    },
    ".flex-shrink-0": {
      "-ms-flex-negative": "0 !important",
      flexShrink: "0 !important",
    },
    ".flex-shrink-1": {
      "-ms-flex-negative": "1 !important",
      flexShrink: "1 !important",
    },

    // Sizing
    ".w-auto": { width: "auto" },
    ...[0, 25, 50, 75, 100].reduce(function (obj: Record<string, any>, i) {
      obj[`.w-${i}`] = { width: `${i}%` };
      return obj;
    }, {}),
    ...[0, 25, 50, 75, 100].reduce(function (obj: Record<string, any>, i) {
      obj[`.h-${i}`] = { height: `${i}%` };
      return obj;
    }, {}),

    // Padding
    ".p-auto": { padding: "auto" },
    ...[0, 1, 2, 3, 4, 5].reduce(function (obj: Record<string, any>, i) {
      obj[`.p-${i}`] = { padding: theme.spacing(i) };
      return obj;
    }, {}),
    ...[0, 1, 2, 3, 4, 5].reduce(function (obj: Record<string, any>, i) {
      obj[`.pl-${i}`] = { paddingLeft: theme.spacing(i) };
      return obj;
    }, {}),
    ...[0, 1, 2, 3, 4, 5].reduce(function (obj: Record<string, any>, i) {
      obj[`.pr-${i}`] = { paddingRight: theme.spacing(i) };
      return obj;
    }, {}),
    ...[0, 1, 2, 3, 4, 5].reduce(function (obj: Record<string, any>, i) {
      obj[`.px-${i}`] = {
        paddingLeft: theme.spacing(i),
        paddingRight: theme.spacing(i),
      };
      return obj;
    }, {}),
    ...[0, 1, 2, 3, 4, 5].reduce(function (obj: Record<string, any>, i) {
      obj[`.py-${i}`] = {
        paddingTop: theme.spacing(i),
        paddingBottom: theme.spacing(i),
      };
      return obj;
    }, {}),
    // Margin
    ...[0, 1, 2, 3, 4, 5].reduce(function (obj: Record<string, any>, i) {
      obj[`.m-${i}`] = { margin: theme.spacing(i) };
      return obj;
    }, {}),
    ...[0, 1, 2, 3, 4, 5].reduce(function (obj: Record<string, any>, i) {
      obj[`.ml-${i}`] = { marginLeft: theme.spacing(i) };
      return obj;
    }, {}),
    ...[0, 1, 2, 3, 4, 5].reduce(function (obj: Record<string, any>, i) {
      obj[`.mr-${i}`] = { marginRight: theme.spacing(i) };
      return obj;
    }, {}),
    ...[0, 1, 2, 3, 4, 5].reduce(function (obj: Record<string, any>, i) {
      obj[`.mt-${i}`] = { marginTop: theme.spacing(i) };
      return obj;
    }, {}),
    ...[0, 1, 2, 3, 4, 5].reduce(function (obj: Record<string, any>, i) {
      obj[`.mb-${i}`] = { marginBottom: theme.spacing(i) };
      return obj;
    }, {}),
    ...[0, 1, 2, 3, 4, 5].reduce(function (obj: Record<string, any>, i) {
      obj[`.mx-${i}`] = {
        marginLeft: theme.spacing(i),
        marginRight: theme.spacing(i),
      };
      return obj;
    }, {}),
    ...[0, 1, 2, 3, 4, 5].reduce(function (obj: Record<string, any>, i) {
      obj[`.my-${i}`] = {
        marginTop: theme.spacing(i),
        marginBottom: theme.spacing(i),
      };
      return obj;
    }, {}),
  },
});

const GlobalStyles = () => null;

export default withStyles(styles, { withTheme: true })(GlobalStyles);
