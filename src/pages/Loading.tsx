import React from "react";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  loading: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.loading}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
