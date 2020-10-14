import React, { ReactNode } from "react";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "components/organisms/Navbar";

type MainTemplateProps = {
  children: ReactNode;
};

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  appBarSpacer: theme.mixins.toolbar,
}));

const MainTemplate = ({ children }: MainTemplateProps) => {
  const classes = useStyles();

  return (
    <div className="d-flex">
      <Navbar />
      <div className={clsx(classes.content, "noScrollBar")}>
        <div className={classes.appBarSpacer} />
        <Container className="p-2" maxWidth="xl">
          <Grid container spacing={3}>
            {children}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default MainTemplate;
