import React, { ReactNode } from "react";
import background from "../../assets/background.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

type AuthenticationTemplateProps = {
  children: ReactNode;
};

const useStyles = makeStyles({
  base: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiPaper-root": {
      width: 400,
    },
  },
});

const AuthenticationTemplate = ({ children }: AuthenticationTemplateProps) => {
  const classes = useStyles();

  return (
    <div className={classes.base}>
      <Paper className="p-3" elevation={10} variant="elevation">
        {children}
      </Paper>
    </div>
  );
};

export default AuthenticationTemplate;
